#!/usr/bin/env node
// generate-recording-assets.mjs — Generate YouTube thumbnail (PNG) + metadata (title/desc/tags .txt)
// for every real lesson video in /recordings, using filenames IDENTICAL (minus extension) to the
// source .webm so thumbnail/metadata sit next to their video by name.
//
// Usage: node scripts/generate-recording-assets.mjs [--only=007,008] [--force]

import { chromium } from 'playwright';
import { readdirSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, resolve, dirname, parse } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_ROOT = resolve(__dirname, '..');

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)=(.*)$/);
    return m ? [m[1], m[2]] : [a.replace(/^--/, ''), true];
  })
);
const ONLY = args.only ? new Set(args.only.split(',')) : null;
const FORCE = !!args.force;

const REC_DIR = join(APP_ROOT, 'recordings');
const THUMB_DIR = join(APP_ROOT, 'youtube-thumbnails');
const META_DIR = join(APP_ROOT, 'youtube-metadata');
mkdirSync(THUMB_DIR, { recursive: true });
mkdirSync(META_DIR, { recursive: true });

// A handful of source filenames carry no descriptive title text at all (just the sub-bab code,
// or nothing) — filled in from references/taksonomi-matematika.md chapter-5 sub-topic order.
const MANUAL_OVERRIDES = {
  '193': 'Konversi Pecahan, Desimal & Persen',
  '209': 'Keliling Jajar Genjang & Trapesium',
  '247': 'Konversi Satuan Volume',
  '251': 'Konversi Satuan Kecepatan',
  '252': 'Debit (Volume per Waktu)',
};
const MANUAL_CODES = { '251': '05h', '252': '05i' };

function parseVideo(base) {
  const idMatch = base.match(/^(\d+)-/);
  const id = idMatch ? idMatch[1] : null;
  let rest = idMatch ? base.slice(idMatch[0].length) : base;

  // strip trailing "(Bab N)" annotation so it isn't mistaken for a chapter-opener
  rest = rest.replace(/\s*\(Bab\s+\d+\)\s*$/i, '');

  const subject = /\bIPA\b/i.test(rest) ? 'ipa' : (/\bMTK\b|\bMatematika\b/i.test(rest) ? 'mtk' : 'ipa');

  let code = null, title = null, kind = null;
  let m = rest.match(/Sub-?[Bb]ab\s+(?:IPA|MTK)?-?(\d{2}[A-Za-z])\s*[-·:]*\s*(.*)$/);
  if (m) {
    code = m[1].toLowerCase();
    title = m[2].trim();
    kind = 'subbab';
  } else {
    m = rest.match(/\bBab(?:\s+Resmi)?\s+(\d+)[\s·:-]*(.*)$/i);
    if (m) {
      code = `bab${m[1]}`;
      title = m[2].trim();
      kind = 'bab';
    } else {
      const parts = rest.split(/\s*[·—]\s*/).map((s) => s.trim()).filter(Boolean);
      title = parts[parts.length - 1] || rest.trim();
      kind = 'overview';
    }
  }

  const tierMatch = title.match(/[\s(—-]*Tingkat\s+Campur\)?\s*$/i) || title.match(/\(Campur\)\s*$/i);
  if (tierMatch) title = title.slice(0, tierMatch.index).trim();

  if (id && MANUAL_OVERRIDES[id]) title = MANUAL_OVERRIDES[id];
  if (id && MANUAL_CODES[id]) { code = MANUAL_CODES[id]; kind = 'subbab'; }

  return { id, subject, code, title, kind };
}

const SUBJECT_LABEL = { ipa: 'IPA', mtk: 'Matematika' };
const SUBJECT_FLOATERS = {
  ipa: ['🧪', '🧬', '🌍', '🧲', '🔭', '⚡'],
  mtk: ['🔢', '📐', '➗', '✖️', '📊', '🧮'],
};
const SUBJECT_MAIN_ICON = { ipa: '🔬', mtk: '🔢' };
const SUBJECT_ACCENT = { ipa: '#00C2A8', mtk: '#FF6B35' };

function chapterCodeFor(v) {
  if (v.kind === 'subbab') return `${SUBJECT_LABEL[v.subject].toUpperCase()}-${v.code.toUpperCase()}`;
  if (v.kind === 'bab') return `BAB ${v.code.replace('bab', '')}`;
  return '';
}

