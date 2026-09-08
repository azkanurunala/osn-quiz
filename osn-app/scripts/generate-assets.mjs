#!/usr/bin/env node
// generate-assets.mjs — Generate a YouTube-style thumbnail (PNG) + metadata (title/desc/tags .txt)
// for every sub-bab package, filenames matching the video output from record-videos.mjs exactly
// (same numeric prefix + sanitized title) so they can sit alongside the videos.
//
// Usage: node scripts/generate-assets.mjs [--only=id1,id2] [--force]

import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, resolve, dirname } from 'path';
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
const THUMBS_ONLY = !!args['thumbs-only'];

const THUMB_DIR = resolve(APP_ROOT, 'thumbnails');
const META_DIR = resolve(APP_ROOT, 'metadata');
mkdirSync(THUMB_DIR, { recursive: true });
mkdirSync(META_DIR, { recursive: true });

const manifest = JSON.parse(readFileSync(join(APP_ROOT, 'public', 'data', '_manifest.json'), 'utf8'));

// Same stable global numbering as record-videos.mjs, so filenames line up with the videos.
const allSubbab = manifest.items
  .filter((it) => it.type === 'subbab')
  .sort((a, b) => (a.subBab || '').localeCompare(b.subBab || ''));
const pad = allSubbab.length.toString().length;

