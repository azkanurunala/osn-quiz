#!/usr/bin/env node
// mux-audio.mjs — Add a looped background-music track to videos from record-videos.mjs.
// Playwright's video capture is video-only (no audio API), so audio is added afterward
// here instead, muxed straight from the same music URL the app itself uses.
//
// Requires: ffmpeg on PATH (winget install Gyan.FFmpeg  /  choco install ffmpeg).
//
// Usage:
//   node scripts/mux-audio.mjs [--in=recordings] [--out=recordings-final]
//                               [--music=<url-or-path>] [--volume=0.4]
//                               [--trim=5] [--force]
//
// Video stream is copied as-is (no re-encode, no quality loss) — only audio is added.
// --trim cuts N seconds off the start of the source video before muxing (default 5).
// --force re-processes files even if they already exist in the output dir.

import { execFileSync, spawnSync } from 'child_process';
import { readdirSync, mkdirSync, existsSync, renameSync, unlinkSync, statSync } from 'fs';
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

const IN_DIR = resolve(APP_ROOT, args.in || 'recordings');
const OUT_DIR = resolve(APP_ROOT, args.out || 'recordings-final');
const MUSIC = args.music || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3';
const VOLUME = args.volume || '0.4';
const TRIM = args.trim || '5';
const FORCE = !!args.force;
const LIMIT = args.limit ? Number(args.limit) : Infinity;
const IN_PLACE = args['in-place'] !== undefined;

// Prefer ffmpeg on PATH; fall back to a portable build under .tools/ (no admin rights needed
// to install one — see README note below) so this doesn't hard-require a system install.
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

const FFMPEG = findFfmpeg();
if (!FFMPEG) {
  console.error(
    'ffmpeg not found. Install it (winget install Gyan.FFmpeg / choco install ffmpeg),\n' +
    'or download a portable build into .tools/ffmpeg-*/bin/ffmpeg.exe (e.g. from gyan.dev).'
  );
  process.exit(1);
}

if (!existsSync(IN_DIR)) {
  console.error(`Input dir not found: ${IN_DIR}`);
  process.exit(1);
}

const files = readdirSync(IN_DIR).filter((f) => f.endsWith('.webm') && !f.startsWith('page@'));
if (files.length === 0) {
  console.error(`No finished .webm packages found in ${IN_DIR}.`);
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });

const queue = readdirSync(IN_DIR)
  .filter((f) => f.endsWith('.webm') && !f.startsWith('page@'))
  .filter((f) => IN_PLACE || FORCE || !existsSync(join(OUT_DIR, f)))
  .slice(0, LIMIT);

console.log(`Muxing ${queue.length} video(s) → ${OUT_DIR}`);
console.log(`   music ${MUSIC}`);
console.log(`   trim ${TRIM}s · volume ${VOLUME} · video copied (no re-encode)\n`);

if (!existsSync(MUSIC) && !MUSIC.startsWith('http')) {
  console.error(`Music file not found: ${MUSIC}`);
  process.exit(1);
}

let ok = 0;
let failed = 0;
let bytes = 0;
const started = Date.now();

for (const [i, file] of queue.entries()) {
  const src = join(IN_DIR, file);
  const dest = join(OUT_DIR, file);
  // Write to a sibling temp file and rename on success: overwriting an existing
  // muxed video in place would otherwise leave a truncated file if ffmpeg died.
  const tmp = `${dest}.part`;
  if (existsSync(tmp)) unlinkSync(tmp);

  const t0 = Date.now();
  const result = spawnSync(FFMPEG, [
    '-y',
    '-ss', TRIM, '-i', src,
    '-stream_loop', '-1', '-i', MUSIC,
    '-shortest',
    '-map', '0:v', '-map', '1:a',
    '-c:v', 'copy',
    '-c:a', 'libopus', '-b:a', '128k', '-filter:a', `volume=${VOLUME}`,
    tmp,
  ], { stdio: ['ignore', 'ignore', 'pipe'] });

  if (result.status === 0 && existsSync(tmp) && statSync(tmp).size > 0) {
    try {
      renameSync(tmp, dest);
    } catch (err) {
      console.error(`FAIL  ${file}: could not replace destination — ${err.message}`);
      failed++;
      continue;
    }
    const secs = ((Date.now() - t0) / 1000).toFixed(0);
    const mb = (statSync(dest).size / 1048576).toFixed(0);
    bytes += statSync(dest).size;
    ok++;
    const done = i + 1;
    const eta = ((Date.now() - started) / done) * (queue.length - done);
    console.log(
      `done  [${String(done).padStart(3)}/${queue.length}] ${secs}s · ${mb}MB · ${file}` +
      `   (eta ${Math.round(eta / 60)}m)`
    );
  } else {
    if (existsSync(tmp)) { try { unlinkSync(tmp); } catch { /* keep going */ } }
    console.error(`FAIL  ${file}: ${result.stderr?.toString().slice(-400)}`);
    failed++;
  }
}

console.log(
  `\n${ok} done, ${failed} failed in ${Math.round((Date.now() - started) / 60000)}m` +
  ` · ${(bytes / 1073741824).toFixed(1)} GB written. Output in ${OUT_DIR}`
);