// shrink + shorten long titles so the thumbnail never overflows
function thumbTitle(title) {
  let t = title.length > 42 ? title.split(/\s*[(—]/)[0].trim() : title;
  if (t.length > 60) t = t.slice(0, 57).trim() + '…';
  return t;
}
function thumbFontSize(t) {
  if (t.length > 50) return 44;
  if (t.length > 34) return 56;
  if (t.length > 22) return 66;
  return 74;
}

function thumbnailHtml(v) {
  const subjLabel = SUBJECT_LABEL[v.subject];
  const mainIcon = SUBJECT_MAIN_ICON[v.subject];
  const floaters = SUBJECT_FLOATERS[v.subject];
  const accent = SUBJECT_ACCENT[v.subject];
  const topic = thumbTitle(v.title).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const fontSize = thumbFontSize(topic);
  const chapterCode = chapterCodeFor(v);

  const positions = [
    { top: '8%', left: '4%', size: 64, rot: -18 },
    { top: '68%', left: '3%', size: 54, rot: 14 },
    { top: '4%', left: '46%', size: 50, rot: 10 },
    { top: '30%', left: '1%', size: 48, rot: 8 },
    { top: '25%', left: '89%', size: 54, rot: 16 },
    { top: '38%', left: '93%', size: 44, rot: -20 },
  ];
  const floatersHtml = positions
    .map((p, i) => `<div class="floater" style="top:${p.top};left:${p.left};font-size:${p.size}px;transform:rotate(${p.rot}deg)">${floaters[i % floaters.length]}</div>`)
    .join('\n');

  return `<!doctype html><html><head><meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700;900&family=IBM+Plex+Sans:wght@400;700&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1280px; height:720px; overflow:hidden; font-family:'DM Sans', sans-serif; position:relative;
    background: linear-gradient(135deg, #FFC93C 0%, #FFD93C 22%, #4AC6FF 55%, #2E7CE0 100%); }
  .sunburst { position:absolute; inset:-10%; opacity:.16;
    background: repeating-conic-gradient(from 0deg, #fff 0deg 6deg, transparent 6deg 18deg);
    mix-blend-mode:overlay; }
  .floater { position:absolute; filter:drop-shadow(0 6px 10px rgba(0,0,0,.25)); opacity:.92; z-index:1; }
  .wrap { position:relative; z-index:2; height:100%; display:flex; flex-direction:column; justify-content:space-between; padding:50px 60px; }
  .top-row { display:flex; justify-content:space-between; align-items:flex-start; }
  .brand { display:flex; align-items:center; gap:14px; }
  .brand-badge { width:60px; height:60px; border-radius:20px; background:#fff;
    display:flex; align-items:center; justify-content:center; font-size:32px;
    box-shadow:0 8px 0 rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.2); transform:rotate(-6deg); }
  .brand-text { color:#1A2E4A; }
  .brand-text .k { font-size:15px; font-weight:700; letter-spacing:.12em; opacity:.75; text-transform:uppercase; }
  .brand-text .v { font-size:24px; font-weight:900; }
  .tier-badge { background:#FF3D57; color:#fff; font-weight:900; font-size:22px; padding:12px 30px; border-radius:999px;
    box-shadow:0 6px 0 #C4132A, 0 10px 20px rgba(0,0,0,.25); text-transform:uppercase; letter-spacing:.03em;
    transform:rotate(4deg); border:3px solid #fff; }
  .middle { flex:1; display:flex; flex-direction:column; justify-content:center; gap:14px; max-width:760px; }
  .chapter-code { color:#1A2E4A; font-weight:900; font-size:24px; letter-spacing:.1em; font-family:'IBM Plex Sans',sans-serif;
    background:#fff; align-self:flex-start; padding:6px 18px; border-radius:10px; transform:rotate(-2deg);
    box-shadow:0 4px 0 rgba(0,0,0,.12); }
  .topic { color:#fff; font-size:${fontSize}px; font-weight:900; line-height:1.08; letter-spacing:-.01em;
    -webkit-text-stroke:3px #1A2E4A; paint-order:stroke fill;
    text-shadow:6px 6px 0 rgba(0,0,0,.18); }
  .subject-icon { font-size:200px; position:absolute; right:40px; bottom:150px;
    filter:drop-shadow(0 14px 18px rgba(0,0,0,.3)); transform:rotate(8deg); z-index:1; }
  .bottom-banner { background:#fff; border-radius:24px; padding:20px 32px; display:flex; align-items:center; justify-content:space-between;
    box-shadow:0 8px 0 rgba(0,0,0,.12), 0 14px 24px rgba(0,0,0,.18); border:4px solid ${accent}; }
  .bottom-banner .count { color:#1A2E4A; font-size:32px; font-weight:900; display:flex; align-items:center; gap:14px; }
  .bottom-banner .count .num { color:${accent}; font-size:40px; }
  .bottom-banner .sub { color:#5A6B85; font-size:18px; font-weight:700; font-family:'IBM Plex Sans',sans-serif; }
</style></head>
<body>
  <div class="sunburst"></div>
  ${floatersHtml}
  <div class="wrap">
    <div class="top-row">
      <div class="brand">
        <div class="brand-badge">🏆</div>
        <div class="brand-text"><div class="k">OSN · KSN SD</div><div class="v">${subjLabel}</div></div>
      </div>
      <div class="tier-badge">Campur</div>
    </div>
    <div class="middle">
      ${chapterCode ? `<div class="chapter-code">${chapterCode}</div>` : ''}
      <div class="topic">${topic}</div>
    </div>
    <div class="subject-icon">${mainIcon}</div>
    <div class="bottom-banner">
      <div class="count"><span class="num">100</span> Soal + Pembahasan</div>
      <div class="sub">Kabupaten · Provinsi · Nasional</div>
    </div>
  </div>
</body></html>`;
}

function metadataText(v) {
  const chapterWord = SUBJECT_LABEL[v.subject];
  const subjTag = v.subject === 'ipa' ? 'IPASD' : 'MatematikaSD';
  const quizTag = v.subject === 'ipa' ? 'QuizIPA' : 'QuizMatematika';
  const belajarTag = v.subject === 'ipa' ? 'BelajarIPA' : 'BelajarMatematika';
  const osnSubjTag = v.subject === 'ipa' ? 'OSNIPASD' : 'OSNMatematikaSD';
  const topicTag = v.title.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '');
  const codeLabel = chapterCodeFor(v);

  const title = `Quiz dan Pembahasan 100 Soal OSN ${chapterWord} SD | ${v.title}`.toUpperCase();

  const description = `Selamat datang di video "Quiz dan Pembahasan 100 Soal OSN ${chapterWord} SD"! Dalam video ini, kami akan menguji pengetahuanmu tentang ${v.title} dengan 100 soal pilihan ganda yang dirancang khusus untuk siswa SD. Setiap soal dilengkapi dengan pembahasan yang jelas dan mudah dipahami, sehingga kamu bisa belajar sambil bersenang-senang.
${codeLabel ? `\nKode materi: ${codeLabel}` : ''}

Jangan lupa untuk menyiapkan alat tulis dan catat jawabanmu! Mari kita lihat seberapa siap kamu untuk menghadapi OSN ${chapterWord}. Selamat belajar!

#OSN #${subjTag} #${quizTag} #${belajarTag} #SoalOSN #PembahasanSoal #SiswaSD #Kuis${chapterWord === 'IPA' ? 'Sains' : 'Matematika'} #Pendidikan #${chapterWord === 'IPA' ? 'SainsUntukAnak' : 'MatematikaUntukAnak'} #${chapterWord === 'IPA' ? 'SainsMenyenangkan' : 'MatematikaMenyenangkan'} #UjiKemampuan #BelajarSambilBermain #${osnSubjTag} #${osnSubjTag}2026 #KSNSD #LatihanSoal #PersiapanOSN #${topicTag}

Tags
OSN,${subjTag},${quizTag},${belajarTag},SoalOSN,PembahasanSoal,SiswaSD,Kuis${chapterWord === 'IPA' ? 'Sains' : 'Matematika'},Pendidikan,${chapterWord === 'IPA' ? 'SainsUntukAnak' : 'MatematikaUntukAnak'},${chapterWord === 'IPA' ? 'SainsMenyenangkan' : 'MatematikaMenyenangkan'},UjiKemampuan,BelajarSambilBermain,${osnSubjTag},${osnSubjTag}2026,KSNSD,LatihanSoal,PersiapanOSN,${topicTag}
`;

  return `${title}\n\n${description}`;
}