function sanitize(t) {
  return t.replace(/[\\/:*?"<>|]/g, '-').trim();
}
function baseNameFor(item, i) {
  const num = String(i + 1).padStart(pad, '0');
  return `${num}-${sanitize(item.title)}`;
}
function titleCase(slug) {
  return slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
const TIER_LABEL = {
  campur: 'Campur', mudah: 'Mudah', sedang: 'Sedang', sulit: 'Sulit',
  'mudah-sedang': 'Mudah-Sedang', 'sedang-sulit': 'Sedang-Sulit',
};
const SUBJECT_LABEL = { ipa: 'IPA', mtk: 'Matematika' };
// Floating icon sets per subject — playful, kid-friendly, "fun & energetic" concept.
const SUBJECT_FLOATERS = {
  ipa: ['🧪', '🧬', '🌍', '🧲', '🔭', '⚡'],
  mtk: ['🔢', '📐', '➗', '✖️', '📊', '🧮'],
};
const SUBJECT_MAIN_ICON = { ipa: '🔬', mtk: '🔢' };
const SUBJECT_ACCENT = { ipa: '#00C2A8', mtk: '#FF6B35' };

function thumbnailHtml(item) {
  const subjLabel = SUBJECT_LABEL[item.subject] || item.subject.toUpperCase();
  const mainIcon = SUBJECT_MAIN_ICON[item.subject] || '📚';
  const floaters = SUBJECT_FLOATERS[item.subject] || ['✨', '⭐', '🎯'];
  const accent = SUBJECT_ACCENT[item.subject] || '#FF6B35';
  const tierLabel = TIER_LABEL[item.tier] || item.tier;
  const topic = titleCase(item.slug);
  const chapterCode = (item.subBab || item.chapter || '').toUpperCase();

  // Scattered floating icon positions (deterministic per-item so re-renders are stable).
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
  .topic { color:#fff; font-size:74px; font-weight:900; line-height:1.05; letter-spacing:-.01em;
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
      <div class="tier-badge">${tierLabel}</div>
    </div>
    <div class="middle">
      <div class="chapter-code">${chapterCode}</div>
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

function metadataText(item) {
  const subjLabel = SUBJECT_LABEL[item.subject] || item.subject.toUpperCase();
  const tierLabel = TIER_LABEL[item.tier] || item.tier;
  const topic = titleCase(item.slug);
  const chapterWord = SUBJECT_LABEL[item.subject] === 'IPA' ? 'IPA' : 'Matematika';
  const subjTag = item.subject === 'ipa' ? 'IPASD' : 'MatematikaSD';
  const quizTag = item.subject === 'ipa' ? 'QuizIPA' : 'QuizMatematika';
  const belajarTag = item.subject === 'ipa' ? 'BelajarIPA' : 'BelajarMatematika';
  const osnSubjTag = item.subject === 'ipa' ? 'OSNIPASD' : 'OSNMatematikaSD';
  const topicTag = titleCase(item.slug).replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '');

  const tierPrefix = item.tier === 'campur' ? '' : `[${tierLabel}] `;
  const title = `${tierPrefix}Quiz dan Pembahasan 100 Soal OSN ${chapterWord} SD | ${topic}`.toUpperCase();

  const description = `Selamat datang di video "Quiz dan Pembahasan 100 Soal OSN ${chapterWord} SD"! Dalam video ini, kami akan menguji pengetahuanmu tentang ${topic} dengan 100 soal pilihan ganda yang dirancang khusus untuk siswa SD. Setiap soal dilengkapi dengan pembahasan yang jelas dan mudah dipahami, sehingga kamu bisa belajar sambil bersenang-senang.

Jangan lupa untuk menyiapkan alat tulis dan catat jawabanmu! Mari kita lihat seberapa siap kamu untuk menghadapi OSN ${chapterWord}. Selamat belajar!

#OSN #${subjTag} #${quizTag} #${belajarTag} #SoalOSN #PembahasanSoal #SiswaSD #Kuis${chapterWord === 'IPA' ? 'Sains' : 'Matematika'} #Pendidikan #${chapterWord === 'IPA' ? 'SainsUntukAnak' : 'MatematikaUntukAnak'} #${chapterWord === 'IPA' ? 'SainsMenyenangkan' : 'MatematikaMenyenangkan'} #UjiKemampuan #BelajarSambilBermain #${osnSubjTag} #${osnSubjTag}2026 #KSNSD #LatihanSoal #PersiapanOSN #${topicTag}

Tags
OSN,${subjTag},${quizTag},${belajarTag},SoalOSN,PembahasanSoal,SiswaSD,Kuis${chapterWord === 'IPA' ? 'Sains' : 'Matematika'},Pendidikan,${chapterWord === 'IPA' ? 'SainsUntukAnak' : 'MatematikaUntukAnak'},${chapterWord === 'IPA' ? 'SainsMenyenangkan' : 'MatematikaMenyenangkan'},UjiKemampuan,BelajarSambilBermain,${osnSubjTag},${osnSubjTag}2026,KSNSD,LatihanSoal,PersiapanOSN,${topicTag}
`;

  return `${title}\n\n${description}`;
}

async function main() {
  const targets = allSubbab.filter((it, i) => !ONLY || ONLY.has(it.subBab)).map((it) => it);
  console.log(`Generating assets for ${targets.length} package(s)...\n`);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  let ok = 0;
  for (const item of allSubbab) {
    if (ONLY && !ONLY.has(item.subBab)) continue;
    const i = allSubbab.indexOf(item);
    const base = baseNameFor(item, i);
    const thumbPath = join(THUMB_DIR, `${base}.png`);
    const metaPath = join(META_DIR, `${base}.txt`);

    if (!FORCE && existsSync(thumbPath) && (THUMBS_ONLY || existsSync(metaPath))) {
      continue;
    }

    if (FORCE || !existsSync(thumbPath)) {
      await page.setContent(thumbnailHtml(item), { waitUntil: 'networkidle' });
      await page.screenshot({ path: thumbPath });
    }
    if (!THUMBS_ONLY && (FORCE || !existsSync(metaPath))) {
      writeFileSync(metaPath, metadataText(item), 'utf8');
    }
    ok++;
    if (ok % 10 === 0) console.log(`  ${ok} done...`);
  }

  await browser.close();
  console.log(`\nDone. ${ok} package(s) processed.`);
  console.log(`Thumbnails: ${THUMB_DIR}`);
  console.log(`Metadata:   ${META_DIR}`);
}

main();
