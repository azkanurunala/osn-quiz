// Exact vector penampang pictures for biology slots where Gemini kept failing (opaque instead of
// see-through, garbled text, wrong cell parts). Same conventions as vektor-mtk.mjs / vektor-ipa.mjs
// (separate file so sessions never edit one file). Run from osn-app/:
//
//   node image-prompts/_src/vektor-bio.mjs <outDir>             preview only, one PNG per slot
//   node image-prompts/_src/vektor-bio.mjs --install --empty    write into EMPTY image-results/ slots
//   … --only=sel-darah-set,vili-usus                            limit to some objects
//
// --install moves a non-approved slot image to <slot>.lama.png first (exact match, never the .lama copy).
// Review verdicts are written separately, after looking at the preview.
import { mkdirSync, readdirSync, renameSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import { chromium } from 'playwright';

const S = 1024;
const INK = '#1f2a44';
const DASH = '#46506e';
const svg = (body, defs = '') => `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}"><defs>${defs}</defs><rect width="${S}" height="${S}" fill="#fff"/>${body}</svg>`;
const f = (n) => Math.round(n * 10) / 10;
const rad = (d) => (d * Math.PI) / 180;
const C = (cx, cy, r, fill, extra = '') => `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="${fill}" ${extra}/>`;
const E = (cx, cy, rx, ry, fill, extra = '') => `<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(rx)}" ry="${f(ry)}" fill="${fill}" ${extra}/>`;
const L = (x1, y1, x2, y2, stroke = INK, w = 5, extra = '') => `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" ${extra}/>`;
const P = (d, fill = 'none', stroke = INK, w = 5, extra = '') => `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round" ${extra}/>`;
const R = (x, y, w, h, fill, stroke = 'none', sw = 0, extra = '') => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
const dash = (extra = '') => `stroke-dasharray="11 8" ${extra}`;
const rng = (seed) => () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
// leader line from a point ON a part to an empty circle outside the object (anchor for labels added later)
const call = (px, py, cx, cy) => `${L(px, py, cx, cy, INK, 3)}${C(px, py, 5.5, INK)}${C(cx, cy, 19, '#fff', `stroke="${INK}" stroke-width="3.5"`)}`;
const wedge = (cx, cy, r1, r2, a0, a1, fill, stroke = 'none', sw = 0) => {
  const p = (r, a) => `${f(cx + r * Math.cos(rad(a)))},${f(cy + r * Math.sin(rad(a)))}`;
  return `<path d="M${p(r2, a0)} A${r2},${r2} 0 0 1 ${p(r2, a1)} L${p(r1, a1)} A${r1},${r1} 0 0 0 ${p(r1, a0)} Z" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round"/>`;
};

// ---------- red cell, white cell (neutrophil), platelets: see-through (~25 % opacity) ----------
function bloodCells() {
  const defs = `<radialGradient id="rbc"><stop offset="0" stop-color="#ef5350" stop-opacity="0.10"/><stop offset="0.5" stop-color="#e53935" stop-opacity="0.18"/><stop offset="0.66" stop-color="#c62828" stop-opacity="0.42"/><stop offset="1" stop-color="#b71c1c" stop-opacity="0.5"/></radialGradient>`;
  let o = '';
  // red blood cell: biconcave disc, thinner in the centre, no nucleus
  o += C(190, 520, 120, 'url(#rbc)', `stroke="#b71c1c" stroke-width="7"`);
  o += C(190, 520, 62, 'none', `stroke="#b71c1c" stroke-width="4" ${dash()}`);
  // white blood cell: pale cytoplasm with granules and a multi-lobed nucleus
  const wx = 565; const wy = 505; const wr = 185;
  o += C(wx, wy, wr, 'rgba(190,175,225,0.25)', `stroke="#6b5a8a" stroke-width="7"`);
  const r = rng(11);
  const lobes = [[480, 485, 44], [560, 425, 46], [650, 470, 42], [640, 570, 38]];
  for (let i = 0; i < 70; i++) {
    const a = r() * Math.PI * 2; const d = Math.sqrt(r()) * (wr - 22);
    const x = wx + d * Math.cos(a); const y = wy + d * Math.sin(a);
    if (lobes.some(([lx, ly, lr]) => Math.hypot(x - lx, y - ly) < lr + 12)) continue;
    o += C(x, y, 4.5 + r() * 2.5, '#b9a1e6', `stroke="#8b6fc0" stroke-width="1.5"`);
  }
  for (let i = 0; i < lobes.length - 1; i++) o += L(lobes[i][0], lobes[i][1], lobes[i + 1][0], lobes[i + 1][1], '#5b2d91', 13);
  for (const [lx, ly, lr] of lobes) o += C(lx, ly, lr, '#7b3fb5', `stroke="#3f1f73" stroke-width="5"`);
  // platelets: small cell fragments, no nucleus (about a third of a red cell across)
  const plate = [[840, 420, 20], [915, 470, -10], [860, 545, 35], [945, 580, 0], [820, 635, -25], [905, 665, 15]];
  for (const [px, py, rot] of plate) {
    o += E(px, py, 40, 24, 'rgba(250,205,190,0.55)', `stroke="#c9908a" stroke-width="4" transform="rotate(${rot} ${px} ${py})"`);
    for (const [dx, dy] of [[-12, -4], [4, 6], [14, -6]]) o += C(px + dx, py + dy, 3, '#b87a82');
  }
  // callouts (empty circles, labels are added later by the app)
  o += call(128, 470, 70, 300) + call(190, 520, 190, 770);
  o += call(700, 375, 880, 230) + call(634, 495, 800, 800) + call(470, 590, 400, 800);
  o += call(915, 470, 975, 330);
  return svg(o, defs);
}

// ---------- artery, vein, capillary: cross-section disc + lengthwise cutaway, one row each ----------
function bloodVessels() {
  let o = '';
  const rbc = (x, y, rx, ry, rot, col, edge) => E(x, y, rx, ry, col, `stroke="${edge}" stroke-width="3" transform="rotate(${rot} ${x} ${y})"`) + E(x, y, rx * 0.45, ry * 0.45, 'rgba(255,255,255,0.35)', `transform="rotate(${rot} ${x} ${y})"`);
  const X0 = 340; const X1 = 880;
  const band = (y, h, fill) => R(X0, y, X1 - X0, h, fill, DASH, 3, dash());
  // --- artery (top row) ---
  const ay = 215;
  o += C(165, ay, 108, '#ead9b4', `stroke="${INK}" stroke-width="5"`);            // outer layer
  o += C(165, ay, 90, '#e57f84', `stroke="${DASH}" stroke-width="3" ${dash()}`);   // thick muscle + elastic layer
  o += C(165, ay, 40, '#fff0b3', `stroke="${DASH}" stroke-width="3" ${dash()}`);   // endothelium
  o += C(165, ay, 33, '#d32f2f', `stroke="#8e1b19" stroke-width="2"`);             // lumen with blood
  for (const [dx, dy] of [[-12, -10], [12, 4], [-4, 14]]) o += E(165 + dx, ay + dy, 9, 7, '#ef9a9a', 'stroke="#8e1b19" stroke-width="1.5"');
  let y = ay - 105;
  o += band(y, 17, '#ead9b4'); y += 17;
  o += band(y, 44, '#e57f84'); y += 44;
  o += band(y, 8, '#fff0b3'); y += 8;
  o += R(X0, y, X1 - X0, 72, '#d32f2f', DASH, 3, dash()); const aLum = y; y += 72;
  o += band(y, 8, '#fff0b3'); y += 8;
  o += band(y, 44, '#e57f84'); y += 44;
  o += band(y, 17, '#ead9b4');
  o += P(`M${X0},${ay - 105} H${X1} M${X0},${ay + 105} H${X1}`, 'none', INK, 5);
  for (let i = 0; i < 5; i++) o += rbc(X0 + 70 + i * 105, aLum + 36 + (i % 2 ? 8 : -8), 30, 17, i % 2 ? 12 : -10, '#ef9a9a', '#8e1b19');
  // --- vein (middle row) ---
  const vy = 530;
  o += C(165, vy, 104, '#ead9b4', `stroke="${INK}" stroke-width="5"`);
  o += E(165, vy, 88, 62, '#9fb0bf', `stroke="${DASH}" stroke-width="3" ${dash()}`);   // thin muscle layer
  o += E(165, vy, 80, 55, '#fff0b3', `stroke="${DASH}" stroke-width="3" ${dash()}`);   // endothelium
  o += E(165, vy, 74, 49, '#5a78d6', `stroke="#2b3f99" stroke-width="2"`);             // wide, flattened lumen
  for (const [dx, dy] of [[-30, -6], [20, 10], [-2, 18], [38, -14]]) o += E(165 + dx, vy + dy, 11, 8, '#9fb3f2', 'stroke="#2b3f99" stroke-width="1.5"');
  y = vy - 100;
  o += band(y, 22, '#ead9b4'); y += 22;
  o += band(y, 14, '#9fb0bf'); y += 14;
  o += band(y, 6, '#fff0b3'); y += 6;
  o += R(X0, y, X1 - X0, 116, '#5a78d6', DASH, 3, dash()); const vLum = y; y += 116;
  o += band(y, 6, '#fff0b3'); y += 6;
  o += band(y, 14, '#9fb0bf'); y += 14;
  o += band(y, 22, '#ead9b4');
  o += P(`M${X0},${vy - 100} H${X1} M${X0},${vy + 100} H${X1}`, 'none', INK, 5);
  for (let i = 0; i < 4; i++) o += rbc(X0 + 50 + i * 60, vLum + 30 + (i % 2) * 40, 26, 16, i * 20 - 20, '#9fb3f2', '#2b3f99');
  // one-way valve: two white flaps leaning along the flow (to the right)
  const vx = 640;
  o += P(`M${vx},${vLum} C${vx + 20},${vLum + 40} ${vx + 80},${vLum + 50} ${vx + 150},${vLum + 52} C${vx + 100},${vLum + 30} ${vx + 60},${vLum + 15} ${vx},${vLum} Z`, '#ffffff', INK, 4);
  o += P(`M${vx},${vLum + 116} C${vx + 20},${vLum + 76} ${vx + 80},${vLum + 66} ${vx + 150},${vLum + 64} C${vx + 100},${vLum + 86} ${vx + 60},${vLum + 101} ${vx},${vLum + 116} Z`, '#ffffff', INK, 4);
  for (let i = 0; i < 2; i++) o += rbc(X0 + 440 + i * 85, vLum + 58 + (i ? 4 : -6), 26, 16, 8, '#9fb3f2', '#2b3f99');
  // --- capillary (bottom row): a wall one flat cell thick, red cells in single file ---
  const cy = 835;
  o += C(165, cy, 52, '#f8c9d6', `stroke="${INK}" stroke-width="5"`);
  o += C(165, cy, 41, '#ffe6ec', `stroke="${DASH}" stroke-width="3" ${dash()}`);
  o += E(165, cy, 31, 31, '#ef5350', 'stroke="#8e1b19" stroke-width="2"');
  o += C(165, cy, 13, 'rgba(255,255,255,0.35)');
  const cy0 = cy - 38;
  o += R(X0, cy0, X1 - X0, 8, '#f8c9d6', DASH, 3, dash());
  o += R(X0, cy0 + 8, X1 - X0, 60, '#ffe6ec', DASH, 3, dash());
  o += R(X0, cy0 + 68, X1 - X0, 8, '#f8c9d6', DASH, 3, dash());
  o += P(`M${X0},${cy0} H${X1} M${X0},${cy0 + 76} H${X1}`, 'none', INK, 5);
  for (let i = 0; i < 6; i++) o += rbc(X0 + 55 + i * 92, cy0 + 38, 31, 24, 0, '#ef5350', '#8e1b19');
  // callouts
  o += call(600, ay - 75, 960, 95) + call(700, ay - 40, 960, 215) + call(500, aLum + 36, 960, 335);
  o += call(560, vy - 80, 960, 440) + call(vx + 70, vLum + 20, 960, 560) + call(480, vLum + 58, 960, 680);
  o += call(700, cy0 + 4, 960, 800) + call(X0 + 240, cy0 + 38, 960, 920);
  return svg(o);
}

// ---------- intestinal villi: see-through block of the wall ----------
function villi() {
  let o = '';
  const x0 = 130; const x1 = 790; const yTop = 560; const dx = 100; const dy = -82;
  // right and top faces (see-through)
  o += P(`M${x1},${yTop} L${x1 + dx},${yTop + dy} V${yTop + dy + 330} L${x1},${yTop + 330} Z`, 'rgba(255,205,210,0.22)', INK, 5);
  o += P(`M${x0},${yTop} L${x0 + dx},${yTop + dy} H${x1 + dx} L${x1},${yTop} Z`, 'rgba(255,224,235,0.45)', INK, 5);
  // layers of the front face: lamina propria (with crypts), submucosa, two muscle layers
  o += R(x0, yTop, x1 - x0, 110, 'rgba(255,224,235,0.55)', DASH, 3.5, dash());
  o += R(x0, yTop + 110, x1 - x0, 70, 'rgba(255,245,170,0.6)', DASH, 3.5, dash());
  o += R(x0, yTop + 180, x1 - x0, 75, 'rgba(229,57,53,0.45)', DASH, 3.5, dash());
  o += R(x0, yTop + 255, x1 - x0, 75, 'rgba(198,40,40,0.55)', DASH, 3.5, dash());
  o += P(`M${x0},${yTop} V${yTop + 330} H${x1} V${yTop}`, 'none', INK, 5);
  // crypts (intestinal glands) between villi
  const vx = [215, 335, 455, 575, 695];
  for (let i = 0; i < vx.length - 1; i++) {
    const cx = (vx[i] + vx[i + 1]) / 2;
    o += P(`M${cx - 20},${yTop} V${yTop + 70} Q${cx},${yTop + 100} ${cx + 20},${yTop + 70} V${yTop}`, '#cdbcf0', '#6f5bb0', 4);
  }
  // villi: finger-like, epithelium (pink with a lighter brush-border edge), capillary loop, central lacteal
  const villus = (cx, base, h, w, a) => {
    const top = base - h;
    let g = '';
    g += P(`M${cx - w / 2},${base} V${top + w / 2} A${w / 2},${w / 2} 0 0 1 ${cx + w / 2},${top + w / 2} V${base}`, `rgba(244,143,177,${0.38 * a})`, `rgba(250,190,210,${a})`, 12);
    g += P(`M${cx - w / 2},${base} V${top + w / 2} A${w / 2},${w / 2} 0 0 1 ${cx + w / 2},${base - h + w / 2} V${base}`, 'none', `rgba(214,72,120,${a})`, 4);
    // lacteal: closed tube in the middle
    g += P(`M${cx},${base} V${top + 30}`, 'none', `rgba(255,243,176,${a})`, 15);
    g += P(`M${cx},${base} V${top + 30}`, 'none', `rgba(190,170,70,${a * 0.9})`, 3, `stroke-dasharray="6 5"`);
    // capillary loop: artery side up (red), vein side down (blue), with a cross link
    g += P(`M${cx - w * 0.28},${base} V${top + 40} Q${cx - w * 0.28},${top + 14} ${cx},${top + 14} Q${cx + w * 0.28},${top + 14} ${cx + w * 0.28},${top + 40} V${base}`, 'none', `rgba(30,91,214,${a})`, 5);
    g += P(`M${cx - w * 0.28},${base} V${top + 40}`, 'none', `rgba(211,47,47,${a})`, 5);
    g += P(`M${cx - w * 0.28},${top + h * 0.45} Q${cx},${top + h * 0.38} ${cx + w * 0.28},${top + h * 0.45}`, 'none', `rgba(150,60,130,${a})`, 3);
    g += P(`M${cx - w * 0.28},${top + h * 0.7} Q${cx},${top + h * 0.63} ${cx + w * 0.28},${top + h * 0.7}`, 'none', `rgba(150,60,130,${a})`, 3);
    return g;
  };
  for (const cx of [265, 385, 505, 625, 745]) o += villus(cx + dx * 0.5, yTop + dy * 0.5, 190, 62, 0.45);   // back row, fainter
  for (const cx of vx) o += villus(cx, yTop, 235, 70, 1);
  // callouts (circles outside the block)
  o += call(vx[0] - 33, yTop - 150, 90, 250);           // epithelium / brush border
  o += call(vx[1] - 20, yTop - 200, 330, 105);          // capillary loop
  o += call(vx[2], yTop - 80, 560, 105);                // lacteal
  o += call((vx[2] + vx[3]) / 2, yTop + 50, 70, 640);   // crypt
  o += call(500, yTop + 145, 955, 665);                 // submucosa
  o += call(560, yTop + 295, 955, 800);                 // muscle layers
  return svg(o);
}

// ---------- corn kernel and soaked bean: see-through, parts in place ----------
function seeds() {
  let o = '';
  // corn kernel: crown on top, pointed tip below; fruit wall fused with the seed coat
  const kernel = 'M270,285 C385,285 440,350 436,445 C430,545 365,640 308,748 L270,785 L232,748 C175,640 110,545 104,445 C100,350 155,285 270,285 Z';
  o += P(kernel, 'rgba(224,170,40,0.28)', '#b8860b', 9);
  o += P('M270,312 C368,312 414,368 410,448 C405,535 348,625 300,725 L270,752 L240,725 C192,625 135,535 130,448 C126,368 172,312 270,312 Z', 'rgba(255,243,176,0.7)', DASH, 4, dash());   // endosperm
  // embryo (scutellum + axis) at the lower, pointed side, drawn on top of the endosperm
  o += P('M205,540 C235,505 305,505 322,560 L318,690 C312,730 268,745 250,742 C222,705 195,610 205,540 Z', 'rgba(170,222,140,0.85)', DASH, 4, dash());   // scutellum = cotyledon
  o += P('M262,655 V565 Q262,545 275,545 Q288,545 288,565 V655 Z', '#43a047', '#1b5e20', 4);                      // plumule inside coleoptile
  o += P('M262,655 V565 Q262,545 275,545 Q288,545 288,565 V655', 'none', '#a5d6a7', 8, 'opacity="0.55"');
  o += P('M258,655 H292 L282,730 Q275,742 268,730 Z', '#ffffff', '#5d4037', 4);                                     // radicle in coleorhiza
  o += L(275, 662, 275, 728, '#d7ccc8', 8);
  // soaked kidney bean: seed coat (maroon), two cream cotyledons, embryo axis near the hilum
  const bean = 'M640,325 C760,285 885,345 892,500 C900,645 800,755 700,745 C630,735 598,665 640,612 C670,572 640,542 620,500 C598,450 598,372 640,325 Z';
  o += P(bean, 'rgba(123,31,42,0.25)', '#7b1f2a', 10);
  const cot = 'M650,350 C760,318 862,368 868,500 C875,625 790,722 705,718 C655,712 632,668 665,628 C700,585 668,545 648,500 C632,462 632,392 650,350 Z';
  o += `<g transform="translate(-9,-7)">${P(cot, 'rgba(255,236,196,0.8)', DASH, 4, dash())}</g>`;   // far cotyledon
  o += `<g transform="translate(9,7)">${P(cot, 'rgba(255,250,232,0.85)', DASH, 4, dash())}</g>`;    // near cotyledon
  o += P('M668,455 C652,500 652,545 662,600', 'none', '#cfe8c9', 16);                                                // hypocotyl
  o += P('M668,455 C652,500 652,545 662,600', 'none', '#7cb342', 4);
  o += P('M662,598 L652,640 L672,636 Z', '#ffffff', '#5d4037', 3.5);                                                // radicle (towards the hilum)
  o += P('M668,455 C652,430 640,418 628,420 C640,440 650,452 668,455 Z', '#43a047', '#1b5e20', 3.5);              // plumule: tiny leaves
  o += P('M668,455 C675,425 688,412 700,412 C694,432 684,448 668,455 Z', '#66bb6a', '#1b5e20', 3.5);
  o += E(627, 572, 11, 22, '#4e1b22', 'stroke="#2d0e12" stroke-width="2" transform="rotate(-20 627 572)"'); // hilum scar on the coat edge
  // callouts: corn on the left half, bean on the right half
  o += call(110, 430, 55, 300) + call(380, 380, 440, 150) + call(240, 600, 60, 700) + call(275, 575, 250, 880) + call(275, 735, 440, 910);
  o += call(892, 480, 965, 330) + call(780, 450, 780, 150) + call(790, 610, 965, 760) + call(656, 440, 560, 200) + call(662, 640, 700, 880);
  return svg(o);
}

// ---------- hibiscus: see-through flower, lengthwise ----------
function hibiscus() {
  let o = '';
  const cx = 512;
  // stalk, receptacle, ovary with ovules, style rising inside the staminal column
  o += P(`M${cx - 15},990 V810 H${cx + 15} V990`, '#43a047', '#1b5e20', 5);
  o += P(`M${cx - 38},810 C${cx - 30},792 ${cx + 30},792 ${cx + 38},810 Z`, '#c5e1a5', '#558b2f', 4, dash());          // receptacle
  // epicalyx: narrow bracts below the calyx
  o += P(`M${cx - 20},805 C${cx - 55},790 ${cx - 85},760 ${cx - 90},725 C${cx - 55},745 ${cx - 30},775 ${cx - 12},800 Z`, '#2e7d32', '#1b5e20', 4);
  o += P(`M${cx + 20},805 C${cx + 55},790 ${cx + 85},760 ${cx + 90},725 C${cx + 55},745 ${cx + 30},775 ${cx + 12},800 Z`, '#2e7d32', '#1b5e20', 4);
  // calyx: green cup with five pointed lobes
  o += P(`M${cx - 52},800 C${cx - 66},760 ${cx - 70},715 ${cx - 62},670 L${cx - 40},715 L${cx - 22},660 L${cx},712 L${cx + 22},660 L${cx + 40},715 L${cx + 62},670 C${cx + 70},715 ${cx + 66},760 ${cx + 52},800 Z`, 'rgba(102,187,106,0.55)', '#2e7d32', 5);
  o += P(`M${cx - 30},778 C${cx - 44},735 ${cx - 14},705 ${cx},705 C${cx + 14},705 ${cx + 44},735 ${cx + 30},778 Z`, '#aed581', '#558b2f', 4, dash());   // superior ovary
  for (const [dx, dy] of [[-14, 735], [14, 735], [0, 752], [-10, 765], [10, 765]]) o += C(cx + dx, dy, 6.5, '#ffffff', 'stroke="#689f38" stroke-width="1.5"');
  // petals: five red, see-through, flaring into a trumpet (left, right, front)
  const pet = 'rgba(229,57,53,0.30)';
  o += P(`M${cx - 8},705 C${cx - 40},640 ${cx - 190},560 ${cx - 270},430 C${cx - 312},350 ${cx - 270},285 ${cx - 190},292 C${cx - 100},300 ${cx - 50},400 ${cx - 22},480 C${cx - 8},530 ${cx - 6},610 ${cx - 8},705 Z`, pet, '#c62828', 5);
  o += P(`M${cx + 8},705 C${cx + 40},640 ${cx + 190},560 ${cx + 270},430 C${cx + 312},350 ${cx + 270},285 ${cx + 190},292 C${cx + 100},300 ${cx + 50},400 ${cx + 22},480 C${cx + 8},530 ${cx + 6},610 ${cx + 8},705 Z`, pet, '#c62828', 5);
  o += P(`M${cx - 42},700 C${cx - 100},610 ${cx - 150},470 ${cx - 140},375 C${cx - 128},300 ${cx + 128},300 ${cx + 140},375 C${cx + 150},470 ${cx + 100},610 ${cx + 42},700 C${cx + 20},718 ${cx - 20},718 ${cx - 42},700 Z`, 'rgba(229,57,53,0.18)', '#c62828', 5, dash());
  // staminal column (pink-red tube), style inside it, anthers on short free filaments, five stigma pads on top
  o += P(`M${cx - 17},712 V345 Q${cx - 17},322 ${cx},322 Q${cx + 17},322 ${cx + 17},345 V712 Z`, 'rgba(236,88,98,0.55)', '#b71c1c', 5, dash());
  o += L(cx, 705, cx, 330, '#f8bbd0', 7);
  o += L(cx, 705, cx, 330, '#e91e63', 2, 'stroke-dasharray="6 6"');
  const r = rng(5);
  for (let i = 0; i < 12; i++) {
    const side = i % 2 ? 1 : -1; const y = 360 + Math.floor(i / 2) * 26 + (i % 2) * 9;
    const len = 20 + r() * 22;
    o += L(cx + side * 17, y, cx + side * (17 + len), y - 6, '#ffe082', 4);
    o += E(cx + side * (24 + len), y - 8, 13, 8, '#ffd54f', `stroke="#c79100" stroke-width="2.5" transform="rotate(${side * -18} ${cx + side * (24 + len)} ${y - 8})"`);
    o += C(cx + side * (24 + len) + side * 3, y - 10, 2.4, '#fff59d');
  }
  for (const [dx, dy] of [[-30, 322], [-15, 298], [0, 290], [15, 298], [30, 322]]) o += C(cx + dx, dy, 12, '#8e0000', 'stroke="#4a0000" stroke-width="3"');
  // callouts
  o += call(cx - 76, 750, 110, 850) + call(cx + 60, 760, 920, 860) + call(cx - 14, 745, 110, 700) + call(cx, 785, 920, 760);
  o += call(cx - 215, 400, 90, 330) + call(cx + 225, 380, 940, 330) + call(cx + 16, 520, 920, 560);
  o += call(cx + 50, 395, 930, 440) + call(cx, 520, 100, 540) + call(cx + 10, 292, 760, 130) + call(cx - 8, 440, 270, 130);
  return svg(o);
}

// ---------- cross-section slices shared by the two whole-plant drawings ----------
function monocotSlice(cx, cy, r) {
  let o = C(cx, cy, r, '#dcedc8', `stroke="#1b5e20" stroke-width="12"`);
  o += C(cx, cy, r - 14, 'none', `stroke="${DASH}" stroke-width="3" ${dash()}`);   // epidermis boundary
  const g = rng(21);
  const pts = [];
  let tries = 0;
  while (pts.length < 42 && tries++ < 4000) {
    const d = Math.sqrt(g()) * (r - 30);
    if (d > (r - 30) * 0.97) continue;
    // monocot stems carry more bundles near the rim, fewer in the middle
    if (d < r * 0.35 && g() < 0.6) continue;
    const a = g() * Math.PI * 2; const x = cx + d * Math.cos(a); const y = cy + d * Math.sin(a);
    if (pts.some(([px, py]) => Math.hypot(px - x, py - y) < 24)) continue;
    pts.push([x, y]);
  }
  for (const [x, y] of pts) {
    const ang = Math.atan2(y - cy, x - cx);
    o += C(x, y, 11, '#ffb300', 'stroke="#a66f00" stroke-width="2"');                         // phloem (outer)
    o += C(x - 4 * Math.cos(ang), y - 4 * Math.sin(ang), 5.5, '#1e88e5', 'stroke="#0d47a1" stroke-width="1.5"');   // xylem (towards the middle)
  }
  return o;
}
function dicotSlice(cx, cy, r) {
  let o = C(cx, cy, r, '#c8e6c9', `stroke="#1b5e20" stroke-width="12"`);       // epidermis + cortex
  o += C(cx, cy, r - 14, 'none', `stroke="${DASH}" stroke-width="3" ${dash()}`);
  o += C(cx, cy, r * 0.5, '#fff8e1', `stroke="${DASH}" stroke-width="3" ${dash()}`);   // pith
  const n = 10; const step = 360 / n;
  for (let i = 0; i < n; i++) {
    const a0 = i * step + 8; const a1 = (i + 1) * step - 8;
    o += wedge(cx, cy, r * 0.5 + 2, r * 0.66, a0, a1, '#42a5f5', '#1565c0', 2);   // xylem inside
    o += wedge(cx, cy, r * 0.66, r * 0.7, a0, a1, '#ffee58', '#c6a700', 2);       // cambium
    o += wedge(cx, cy, r * 0.7, r * 0.82, a0, a1, '#ffb300', '#a66f00', 2);       // phloem outside
  }
  return o;
}

// ---------- young corn plant, uprooted: see-through stem with scattered bundles + cross-section slice ----------
function cornPlant() {
  let o = '';
  const sx = 330;
  const g = rng(8);
  // fibrous roots
  for (let i = 0; i < 17; i++) {
    const a = rad(-170 + i * (160 / 16)); const len = 110 + g() * 110;
    const ex = sx + Math.cos(a + Math.PI) * 0 + (i - 8) * 24 + (g() - 0.5) * 30; const ey = 800 + 60 + len + g() * 25;
    o += P(`M${sx + (i - 8) * 3},805 C${sx + (i - 8) * 8},${860 + g() * 20} ${ex - (i - 8) * 4},${ey - 50} ${ex},${Math.min(ey, 985)}`, 'none', '#8d6e63', 4.5);
    if (i % 3 === 0) o += P(`M${ex - (i - 8) * 2},${Math.min(ey, 985) - 60} q${(i - 8) * 3 - 12},18 ${(i - 8) * 2 - 16},38`, 'none', '#a1887f', 3);
  }
  // leaves (parallel veins), drawn behind the stem
  const leaf = (x, y, dirx, len, droop, wid) => {
    const x2 = x + dirx * len; const y2 = y - len * 0.35 + droop;
    let s = P(`M${x},${y} C${x + dirx * len * 0.35},${y - wid * 3} ${x + dirx * len * 0.75},${y - len * 0.55} ${x2},${y2} C${x + dirx * len * 0.7},${y - len * 0.25 + wid * 2} ${x + dirx * len * 0.3},${y + wid * 2} ${x},${y + 12} Z`, 'rgba(102,187,106,0.55)', '#2e7d32', 4);
    s += P(`M${x},${y + 4} C${x + dirx * len * 0.35},${y - wid} ${x + dirx * len * 0.7},${y - len * 0.4} ${x2 - dirx * 8},${y2 + 4}`, 'none', '#2e7d32', 2.5);
    s += P(`M${x},${y - 2} C${x + dirx * len * 0.35},${y - wid * 2} ${x + dirx * len * 0.72},${y - len * 0.48} ${x2 - dirx * 12},${y2}`, 'none', '#4caf50', 2);
    return s;
  };
  o += leaf(sx + 26, 700, 1, 300, 40, 26) + leaf(sx - 26, 560, -1, 260, 60, 24) + leaf(sx + 26, 420, 1, 230, 30, 22) + leaf(sx - 26, 300, -1, 170, 30, 20);
  // stem: see-through tube with nodes, bundles scattered inside (lengthwise they look like short strands)
  o += P(`M${sx - 30},800 V250 Q${sx - 30},225 ${sx},225 Q${sx + 30},225 ${sx + 30},250 V800 Z`, 'rgba(197,225,165,0.45)', '#2e7d32', 6);
  for (const y of [700, 560, 420, 300]) o += P(`M${sx - 30},${y} Q${sx},${y + 12} ${sx + 30},${y}`, 'none', '#2e7d32', 3.5);
  for (let i = 0; i < 22; i++) {
    const x = sx - 22 + g() * 44; const y0 = 260 + g() * 480; const h = 60 + g() * 90;
    o += L(x, y0, x, Math.min(y0 + h, 790), '#f9a825', 6);
    o += L(x - 1.5, y0 + 4, x - 1.5, Math.min(y0 + h - 4, 786), '#1e88e5', 3.5);
  }
  // slice marker + cross-section disc
  o += E(sx, 470, 30, 8, 'none', `stroke="${INK}" stroke-width="3" ${dash()}`);
  o += L(sx + 30, 470, 640, 400, INK, 2.5, 'stroke-dasharray="7 7"');
  const cx = 800; const cy = 400; const r = 175;
  o += monocotSlice(cx, cy, r);
  // callouts
  o += call(sx - 40, 880, 70, 900) + call(sx, 760, 70, 760) + call(sx + 14, 620, 70, 560);
  o += call(sx + 160, 430, 650, 150) + call(cx + r - 6, cy - 60, 960, 150);
  const bd = [cx + 40, cy - 48];
  o += call(bd[0], bd[1], 900, 760) + call(cx - 90, cy + 70, 700, 760);
  return svg(o);
}

// ---------- young peanut plant, uprooted: taproot, nodules, pods under the soil line ----------
function peanutPlant() {
  let o = '';
  const sx = 330;
  // taproot with lateral roots and small round root nodules
  o += P(`M${sx - 12},700 C${sx - 12},800 ${sx - 7},880 ${sx},975 C${sx + 7},880 ${sx + 12},800 ${sx + 12},700 Z`, '#d7b98e', '#8d6e63', 4);
  const lat = [[790, -1, 150, 45], [820, 1, 165, 40], [865, -1, 130, 50], [895, 1, 120, 48], [935, -1, 80, 40], [940, 1, 75, 38]];
  for (const [y, s, len, drop] of lat) o += P(`M${sx},${y} C${sx + s * len * 0.5},${y + 4} ${sx + s * len * 0.8},${y + drop * 0.4} ${sx + s * len},${y + drop}`, 'none', '#a1887f', 5);
  const bez = (p0, p1, p2, p3, t) => { const u = 1 - t; return [u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0], u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]]; };
  const nodules = [];
  for (const [y, sg, len, drop] of lat) for (const t of [0.5, 0.88]) nodules.push(bez([sx, y], [sx + sg * len * 0.5, y + 4], [sx + sg * len * 0.8, y + drop * 0.4], [sx + sg * len, y + drop], t));
  nodules.push([sx - 13, 760], [sx + 13, 840]);
  for (const [x, y] of nodules) {
    o += C(x, y, 11, '#f8bbd0', 'stroke="#ad1457" stroke-width="3"');
    o += C(x - 3, y - 3, 3.5, '#fce4ec');
  }
  // two pods (peanuts) on pegs that bend down into the soil: pod wall see-through, two seeds inside
  const pod = (x, y, rot) => {
    let s = `<g transform="rotate(${rot} ${x} ${y})">`;
    s += P(`M${x - 62},${y} C${x - 62},${y - 26} ${x - 22},${y - 30} ${x - 10},${y - 18} C${x},${y - 12} ${x + 10},${y - 12} ${x + 20},${y - 18} C${x + 40},${y - 32} ${x + 62},${y - 24} ${x + 62},${y} C${x + 62},${y + 26} ${x + 40},${y + 32} ${x + 20},${y + 18} C${x + 10},${y + 12} ${x},${y + 12} ${x - 10},${y + 18} C${x - 22},${y + 30} ${x - 62},${y + 26} ${x - 62},${y} Z`, 'rgba(215,185,142,0.55)', '#8d6e63', 5);
    s += E(x - 30, y, 24, 18, '#f3b0b0', 'stroke="#c07070" stroke-width="3"') + E(x + 32, y, 24, 18, '#f3b0b0', 'stroke="#c07070" stroke-width="3"');
    return s + '</g>';
  };
  o += P(`M${sx - 6},640 C${sx - 60},650 ${sx - 120},690 ${sx - 135},745`, 'none', '#8bc34a', 6) + pod(sx - 150, 775, -70);
  o += P(`M${sx + 6},640 C${sx + 60},655 ${sx + 120},700 ${sx + 138},752`, 'none', '#8bc34a', 6) + pod(sx + 152, 782, 72);
  // stem: see-through, bundles near both edges (a ring seen from the side), pith between them
  o += P(`M${sx - 20},700 V250 Q${sx - 20},228 ${sx},228 Q${sx + 20},228 ${sx + 20},250 V700 Z`, 'rgba(197,225,165,0.5)', '#2e7d32', 5);
  o += R(sx - 8, 235, 16, 460, 'rgba(255,248,225,0.8)', 'none', 0);
  for (const sgn of [-1, 1]) {
    o += L(sx + sgn * 14, 250, sx + sgn * 14, 690, '#ffb300', 5);
    o += L(sx + sgn * 10, 250, sx + sgn * 10, 690, '#1e88e5', 4);
  }
  for (const y of [640, 500, 380]) o += P(`M${sx - 20},${y} Q${sx},${y + 9} ${sx + 20},${y}`, 'none', '#2e7d32', 3);
  // compound leaves: two pairs of leaflets on each leaf
  const leaflet = (x, y, ang, len) => `<g transform="rotate(${ang} ${x} ${y})">` + P(`M${x},${y} C${x + len * 0.2},${y - len * 0.28} ${x + len * 0.8},${y - len * 0.28} ${x + len},${y} C${x + len * 0.8},${y + len * 0.28} ${x + len * 0.2},${y + len * 0.28} ${x},${y} Z`, 'rgba(102,187,106,0.6)', '#2e7d32', 4) + L(x, y, x + len * 0.95, y, '#2e7d32', 2.5) + '</g>';
  const leafset = (x, y, side, lift) => {
    const bx = x + side * 70; const by = y - lift;
    let s = P(`M${x},${y} Q${x + side * 35},${y - lift * 0.4} ${bx},${by}`, 'none', '#2e7d32', 5);
    s += leaflet(bx, by, side > 0 ? -35 : 215, 105) + leaflet(bx, by, side > 0 ? 8 : 172, 105) + leaflet(bx, by, side > 0 ? -60 : 240, 85) + leaflet(bx, by, side > 0 ? 40 : 140, 85);
    return s;
  };
  o += leafset(sx + 18, 500, 1, 60) + leafset(sx - 18, 400, -1, 50) + leafset(sx + 18, 310, 1, 45);
  // slice marker + cross-section disc
  o += E(sx, 560, 22, 7, 'none', `stroke="${INK}" stroke-width="3" ${dash()}`);
  o += L(sx + 22, 560, 640, 430, INK, 2.5, 'stroke-dasharray="7 7"');
  const cx = 800; const cy = 410; const r = 175;
  o += dicotSlice(cx, cy, r);
  // callouts
  o += call(sx + 4, 930, 80, 960) + call(sx + 125, 855, 960, 880) + call(sx + 152, 782, 960, 740) + call(sx - 150, 772, 70, 720);
  o += call(sx + 14, 560, 70, 560) + call(sx + 100, 330, 640, 150) + call(sx + 190, 470, 70, 380);
  o += call(cx + r - 6, cy - 50, 975, 150) + call(cx + r * 0.38, cy + 120, 960, 700) + call(cx, cy, 700, 800);
  return svg(o);
}

