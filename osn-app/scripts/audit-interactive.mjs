/* Browser audit for the interactive layer.
   Serves the repo over http (the pages need a real origin: they check
   document.referrer, fetch /data/*.json, and write to localStorage), then for
   each pilot topic opens the player and asserts the stage, transport, hotspot
   popovers, theory, mini quiz and 100-soal quiz actually work. Console errors,
   page errors and failed requests are collected throughout.

   Usage: npm run audit:interactive [-- --headed]                            */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = process.argv[2] || path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const WEB = path.join(ROOT, 'public'); // vite serves public/ at the site root
const HEADED = process.argv.includes('--headed');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(WEB, p);
  if (!file.startsWith(WEB) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, { 'content-type': 'text/plain' });
    return res.end('not found');
  }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const BASE = `http://127.0.0.1:${server.address().port}`;

const TOPICS = [
  'ipa-01k-rantai-makanan-campur',
  'ipa-03d-tuas-campur',
  'ipa-03j-listrik-seri-paralel-campur',
  'ipa-05j-siklus-air-campur',
  'mtk-02a-pecahan-senilai-campur',
  'mtk-06c-diskon-campur',
];

const browser = await chromium.launch({ headless: !HEADED });
const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });

const noise = [];
page.on('console', (m) => {
  if (m.type() === 'error') noise.push(`console: ${m.text()}`);
});
page.on('pageerror', (e) => noise.push(`pageerror: ${e.message}`));
page.on('requestfailed', (r) => {
  const u = r.url();
  if (u.includes('fonts.g')) return; // webfont CDN may be blocked in this sandbox
  noise.push(`requestfailed: ${u} ${r.failure()?.errorText}`);
});

let problems = 0;
const fail = (m) => { problems++; console.log(`   FAIL ${m}`); };

console.log('\nHUB');
await page.goto(`${BASE}/interaktif/`, { waitUntil: 'networkidle' });
await page.waitForSelector('.tile', { timeout: 15000 }).catch(() => fail('hub rendered no tiles'));
const tiles = await page.locator('.tile').count();
const live = await page.locator('.tile:not(.tile--soon)').count();
const bodyTxt = await page.locator('body').innerText();
console.log(`   ${tiles} tile(s), ${live} interactive, stats: ${(bodyTxt.match(/\d+\s+(?:VIDEO \/ TOPIK|SUDAH INTERAKTIF|BAB)/g) || []).join(' / ')}`);
if (!tiles) fail('hub is empty');
if (!/201/.test(bodyTxt)) fail('hub does not report 201 topics');
if (live !== 6) fail(`hub marks ${live} topics interactive, expected 6`);

