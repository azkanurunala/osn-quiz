// node image-prompts/_src/svg2png.mjs <in.svg> <out.png>   (1024x1024, Chromium via playwright)
import fs from 'node:fs';
import { chromium } from 'playwright';
const [inp, out] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1024, height: 1024 } });
await p.setContent(`<html><body style="margin:0">${fs.readFileSync(inp, 'utf8')}</body></html>`);
fs.writeFileSync(out, await p.screenshot({ clip: { x: 0, y: 0, width: 1024, height: 1024 } }));
await b.close(); console.log('wrote', out);
