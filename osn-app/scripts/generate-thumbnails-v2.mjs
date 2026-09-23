#!/usr/bin/env node
// generate-thumbnails-v2.mjs — Regenerate all youtube-thumbnails/*.png to match the reference
// design (015-SEL DAN JARINGAN.png style): dark purple hex-grid bg, 3D gold header, white
// subheader, red "100 SOAL" pill badge, white quiz card with a REAL question from that topic's
// own data (4 options, correct one highlighted green), and two big glossy topic icons.
//
// Usage: node scripts/generate-thumbnails-v2.mjs [--only=015,089] [--dry-run]

import { chromium } from 'playwright';
import { readdirSync, readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const APP_ROOT = resolve(import.meta.dirname, '..');
const THUMB_DIR = join(APP_ROOT, 'youtube-thumbnails');
const DATA_DIR = join(APP_ROOT, 'public', 'data');

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)=(.*)$/);
    return m ? [m[1], m[2]] : [a.replace(/^--/, ''), true];
  })
);
const ONLY = args.only ? new Set(args.only.split(',')) : null;
const DRY_RUN = !!args['dry-run'];

const manifest = JSON.parse(readFileSync(join(DATA_DIR, '_manifest.json'), 'utf8'));
const subbabItems = manifest.items.filter((it) => it.type === 'subbab' && it.tier === 'campur');
const chapterItems = manifest.items.filter((it) => it.type === 'chapter' && it.tier === 'campur');
const bySubBab = new Map(subbabItems.map((it) => [it.subBab, it]));

const STOPWORDS = new Set(['matematika', 'osn', 'ksn', 'sub-bab', 'sub-bab', 'tingkat', 'campur', 'bab', 'ipa', 'mtk']);

function inferSubject(title) {
  if (/\bipa\b/i.test(title)) return 'ipa';
  if (/\bmtk\b|matematika/i.test(title)) return 'mtk';
  return null;
}

function resolveOne(filename) {
  const title = filename.replace(/^\d+-/, '').replace(/\.png$/, '');
  let m = title.match(/\b(ipa|mtk)[\s.\-·]*?(\d{2})([a-z])\b/i);
  if (m) {
    const code = `${m[1].toLowerCase()}-${m[2]}${m[3].toLowerCase()}`;
    if (bySubBab.has(code)) return { code, item: bySubBab.get(code) };
  }
  const subj = inferSubject(title);
  if (subj) {
    const m2 = title.match(/\b(\d{2})([a-z])\b/);
    if (m2) {
      const code = `${subj}-${m2[1]}${m2[2].toLowerCase()}`;
      if (bySubBab.has(code)) return { code, item: bySubBab.get(code) };
    }
  }
  if (subj) {
    const topicPart = title.split(/[·—-]/).pop().trim().toLowerCase();
    const words = topicPart.split(/[\s,&()]+/).filter((w) => w.length > 3 && !STOPWORDS.has(w));
    if (words.length > 0) {
      const candidates = chapterItems.filter((it) => it.subject === subj);
      let best = null, bestScore = 0, tie = false;
      for (const c of candidates) {
        const ct = c.title.toLowerCase();
        let score = 0;
        for (const w of words) if (ct.includes(w)) score++;
        if (score > bestScore) { bestScore = score; best = c; tie = false; }
        else if (score === bestScore && score > 0) tie = true;
      }
      if (best && bestScore > 0 && !tie) return { code: best.chapter, item: best };
    }
  }
  return null; // caller applies positional fallback
}

const files = readdirSync(THUMB_DIR).filter((f) => f.endsWith('.png')).sort();
const resolved = files.map((f) => ({ file: f, r: resolveOne(f) }));

