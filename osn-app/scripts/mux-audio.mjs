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
//
// Video stream is copied as-is (no re-encode, no quality loss) — only audio is added.

import { execFileSync, spawnSync } from 'child_process';
import { readdirSync, mkdirSync, existsSync } from 'fs';
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
console.log(`Muxing audio into ${files.length} video(s) → ${OUT_DIR}\n`);

let ok = 0;
let failed = 0;
for (const file of files) {
  const src = join(IN_DIR, file);
  const dest = join(OUT_DIR, file);
  if (existsSync(dest)) {
    console.log(`skip  ${file} (already exists)`);
    continue;
  }

  const result = spawnSync(FFMPEG, [
    '-y',
    '-i', src,
    '-stream_loop', '-1', '-i', MUSIC,
    '-shortest',
    '-map', '0:v', '-map', '1:a',
    '-c:v', 'copy',
    '-c:a', 'libopus', '-b:a', '128k', '-filter:a', `volume=${VOLUME}`,
    dest,
  ], { stdio: ['ignore', 'ignore', 'pipe'] });

  if (result.status === 0) {
    console.log(`done  ${file}`);
    ok++;
  } else {
    console.error(`FAIL  ${file}: ${result.stderr?.toString().slice(-500)}`);
    failed++;
  }
}

console.log(`\n${ok} done, ${failed} failed. Output in ${OUT_DIR}`);
