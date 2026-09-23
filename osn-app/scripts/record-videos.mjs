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
//                                   [--width=1920] [--height=1080] [--limit=N] [--force]
//                                   [--music=audio/osn-1.mp3] [--music-every=20] [--music-out=recordings-final]
// Default records every sub-bab package in the manifest (all tiers, all subjects).
//
// --force re-records packages even when a video already exists (previous run is unlinked).
// --music-every=N muxes the background music track into the last N finished videos as soon as
//   they complete, IN PARALLEL with recording (non-blocking). Music is looped for the video's
//   full length (same ffmpeg recipe as scripts/mux-audio.mjs). Requires ffmpeg on PATH or under
//   .tools/ffmpeg-*/bin/ffmpeg.exe.
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
import { spawn, execFileSync } from 'child_process';
import { readFileSync, mkdirSync, renameSync, existsSync, unlinkSync, readdirSync, statSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_ROOT = resolve(__dirname, '..');

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)=(.*)$/);
    if (!m) return [a.replace(/^--/, ''), true];
    let key = m[1];
    if (key.includes('-')) key = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    return [key, m[2]];
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
// --force re-records existing packages (good for a full re-record after a UI redesign).
const FORCE = args.force === true || args.force === 'true' || args.force === '1';
// --music-every=N: mux the music track into the last N finished videos, in parallel.
const MUSIC = args.music || join(APP_ROOT, 'audio', 'osn-1.mp3');
const MUSIC_EVERY = args.musicEvery ? Number(args.musicEvery) : 20;
const MUSIC_OUT = resolve(APP_ROOT, args.musicOut || 'recordings-final');
const MUSIC_CONCURRENCY = Number(args.musicConcurrency || 4);

const manifest = JSON.parse(readFileSync(join(APP_ROOT, 'public', 'data', '_manifest.json'), 'utf8'));

// Stable global numbering (001, 002, ...) — computed from ALL sub-bab packages regardless of
// --tier/--subject/--only/--exclude filters, so a package's number never shifts between runs.
// ponytail: "subbab" covers the ~300 granular packages; "chapter" additionally covers the
// 13 bab-resmi consolidation videos (ipa-07..ipa-19), which have subBab=null and are only
// addressable via their `chapter` id — both share the same recording/mux pipeline below.
const allSubbab = manifest.items
  .filter((it) => it.type === 'subbab' || it.type === 'chapter')
  .sort((a, b) => (a.subBab || a.chapter || '').localeCompare(b.subBab || b.chapter || ''));
const indexOf = new Map(allSubbab.map((it, i) => [it.id, i + 1]));
const pad = allSubbab.length.toString().length;

const packages = allSubbab
  .filter((it) => TIER === 'all' || it.tier === TIER)
  .filter((it) => SUBJECT === 'all' || it.subject === SUBJECT)
  .filter((it) => !ONLY || ONLY.has(it.subBab || it.chapter))
  .filter((it) => !EXCLUDE || !EXCLUDE.has(it.subBab || it.chapter));

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
if (MUSIC_EVERY > 0) mkdirSync(MUSIC_OUT, { recursive: true });
console.log(`Recording ${packages.length} package(s) @ tier=${TIER} subject=${SUBJECT}, concurrency=${CONCURRENCY}\n`);

