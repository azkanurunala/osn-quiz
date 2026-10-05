// Render real soal through the diagram matcher into one PNG contact sheet (question + explanation
// phase side by side) to eyeball a family without recording a video.
//
//   node scripts/preview-diagram.mjs <diagram-id> [maxSoal=12] [out.png]
import { readFileSync, writeFileSync } from 'fs';
import { createServer } from 'vite';
import { chromium } from 'playwright';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const [id, max = '12', out = 'preview-diagram.png'] = process.argv.slice(2);
if (!id) { console.error('usage: node scripts/preview-diagram.mjs <diagram-id> [max] [out.png]'); process.exit(1); }
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent', optimizeDeps: { noDiscovery: true, include: [] } });
const { matchDiagram } = await server.ssrLoadModule('/src/features/diagrams/matchDiagram.js');
const { QuestionFigure, ExplanationFigure } = await server.ssrLoadModule('/src/features/diagrams/QuestionFigure.jsx');

const man = JSON.parse(readFileSync('public/data/_manifest.json', 'utf8'));
const seen = new Set(); const rows = [];
for (const p of man.items) {
  if (!p.file || rows.length >= Number(max)) continue;
  for (const q of JSON.parse(readFileSync('public/data/' + p.file, 'utf8')).questions ?? []) {
    const d = matchDiagram(q, p.subject);
    if (d?.id !== id || seen.has(q.question.slice(0, 80)) || rows.length >= Number(max)) continue;
    seen.add(q.question.slice(0, 80));
    // spread the sample over packages instead of taking the first N soal of one file
    if (Math.random() > 0.35) continue;
    const qf = renderToStaticMarkup(React.createElement(QuestionFigure, { diagram: d, question: q }));
    const ef = renderToStaticMarkup(React.createElement(ExplanationFigure, { diagram: d, question: q }));
    rows.push(`<div class="row"><p>${q.question.replace(/</g, '&lt;').slice(0, 220)}</p><div class="f">${qf || '<i>(tidak tampil)</i>'}</div><div class="f">${ef || '<i>(tidak tampil)</i>'}</div></div>`);
  }
}
await server.close();
const html = `<!doctype html><html><head><meta charset="utf-8"><script src="https://cdn.tailwindcss.com"></script>
<style>body{background:#0b1220;color:#cbd5e1;font:13px system-ui;margin:0;padding:12px;width:1500px}.row{display:grid;grid-template-columns:360px 540px 540px;gap:10px;margin-bottom:12px;align-items:start}.f>*{width:520px!important}</style></head><body>${rows.join('')}</body></html>`;
writeFileSync('preview-diagram.html', html);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1520, height: 800 } });
await page.goto('file://' + process.cwd().replace(/\\/g, '/') + '/preview-diagram.html');
await page.waitForTimeout(800);
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(rows.length, 'soal →', out);
