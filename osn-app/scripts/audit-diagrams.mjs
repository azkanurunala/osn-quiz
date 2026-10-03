// Audit the question illustrations and explanation animations in the timed practice UI.
//
//   node scripts/audit-diagrams.mjs                      # default spot-checks
//   node scripts/audit-diagrams.mjs ipa-03e ipa-03j     # specific packages
//   node scripts/audit-diagrams.mjs --out=C:/tmp/shots   # keep screenshots
//
// Exits non-zero if any invariant breaks, so it can gate a recording run. Requires the dev server
// on :5173 (`npm run dev`).
//
// Invariants checked per package:
//   1. the question phase shows a figure, and it is genuinely still (no animated elements)
//   2. the explanation phase shows a figure with at least one animated element
//   3. both phases show the SAME diagram (student must see the picture they were reading)
//   4. neither figure is clipped by the 1920x1080 frame, and the last option stays visible
//
// Note: this checks structure and motion, not scientific accuracy of the drawing. That still needs
// a human (or a vision-capable reviewer) to eyeball the rendered figures.

import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:5173';

// Packages chosen because their question #1 already matches a diagram, so the audit never waits
// for the 10s+15s auto-advance.
const DEFAULTS = ['ipa-02b', 'ipa-04a', 'ipa-05a', 'ipa-05e'];

const args = process.argv.slice(2);
const outArg = args.find((a) => a.startsWith('--out='));
const OUT = outArg ? outArg.slice(6) : 'C:/Users/nurun/AppData/Local/Temp/opencode/shots';
const TARGETS = args.filter((a) => !a.startsWith('--'));

const ids = TARGETS.length ? TARGETS : DEFAULTS;
const VIEWPORT = { width: 1920, height: 1080 };
const problems = [];
const note = (msg) => problems.push(msg);

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();

// The browser function is serialised, so `mode` must travel as an argument, not a closure.
const readFigure = (page, mode) => page.evaluate((m) => {
  // In split mode BOTH figures are mounted, so select by mode; the first figure in the DOM is
  // always the question one.
  const el = document.querySelector(`[data-ix-diagram][data-ix-mode="${m}"]`);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return {
    title: el.dataset.ixDiagram,
    animated: el.querySelectorAll('[style*="animation"]').length,
    labels: [...el.querySelectorAll('text')].map((t) => t.textContent).filter(Boolean),
    w: Math.round(r.width),
    top: Math.round(r.top),
    bottom: Math.round(r.bottom),
    clipped: r.bottom > window.innerHeight || r.top < 0,
  };
}, mode);

const lastOptionBottom = () => {
  const bs = [...document.querySelectorAll('button')].filter((b) =>
    /^[ABCD]/.test(b.textContent.trim()));
  return bs.length ? Math.round(bs[bs.length - 1].getBoundingClientRect().bottom) : -1;
};

for (const id of ids) {
  const page = await browser.newPage({ viewport: VIEWPORT });
  const pageErrors = [];
  page.on('pageerror', (e) => pageErrors.push(e.message));

  await page.goto(`${BASE}/?record=${encodeURIComponent(id)}&tier=campur&limit=3`, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-ix-diagram]', { timeout: 60_000 });
  await page.waitForTimeout(1200);

  const still = await readFigure(page, 'still');
  const stillOpts = await page.evaluate(lastOptionBottom);
  await page.screenshot({ path: `${OUT}/${id}-1-soal.png` });

  await page.waitForSelector('[data-ix-diagram][data-ix-mode="motion"]', { timeout: 40_000 });
  await page.waitForTimeout(2500);
  const motion = await readFigure(page, 'motion');
  const motionOpts = await page.evaluate(lastOptionBottom);
  await page.screenshot({ path: `${OUT}/${id}-2-pembahasan.png` });

  if (!still) note(`${id}: fase soal tidak menampilkan diagram`);
  if (!motion) note(`${id}: fase pembahasan tidak menampilkan diagram`);
  if (still && still.animated !== 0) note(`${id}: fase soal harus statis, tapi ${still.animated} elemen animasi`);
  if (motion && motion.animated === 0) note(`${id}: fase pembahasan tidak ada yang bergerak (nama keyframes salah?)`);
  if (still && motion && still.title !== motion.title) {
    note(`${id}: fase soal "${still.title}" != fase pembahasan "${motion.title}"`);
  }
  if (still && still.clipped) note(`${id}: ilustrasi soal terpotong`);
  if (motion && motion.clipped) note(`${id}: animasi pembahasan terpotong`);
  if (stillOpts > VIEWPORT.height) note(`${id}: opsi terakhir di luar frame (${stillOpts})`);
  if (motionOpts > VIEWPORT.height) note(`${id}: opsi terakhir di luar frame saat pembahasan (${motionOpts})`);
  for (const e of pageErrors) note(`${id}: pageerror ${e}`);

  console.log(`\n=== ${id} ===`);
  console.log(`  judul     : ${still?.title ?? 'TIDAK ADA'}`);
  console.log(`  label     : ${(still?.labels ?? []).slice(0, 7).join(' | ')}`);
  console.log(`  soal      : ${still?.w ?? '-'}px · animasi ${still?.animated ?? '-'} (harus 0)`);
  console.log(`  pembahasan : ${motion?.w ?? '-'}px · animasi ${motion?.animated ?? '-'} (harus >0)`);
  await page.close();
}

await browser.close();

console.log(`\nscreenshot: ${OUT}`);
if (problems.length) {
  console.log(`\n${problems.length} MASALAH:`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exitCode = 1;
} else {
  console.log('\nSemua invariant lolos.');
}