// ---- background music muxer (runs in parallel with recording) ----
function findFfmpeg() {
  try {
    execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' });
    return 'ffmpeg';
  } catch { /* fall through to portable build */ }
  const toolsDir = join(APP_ROOT, '.tools');
  if (existsSync(toolsDir)) {
    const candidate = readdirSync(toolsDir).find((d) => d.startsWith('ffmpeg'));
    if (candidate) {
      const exe = join(toolsDir, candidate, 'bin', 'ffmpeg.exe');
      if (existsSync(exe)) return exe;
    }
  }
  return null;
}
const FFMPEG = MUSIC_EVERY > 0 ? findFfmpeg() : null;
if (MUSIC_EVERY > 0 && !FFMPEG) {
  console.warn('MUSIC: ffmpeg not found — recordings will be saved without a music track.');
}
const muxQueue = [];
function muxVideo(src, dest) {
  return new Promise((resolve, reject) => {
    const proc = spawn(FFMPEG, [
      '-y',
      '-i', src,
      '-stream_loop', '-1', '-i', MUSIC,
      '-shortest',
      '-map', '0:v', '-map', '1:a',
      '-c:v', 'copy',
      '-c:a', 'libopus', '-b:a', '128k', '-filter:a', 'volume=0.4',
      dest,
    ], { stdio: ['ignore', 'ignore', 'pipe'] });
    let stderr = '';
    proc.stderr.on('data', (d) => { stderr += d; });
    proc.on('exit', (code) => code === 0 ? resolve() : reject(new Error(stderr.slice(-500) || `ffmpeg exit ${code}`)));
  });
}
// Fire-and-forget: muxes the given finished videos now, without blocking the recording loop.
function enqueueMux(files) {
  if (MUSIC_EVERY <= 0 || !FFMPEG || files.length === 0) return Promise.resolve();
  const record = [];
  const run = async () => {
    for (const file of files) {
      const src = join(OUT_DIR, file);
      const dest = join(MUSIC_OUT, file);
      if (existsSync(dest)) { record.push(`skip  ${file}`); continue; }
      try { await muxVideo(src, dest); record.push(`music ${file}`); }
      catch (err) { record.push(`FAIL! ${file}: ${err.message}`); }
    }
  };
  muxQueue.push(run().then(() => record.forEach((l) => console.log(`   [mux] ${l}`))));
  return muxQueue[muxQueue.length - 1];
}
let pendingMux = [];

// ponytail: Playwright's Chromium->ffmpeg video pipe has an intermittent race on Windows —
// sometimes the pipe never connects and the temp .webm sits at 0 bytes forever, burning CPU,
// independent of concurrency/RAM/duration (confirmed via isolated testing — not a config issue).
// Can't fix Playwright's internals, so instead: watch the temp video file's size after a grace
// period, and if it's stuck at 0 bytes, kill that attempt and retry fresh rather than hanging
// for the full per-item timeout (which can be 45+ minutes for a 100-soal package).
const STALL_GRACE_MS = 45_000;
const STALL_CHECK_INTERVAL_MS = 20_000;
const MAX_ATTEMPTS = 3;

async function waitForNewVideoFile(existingBefore, maxAttempts = 200) {
  // Counts polls, not wall-clock time — a wall-clock deadline (Date.now() - start) breaks if
  // the machine sleeps mid-poll: on wake, elapsed real time jumps far past the deadline even
  // though almost no actual polling happened, silently giving up and disabling the watchdog.
  for (let i = 0; i < maxAttempts; i++) {
    const found = readdirSync(OUT_DIR).find((f) => f.startsWith('page@') && f.endsWith('.webm') && !existingBefore.has(f));
    if (found) return join(OUT_DIR, found);
    await new Promise((r) => setTimeout(r, 500));
  }
  return null;
}

// Serializes "snapshot existing temp files -> create context/page -> spot the new temp file"
// across concurrent slots. Without this, N concurrent recordOneAttempt calls all diff the same
// directory around the same time and can misidentify each other's temp files — one slot's
// watchdog silently ends up watching (or never finding) the wrong file, which then never
// detects a real stall for that slot. The actual ~42min recording itself still fully overlaps
// across slots; only this few-second identification step is serialized.
let identifyChain = Promise.resolve();