// Positional fallback: for unresolved files, infer subBab from neighboring resolved subbabs
// in the same chapter (handles generic-titled gap files like "OSN/KSN SD — MATEMATIKA").
for (let i = 0; i < resolved.length; i++) {
  if (resolved[i].r) continue;
  const subj = inferSubject(resolved[i].file);
  // find nearest resolved neighbor with a subBab code (before and after)
  let prevCode = null, nextCode = null;
  for (let j = i - 1; j >= 0; j--) { if (resolved[j].r?.code?.match(/^[a-z]+-\d{2}[a-z]$/)) { prevCode = resolved[j].r.code; break; } }
  for (let j = i + 1; j < resolved.length; j++) { if (resolved[j].r?.code?.match(/^[a-z]+-\d{2}[a-z]$/)) { nextCode = resolved[j].r.code; break; } }
  if (prevCode) {
    const m = prevCode.match(/^([a-z]+)-(\d{2})([a-z])$/);
    const nextLetter = String.fromCharCode(m[3].charCodeAt(0) + 1);
    const guess = `${m[1]}-${m[2]}${nextLetter}`;
    if (bySubBab.has(guess) && (!nextCode || guess !== nextCode)) {
      resolved[i].r = { code: guess, item: bySubBab.get(guess) };
    }
  }
}

const unresolved = resolved.filter((x) => !x.r);
if (unresolved.length) {
  console.log(`WARNING: ${unresolved.length} unresolved file(s):`);
  unresolved.forEach((x) => console.log('  ' + x.file));
}