// ---------- slots ----------
const OBJECTS = {
  'ipa/02-tubuh-manusia/sel-darah-set': { draw: () => bloodCells(), only: /^p04-/ },
  'ipa/02-tubuh-manusia/pembuluh-darah-set': { draw: () => bloodVessels(), only: /^p03-/ },
  'ipa/02-tubuh-manusia/vili-usus': { draw: () => villi(), only: /^p04-/ },
  'ipa/01-makhluk-hidup/biji-mono-dikotil-set': { draw: () => seeds(), only: /^p04-/ },
  'ipa/01-makhluk-hidup/bunga-sepatu': { draw: () => hibiscus(), only: /^p12-/ },
  'ipa/01-makhluk-hidup/tanaman-jagung': { draw: () => cornPlant(), only: /^p12-/ },
  'ipa/01-makhluk-hidup/tanaman-kacang': { draw: () => peanutPlant(), only: /^p12-/ },
};

const install = process.argv.includes('--install');
const emptyOnly = process.argv.includes('--empty');   // skip every slot that already has a picture
const outDir = install ? null : process.argv[2];
if (!install && !outDir) throw new Error('usage: vektor-bio.mjs <outDir> | --install [--empty]');
if (outDir) mkdirSync(outDir, { recursive: true });
const only = (process.argv.find((a) => a.startsWith('--only=')) ?? '').slice(7);
const hasPic = (dir, slot) => readdirSync(dir).some((f) => new RegExp(`^${slot}[.](png|jpe?g|webp)$`).test(f));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: S, height: S } });
let n = 0;
for (const [rel, spec] of Object.entries(OBJECTS)) {
  const id = rel.split('/').pop();
  if (only && !only.split(',').includes(id)) continue;
  const dir = join('image-results', rel);
  const slots = [...new Set(readdirSync(dir).filter((fl) => /^p\d\d-/.test(fl) && !/turnaround/.test(fl)).map((fl) => fl.replace(/[.]lama(?=[.])/, '').replace(/[.][a-z]+$/, '')))]
    .filter((s) => spec.only.test(s)).filter((s) => !emptyOnly || !hasPic(dir, s));
  for (const slot of slots) {
    await page.setContent(`<html><body style="margin:0">${spec.draw(slot)}</body></html>`);
    const png = await page.screenshot({ clip: { x: 0, y: 0, width: S, height: S } });
    if (install) {
      const old = readdirSync(dir).find((fl) => new RegExp(`^${slot}[.](png|jpe?g|webp)$`).test(fl));
      if (old) renameSync(join(dir, old), join(dir, `${slot}.lama.png`));
      writeFileSync(join(dir, `${slot}.png`), png);
    } else {
      writeFileSync(join(outDir, `${id}__${slot}.png`), png);
    }
    n += 1;
  }
}
await browser.close();
console.log(`${n} gambar vektor ${install ? 'dipasang ke image-results/' : `-> ${outDir}`}`);