for (const id of TOPICS) {
  console.log(`\n${id}`);
  await page.goto(`${BASE}/interaktif/play.html?id=${id}`, { waitUntil: 'networkidle' });
  await page.waitForSelector('.stage__svg', { timeout: 15000 }).catch(() => fail('no stage svg'));

  const headline = await page.locator('h1').first().innerText().catch(() => '(none)');
  const stageKids = await page.locator('.stage__svg g > *').count();
  console.log(`   "${headline}" · ${stageKids} top-level svg group(s)`);
  if (!stageKids) fail('stage drew nothing');

  // ---- transport. Scenes autoplay on load, so read the state instead of assuming it.
  const playBtn = page.locator('.transport button[title="Putar"], .transport button[title="Jeda"]');
  const title0 = await playBtn.getAttribute('title');
  const running0 = title0 === 'Jeda';
  if (!running0) fail('scene did not autoplay on load');

  if (!running0) await playBtn.click(); // start it
  await playBtn.click(); // now pause, whatever the initial state was
  await page.waitForTimeout(150);
  if ((await playBtn.getAttribute('title')) !== 'Putar') fail('could not pause the stage');
  const svgPaused = await page.locator('.stage__svg').innerHTML();
  await page.waitForTimeout(400);
  if ((await page.locator('.stage__svg').innerHTML()) !== svgPaused) fail('pause did not stop the stage');

  // resume: the drawing must move again
  await playBtn.click();
  if ((await playBtn.getAttribute('title')) !== 'Jeda') fail('could not resume the stage');
  await page.waitForTimeout(500);
  if ((await page.locator('.stage__svg').innerHTML()) === svgPaused) fail('resume did not restart the stage');
  await playBtn.click(); // pause again for a stable scrub test
  await page.waitForTimeout(120);

  // ---- scrub
  await page.locator('input.scrub').fill('900');
  await page.locator('input.scrub').dispatchEvent('input');
  await page.waitForTimeout(200);
  const scrubbed = await page.locator('.stage__svg').innerHTML();
  console.log(`   scrub → ${scrubbed === svgPaused ? 'no visual change' : 'ok'}`);
  if (scrubbed === svgPaused) fail('scrubbing to 90% did not change the stage');

  // ---- scene navigation
  const dots = page.locator('.dots button');
  const nScenes = await dots.count();
  console.log(`   ${nScenes} scene(s) in transport`);
  if (nScenes > 1) {
    await dots.nth(1).click();
    await page.waitForTimeout(400);
    if ((await page.locator('.dots button.on').count()) !== 1) fail('scene 2 did not become active');
  }

  // ---- hotspot popover
  const hots = page.locator('.stage__hs .hs');
  const nHot = await hots.count();
  console.log(`   ${nHot} hotspot marker(s)`);
  if (!nHot) fail('no hotspot markers on the stage');
  else {
    const label = await hots.first().getAttribute('title');
    await hots.first().click();
    await page.waitForTimeout(250);
    const panelVisible = await page.locator('.hs-panel').isVisible().catch(() => false);
    const panelTxt = panelVisible ? await page.locator('.hs-panel').innerText() : '';
    console.log(`   hotspot "${label}" → panel ${panelVisible ? 'opens' : 'MISSING'}${panelVisible ? ` (${panelTxt.length} chars)` : ''}`);
    if (!panelVisible) fail('hotspot click did not open .hs-panel');
    else if (panelTxt.length < 20) fail('hotspot panel is empty');
  }

  // ---- theory deck
  await page.click('.tabs [data-tab="teori"]');
  await page.waitForTimeout(200);
  const nTheory = await page.locator('#panel-teori details').count();
  console.log(`   theory: ${nTheory} section(s)`);
  if (!nTheory) fail('theory deck is empty');

  // ---- mini quiz: answer one, expect feedback + persistence
  await page.click('.tabs [data-tab="mini"]');
  await page.waitForTimeout(200);
  const miniOpts = page.locator('#panel-mini .opt');
  if ((await miniOpts.count()) !== 4) fail(`mini quiz did not render 4 options (got ${await miniOpts.count()})`);
  else {
    await miniOpts.first().click();
    await page.waitForTimeout(250);
    const marked = await page.locator('#panel-mini .opt.correct, #panel-mini .opt.wrong').count();
    const pembahasan = await page.locator('#panel-mini').innerText();
    const hasKey = /pembahasan|kunci|jawaban/i.test(pembahasan);
    console.log(`   mini quiz: answered, ${marked} option(s) marked, pembahasan ${hasKey ? 'shown' : 'MISSING'}`);
    if (!marked) fail('mini quiz did not mark the answer');
    if (!hasKey) fail('mini quiz showed no pembahasan');
  }

  // ---- 100-soal map + answering
  await page.click('.tabs [data-tab="full"]');
  await page.waitForTimeout(250);
  const nMap = await page.locator('#panel-full .map100 button').count();
  const fullOpts = page.locator('#panel-full .opt');
  console.log(`   100-soal: map ${nMap} cell(s), ${await fullOpts.count()} option(s) on screen`);
  if (nMap !== 100) fail(`question map has ${nMap} cells, expected 100`);
  if (!(await fullOpts.count())) fail('100-soal quiz rendered no options');
  else {
    await fullOpts.nth(1).click();
    await page.waitForTimeout(250);
    // player.js stores { answers, at, order } under osn-ix:<id>:full
    const saved = await page.evaluate((k) => localStorage.getItem(k), `osn-ix:${id}:full`);
    const nAnswers = saved ? Object.keys(JSON.parse(saved).answers || {}).length : 0;
    console.log(`   progress: :full holds ${nAnswers} answer(s)`);
    if (nAnswers !== 1) fail(`answering the 100-soal quiz stored ${nAnswers} answers, expected 1`);
  }

  // ---- reload keeps progress
  await page.reload({ waitUntil: 'networkidle' });
  await page.click('.tabs [data-tab="full"]');
  await page.waitForTimeout(300);
  const after = await page.evaluate((k) => localStorage.getItem(k), `osn-ix:${id}:full`);
  const kept = after ? Object.keys(JSON.parse(after).answers || {}).length : 0;
  const marked = await page.locator('#panel-full .opt.correct, #panel-full .opt.wrong').count();
  console.log(`   after reload: ${kept} answer(s), ${marked} option(s) re-marked`);
  if (kept !== 1) fail('progress lost after reload');
  if (!marked) fail('reload did not re-mark the answered question');
}