async function recordOneAttempt(browser, item, attempt) {
  const filename = filenameFor(item);
  const dest = join(OUT_DIR, filename);

  const questionCount = Math.min(item.questionCount || 100, LIMIT || Infinity);
  const timeoutMs = questionCount * 25_000 + 180_000; // 10s+15s per soal + slack

  const identifyStep = identifyChain.then(async () => {
    const existingTemp = new Set(readdirSync(OUT_DIR).filter((f) => f.startsWith('page@')));
    const context = await browser.newContext({
      viewport: { width: WIDTH, height: HEIGHT },
      recordVideo: { dir: OUT_DIR, size: { width: WIDTH, height: HEIGHT } },
    });
    const page = await context.newPage();
    const tempPath = await waitForNewVideoFile(existingTemp);
    return { context, page, tempPath };
  });
  identifyChain = identifyStep.catch(() => {});
  const { context, page, tempPath } = await identifyStep;

  const started = Date.now();
  const recordId = item.subBab || item.chapter;

  let stalled = false;
  let watchdogDone = false;
  const watchdog = (async () => {
    if (!tempPath) { watchdogDone = true; return; } // couldn't spot the temp file — fall back to normal timeout
    await new Promise((r) => setTimeout(r, STALL_GRACE_MS));
    // Any two consecutive checks with an IDENTICAL size means no new frames were written in a
    // full STALL_CHECK_INTERVAL_MS window — a real recording always grows measurably in 20s.
    // (Originally only checked for size===0, which missed stalls that happen mid-recording
    // after the file had already grown past 0 bytes.)
    let lastSize = -1;
    while (!watchdogDone) {
      let size;
      try { size = statSync(tempPath).size; } catch { break; } // file already finalized/renamed — recording finished
      if (lastSize !== -1 && size === lastSize) {
        stalled = true;
        console.warn(`stall ${recordId} (attempt ${attempt}) — video stuck at ${size} bytes, no growth for ${STALL_CHECK_INTERVAL_MS / 1000}s, aborting`);
        break;
      }
      lastSize = size;
      await new Promise((r) => setTimeout(r, STALL_CHECK_INTERVAL_MS));
    }
  })();

  // Backup hard ceiling, independent of Playwright's own waitForFunction timeout: counts
  // 1s ticks rather than comparing against a wall-clock deadline. Playwright's internal
  // timeout appears to share the same sleep-clock vulnerability as our own code did (a
  // recording kept growing for 78+ minutes past its 44.7min timeout without ever firing) —
  // this ceiling fires regardless of how the OS clock behaves across a sleep/wake cycle.
  let hardCeilingHit = false;
  const ceilingTicks = Math.ceil(timeoutMs / 1000) + 60; // small buffer over the normal timeout
  const hardCeiling = (async () => {
    for (let i = 0; i < ceilingTicks && !watchdogDone; i++) {
      await new Promise((r) => setTimeout(r, 1000));
    }
    if (!watchdogDone) hardCeilingHit = true;
  })();

  try {
    const limitParam = LIMIT ? `&limit=${LIMIT}` : '';
    await page.goto(`${BASE_URL}/?record=${encodeURIComponent(recordId)}&tier=${encodeURIComponent(item.tier)}${limitParam}`);
    await Promise.race([
      page.waitForFunction(() => window.__osnRecordDone === true, null, { timeout: timeoutMs }),
      (async () => { while (!stalled) await new Promise((r) => setTimeout(r, 1000)); throw new Error('stalled (0-byte video pipe)'); })(),
      (async () => { while (!hardCeilingHit) await new Promise((r) => setTimeout(r, 1000)); throw new Error('hard ceiling exceeded (tick-based, backup for Playwright timeout)'); })(),
    ]);
    console.log(`done  ${recordId} (${Math.round((Date.now() - started) / 1000)}s)`);
  } catch (err) {
    watchdogDone = true;
    await context.close().catch(() => {});
    throw err;
  }
  watchdogDone = true;

  const video = page.video();
  await context.close(); // finalizes the video file
  if (video) {
    const path = await video.path();
    renameSync(path, dest);
    console.log(`saved ${filename}`);
    // Every MUSIC_EVERY-th finished video, kick off a parallel mux batch (non-blocking).
    pendingMux.push(filename);
    if (pendingMux.length >= MUSIC_EVERY) {
      const batch = pendingMux.splice(0, MUSIC_EVERY);
      enqueueMux(batch); // fire-and-forget; awaited in the final summary
    }
  }
}

async function recordOne(browser, item) {
  const filename = filenameFor(item);
  const dest = join(OUT_DIR, filename);
  if (existsSync(dest)) {
    if (!FORCE) {
      console.log(`skip  ${filename} (already exists)`);
      return;
    }
    unlinkSync(dest);
    const musicDest = join(MUSIC_OUT, filename);
    if (existsSync(musicDest)) unlinkSync(musicDest);
  }

  const recordId = item.subBab || item.chapter;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      await recordOneAttempt(browser, item, attempt);
      return;
    } catch (err) {
      console.error(`FAIL  ${recordId} (attempt ${attempt}/${MAX_ATTEMPTS}): ${err.message}`);
    }
  }
  console.error(`GIVE UP on ${recordId} after ${MAX_ATTEMPTS} attempts`);
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
// Flush any leftover batch (< MUSIC_EVERY) before reporting done.
if (pendingMux.length > 0) enqueueMux(pendingMux.splice(0));
await Promise.all(muxQueue);
console.log(`\nAll done. Videos in ${OUT_DIR}${MUSIC_EVERY > 0 && FFMPEG ? `, with music in ${MUSIC_OUT}` : ''}`);