async function main() {
  const files = readdirSync(REC_DIR)
    .filter((f) => /\.webm$/i.test(f) && /^\d{3}-OSN/i.test(f))
    .sort();

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  let ok = 0, skipped = 0;
  for (const file of files) {
    const base = parse(file).name;
    if (ONLY && !ONLY.has(base.match(/^(\d+)-/)?.[1])) continue;
    const v = parseVideo(base);
    const thumbPath = join(THUMB_DIR, `${base}.png`);
    const metaPath = join(META_DIR, `${base}.txt`);

    if (!FORCE && existsSync(thumbPath) && existsSync(metaPath)) { skipped++; continue; }

    if (FORCE || !existsSync(thumbPath)) {
      await page.setContent(thumbnailHtml(v), { waitUntil: 'networkidle' });
      await page.screenshot({ path: thumbPath });
    }
    if (FORCE || !existsSync(metaPath)) {
      writeFileSync(metaPath, metadataText(v), 'utf8');
    }
    ok++;
    if (ok % 20 === 0 || ok === 1) console.log(`  ${ok} done... (${base})`);
  }

  await browser.close();
  console.log(`\nDone. Generated ${ok}, skipped ${skipped}.`);
  console.log(`Thumbnails: ${THUMB_DIR}`);
  console.log(`Metadata:   ${META_DIR}`);
}

main();