// --- the React app's "Materi Interaktif" tab, served from the built dist/ ---
const DIST = path.join(ROOT, 'dist');
if (fs.existsSync(DIST)) {
  console.log('\nAPP TAB (dist/, 390px)');
  noise.length = 0;
  // A mobile viewport is deliberate: App.jsx hides the header chrome whenever
  // navigator.webdriver is true, so under automation the bottom nav is the only
  // tab bar left to drive — and it is the md:hidden one.
  const app = await browser.newPage({ viewport: { width: 390, height: 844 } });
  app.on('console', (m) => {
    if (m.type() === 'error') noise.push(`app console: ${m.text()}`);
  });
  app.on('pageerror', (e) => noise.push(`app pageerror: ${e.message}`));

  const appServer = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p.endsWith('/')) p += 'index.html';
    const file = path.join(DIST, p);
    if (!file.startsWith(DIST) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      // SPA fallback: unknown routes are client-side
      const idx = path.join(DIST, 'index.html');
      if (!fs.existsSync(idx)) { res.writeHead(404); return res.end('not found'); }
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      return fs.createReadStream(idx).pipe(res);
    }
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  await new Promise((r) => appServer.listen(0, r));
  const APP = `http://127.0.0.1:${appServer.address().port}`;

  await app.goto(APP, { waitUntil: 'networkidle' }).catch(() => {});
  // The header nav is suppressed in headless (the app hides chrome for video
  // recording), so drive the always-present bottom-nav button.
  const tabBtn = app.locator('button[aria-label="Interaktif"], button:has-text("Materi Interaktif")').first();
  if (!(await tabBtn.count())) fail('app has no "Interaktif" tab');
  else {
    await tabBtn.click();
    const frame = app.frameLocator('iframe[src="/interaktif/"]');
    const player = frame;
    await frame.locator('.tile').first().waitFor({ timeout: 15000 }).catch(() => fail('hub did not render inside the app iframe'));
    const tiles = await frame.locator('.tile').count();
    console.log(`   iframe hub: ${tiles} tile(s)`);
    if (!tiles) fail('iframe hub is empty');

    // first interactive topic, opened from inside the app. The tile navigates the
    // same frame, so its src attribute stays /interaktif/ — keep the same handle.
    const live = frame.locator('.tile:not(.tile--soon)').first();
    if (await live.count()) {
      await live.click();
      await player.locator('.stage__svg').waitFor({ timeout: 15000 }).catch(() => fail('player did not render inside the app iframe'));
      const svgGroups = await player.locator('.stage__svg g > *').count();
      const playerTitle = await player.locator('h1').first().innerText().catch(() => '(none)');
      console.log(`   iframe player: "${playerTitle}" · ${svgGroups} svg group(s)`);
      if (!svgGroups) fail('player iframe stage is empty');
    }
  }
  appServer.close();
  await app.close();
} else {
  console.log('\nAPP TAB (dist/) — skipped, run `npm run build` first');
}

console.log(`\nconsole/page errors: ${noise.length}`);
[...new Set(noise)].slice(0, 20).forEach((n) => console.log('   ' + n));

await browser.close();
server.close();
console.log(`\n${TOPICS.length} topic(s) · ${problems} problem(s) · ${new Set(noise).size} distinct error(s)`);
process.exit(problems || noise.length ? 1 : 0);