// ---- topic icon fallback (keyword-based) when not in curated map ----
const TOPIC_ICONS = {
  'ipa-01a': ['🌱', '🐾'], 'ipa-01b': ['🦁', '🐠'], 'ipa-01c': ['🌳', '🌺'],
  'ipa-01d': ['🌱', '🌿'], 'ipa-01e': ['🌻', '🌰'], 'ipa-01f': ['🐣', '🥚'],
  'ipa-01g': ['🦋', '🐸'], 'ipa-01h': ['🦊', '🐧'], 'ipa-01i': ['🌵', '🌿'],
  'ipa-01j': ['🌍', '🌳'], 'ipa-01k': ['🦁', '🐇'], 'ipa-01l': ['🤝', '🐟'],
  'ipa-01m': ['🛡️', '🐼'], 'ipa-01n': ['🦠', '🍄'], 'ipa-01o': ['🔬', '🧫'],
  'ipa-01p': ['🌿', '☀️'], 'ipa-01q': ['🦠', '🍞'], 'ipa-01r': ['🌍', '♻️'],
  'ipa-02a': ['🍽️', '🍎'], 'ipa-02b': ['🫁', '💨'], 'ipa-02c': ['🫀', '🩸'],
  'ipa-02d': ['💧', '🫁'], 'ipa-02e': ['🧠', '👁️'], 'ipa-02f': ['🦴', '💪'],
  'ipa-02g': ['👶', '❤️'], 'ipa-02h': ['🧒', '📈'], 'ipa-02i': ['🍎', '🥦'],
  'ipa-02j': ['🦠', '😷'], 'ipa-02k': ['🫀', '🚭'], 'ipa-02l': ['🧼', '🚿'],
  'ipa-02m': ['🩺', '💊'], 'ipa-02n': ['🧬', '🔬'],
  'ipa-03a': ['💪', '🧲'], 'ipa-03b': ['🏃', '🚗'], 'ipa-03c': ['🚲', '🎾'],
  'ipa-03d': ['⚖️', '🔧'], 'ipa-03e': ['🛗', '🪢'], 'ipa-03f': ['🛝', '⛰️'],
  'ipa-03g': ['⚙️', '🚲'], 'ipa-03h': ['⚡', '💡'], 'ipa-03i': ['💡', '🔋'],
  'ipa-03j': ['💡', '🔌'], 'ipa-03k': ['🔌', '⚡'], 'ipa-03l': ['🧲', '🧭'],
  'ipa-03m': ['🎳', '⚡'], 'ipa-03n': ['⚖️', '📦'], 'ipa-03o': ['⚡', '🎈'],
  'ipa-03p': ['🧲', '⚡'],
  'ipa-04a': ['💡', '🌈'], 'ipa-04b': ['🪞', '💡'], 'ipa-04c': ['🔍', '💧'],
  'ipa-04d': ['🌈', '🔦'], 'ipa-04e': ['🔊', '🎵'], 'ipa-04f': ['🔊', '🏔️'],
  'ipa-04g': ['🎵', '📢'], 'ipa-04h': ['🌡️', '❄️'], 'ipa-04i': ['🔥', '♨️'],
  'ipa-04j': ['🧊', '💨'], 'ipa-04k': ['🧊', '💦'], 'ipa-04l': ['🧪', '🔬'],
  'ipa-04m': ['⚗️', '🧂'], 'ipa-04n': ['🥤', '🧪'], 'ipa-04o': ['〰️', '🌊'],
  'ipa-04p': ['⚛️', '🔬'],
  'ipa-05a': ['🌞', '🪐'], 'ipa-05b': ['🌍', '⛰️'], 'ipa-05c': ['🌍', '🌙'],
  'ipa-05d': ['🌙', '🌏'], 'ipa-05e': ['🌘', '🔆'], 'ipa-05f': ['🌦️', '⛈️'],
  'ipa-05g': ['🪨', '💎'], 'ipa-05h': ['🌱', '🪱'], 'ipa-05i': ['🌳', '💧'],
  'ipa-05j': ['💧', '🌧️'], 'ipa-05k': ['☁️', '🌍'], 'ipa-05l': ['♻️', '🐋'],
  'ipa-05m': ['🌡️', '🏭'], 'ipa-05n': ['🌋', '🌊'], 'ipa-05o': ['⭐', '🌌'],
  'ipa-06a': ['🔬', '📋'], 'ipa-06b': ['🦋', '🌿'],
  'mtk-01a': ['🔢', '➕'], 'mtk-01b': ['🧮', '✖️'], 'mtk-01c': ['🔗', '🔢'],
  'mtk-01d': ['🔢', '💎'], 'mtk-01e': ['🔢', '✖️'], 'mtk-01f': ['🤝', '🔢'],
  'mtk-01g': ['⏰', '🔢'], 'mtk-01h': ['🔢', '📐'], 'mtk-01i': ['🧊', '📦'],
  'mtk-01j': ['🔄', '🧮'], 'mtk-01k': ['📖', '🔢'],
  'mtk-02a': ['🍕', '🔢'], 'mtk-02b': ['⚖️', '🍕'], 'mtk-02c': ['🍕', '✖️'],
  'mtk-02d': ['🍰', '➗'], 'mtk-02e': ['🔄', '💯'], 'mtk-02f': ['💯', '💰'],
  'mtk-02g': ['🔢', '➗'], 'mtk-02h': ['💯', '📊'], 'mtk-02i': ['💯', '🔢'],
  'mtk-02j': ['🍕', '🧮'], 'mtk-02k': ['💰', '💯'],
  'mtk-03a': ['🔺', '⭕'], 'mtk-03b': ['⬛', '📏'], 'mtk-03c': ['🔺', '📐'],
  'mtk-03d': ['📏', '🟨'], 'mtk-03e': ['⭕', '🌀'], 'mtk-03f': ['🟩', '⬛'],
  'mtk-03g': ['📐', '🟦'], 'mtk-03h': ['📐', '🔶'], 'mtk-03i': ['⭕', '🔵'],
  'mtk-03j': ['🧩', '⬛'], 'mtk-03k': ['🌀', '🟩'], 'mtk-03l': ['📐', '↗️'],
  'mtk-03m': ['🔺', '➗'],
  'mtk-04a': ['🧊', '⬛'], 'mtk-04b': ['🧊', '➗'], 'mtk-04c': ['📦', '🧱'],
  'mtk-04d': ['🔷', '📐'], 'mtk-04e': ['🥫', '🌀'], 'mtk-04f': ['🍦', '⚽'],
  'mtk-04g': ['🧊', '🎁'], 'mtk-04h': ['📦', '🎁'], 'mtk-04i': ['🔷', '⛺'],
  'mtk-04j': ['🥫', '📏'], 'mtk-04k': ['📦', '✂️'], 'mtk-04l': ['🧩', '🧊'],
  'mtk-04m': ['🪣', '💧'],
  'mtk-05a': ['📏', '🦶'], 'mtk-05b': ['⚖️', '🧱'], 'mtk-05c': ['📐', '🌾'],
  'mtk-05d': ['🪣', '💧'], 'mtk-05e': ['⏰', '🕰️'], 'mtk-05f': ['⏱️', '➕'],
  'mtk-05g': ['🚗', '⏰'], 'mtk-05h': ['🚗', '📏'], 'mtk-05i': ['📏', '⏰'],
  'mtk-05j': ['🚰', '⏰'], 'mtk-05k': ['📝', '📏'], 'mtk-05l': ['⏰', '📏'],
  'mtk-06a': ['💰', '📉'], 'mtk-06b': ['💯', '💰'], 'mtk-06c': ['🏷️', '💰'],
  'mtk-06d': ['🏷️', '🔁'], 'mtk-06e': ['🏦', '💰'], 'mtk-06f': ['🧾', '💰'],
  'mtk-06g': ['🏦', '📈'], 'mtk-06h': ['📊', '🔁'], 'mtk-06i': ['🔁', '💰'],
  'mtk-06j': ['📝', '💰'],
  'mtk-07a': ['📊', '📋'], 'mtk-07b': ['📊', '📶'], 'mtk-07c': ['📈', '📉'],
  'mtk-07d': ['🥧', '📊'], 'mtk-07e': ['📊', '➗'], 'mtk-07f': ['📊', '➕'],
  'mtk-07g': ['📊', '↔️'], 'mtk-07h': ['📊', '➕'], 'mtk-07i': ['📊', '↔️'],
  'mtk-07j': ['📊', '🔝'], 'mtk-07k': ['📊', '🔝'], 'mtk-07l': ['📊', '📏'],
  'mtk-07m': ['📝', '📊'],
  'mtk-08a': ['🔤', '➕'], 'mtk-08b': ['🔤', '✖️'], 'mtk-08c': ['🔤', '➗'],
  'mtk-08d': ['🔤', '📐'], 'mtk-08e': ['🔤', '⚖️'], 'mtk-08f': ['🔤', '⚖️'],
  'mtk-08g': ['🔍', '🔤'], 'mtk-08h': ['🧩', '🔤'], 'mtk-08i': ['🧠', '🔤'],
  'mtk-08j': ['📝', '🔤'],
};
const FALLBACK_ICONS = { ipa: ['🔬', '🧪'], mtk: ['🔢', '📐'] };

