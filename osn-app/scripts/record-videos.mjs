#!/usr/bin/env node
// record-videos.mjs — Batch-record soal packages to video via headless Playwright,
// no screen-share permission dialog and no foreground-tab requirement.
//
// How it works: the app supports ?record=<subBab>&tier=<tier> (see App.jsx), which jumps
// straight into auto-record mode and skips getDisplayMedia when navigator.webdriver is set
// (see PracticeArea.jsx isHeadless). Playwright records the tab itself via its built-in
// video capture, so we just navigate, wait for window.__osnRecordDone, then close the page.
//
// Requires: npm i -D playwright && npx playwright install chromium
// Requires: a dev server already running (npm run dev).
//
// Usage:
//   node scripts/record-videos.mjs [--tier=all] [--subject=all|ipa|mtk] [--only=id1,id2] [--exclude=id1,id2]
//                                   [--base=http://localhost:5173] [--concurrency=6] [--out=recordings]
//                                   [--width=1920] [--height=1080]
// Default records every sub-bab package in the manifest (all tiers, all subjects).
//
// ponytail: 1920x1080 is a deliberate ceiling, not a default to casually raise. The app's
// clean-mode UI uses fixed px/rem sizing (not viewport-relative), and Playwright's video
// capture doesn't respect deviceScaleFactor or CSS zoom (both tried and confirmed broken —
// they either pad the frame with blank space or get ignored outright). Above ~1080p the
// card shrinks into a small island in a mostly-empty frame. Upgrade path: restyle
// PracticeArea's clean-mode markup (src/components/PracticeArea.jsx) to scale with
// viewport units, then raise WIDTH/HEIGHT here to match.
//
// ponytail: the app's "video" is a real-time countdown UI (10s/soal + 15s pembahasan),
// so a 100-soal campur package still takes ~41 real minutes to capture regardless of
// automation — --concurrency runs multiple packages in parallel tabs to shorten total
// wall-clock time across many packages. True speedup would need rebuilding the timer UI
// to render off a virtual clock instead of wall-clock waits.

import { chromium } from 'playwright';
import { readFileSync, mkdirSync, renameSync, existsSync } from 'fs';
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

const TIER = args.tier || 'all'; // 'all' = every tier present in the manifest
const SUBJECT = args.subject || 'all'; // all | ipa | mtk
const ONLY = args.only ? new Set(args.only.split(',')) : null;
const EXCLUDE = args.exclude ? new Set(args.exclude.split(',')) : null;
const BASE_URL = args.base || 'http://localhost:5173';
const CONCURRENCY = Number(args.concurrency || 6);
const OUT_DIR = resolve(APP_ROOT, args.out || 'recordings');
const WIDTH = Number(args.width || 1920);
const HEIGHT = Number(args.height || 1080);
// --limit=N caps soal per package (quick preview recordings). PracticeArea reads ?limit=N.
const LIMIT = args.limit ? Number(args.limit) : null;

const manifest = JSON.parse(readFileSync(join(APP_ROOT, 'public', 'data', '_manifest.json'), 'utf8'));

// Stable global numbering (001, 002, ...) — computed from ALL sub-bab packages regardless of
// --tier/--subject/--only/--exclude filters, so a package's number never shifts between runs.
const allSubbab = manifest.items
  .filter((it) => it.type === 'subbab')
  .sort((a, b) => (a.subBab || '').localeCompare(b.subBab || ''));
const indexOf = new Map(allSubbab.map((it, i) => [it.id, i + 1]));
const pad = allSubbab.length.toString().length;

const packages = allSubbab
  .filter((it) => TIER === 'all' || it.tier === TIER)
  .filter((it) => SUBJECT === 'all' || it.subject === SUBJECT)
  .filter((it) => !ONLY || ONLY.has(it.subBab))
  .filter((it) => !EXCLUDE || !EXCLUDE.has(it.subBab));

if (packages.length === 0) {
  console.error('No packages matched. Check --tier/--subject/--only against public/data/_manifest.json.');
  process.exit(1);
}

// Video filename is prefixed with its stable global number, then mirrors the package's own
// title (as shown in the app).
function filenameFor(item) {
  const num = String(indexOf.get(item.id)).padStart(pad, '0');
  const safeTitle = item.title.replace(/[\\/:*?"<>|]/g, '-').trim();
  return `${num}-${safeTitle}.webm`;
}

mkdirSync(OUT_DIR, { recursive: true });
console.log(`Recording ${packages.length} package(s) @ tier=${TIER} subject=${SUBJECT}, concurrency=${CONCURRENCY}\n`);

async function recordOne(browser, item) {
  const filename = filenameFor(item);
  const dest = join(OUT_DIR, filename);
  if (existsSync(dest)) {
    console.log(`skip  ${filename} (already exists)`);
    return;
  }

  const questionCount = Math.min(item.questionCount || 100, LIMIT || Infinity);
  const timeoutMs = questionCount * 25_000 + 60_000; // 10s+15s per soal + slack

  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    recordVideo: { dir: OUT_DIR, size: { width: WIDTH, height: HEIGHT } },
  });
  const page = await context.newPage();
  const started = Date.now();

  try {
    const limitParam = LIMIT ? `&limit=${LIMIT}` : '';
    await page.goto(`${BASE_URL}/?record=${encodeURIComponent(item.subBab)}&tier=${encodeURIComponent(item.tier)}${limitParam}`);
    await page.waitForFunction(() => window.__osnRecordDone === true, null, { timeout: timeoutMs });
    console.log(`done  ${item.subBab} (${Math.round((Date.now() - started) / 1000)}s)`);
  } catch (err) {
    console.error(`FAIL  ${item.subBab}: ${err.message}`);
  } finally {
    const video = page.video();
    await context.close(); // finalizes the video file
    if (video) {
      const path = await video.path();
      renameSync(path, dest);
      console.log(`saved ${filename}`);
    }
  }
}

async function pool(items, size, worker) {
  const queue = [...items];
  await Promise.all(
    Array.from({ length: Math.min(size, items.length) }, async () => {
      while (queue.length > 0) {
        const item = queue.shift();
        await worker(item);
      }
    })
  );
}

const browser = await chromium.launch({ headless: true });
try {
  await pool(packages, CONCURRENCY, (item) => recordOne(browser, item));
} finally {
  await browser.close();
}
console.log(`\nAll done. Videos in ${OUT_DIR}`);
