// Render every diagram component in both phases (still + motion) with react-dom/server, and fail on
// empty output or React attribute warnings (e.g. NaN coordinates). Catches render bugs that lint and
// `vite build` miss, without needing a browser or the dev server.
//
//   node scripts/audit-render.mjs
//
// Note: this checks structure only, not scientific accuracy of the drawing.

import { createServer } from 'vite';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';

const svgChild = /<(path|circle|rect|line|g|text|polygon|ellipse|polyline)\b/i;

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
let bad = 0;
let n = 0;
let current = '';
const origErr = console.error;
console.error = (...args) => {
  const msg = args.map(String).join(' ');
  if (/NaN/.test(msg)) origErr(`  >> WARN @ ${current}: ${msg.slice(0, 160)}`);
  else origErr(...args);
};
try {
  const { DIAGRAM_BY_ID } = await server.ssrLoadModule('/src/features/diagrams/registry.js');
  for (const [id, d] of Object.entries(DIAGRAM_BY_ID)) {
    current = id;
    for (const motion of [false, true]) {
      n += 1;
      try {
        const html = renderToStaticMarkup(React.createElement(d.component, { motion }));
        if (!svgChild.test(html)) { console.log(`FAIL empty  ${id} motion=${motion}`); bad += 1; }
      } catch (e) {
        console.log(`THROW ${id} motion=${motion}: ${e.message}`);
        bad += 1;
      }
    }
  }
} finally {
  console.error = origErr;
  await server.close();
}
console.log(bad ? `\n${bad} masalah dari ${n} render` : `OK: ${n} render (${n / 2} diagram x 2 fase) lolos`);
process.exitCode = bad ? 1 : 0;