function pickIcons(subject, code) {
  return TOPIC_ICONS[code] || FALLBACK_ICONS[subject] || ['✨', '📚'];
}

// ---- topic name (subheader) derivation ----
function humanizeSlug(slug) {
  return slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function deriveTopicName(item) {
  let tail = item.title
    .replace(/[—–-]?\s*\(?Tingkat Campur\)?/i, '')
    .replace(/\(Campur\)/i, '')
    .replace(/\(Bab\s+\d+\)/i, '')
    .replace(/\(Level Dasar SD\)/i, '')
    .trim();
  const parts = tail.split(/[·:]/).map((s) => s.trim());
  tail = parts[parts.length - 1];
  // strip a leading "Sub-Bab 05d" fragment if that's all that's left after the split
  tail = tail.replace(/^Sub-Bab\s+\d+[a-z]\s*-?\s*/i, '').trim();
  const boilerplateOnly = /^(OSN|KSN|SD|MATEMATIKA|IPA|Sub-Bab\s+\d+[a-z]|[\s/—-])*$/i.test(tail);
  if (boilerplateOnly || tail.length < 3) {
    return humanizeSlug(item.slug);
  }
  return tail;
}

// ---- question loading ----
function loadQuestion(item) {
  const dataPath = join(DATA_DIR, item.file);
  if (!existsSync(dataPath)) return null;
  const data = JSON.parse(readFileSync(dataPath, 'utf8'));
  // pick the shortest question among the first 8 for a clean fit on the card
  const candidates = data.questions.slice(0, 8);
  candidates.sort((a, b) => a.question.length - b.question.length);
  return candidates[0];
}

function esc(s) {
  // strip markdown bold/italic markers — the card renders everything bold anyway via CSS
  const stripped = String(s).replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1');
  return stripped.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function thumbnailHtml({ subjectLabel, topicName, question, options, answerKey, icon1, icon2 }) {
  const optionRows = ['A', 'B', 'C', 'D']
    .filter((k) => options[k])
    .map((k) => {
      const correct = k === answerKey;
      return `<div class="opt${correct ? ' correct' : ''}">
        <span class="opt-badge${correct ? ' correct' : ''}">${k}</span>
        <span class="opt-text">${esc(options[k])}</span>
        ${correct ? '<span class="check">✓</span>' : ''}
      </div>`;
    })
    .join('\n');

  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&family=Inter:wght@500;600;700&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1280px;height:720px;overflow:hidden;position:relative;font-family:'Inter',sans-serif;
    background:linear-gradient(160deg,#2d1a5e 0%,#1a0f3d 55%,#120a2e 100%);}
  .hexgrid{position:absolute;inset:0;opacity:.16;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84' height='96' viewBox='0 0 84 96'%3E%3Cpath d='M42 0 L84 24 L84 72 L42 96 L0 72 L0 24 Z' fill='none' stroke='%23ffffff' stroke-width='1.4'/%3E%3C/svg%3E");
    background-size:84px 96px}
  .bokeh{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.9),rgba(255,255,255,0) 70%);filter:blur(1px)}
  .layout{position:relative;z-index:2;width:100%;height:100%}
  .header{position:absolute;top:34px;left:48px;font-family:'Poppins',sans-serif;font-weight:900;
    font-size:64px;line-height:1;letter-spacing:.5px;
    background:linear-gradient(180deg,#FFE477 0%,#FFC629 45%,#E89B0C 100%);
    -webkit-background-clip:text;background-clip:text;color:transparent;
    text-shadow:0 6px 0 rgba(0,0,0,.35);filter:drop-shadow(0 4px 6px rgba(0,0,0,.45))}
  .subheader{position:absolute;top:150px;left:50px;font-family:'Poppins',sans-serif;font-weight:800;
    font-size:46px;line-height:1.05;color:#ffffff;text-shadow:0 3px 6px rgba(0,0,0,.5);max-width:560px}
  .badge{position:absolute;top:38px;right:44px;background:linear-gradient(180deg,#FF5B5B,#E0231F);
    color:#fff;font-family:'Poppins',sans-serif;font-weight:800;font-size:26px;line-height:1.2;
    padding:14px 30px;border-radius:40px;box-shadow:0 8px 0 #9C1512,0 10px 18px rgba(0,0,0,.4);
    text-align:center}
  .card{position:absolute;top:255px;right:44px;width:620px;background:#fff;border-radius:22px;
    box-shadow:0 22px 40px rgba(0,0,0,.45);overflow:hidden;padding:26px 30px 22px;z-index:5}
  .card .bar{height:8px;width:100%;background:#e8eaf0;border-radius:6px;overflow:hidden;margin-bottom:20px}
  .card .bar::after{content:'';display:block;height:100%;width:38%;background:linear-gradient(90deg,#ff5b5b,#e0231f)}
  .card .q{font-family:'Inter',sans-serif;font-weight:700;font-size:26px;line-height:1.32;color:#1a1a2e;margin-bottom:18px}
  .opt{display:flex;align-items:center;gap:14px;background:#f3f4f8;border:2px solid #e8eaf0;border-radius:14px;
    padding:14px 18px;margin-bottom:12px;font-family:'Inter',sans-serif;font-weight:600;font-size:22px;color:#2a2a3e;position:relative}
  .opt.correct{background:#e9f9f0;border-color:#34c77b}
  .opt-badge{width:34px;height:34px;border-radius:50%;background:#fff;border:2px solid #c9cddb;
    display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;color:#5a5f77;flex-shrink:0}
  .opt-badge.correct{background:#34c77b;border-color:#34c77b;color:#fff}
  .opt-text{flex:1}
  .check{color:#22a866;font-size:24px;font-weight:900}
  .icon-badge{position:absolute;font-size:190px;line-height:1;filter:drop-shadow(0 20px 22px rgba(0,0,0,.5));z-index:1}
  .icon-1{bottom:-10px;left:8px;transform:rotate(-8deg)}
  .icon-2{bottom:-16px;left:560px;font-size:150px;transform:rotate(10deg)}
</style></head><body>
  <div class="hexgrid"></div>
  <div class="bokeh" style="width:8px;height:8px;top:10%;left:22%;opacity:.5"></div>
  <div class="bokeh" style="width:5px;height:5px;top:60%;left:12%;opacity:.4"></div>
  <div class="bokeh" style="width:10px;height:10px;top:75%;left:34%;opacity:.35"></div>
  <div class="bokeh" style="width:6px;height:6px;top:22%;left:44%;opacity:.4"></div>
  <div class="bokeh" style="width:7px;height:7px;top:45%;left:60%;opacity:.3"></div>
  <div class="layout">
    <div class="header">KUIS OSN<br/>${subjectLabel} SD</div>
    <div class="subheader">${esc(topicName.toUpperCase())}</div>
    <div class="badge">100 SOAL<br/>+ PEMBAHASAN</div>
    <div class="card">
      <div class="bar"></div>
      <div class="q">${esc(question)}</div>
      ${optionRows}
    </div>
    <div class="icon-badge icon-1">${icon1}</div>
    <div class="icon-badge icon-2">${icon2}</div>
  </div>
</body></html>`;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  let ok = 0, skipped = 0, failed = 0;
  for (const { file, r } of resolved) {
    const num = file.match(/^(\d+)/)?.[1];
    if (ONLY && !ONLY.has(num)) continue;
    if (!r) { failed++; continue; }
    const { code, item } = r;
    const subject = code.split('-')[0];
    const q = loadQuestion(item);
    if (!q) { console.log(`  [skip] no question data for ${code}: ${file}`); skipped++; continue; }
    const topicName = deriveTopicName(item);
    const [icon1, icon2] = pickIcons(subject, code);
    const html = thumbnailHtml({
      subjectLabel: subject === 'ipa' ? 'IPA' : 'MATEMATIKA',
      topicName,
      question: q.question,
      options: q.options,
      answerKey: q.answerKey,
      icon1, icon2,
    });
    const outPath = join(THUMB_DIR, file);
    if (DRY_RUN) {
      console.log(`[dry-run] ${file} -> code=${code} topic="${topicName}" q="${q.question.slice(0, 50)}..."`);
    } else {
      await page.setContent(html, { waitUntil: 'networkidle' });
      await page.screenshot({ path: outPath });
    }
    ok++;
    if (ok % 20 === 0) console.log(`  ${ok} done...`);
  }

  await browser.close();
  console.log(`\nDone. Generated ${ok}, skipped ${skipped}, failed-resolve ${failed}.`);
}

main();
