// Exact vector pictures for IPA props where Gemini kept getting geometry wrong. Same conventions as
// vektor-mtk.mjs (kept separate so two sessions never edit one file). Run from osn-app/:
//
//   node image-prompts/_src/vektor-ipa.mjs <outDir>             preview only, one PNG per slot
//   node image-prompts/_src/vektor-ipa.mjs --install            write into image-results/ slots
//   … --only=ambulans-doppler                                    limit to some objects
//
// --install moves a non-approved slot image to <slot>.lama.png first (exact match, never the .lama copy).
// The review verdicts are written separately, after looking at the preview.
import { mkdirSync, readdirSync, renameSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import { chromium } from 'playwright';

const S = 1024;
const INK = '#1f2a44';
const svg = (body, bg = '#fff') => `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}"><rect width="${S}" height="${S}" fill="${bg}"/>${body}</svg>`;
const f = (n) => Math.round(n * 10) / 10;
const rad = (d) => (d * Math.PI) / 180;
const R = (x, y, w, h, fill, extra = '') => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${fill}" ${extra}/>`;
const C = (cx, cy, r, fill, extra = '') => `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="${fill}" ${extra}/>`;
const L = (x1, y1, x2, y2, stroke = INK, w = 5, extra = '') => `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" ${extra}/>`;
const P = (d, fill = 'none', stroke = INK, w = 5, extra = '') => `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round" ${extra}/>`;
// leader line from a point ON a part to an empty circle outside the object (callout anchor for labels added later)
const call = (px, py, cx, cy) => `${L(px, py, cx, cy, INK, 3)}${C(px, py, 5, INK)}${C(cx, cy, 18, '#fff', `stroke="${INK}" stroke-width="3.5"`)}`;
const rng = (seed) => () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const pts = (a) => a.map(([x, y]) => `${f(x)},${f(y)}`).join(' ');

// ---------- Doppler: an ambulance moving LEFT; wavefronts computed from the source motion ----------
// A wavefront emitted when the source stood at (cx_k, cy) is a circle of radius c·(T − t_k) around that point.
// Source speed = 0.39 c, so ahead (left) the spacing is (1 − 0.39) λ and behind (right) (1 + 0.39) λ.
function ambulanceDoppler() {
  const WAVE = '#2b6cb0';
  const lam = 52; const shift = 20; // λ and the source's displacement per period, in px
  const x0 = 410; const y0 = 515;   // horn position at the present time
  let o = '';
  for (let k = 1; k <= 8; k++) {
    o += `<circle cx="${x0 + shift * k}" cy="${y0}" r="${lam * k}" fill="none" stroke="${WAVE}" stroke-width="4.5"/>`;
  }
  const ground = 720;
  const poly = (p, fill, extra = '') => `<polygon points="${pts(p)}" fill="${fill}" stroke="${INK}" stroke-width="5" stroke-linejoin="round" ${extra}/>`;
  const rect = (x, y, w, h, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra}/>`;
  // cargo box (patient compartment) and cab, front to the left
  o += rect(440, 360, 420, 292, '#ffffff', `stroke="${INK}" stroke-width="5" rx="14"`);
  o += poly([[230, 652], [230, 546], [272, 520], [330, 440], [440, 440], [440, 652]], '#ffffff');
  o += rect(440, 566, 420, 36, '#d32f2f') + rect(231, 566, 209, 36, '#d32f2f');
  o += poly([[352, 454], [434, 454], [434, 520], [306, 520]], '#bfe3f7');
  o += rect(338, 424, 40, 16, '#d32f2f', `stroke="${INK}" stroke-width="3"`) + rect(378, 424, 40, 16, '#1e66d0', `stroke="${INK}" stroke-width="3"`);
  o += rect(232, 548, 16, 20, '#ffd54f', `stroke="${INK}" stroke-width="3"`);
  o += rect(220, 628, 36, 24, '#455a64', `stroke="${INK}" stroke-width="3" rx="4"`);
  o += `<line x1="800" y1="372" x2="800" y2="640" stroke="${INK}" stroke-width="4"/>`;
  o += `<line x1="440" y1="440" x2="440" y2="652" stroke="${INK}" stroke-width="4"/>`;
  o += `<rect x="458" y="388" width="60" height="30" rx="6" fill="#bfe3f7" stroke="${INK}" stroke-width="3"/>`;
  for (const wx of [330, 745]) {
    o += `<circle cx="${wx}" cy="${ground - 48}" r="50" fill="#1b1b1b" stroke="${INK}" stroke-width="4"/><circle cx="${wx}" cy="${ground - 48}" r="22" fill="#b0bec5" stroke="${INK}" stroke-width="3"/>`;
  }
  o += `<line x1="150" y1="${ground}" x2="930" y2="${ground}" stroke="#9e9e9e" stroke-width="4"/>`;
  return svg(o);
}

// ---------- Simple distillation: thermometer bulb level with the side-arm, water IN low / OUT high ----------
function distillation() {
  const GLASS = 'rgba(190,225,245,0.40)'; const W = 5;
  const rot = (180 / Math.PI) * Math.atan2(215, 430); // condenser slope (deg), falling to the right
  const th = Math.atan2(215, 430);
  const to = (lx, ly) => [330 + lx * Math.cos(th) - ly * Math.sin(th), 395 + lx * Math.sin(th) + ly * Math.cos(th)]; // local → world
  let o = '';
  // spirit burner + flame, tripod with gauze
  o += `<path d="M175,945 L205,880 H285 L315,945 Z" fill="#b0bec5" stroke="${INK}" stroke-width="${W}" stroke-linejoin="round"/>`;
  o += `<rect x="232" y="850" width="20" height="30" fill="#78909c" stroke="${INK}" stroke-width="4"/>`;
  o += `<path d="M242,760 C214,800 222,835 242,850 C262,835 270,800 242,760 Z" fill="#ffb300" stroke="#e65100" stroke-width="3"/><path d="M242,805 C230,825 234,840 242,848 C250,840 254,825 242,805 Z" fill="#fff59d"/>`;
  o += `<line x1="110" y1="975" x2="150" y2="715" stroke="${INK}" stroke-width="8" stroke-linecap="round"/><line x1="370" y1="975" x2="330" y2="715" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>`;
  o += `<rect x="120" y="700" width="220" height="14" rx="6" fill="#cfd8dc" stroke="${INK}" stroke-width="${W}"/>`;
  // round-bottom flask with coloured liquid + bubbles
  const fx = 230; const fy = 570; const fr = 125;
  o += `<circle cx="${fx}" cy="${fy}" r="${fr}" fill="${GLASS}" stroke="${INK}" stroke-width="${W}"/>`;
  o += `<path d="M${fx - 118},${fy + 20} A${fr},${fr} 0 0 0 ${fx + 118},${fy + 20} Z" fill="rgba(66,133,244,0.65)"/>`;
  for (const [bx, by, br] of [[190, 600, 7], [250, 625, 9], [225, 585, 5], [275, 600, 6]]) o += `<circle cx="${bx}" cy="${by}" r="${br}" fill="none" stroke="#e3f2fd" stroke-width="2.5"/>`;
  o += `<path d="M${fx - 28},${fy - fr + 9} V330 H${fx + 28} V${fy - fr + 9}" fill="${GLASS}" stroke="${INK}" stroke-width="${W}"/>`;
  // stopper + thermometer (bulb centre level with the side-arm opening, y ≈ 385)
  o += `<path d="M${fx - 34},322 H${fx + 34} L${fx + 28},352 H${fx - 28} Z" fill="#3e3e3e" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>`;
  o += `<rect x="${fx - 7}" y="120" width="14" height="272" rx="7" fill="#fafafa" stroke="${INK}" stroke-width="4"/>`;
  o += `<rect x="${fx - 3}" y="250" width="6" height="150" fill="#e53935"/><circle cx="${fx}" cy="398" r="9" fill="#e53935" stroke="${INK}" stroke-width="3"/>`;
  for (let k = 0; k < 7; k++) o += `<line x1="${fx - 7}" y1="${140 + k * 14}" x2="${fx - 1}" y2="${140 + k * 14}" stroke="${INK}" stroke-width="2"/>`;
  // side arm into the condenser
  o += `<path d="M${fx + 28},372 L318,388 L336,404 L${fx + 28},396 Z" fill="${GLASS}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>`;
  // Liebig condenser: inner tube + water jacket
  o += `<g transform="translate(330 395) rotate(${f(rot)})">`
    + `<rect x="40" y="-30" width="400" height="60" rx="8" fill="rgba(100,181,246,0.55)" stroke="${INK}" stroke-width="${W}"/>`
    + `<rect x="0" y="-12" width="500" height="24" rx="6" fill="${GLASS}" stroke="${INK}" stroke-width="${W}"/>`
    + `<rect x="44" y="-9" width="392" height="18" fill="#fafafa" fill-opacity="0.8"/></g>`;
  // water hoses: IN at the LOWER end of the jacket, OUT at the UPPER end
  const [ix, iy] = to(410, 30); const [ox, oy] = to(70, -30);
  const hose = (d, c) => `<path d="${d}" fill="none" stroke="#6d8fa8" stroke-width="16" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/>`;
  o += hose(`M${f(ix)},${f(iy)} v34 C${f(ix)},${f(iy + 130)} 640,${f(iy + 120)} 620,880`, '#90caf9');
  o += hose(`M${f(ox)},${f(oy)} v-40 C${f(ox)},${f(oy - 130)} 760,${f(oy - 150)} 860,${f(oy - 60)}`, '#90caf9');
  const arrow = (x, y, deg) => { // tip at (x, y), pointing along `deg` (0 = right, 90 = down)
    const a = (deg * Math.PI) / 180; const ux = Math.cos(a); const uy = Math.sin(a);
    return `<polygon points="${pts([[x, y], [x - 28 * ux - 14 * uy, y - 28 * uy + 14 * ux], [x - 28 * ux + 14 * uy, y - 28 * uy - 14 * ux]])}" fill="#1565c0"/>`;
  };
  o += arrow(627, 790, -78) + arrow(835, f(oy - 78), 40);
  // distillate tip, drops, receiving (Erlenmeyer) flask
  const [tx, ty] = to(500, 0);
  o += `<path d="M${f(tx)},${f(ty)} l22,12 v26" fill="none" stroke="${INK}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><path d="M${f(tx)},${f(ty)} l22,12 v26" fill="none" stroke="${GLASS}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;
  const rx = f(tx + 22);
  o += `<path d="M${rx},${f(ty + 52)} c-6,10 -6,18 0,18 c6,0 6,-8 0,-18 Z" fill="#64b5f6" stroke="#1e66d0" stroke-width="2"/>`;
  o += `<path d="M${rx - 30},720 V760 L${rx - 85},905 H${rx + 85} L${rx + 30},760 V720 Z" fill="${GLASS}" stroke="${INK}" stroke-width="${W}" stroke-linejoin="round"/>`;
  o += `<path d="M${rx - 62},850 H${rx + 62} L${rx + 85},905 H${rx - 85} Z" fill="rgba(100,181,246,0.7)"/><ellipse cx="${rx}" cy="720" rx="30" ry="6" fill="none" stroke="${INK}" stroke-width="4"/>`;
  o += `<line x1="60" y1="975" x2="960" y2="975" stroke="#9e9e9e" stroke-width="4"/>`;
  return svg(o);
}

// ---------- Paper chromatography: spot ABOVE the water, bands rise from it ----------
function chromatography() {
  let o = '';
  const bx = 300; const bw = 400; const top = 380; const bot = 880; const water = 700;
  o += R(bx + 4, water, bw - 8, bot - water - 8, 'rgba(100,181,246,0.45)');
  // paper strip hanging from a pencil laid across the rim
  o += R(470, top - 6, 80, 400, '#ffffff', `stroke="${INK}" stroke-width="4"`);
  o += R(471, 510, 78, 260, 'rgba(100,181,246,0.30)');                 // wetted part of the paper
  o += L(471, 510, 549, 510, '#5c6bc0', 3, 'stroke-dasharray="8 6"');  // solvent front
  o += L(471, 660, 549, 660, '#757575', 3, 'stroke-dasharray="3 5"');  // pencil origin line, above the water
  for (const [y, c] of [[632, '#1e66d0'], [596, '#7e57c2'], [562, '#fbc02d'], [530, '#ec407a']]) o += `<ellipse cx="510" cy="${y}" rx="28" ry="9" fill="${c}"/>`;
  o += R(240, top - 22, 520, 18, '#f2b134', `stroke="${INK}" stroke-width="4" rx="4"`) + `<polygon points="240,${top - 22} 214,${top - 13} 240,${top - 4}" fill="#e0b97a" stroke="${INK}" stroke-width="4"/>`;
  // glass beaker
  o += P(`M${bx},${top} V${bot - 30} Q${bx},${bot} ${bx + 30},${bot} H${bx + bw - 30} Q${bx + bw},${bot} ${bx + bw},${bot - 30} V${top}`, 'rgba(190,225,245,0.25)', INK, 6);
  o += L(bx - 14, top, bx + bw + 14, top, INK, 6);
  o += L(bx + 4, water, bx + bw - 4, water, '#1e66d0', 3);
  return svg(o);
}

// ---------- Carbon atom (6p + 6n, shells of 2 and 4 electrons) on black, nucleus enlarged in a zoom window ----------
function carbonAtom(callouts) {
  let o = ''; const cx = 400; const cy = 470;
  const nucleus = (x, y, r) => {
    const cells = [[0, 0]]; for (let i = 0; i < 6; i++) cells.push([2 * Math.cos(rad(60 * i)), 2 * Math.sin(rad(60 * i))]);
    for (let i = 0; i < 5; i++) cells.push([3.46 * Math.cos(rad(30 + 60 * i)), 3.46 * Math.sin(rad(30 + 60 * i))]);
    return cells.map(([a, b], i) => C(x + a * r, y + b * r, r, i % 2 ? '#9e9e9e' : '#e53935', `stroke="#111" stroke-width="${f(r / 8)}"`)).join('');
  };
  for (const [r, n, off] of [[130, 2, 20], [230, 4, 45]]) {
    o += C(cx, cy, r, 'none', 'stroke="#90caf9" stroke-width="3" stroke-dasharray="10 8"');
    for (let i = 0; i < n; i++) { const a = rad(off + (360 / n) * i); o += C(cx + r * Math.cos(a), cy + r * Math.sin(a), 14, '#42a5f5', 'stroke="#e3f2fd" stroke-width="2"'); }
  }
  o += nucleus(cx, cy, 9);
  // zoom window
  const zx = 760; const zy = 760; const zr = 200;
  o += L(cx + 18, cy + 20, zx - 150, zy - 140, '#b0bec5', 2, 'stroke-dasharray="6 6"') + L(cx + 28, cy + 6, zx + 130, zy - 160, '#b0bec5', 2, 'stroke-dasharray="6 6"');
  o += C(zx, zy, zr, '#111', 'stroke="#eceff1" stroke-width="4" stroke-dasharray="14 8"');
  o += nucleus(zx, zy, 36);
  if (callouts) o += call(cx + 130 * Math.cos(rad(20)), cy + 130 * Math.sin(rad(20)), 90, 120) + call(cx + 230 * Math.cos(rad(45)), cy + 230 * Math.sin(rad(45)), 760, 140) + call(zx - 36, zy - 36, 560, 820) + call(zx + 40, zy + 36, 960, 560) + call(cx, cy + 0, 90, 330);
  return svg(o, '#000');
}

// ---------- Slinky stretched along one line: compressions and rarefactions ----------
function slinky() {
  let o = ''; const y = 520; let x = 130; const coils = [];
  while (x < 900) { coils.push(x); x += 26 + 17 * Math.sin(((x - 130) / 270) * 2 * Math.PI); }
  o += L(100, y + 130, 930, y + 130, '#9e9e9e', 4);
  for (const cx of coils) {
    o += `<ellipse cx="${f(cx)}" cy="${y}" rx="15" ry="115" fill="none" stroke="#546e7a" stroke-width="10"/>`;
    o += `<ellipse cx="${f(cx)}" cy="${y}" rx="15" ry="115" fill="none" stroke="#cfd8dc" stroke-width="5"/>`;
  }
  return svg(o);
}

// ---------- Vacuum flask section: U-shaped vacuum band BETWEEN inner and outer wall ----------
function vacuumFlask(mode) { // 'belah' (with callouts) | 'see' (see-through casing)
  let o = ''; const see = mode === 'see';
  o += R(330, 300, 360, 580, see ? 'rgba(66,133,244,0.30)' : '#2f7fc4', `stroke="${INK}" stroke-width="5" rx="38"`);        // outer casing
  o += R(352, 322, 316, 536, '#cfd8dc', `stroke="${INK}" stroke-width="4" rx="24"`);                                         // outer wall
  o += R(366, 364, 288, 480, '#d9d2f0', `stroke="#6a5acd" stroke-width="3" stroke-dasharray="9 6" rx="14"`);                // vacuum band (U)
  o += R(366, 336, 288, 28, '#b0bec5');                                                                                      // walls fused at the neck
  o += R(394, 364, 232, 452, '#ffffff', `stroke="${INK}" stroke-width="5" rx="8"`);                                          // inner (silvered) vessel
  o += R(397, 520, 226, 293, '#f4a63a');                                                                                     // hot liquid
  o += R(440, 816, 40, 28, '#222', `stroke="${INK}" stroke-width="3"`) + R(540, 816, 40, 28, '#222', `stroke="${INK}" stroke-width="3"`); // supports
  o += `<path d="M440,250 H580 L570,345 H450 Z" fill="#616161" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>`;  // stopper
  if (!see) o += call(510, 290, 120, 250) + call(345, 600, 120, 420) + call(358, 700, 120, 590) + call(380, 600, 120, 760)
    + call(394, 700, 900, 800) + call(460, 830, 900, 920) + call(510, 680, 900, 640) + call(510, 440, 900, 420);
  return svg(o);
}

// ---------- Lenses seen edge-on: biconvex (thick middle) and biconcave (thin middle) ----------
function lenses() {
  let o = ''; const gy = 860; const D = 320; const cy = 500;
  const stand = (x) => R(x - 70, gy - 20, 140, 20, '#78909c', `stroke="${INK}" stroke-width="4" rx="6"`) + R(x - 8, cy + D / 2 + 8, 16, gy - 20 - (cy + D / 2 + 8), '#90a4ae', `stroke="${INK}" stroke-width="3"`);
  const rim = (x, w) => R(x - w / 2 - 6, cy - D / 2 - 12, w + 12, 14, '#546e7a', `stroke="${INK}" stroke-width="3" rx="3"`) + R(x - w / 2 - 6, cy + D / 2 - 2, w + 12, 14, '#546e7a', `stroke="${INK}" stroke-width="3" rx="3"`);
  const x1 = 320; const x2 = 700;
  o += stand(x1) + stand(x2) + L(150, gy, 880, gy, '#9e9e9e', 4);
  o += P(`M${x1},${cy - D / 2} Q${x1 + 95},${cy} ${x1},${cy + D / 2} Q${x1 - 95},${cy} ${x1},${cy - D / 2} Z`, 'rgba(150,205,240,0.55)', INK, 5) + rim(x1, 6);
  o += P(`M${x2 - 48},${cy - D / 2} H${x2 + 48} Q${x2 + 14},${cy} ${x2 + 48},${cy + D / 2} H${x2 - 48} Q${x2 - 14},${cy} ${x2 - 48},${cy - D / 2} Z`, 'rgba(150,205,240,0.55)', INK, 5) + rim(x2, 96);
  o += L(x1 - 40, cy, x1 + 40, cy, '#9e9e9e', 2, 'stroke-dasharray="6 6"') + L(x2 - 60, cy, x2 + 60, cy, '#9e9e9e', 2, 'stroke-dasharray="6 6"');
  return svg(o);
}

// ---------- Three glasses: solution, colloid, suspension — with zoom windows ----------
function threeGlasses(callouts) {
  let o = ''; const rnd = rng(7); const xs = [200, 512, 824]; const gTop = 560; const gBot = 900; const wy = 240; const wr = 125;
  const glass = (x, liquid, sediment) => {
    let g = '';
    g += `<path d="M${x - 90},${gTop} L${x - 70},${gBot} H${x + 70} L${x + 90},${gTop} Z" fill="${liquid}" stroke="none"/>`;
    if (sediment) g += `<path d="M${x - 74},${gBot - 70} L${x - 70},${gBot} H${x + 70} L${x + 74},${gBot - 70} Z" fill="#6d4c41"/>`;
    g += P(`M${x - 90},${gTop} L${x - 70},${gBot} H${x + 70} L${x + 90},${gTop}`, 'none', INK, 6);
    g += `<ellipse cx="${x}" cy="${gTop}" rx="90" ry="12" fill="rgba(255,255,255,0.35)" stroke="${INK}" stroke-width="4"/>`;
    return g;
  };
  o += glass(xs[0], 'rgba(200,230,250,0.45)', false) + glass(xs[1], '#f7f7f2', false) + glass(xs[2], 'rgba(150,110,70,0.65)', true);
  const win = (x, bg, draw) => `<clipPath id="w${x}"><circle cx="${x}" cy="${wy}" r="${wr}"/></clipPath><circle cx="${x}" cy="${wy}" r="${wr}" fill="${bg}"/><g clip-path="url(#w${x})">${draw}</g>` + C(x, wy, wr, 'none', `stroke="${INK}" stroke-width="5" stroke-dasharray="14 8"`) + L(x, wy + wr, x, gTop - 14, '#9e9e9e', 3, 'stroke-dasharray="6 6"');
  let d1 = ''; for (let i = 0; i < 160; i++) { const a = rnd() * 6.283; const r = Math.sqrt(rnd()) * (wr - 6); d1 += C(xs[0] + r * Math.cos(a), wy + r * Math.sin(a), 2.2, '#4fc3f7'); }
  let d2 = ''; for (let i = 0; i < 38; i++) { const a = rnd() * 6.283; const r = Math.sqrt(rnd()) * (wr - 10); d2 += C(xs[1] + r * Math.cos(a), wy + r * Math.sin(a), 6, '#ffffff', 'stroke="#b0bec5" stroke-width="1.5"'); }
  let d3 = ''; for (let i = 0; i < 26; i++) { const x = xs[2] - wr + 14 + rnd() * (2 * wr - 28); const y = wy + 10 + rnd() * (wr - 22) * (0.4 + 0.6 * rnd()); d3 += C(x, y, 10 + rnd() * 4, '#795548', 'stroke="#4e342e" stroke-width="2"'); }
  o += win(xs[0], '#e8f4fd', d1) + win(xs[1], '#eceff1', d2) + win(xs[2], '#f5f0e6', d3);
  if (callouts) o += call(xs[0] + 40, wy - 40, 120, 70) + call(xs[1] + 40, wy - 40, 512, 60) + call(xs[2] + 40, wy - 30, 900, 70) + call(xs[0], 760, 80, 800) + call(xs[1], 760, 512, 970) + call(xs[2], 860, 940, 960);
  return svg(o);
}

// ---------- Ball-and-stick molecules: H2O (bent ~104.5°), CO2 (linear), O2 (double bond) ----------
function molecules() {
  let o = ''; const y = 520;
  const ball = (x, yy, r, c) => C(x, yy, r, c, `stroke="${INK}" stroke-width="4"`);
  // water: O on top, two H at ±52.25° from the downward axis (H–O–H ≈ 104.5°), bond 105
  const a = rad(104.5 / 2); const ox = 150; const oy = 440;
  const hx1 = ox - 105 * Math.sin(a); const hx2 = ox + 105 * Math.sin(a); const hy = oy + 105 * Math.cos(a);
  o += L(ox, oy, hx1, hy, '#9e9e9e', 12) + L(ox, oy, hx2, hy, '#9e9e9e', 12) + ball(ox, oy, 52, '#e53935') + ball(hx1, hy, 30, '#fafafa') + ball(hx2, hy, 30, '#fafafa');
  // carbon dioxide O=C=O, straight line, a double bond on each side
  const cx = 540;
  for (const s of [-1, 1]) o += L(cx, y - 7, cx + s * 115, y - 7, '#9e9e9e', 9) + L(cx, y + 7, cx + s * 115, y + 7, '#9e9e9e', 9);
  o += ball(cx, y, 46, '#263238') + ball(cx - 115, y, 52, '#e53935') + ball(cx + 115, y, 52, '#e53935');
  // oxygen O=O
  const ox2 = 840;
  o += L(ox2, y - 7, ox2 + 115, y - 7, '#9e9e9e', 9) + L(ox2, y + 7, ox2 + 115, y + 7, '#9e9e9e', 9) + ball(ox2, y, 52, '#e53935') + ball(ox2 + 115, y, 52, '#e53935');
  return svg(o);
}

// ---------- Periscope exterior: window in the FRONT face (top), window in the BACK face (bottom) ----------
// view: depan | belakang | kiri | kanan. Left view has one side wall cut away showing the two 45° mirrors.
function periscopeExterior(view) {
  const CARD = '#c8a06a'; const EDGE = '#6d4c1f'; const DARK = '#3e2723';
  const x0 = 412; const W = 200; const top = 140; const bot = 880;
  let o = R(x0, top, W, bot - top, CARD, `stroke="${EDGE}" stroke-width="6"`);
  o += R(x0, 300, W, 14, '#e6cfa2') + R(x0, 700, W, 14, '#e6cfa2'); // tape bands
  const win = (y) => R(x0 + 24, y, W - 48, 110, DARK, `stroke="${EDGE}" stroke-width="4"`) + R(x0 + 30, y + 50, W - 60, 54, '#cfd8dc', 'opacity="0.85"');
  if (view === 'depan') o += win(190);
  if (view === 'belakang') o += win(730);
  if (view === 'kiri' || view === 'kanan') {
    // openings seen edge-on as gaps in the end walls: front face on the viewer's left (kiri) / right (kanan)
    const topOnLeft = view === 'kiri';
    const gap = (isTop, onLeft) => R(onLeft ? x0 - 3 : x0 + W - 9, isTop ? 190 : 730, 12, 110, '#ffffff', `stroke="${EDGE}" stroke-width="4"`);
    o += gap(true, topOnLeft) + gap(false, !topOnLeft);
    if (view === 'kiri') {
      o += R(x0 + 18, 170, W - 36, 700, '#f6ead2', `stroke="${EDGE}" stroke-width="4"`);                 // cut-away window
      o += L(x0 + 18, 176, x0 + W - 18, 176 + (W - 36), '#455a64', 9) + L(x0 + 18, 176, x0 + W - 18, 176 + (W - 36), '#90caf9', 4); // top mirror, 45°
      o += L(x0 + 18, 676, x0 + W - 18, 676 + (W - 36), '#455a64', 9) + L(x0 + 18, 676, x0 + W - 18, 676 + (W - 36), '#90caf9', 4); // bottom mirror, parallel
    }
  }
  o += L(120, bot + 6, 900, bot + 6, '#9e9e9e', 4);
  return svg(o);
}

// ---------- Inclined plane seen END-ON from the HIGH end (support in the foreground, board descending away) ----------
function rampFromHighEnd() {
  const WOOD = '#d9a35f'; const DK = '#a9742f'; const ground = 880;
  let o = L(120, ground, 900, ground, '#9e9e9e', 4);
  o += `<polygon points="${pts([[300, 250], [724, 250], [610, 520], [414, 520]])}" fill="#ecc88f" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>`; // board surface sloping away
  o += `<polygon points="${pts([[300, 250], [724, 250], [724, 290], [300, 290]])}" fill="${WOOD}" stroke="${INK}" stroke-width="5"/>`;                       // high end edge
  o += R(300, 290, 60, ground - 290, WOOD, `stroke="${INK}" stroke-width="5"`) + R(664, 290, 60, ground - 290, WOOD, `stroke="${INK}" stroke-width="5"`);
  o += R(360, 790, 304, 50, DK, `stroke="${INK}" stroke-width="5"`);
  // small cart far down the slope
  o += R(480, 440, 64, 34, '#8d6e63', `stroke="${INK}" stroke-width="4" rx="4"`) + C(494, 480, 9, '#3e2723') + C(530, 480, 9, '#3e2723');
  return svg(o);
}

// ---------- Bottle dynamo: bracket toward the camera (kiri) or away (kanan); chrome headlamp on a cable ----------
function dynamoSide(view) {
  const CH = '#cfd8dc'; const lampOnRight = view === 'kiri';
  let o = '';
  const lx = lampOnRight ? 770 : 254; const dir = lampOnRight ? 1 : -1;
  // cable: from the bottom terminal to the back of the lamp
  o += P(`M512,745 C512,880 ${lx - 60 * dir},860 ${lx - 62 * dir},640`, 'none', '#212121', 10);
  // headlamp seen from the side: chrome cone + rim
  o += `<polygon points="${pts([[lx - 62 * dir, 590], [lx + 18 * dir, 540], [lx + 18 * dir, 680], [lx - 62 * dir, 630]])}" fill="${CH}" stroke="${INK}" stroke-width="5"/>`;
  o += `<ellipse cx="${lx + 18 * dir}" cy="610" rx="16" ry="72" fill="#eceff1" stroke="${INK}" stroke-width="5"/>`;
  // dynamo body
  o += R(440, 270, 144, 440, CH, `stroke="${INK}" stroke-width="5" rx="14"`) + R(440, 330, 144, 12, '#90a4ae') + R(440, 640, 144, 12, '#90a4ae');
  o += R(452, 190, 120, 80, '#212121', `stroke="${INK}" stroke-width="5" rx="12"`);
  for (let i = 0; i < 6; i++) o += L(470 + i * 17, 198, 470 + i * 17, 262, '#555', 3);
  o += R(488, 710, 48, 36, '#90a4ae', `stroke="${INK}" stroke-width="4" rx="6"`);
  if (view === 'kiri') o += R(478, 440, 68, 130, '#b0bec5', `stroke="${INK}" stroke-width="4" rx="6"`) + C(512, 480, 11, '#fff', `stroke="${INK}" stroke-width="3"`);
  o += L(150, 930, 880, 930, '#9e9e9e', 4);
  return svg(o);
}

// ---------- Transformer end-on (near coil wraps the core leg, far coil hidden behind it) ----------
function transformerEndOn() {
  let o = R(220, 820, 584, 40, '#b0bec5', `stroke="${INK}" stroke-width="5" rx="6"`);
  o += R(430, 690, 164, 130, '#78909c', `stroke="${INK}" stroke-width="5"`);        // core leg below the coil
  o += R(380, 150, 264, 160, '#78909c', `stroke="${INK}" stroke-width="5"`);        // yoke, laminations edge-on
  for (let x = 394; x < 644; x += 16) o += L(x, 156, x, 304, '#455a64', 2) + L(x, 696, x, 814, '#455a64', 2);
  o += R(326, 300, 372, 26, '#cfd8dc', `stroke="${INK}" stroke-width="5" rx="4"`) + R(326, 674, 372, 26, '#cfd8dc', `stroke="${INK}" stroke-width="5" rx="4"`); // bobbin flanges
  o += R(336, 326, 352, 348, '#2f7fc4', `stroke="${INK}" stroke-width="5"`);        // secondary winding (8 turns)
  for (let i = 1; i < 8; i++) o += L(336, 326 + i * (348 / 8), 688, 326 + i * (348 / 8), '#0d47a1', 5);
  o += R(716, 740, 36, 80, '#1e66d0', `stroke="${INK}" stroke-width="4" rx="4"`) + R(710, 726, 48, 18, '#d4af37', `stroke="${INK}" stroke-width="3" rx="3"`);
  return svg(o);
}

// ---------- Transformer cut-open: primary (more turns) vs secondary (fewer turns), flux circulating one way ----------
function transformerSection() {
  let o = '';
  const x0 = 270; const x1 = 754; const y0 = 190; const y1 = 830; const t = 118; // core frame, leg width t
  o += R(x0, y0, x1 - x0, y1 - y0, '#78909c', `stroke="${INK}" stroke-width="6" rx="6"`);
  o += R(x0 + t, y0 + t, x1 - x0 - 2 * t, y1 - y0 - 2 * t, '#ffffff', `stroke="${INK}" stroke-width="5"`);
  for (let y = y0 + 12; y < y0 + t - 6; y += 14) o += L(x0 + 8, y, x1 - 8, y, '#546e7a', 2);
  for (let y = y1 - t + 12; y < y1 - 6; y += 14) o += L(x0 + 8, y, x1 - 8, y, '#546e7a', 2);
  // windings cut through: wire cross-sections on both sides of each leg
  const turns = (cx, n, c, r) => { let g = ''; const top = 300; const span = 520; for (let i = 0; i < n; i++) { const y = top + (span / (n - 1)) * i; g += C(cx - t / 2 - r - 6, y, r, c, `stroke="${INK}" stroke-width="2.5"`) + C(cx + t / 2 + r + 6, y, r, c, `stroke="${INK}" stroke-width="2.5"`); } return g; };
  o += turns(x0 + t / 2, 16, '#e08a3a', 8);   // primary: 16 turns
  o += turns(x1 - t / 2, 8, '#16a085', 11);   // secondary: 8 turns
  // insulation sheets between coil and leg
  // terminals
  o += R(110, 296, 60, 24, '#d4af37', `stroke="${INK}" stroke-width="3" rx="4"`) + R(110, 780, 60, 24, '#d4af37', `stroke="${INK}" stroke-width="3" rx="4"`);
  o += R(858, 296, 60, 24, '#d4af37', `stroke="${INK}" stroke-width="3" rx="4"`) + R(858, 780, 60, 24, '#d4af37', `stroke="${INK}" stroke-width="3" rx="4"`);
  // magnetic flux: one loop through the middle of the core, counter-clockwise, arrows all the same way
  const fx0 = x0 + t / 2; const fx1 = x1 - t / 2; const fy0 = y0 + t / 2; const fy1 = y1 - t / 2;
  o += `<rect x="${fx0}" y="${fy0}" width="${fx1 - fx0}" height="${fy1 - fy0}" rx="26" fill="none" stroke="#2e7d32" stroke-width="6" stroke-dasharray="16 10"/>`;
  const arr = (x, y, deg) => { const a = rad(deg); const ux = Math.cos(a); const uy = Math.sin(a); return `<polygon points="${pts([[x + 22 * ux, y + 22 * uy], [x - 14 * ux - 13 * uy, y - 14 * uy + 13 * ux], [x - 14 * ux + 13 * uy, y - 14 * uy - 13 * ux]])}" fill="#2e7d32"/>`; };
  o += arr((fx0 + fx1) / 2, fy0, 180) + arr(fx0, (fy0 + fy1) / 2, 90) + arr((fx0 + fx1) / 2, fy1, 0) + arr(fx1, (fy0 + fy1) / 2, -90);
  o += call(x0 + t / 2, 230, 150, 120) + call(x0 - 20, 560, 90, 560) + call(x1 + 20, 560, 940, 560) + call(x0 + t / 2, 780, 150, 920) + call(115, 310, 60, 380) + call(910, 310, 970, 380) + call((fx0 + fx1) / 2, fy1, 512, 940);
  return svg(o);
}

// ---------- Wind turbine, strict RIGHT side profile: rotor on the right, blades edge-on ----------
function windTurbineRight() {
  let o = L(120, 905, 900, 905, '#9e9e9e', 4);
  const tw = 'M476,905 L492,390 H532 L548,905 Z';
  o += `<path d="${tw}" fill="#f5f5f5" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>`;
  o += `<path d="M477,830 L548,830 L548,905 L476,905 Z" fill="#fdd835" stroke="${INK}" stroke-width="4"/>`;
  o += `<path d="M489,560 L535,560 L536,600 L488,600 Z" fill="#e53935"/>`;
  o += R(430, 340, 190, 62, '#fafafa', `stroke="${INK}" stroke-width="5" rx="22"`);
  o += R(436, 372, 70, 8, '#e53935');
  o += `<ellipse cx="632" cy="371" rx="26" ry="34" fill="#eceff1" stroke="${INK}" stroke-width="5"/>`;
  const blade = (y2) => `<path d="M626,${y2 < 371 ? 340 : 402} L${y2 < 371 ? 646 : 646},${y2} L${y2 < 371 ? 636 : 636},${y2} Z" fill="#ffffff" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>`;
  o += `<path d="M620,342 L646,70 L658,72 L646,344 Z" fill="#ffffff" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M644,98 L646,70 L658,72 L656,100 Z" fill="#e53935"/>`;
  o += `<path d="M620,400 L648,672 L660,670 L648,396 Z" fill="#ffffff" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M646,644 L648,672 L660,670 L658,642 Z" fill="#e53935"/>`;
  return svg(o);
}

// ---------- Graduated cylinder: front / back / left / right ----------
function gradCylinder(view) {
  const x = 445; const w = 150; const top = 180; const bot = 872; const waterTop = 430;
  let o = L(120, 910, 900, 910, '#9e9e9e', 4);
  o += `<polygon points="${pts([[380, 906], [425, 872], [615, 872], [660, 906]])}" fill="#cfd8dc" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>`;
  o += R(x, top, w, bot - top, 'rgba(200,230,250,0.35)', `stroke="${INK}" stroke-width="5" rx="5"`);
  o += R(x + 4, waterTop, w - 8, bot - waterTop, 'rgba(66,133,244,0.55)');
  o += `<path d="M${x + 4},${waterTop} Q${x + w / 2},${waterTop + 26} ${x + w - 4},${waterTop}" fill="rgba(66,133,244,0.75)" stroke="#1565c0" stroke-width="3"/>`;
  // spout: at the right of the front view, left of the back view; edge-on views show it as a small lip toward / away from the camera
  const spout = { depan: `<path d="M${x + w},${top} l34,-12 l-8,22 Z" fill="#cfd8dc" stroke="${INK}" stroke-width="4"/>`, belakang: `<path d="M${x},${top} l-34,-12 l8,22 Z" fill="#cfd8dc" stroke="${INK}" stroke-width="4"/>`, kanan: R(x + w / 2 - 22, top - 10, 44, 12, '#cfd8dc', `stroke="${INK}" stroke-width="4" rx="3"`), kiri: '' }[view];
  o += spout;
  // graduation lines: a long mark every 10 mL, short every 2 mL (0 at the bottom, 100 mL near the top)
  const mark = (k) => { const y = bot - 14 - (k / 100) * (bot - 14 - (top + 50)); const long = k % 10 === 0; return [y, long]; };
  for (let k = 0; k <= 100; k += 2) {
    const [y, long] = mark(k); const len = long ? 70 : 38;
    if (view === 'depan') o += L(x + w - len - 6, y, x + w - 6, y, INK, long ? 4 : 2.5);
    else if (view === 'belakang') o += L(x + 6, y, x + 6 + len, y, '#90a4ae', long ? 3 : 2);
    else if (view === 'kiri') o += L(x + w - 6 - (long ? 16 : 9), y, x + w - 6, y, INK, long ? 3.5 : 2.5);
    else o += L(x + 6, y, x + 6 + (long ? 16 : 9), y, INK, long ? 3.5 : 2.5);
  }
  return svg(o);
}

// ---------- Mechanical stopwatch: dial with correct numerals; crown + ring at 12; one pusher ----------
function stopwatch(view) {
  const cx = 512; const cy = 570; const Rc = 250; const Rd = 222;
  const CH = '#cfd8dc'; const CH2 = '#90a4ae';
  const pol = (r, deg) => [cx + r * Math.sin(rad(deg)), cy - r * Math.cos(rad(deg))];
  let o = '';
  const crown = (flat) => {
    let g = R(cx - 20, cy - Rc - 44, 40, 52, CH2, `stroke="${INK}" stroke-width="4"`) + R(cx - 34, cy - Rc - 92, 68, 52, CH, `stroke="${INK}" stroke-width="4" rx="8"`);
    for (let i = 0; i < 5; i++) g += L(cx - 24 + i * 12, cy - Rc - 88, cx - 24 + i * 12, cy - Rc - 46, CH2, 3);
    g += flat ? `<ellipse cx="${cx}" cy="${cy - Rc - 150}" rx="9" ry="52" fill="none" stroke="${CH2}" stroke-width="10"/>` : `<circle cx="${cx}" cy="${cy - Rc - 145}" r="52" fill="none" stroke="${INK}" stroke-width="16"/><circle cx="${cx}" cy="${cy - Rc - 145}" r="52" fill="none" stroke="${CH}" stroke-width="9"/>`;
    return g;
  };
  const pusher = (deg) => `<g transform="rotate(${deg} ${cx} ${cy})">${R(cx - 17, cy - Rc - 34, 34, 40, CH2, `stroke="${INK}" stroke-width="4" rx="4"`)}${R(cx - 24, cy - Rc - 56, 48, 24, CH, `stroke="${INK}" stroke-width="4" rx="6"`)}</g>`;
  if (view === 'depan' || view === 'belakang') {
    o += crown(false) + pusher(view === 'depan' ? -60 : 60);
    o += C(cx, cy, Rc, CH, `stroke="${INK}" stroke-width="6"`) + C(cx, cy, Rc - 16, '#eceff1', `stroke="${CH2}" stroke-width="3"`);
    if (view === 'depan') {
      o += C(cx, cy, Rd, '#fffdf7', `stroke="${INK}" stroke-width="3"`);
      for (let s = 0; s < 60; s++) { const [x1, y1] = pol(Rd - 4, s * 6); const [x2, y2] = pol(Rd - (s % 5 ? 16 : 28), s * 6); o += L(x1, y1, x2, y2, INK, s % 5 ? 2 : 4.5); }
      for (let n = 1; n <= 12; n++) { const [x, y] = pol(178, n * 30); o += `<text x="${f(x)}" y="${f(y)}" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700" fill="${INK}" text-anchor="middle" dominant-baseline="central">${n * 5}</text>`; }
      // minute subdial (0–30 min) below the 60, ticks only
      const sx = cx; const sy = cy - 78; const sr = 46;
      o += C(sx, sy, sr, '#ffffff', `stroke="${INK}" stroke-width="3"`);
      for (let m = 0; m < 30; m++) { const a = m * 12; const x1 = sx + (sr - 3) * Math.sin(rad(a)); const y1 = sy - (sr - 3) * Math.cos(rad(a)); const x2 = sx + (sr - (m % 5 ? 9 : 15)) * Math.sin(rad(a)); const y2 = sy - (sr - (m % 5 ? 9 : 15)) * Math.cos(rad(a)); o += L(x1, y1, x2, y2, INK, m % 5 ? 1.5 : 3); }
      o += L(sx, sy, sx, sy - 34, '#c62828', 4) + C(sx, sy, 5, '#c62828');
      // seconds hand pointing at 0, with a short tail
      o += L(cx, cy + 34, cx, cy - 186, INK, 5) + C(cx, cy, 11, INK) + C(cx, cy, 4, '#eceff1');
    } else {
      o += C(cx, cy, Rc - 40, CH, `stroke="${CH2}" stroke-width="3"`) + `<path d="M${cx - 150},${cy - 120} A190,190 0 0 1 ${cx + 60},${cy - 180}" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round" opacity="0.7"/>`;
    }
  } else {
    // side profile: dial faces LEFT (kiri) or RIGHT (kanan); case 110 deep
    const dep = 110; const x = cx - dep / 2;
    o += crown(true);
    o += R(x, cy - Rc, dep, 2 * Rc, CH, `stroke="${INK}" stroke-width="6" rx="30"`);
    o += R(view === 'kiri' ? x + 6 : x + dep - 22, cy - Rc + 14, 16, 2 * Rc - 28, '#fffdf7', `stroke="${CH2}" stroke-width="2" rx="6"`);
    o += L(x + dep / 2, cy - Rc + 20, x + dep / 2, cy + Rc - 20, CH2, 3);
    if (view === 'kanan') o += `<circle cx="${cx}" cy="${cy - 135}" r="24" fill="${CH}" stroke="${INK}" stroke-width="5"/><circle cx="${cx}" cy="${cy - 135}" r="12" fill="${CH2}" stroke="${INK}" stroke-width="3"/>`;
  }
  return svg(o);
}

// ---------- Clinical + laboratory thermometer, lengthwise, glass transparent ----------
function thermometers(callouts) {
  const GL = 'rgba(190,225,245,0.45)'; const HG = '#cfd8dc'; const RED = '#e53935';
  let o = '';
  // clinical thermometer (left): mercury, constriction just above the bulb, scale strip beside the tube
  const cx = 330;
  o += R(cx - 14, 190, 28, 600, GL, `stroke="${INK}" stroke-width="5" rx="14"`) + C(cx, 812, 34, GL, `stroke="${INK}" stroke-width="5"`);
  o += R(cx - 4, 440, 8, 340, HG, `stroke="#607d8b" stroke-width="1.5"`) + C(cx, 812, 26, HG, `stroke="#607d8b" stroke-width="2"`);
  o += `<path d="M${cx - 14},760 L${cx - 5},748 L${cx - 14},736 M${cx + 14},760 L${cx + 5},748 L${cx + 14},736" fill="none" stroke="${INK}" stroke-width="4"/>`; // constriction
  o += R(cx + 22, 250, 20, 450, '#ffffff', `stroke="${INK}" stroke-width="3"`);
  for (let y = 256; y < 700; y += 9) o += L(cx + 22, y, cx + 22 + ((y - 256) % 45 === 0 ? 14 : 8), y, INK, 1.8);
  // laboratory thermometer (right): red alcohol column, expansion chamber at the top, long scale
  const lx = 680;
  o += R(lx - 14, 150, 28, 700, GL, `stroke="${INK}" stroke-width="5" rx="14"`) + C(lx, 880, 38, GL, `stroke="${INK}" stroke-width="5"`);
  o += C(lx, 150, 20, GL, `stroke="${INK}" stroke-width="5"`);
  o += R(lx - 4, 360, 8, 500, RED) + C(lx, 880, 30, RED);
  o += R(lx + 22, 230, 22, 560, '#ffffff', `stroke="${INK}" stroke-width="3"`);
  for (let y = 236; y < 790; y += 10) o += L(lx + 22, y, lx + 22 + ((y - 236) % 50 === 0 ? 16 : 9), y, INK, 1.8);
  if (callouts) o += call(cx, 812, 130, 880) + call(cx, 748, 130, 700) + call(cx, 600, 130, 520) + call(cx + 32, 480, 470, 400) + call(lx, 150, 880, 130) + call(lx, 560, 880, 520) + call(lx + 33, 400, 940, 330) + call(lx, 880, 880, 940);
  return svg(o);
}

// ---------- Compound light microscope, section: light path from source to eyepiece ----------
function microscopeSection(callouts, see) {
  const GL = 'rgba(160,205,240,0.75)'; const BODY = see ? 'rgba(207,216,220,0.35)' : '#cfd8dc';
  let o = '';
  // base + arm (C-shaped)
  o += P('M250,900 H700 Q740,900 740,860 V820 H250 Z', BODY, INK, 5);
  o += P('M650,820 V440 Q650,300 560,240', 'none', INK, 78) + P('M650,820 V440 Q650,300 560,240', 'none', '#cfd8dc', 66);
  // stage with slide + specimen, condenser, diaphragm, light source
  o += R(340, 700, 330, 24, BODY, `stroke="${INK}" stroke-width="5"`);
  o += R(430, 684, 160, 14, '#ffffff', `stroke="${INK}" stroke-width="3"`) + C(512, 691, 6, '#7e57c2');
  o += `<ellipse cx="512" cy="760" rx="46" ry="13" fill="${GL}" stroke="${INK}" stroke-width="4"/>`;
  o += R(458, 780, 40, 12, '#37474f') + R(526, 780, 40, 12, '#37474f');
  o += C(512, 850, 28, '#ffd54f', `stroke="${INK}" stroke-width="4"`);
  // tube, eyepiece, nosepiece, objectives
  o += R(452, 150, 120, 440, see ? 'rgba(236,239,241,0.5)' : '#eceff1', `stroke="${INK}" stroke-width="5"`);
  o += R(474, 60, 76, 100, BODY, `stroke="${INK}" stroke-width="5"`) + `<ellipse cx="512" cy="110" rx="30" ry="9" fill="${GL}" stroke="${INK}" stroke-width="3"/>`;
  o += `<path d="M436,590 H588 L572,628 H452 Z" fill="${BODY}" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>`;
  o += R(492, 628, 40, 56, '#90a4ae', `stroke="${INK}" stroke-width="4"`) + `<ellipse cx="512" cy="680" rx="17" ry="6" fill="${GL}" stroke="${INK}" stroke-width="3"/>`;
  o += R(456, 628, 26, 40, '#90a4ae', `stroke="${INK}" stroke-width="4" transform="rotate(-18 469 628)"`) + R(542, 628, 26, 40, '#90a4ae', `stroke="${INK}" stroke-width="4" transform="rotate(18 555 628)"`);
  // light path: widens through the condenser, converges at the slide, then runs up the tube to the eyepiece
  o += `<path d="M512,846 L470,770 L506,688 L512,680 L506,640 L505,125 L519,125 L518,640 L512,680 L518,688 L554,770 Z" fill="rgba(255,236,150,0.55)" stroke="#f9a825" stroke-width="3" stroke-dasharray="10 7"/>`;
  if (callouts) o += call(512, 115, 120, 90) + call(465, 400, 120, 330) + call(512, 660, 120, 580) + call(560, 688, 120, 740) + call(512, 760, 900, 880) + call(480, 786, 900, 780) + call(512, 850, 900, 940) + call(650, 500, 900, 400);
  return svg(o);
}

// ---------- Compound microscope seen from the ARM side (back view) ----------
function microscopeBack() {
  const BODY = '#f1ede1'; const TRIM = '#263238';
  let o = L(100, 905, 920, 905, '#9e9e9e', 4);
  o += R(300, 820, 424, 85, BODY, `stroke="${INK}" stroke-width="5" rx="20"`) + C(380, 862, 10, TRIM) + C(644, 862, 10, TRIM);
  o += P('M462,820 V420 Q462,300 512,270 Q562,300 562,420 V820 Z', BODY, INK, 5);        // arm (seen from behind)
  o += R(332, 560, 360, 26, '#ddd7c4', `stroke="${INK}" stroke-width="5"`);                  // stage, wider than the arm
  o += R(486, 150, 52, 130, BODY, `stroke="${INK}" stroke-width="5"`) + R(494, 70, 36, 90, TRIM, `stroke="${INK}" stroke-width="4" rx="6"`); // tube + eyepiece
  o += R(466, 320, 92, 28, TRIM, `stroke="${INK}" stroke-width="4" rx="4"`);                 // nosepiece
  for (const [x, y] of [[380, 650], [644, 650]]) o += C(x, y, 52, '#2b2b2b', `stroke="${INK}" stroke-width="5"`) + C(x, y, 28, '#9e9e9e', `stroke="${INK}" stroke-width="4"`); // coarse + fine knobs
  o += R(430, 645, 164, 12, '#546e7a');                                                      // knob axle through the arm
  return svg(o);
}

// ---------- Triple-beam balance ----------
function tripleBeam(view) {
  const GREY = '#90a4ae'; let o = L(100, 905, 924, 905, '#9e9e9e', 4);
  if (view === 'depan' || view === 'belakang') {
    let g = '';
    g += R(140, 830, 620, 70, '#78909c', `stroke="${INK}" stroke-width="5" rx="10"`);                 // base
    g += R(430, 640, 72, 190, GREY, `stroke="${INK}" stroke-width="5"`);                               // column
    g += R(200, 590, 16, 240, '#b0bec5', `stroke="${INK}" stroke-width="4"`);                          // pan post
    g += `<ellipse cx="208" cy="580" rx="110" ry="18" fill="#eceff1" stroke="${INK}" stroke-width="5"/>`; // pan
    for (const [i, y] of [[0, 470], [1, 524], [2, 578]]) {
      g += R(450, y, 410, 14, '#cfd8dc', `stroke="${INK}" stroke-width="4" rx="3"`);                   // beam
      for (let x = 480; x < 850; x += 22) g += L(x, y + 14, x, y + 24, INK, 2);                         // notches (tick marks only)
      const rx = [640, 720, 790][i];
      g += R(rx, y - 26, 34, 28, '#37474f', `stroke="${INK}" stroke-width="3" rx="4"`);              // rider
    }
    g += R(850, 560, 10, 80, '#455a64', `stroke="${INK}" stroke-width="3"`) + L(838, 640, 872, 640, INK, 3); // pointer + zero mark
    g += C(300, 780, 20, '#546e7a', `stroke="${INK}" stroke-width="4"`);                               // zero-adjust knob
    o += view === 'belakang' ? `<g transform="translate(1024 0) scale(-1 1)">${g}</g>` : g;
  } else {
    // end-on: base foot, column, pan disc on its post, three beams seen end-on; riders / pointer closer on the scale end (kanan)
    o += R(360, 830, 304, 70, '#78909c', `stroke="${INK}" stroke-width="5" rx="10"`) + R(476, 600, 72, 230, GREY, `stroke="${INK}" stroke-width="5"`);
    o += R(504, 380, 16, 230, '#b0bec5', `stroke="${INK}" stroke-width="4"`) + `<ellipse cx="512" cy="372" rx="150" ry="30" fill="#eceff1" stroke="${INK}" stroke-width="5"/>`;
    for (const y of [470, 524, 578]) o += R(484, y, 56, 18, '#cfd8dc', `stroke="${INK}" stroke-width="4" rx="4"`);
    if (view === 'kanan') for (const y of [470, 524, 578]) o += R(494, y - 24, 36, 24, '#37474f', `stroke="${INK}" stroke-width="3" rx="4"`);
    o += C(view === 'kiri' ? 560 : 464, 790, 20, '#546e7a', `stroke="${INK}" stroke-width="4"`);
  }
  return svg(o);
}

// ---------- Seven pieces of laboratory glassware in a row ----------
function glasswareSet() {
  const GL = 'rgba(190,225,245,0.45)'; const gy = 800; let o = L(40, gy, 984, gy, '#9e9e9e', 4);
  const tick = (x0, x1, y0, y1, n) => { let t = ''; for (let i = 1; i < n; i++) { const y = y0 + ((y1 - y0) / n) * i; t += L(x0, y, x0 + (i % 5 ? 14 : 24), y, INK, 2); } return t; };
  // 1 beaker
  o += P('M64,420 L76,800 H184 L196,420', GL, INK, 5) + `<path d="M64,420 l-12,-8" stroke="${INK}" stroke-width="5"/>` + R(70, 600, 120, 196, 'rgba(100,181,246,0.35)') + tick(160, 190, 420, 800, 10);
  // 2 Erlenmeyer flask
  o += P('M268,440 H308 V540 L356,800 H220 L268,540 Z', GL, INK, 5) + R(262, 428, 52, 14, '#b0bec5', `stroke="${INK}" stroke-width="3" rx="3"`) + `<path d="M242,720 H334 L356,800 H220 Z" fill="rgba(100,181,246,0.4)"/>`;
  // 3 graduated cylinder
  o += `<polygon points="${pts([[388, 800], [408, 784], [468, 784], [488, 800]])}" fill="#cfd8dc" stroke="${INK}" stroke-width="4"/>` + R(406, 330, 64, 454, GL, `stroke="${INK}" stroke-width="5" rx="4"`) + R(409, 520, 58, 262, 'rgba(100,181,246,0.4)') + tick(446, 468, 340, 780, 20);
  // 4 round-bottom flask
  o += C(600, 690, 100, GL, `stroke="${INK}" stroke-width="5"`) + R(582, 470, 36, 130, GL, `stroke="${INK}" stroke-width="5"`) + R(576, 460, 48, 14, '#b0bec5', `stroke="${INK}" stroke-width="3" rx="3"`) + `<path d="M520,700 A100,100 0 0 0 680,700 Z" fill="rgba(100,181,246,0.4)"/>`;
  o += R(540, 790, 120, 10, '#8d6e63', `stroke="${INK}" stroke-width="3" rx="3"`);
  // 5 two test tubes in a wooden rack
  for (const x of [752, 800]) o += P(`M${x - 17},520 V736 Q${x - 17},760 ${x},760 Q${x + 17},760 ${x + 17},736 V520`, GL, INK, 4) + `<path d="M${x - 15},650 V736 Q${x - 15},758 ${x},758 Q${x + 15},758 ${x + 15},736 V650 Z" fill="rgba(100,181,246,0.4)"/>`;
  o += R(722, 600, 110, 14, '#a1744a', `stroke="${INK}" stroke-width="4"`) + R(730, 614, 12, 186, '#a1744a', `stroke="${INK}" stroke-width="3"`) + R(812, 614, 12, 186, '#a1744a', `stroke="${INK}" stroke-width="3"`) + R(722, 786, 110, 14, '#a1744a', `stroke="${INK}" stroke-width="3"`);
  // 6 dropper pipette with rubber bulb
  o += `<path d="M884,500 V736 L892,790 L900,736 V500 Z" fill="${GL}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>` + `<path d="M876,500 Q892,420 908,500 Z" fill="#8e1b19" stroke="${INK}" stroke-width="4"/>`;
  // 7 glass stirring rod, lying
  o += L(836, 780, 986, 760, '#78909c', 10) + L(836, 780, 986, 760, GL, 5);
  return svg(o);
}

// ---------- Electric bell, flat side elevation: U-electromagnet, armature on a spring strip, hammer, gong, contact screw ----------
function electricBell() {
  const COPPER = '#d98a4a'; const IRON = '#78909c'; const BRASS = '#d4af37';
  let o = '';
  o += R(110, 780, 804, 56, '#a1744a', `stroke="${INK}" stroke-width="5" rx="6"`) + R(90, 836, 844, 26, '#7b5530', `stroke="${INK}" stroke-width="5" rx="6"`);
  // gong (bell dome seen from the side as a disc) on its stand
  o += R(738, 690, 44, 90, '#90a4ae', `stroke="${INK}" stroke-width="5"`) + C(760, 510, 190, '#cfd8dc', `stroke="${INK}" stroke-width="6"`) + C(760, 510, 150, 'none', `stroke="#eceff1" stroke-width="10"`) + C(760, 510, 30, '#90a4ae', `stroke="${INK}" stroke-width="5"`);
  // U-shaped electromagnet: iron yoke at the left, two cores with copper windings, pole tips at the right
  o += R(160, 330, 30, 270, IRON, `stroke="${INK}" stroke-width="5"`);
  for (const y of [345, 495]) {
    o += R(190, y + 20, 290, 40, IRON, `stroke="${INK}" stroke-width="4"`);
    o += R(230, y, 190, 80, COPPER, `stroke="${INK}" stroke-width="5" rx="6"`);
    for (let x = 242; x < 420; x += 12) o += L(x, y + 4, x, y + 76, '#8e4a14', 3);
    o += R(222, y - 8, 14, 96, '#cfd8dc', `stroke="${INK}" stroke-width="4"`) + R(414, y - 8, 14, 96, '#cfd8dc', `stroke="${INK}" stroke-width="4"`);
  }
  // armature (flat iron plate) a small gap in front of the pole tips, hinged on a spring strip fixed to the base
  o += R(496, 330, 24, 270, '#546e7a', `stroke="${INK}" stroke-width="5" rx="4"`);
  o += R(456, 722, 70, 58, '#90a4ae', `stroke="${INK}" stroke-width="5"`) + R(500, 600, 12, 128, '#b0bec5', `stroke="${INK}" stroke-width="3"`);
  // hammer: rod from the armature, ball just in front of the gong rim
  o += L(520, 450, 556, 450, '#37474f', 10) + C(566, 450, 20, '#b0bec5', `stroke="${INK}" stroke-width="4"`);
  // contact screw (brass) touching the armature from a post on the right
  o += R(560, 270, 18, 70, '#90a4ae', `stroke="${INK}" stroke-width="4"`) + R(520, 297, 42, 14, BRASS, `stroke="${INK}" stroke-width="3"`) + R(506, 292, 16, 24, BRASS, `stroke="${INK}" stroke-width="3" rx="3"`);
  // terminals and wires
  o += C(170, 806, 14, BRASS, `stroke="${INK}" stroke-width="3"`) + C(222, 806, 14, BRASS, `stroke="${INK}" stroke-width="3"`);
  o += P('M170,806 V640 Q170,610 190,600', 'none', '#c62828', 5) + P('M222,806 Q300,760 330,700 V580', 'none', '#263238', 5);
  return svg(o);
}

// ---------- Pinhole camera, FRONT face: opaque black box, foil patch with one tiny hole ----------
function pinholeFront() {
  let o = R(150, 190, 724, 640, '#1c1c1c', `stroke="${INK}" stroke-width="6" rx="8"`);
  o += R(150, 190, 724, 18, '#2b2b2b') + R(150, 812, 724, 18, '#2b2b2b');
  o += R(396, 428, 232, 232, '#cfd8dc', `stroke="${INK}" stroke-width="4"`);
  for (const [x1, y1, x2, y2] of [[396, 440, 560, 660], [440, 428, 628, 560], [396, 520, 520, 428], [500, 660, 628, 520]]) o += L(x1, y1, x2, y2, '#90a4ae', 3);
  o += C(512, 544, 7, '#000');
  for (const [x, y, w, h] of [[430, 190, 160, 36], [430, 794, 160, 36], [150, 450, 40, 130], [834, 450, 40, 130]]) o += R(x, y, w, h, '#474747', 'opacity="0.85"');
  return svg(o);
}

// ---------- Pedestal fan, strict RIGHT side profile: cage / blades on the right, motor housing on the left ----------
function fanRight() {
  const GREY = '#cfd8dc'; const cy = 380;
  let o = L(120, 945, 910, 945, '#9e9e9e', 4);
  o += P('M470,925 C380,935 330,905 300,928 C270,952 330,952 380,938', 'none', '#212121', 7); // power cord
  o += `<ellipse cx="500" cy="905" rx="190" ry="34" fill="#b0bec5" stroke="${INK}" stroke-width="5"/><ellipse cx="500" cy="892" rx="190" ry="34" fill="${GREY}" stroke="${INK}" stroke-width="5"/>`;
  o += C(612, 896, 8, '#546e7a', `stroke="${INK}" stroke-width="3"`) + C(642, 892, 8, '#546e7a', `stroke="${INK}" stroke-width="3"`);
  o += R(482, 580, 36, 312, '#eceff1', `stroke="${INK}" stroke-width="5"`);
  o += R(470, 620, 60, 30, '#78909c', `stroke="${INK}" stroke-width="5" rx="6"`);
  o += R(462, 468, 76, 120, GREY, `stroke="${INK}" stroke-width="5" rx="14"`) + C(500, 500, 10, '#90a4ae', `stroke="${INK}" stroke-width="3"`);
  o += R(448, 330, 150, 140, '#1b1b1b', `stroke="${INK}" stroke-width="5" rx="48"`) + R(500, 306, 16, 28, '#455a64', `stroke="${INK}" stroke-width="3" rx="3"`);
  for (let y = 360; y < 440; y += 12) o += L(460, y, 484, y, '#555', 3);
  o += R(596, cy - 8, 74, 16, '#455a64', `stroke="${INK}" stroke-width="3"`);
  // guard cage seen from the side: back ring, smaller front ring, wires between them; blades edge-on inside
  o += `<ellipse cx="672" cy="${cy}" rx="10" ry="150" fill="rgba(66,133,244,0.8)" stroke="#1565c0" stroke-width="3"/>`;
  o += `<ellipse cx="636" cy="${cy}" rx="11" ry="236" fill="none" stroke="${INK}" stroke-width="6"/>`;
  o += `<ellipse cx="712" cy="${cy}" rx="11" ry="180" fill="none" stroke="${INK}" stroke-width="5"/>`;
  for (const h of [-236, -176, -118, -59, 0, 59, 118, 176, 236]) o += L(636, cy + h, 712, cy + h * 0.763, INK, 3);
  return svg(o);
}

// ---------- Refractor telescope, lengthwise section: objective, rays converging, star diagonal, eyepiece, finder ----------
function telescopeSection(callouts) {
  const GL = 'rgba(160,205,240,0.85)'; const TUBE = 'rgba(236,239,241,0.55)';
  let o = '';
  // tripod + mount head
  const hx = 480; const hy = 505;
  o += L(hx, hy, 340, 890, '#78909c', 12) + L(hx, hy, hx, 890, '#78909c', 12) + L(hx, hy, 630, 890, '#78909c', 12);
  o += R(hx - 70, hy - 30, 140, 40, '#b0bec5', `stroke="${INK}" stroke-width="5" rx="6"`) + C(hx, hy - 10, 9, '#455a64');
  // main tube with dew shield, dark interior
  o += R(180, 372, 600, 96, '#2b2f36', `stroke="${INK}" stroke-width="5" rx="6"`) + R(150, 356, 150, 128, TUBE, `stroke="${INK}" stroke-width="5" rx="6"`);
  // objective lens (biconvex)
  o += P('M214,384 Q246,420 214,456 Q182,420 214,384 Z', GL, INK, 4);
  // rays: parallel in, converge toward the focus which lies after the 45° diagonal, up the eyepiece barrel
  const ray = (y) => `<path d="M214,${y} L720,${420 + (y - 420) * 0.13} L720,340" fill="none" stroke="#ffe082" stroke-width="3" stroke-dasharray="9 6"/>`;
  o += ray(396) + ray(420) + ray(444);
  const out = (dx) => `<path d="M720,340 L${720 + dx},262 L${720 + dx},200" fill="none" stroke="#ffe082" stroke-width="3" stroke-dasharray="9 6"/>`;
  o += out(-14) + out(0) + out(14);
  // star diagonal housing, 45° mirror, eyepiece barrel + lens
  o += R(690, 396, 60, 70, '#cfd8dc', `stroke="${INK}" stroke-width="5" rx="6"`) + L(702, 452, 740, 408, '#90a4ae', 8);
  o += R(704, 236, 32, 164, '#cfd8dc', `stroke="${INK}" stroke-width="5"`) + `<ellipse cx="720" cy="262" rx="20" ry="7" fill="${GL}" stroke="${INK}" stroke-width="3"/>` + R(698, 220, 44, 18, '#455a64', `stroke="${INK}" stroke-width="4" rx="4"`);
  // finder scope
  o += R(330, 306, 180, 34, '#eceff1', `stroke="${INK}" stroke-width="5" rx="6"`) + `<ellipse cx="338" cy="323" rx="6" ry="14" fill="${GL}" stroke="${INK}" stroke-width="3"/>` + R(366, 340, 12, 32, '#90a4ae') + R(462, 340, 12, 32, '#90a4ae');
  if (callouts) o += call(214, 420, 100, 280) + call(260, 400, 100, 580) + call(560, 420, 200, 700) + call(720, 430, 900, 540) + call(720, 262, 900, 250) + call(420, 323, 560, 150) + call(hx, hy - 10, 900, 720);
  return svg(o);
}

// ---------- Loudspeaker and dynamic microphone cut through the middle ----------
function speakerSection() {
  let o = ''; const cx = 300; const rim = 440; // rim height of the cone; coil former at y=545
  // steel basket arms + back plate
  o += L(130, rim - 10, 226, 696, '#90a4ae', 14) + L(470, rim - 10, 374, 696, '#90a4ae', 14);
  o += R(212, 694, 176, 30, '#78909c', `stroke="${INK}" stroke-width="4"`);
  // ring magnet (two blocks in section) + pole piece
  o += R(226, 622, 58, 72, '#e53935', `stroke="${INK}" stroke-width="4"`) + R(316, 622, 58, 72, '#e53935', `stroke="${INK}" stroke-width="4"`) + R(284, 548, 32, 146, '#b0bec5', `stroke="${INK}" stroke-width="4"`);
  // voice coil (copper) around the pole piece, inside the magnetic gap
  o += R(266, 546, 14, 88, '#d98a4a', `stroke="${INK}" stroke-width="3"`) + R(320, 546, 14, 88, '#d98a4a', `stroke="${INK}" stroke-width="3"`);
  for (let y = 552; y < 632; y += 10) o += L(266, y, 280, y, '#8e4a14', 2) + L(320, y, 334, y, '#8e4a14', 2);
  // paper cone from the rim to the coil former, dust cap, rubber surround, spider
  o += L(146, rim + 6, 266, 548, '#d2b48c', 12) + L(454, rim + 6, 334, 548, '#d2b48c', 12);
  o += `<path d="M266,548 Q${cx},484 334,548 Z" fill="#37474f" stroke="${INK}" stroke-width="4"/>`;
  o += P(`M112,${rim + 6} Q140,${rim - 46} 170,${rim + 6}`, 'none', '#111', 12) + P(`M430,${rim + 6} Q460,${rim - 46} 488,${rim + 6}`, 'none', '#111', 12);
  const zig = (x0, x1, y) => { let d = `M${x0},${y}`; const n = 7; for (let i = 1; i <= n; i++) d += ` L${f(x0 + ((x1 - x0) / n) * i)},${y + (i % 2 ? -12 : 12)}`; return P(d, 'none', '#fbc02d', 5); };
  o += zig(234, 266, 600) + zig(334, 366, 600);
  // microphone: handle, grille (mesh), diaphragm, coil, magnet
  const mx = 770;
  o += R(mx - 42, 500, 84, 370, '#1b1b1b', `stroke="${INK}" stroke-width="5" rx="14"`);
  o += C(mx, 400, 104, 'rgba(207,216,220,0.6)', `stroke="${INK}" stroke-width="5"`);
  for (let a = -90; a <= 90; a += 30) o += L(mx - 100 * Math.cos(rad(a)), 400 + 100 * Math.sin(rad(a)), mx + 100 * Math.cos(rad(a)), 400 + 100 * Math.sin(rad(a)), '#90a4ae', 2);
  o += R(mx - 70, 388, 140, 8, '#81d4fa', `stroke="${INK}" stroke-width="2"`);
  o += R(mx - 18, 396, 36, 34, '#d98a4a', `stroke="${INK}" stroke-width="3"`);
  for (let y = 400; y < 428; y += 7) o += L(mx - 18, y, mx + 18, y, '#8e4a14', 2);
  o += R(mx - 52, 430, 104, 56, '#e53935', `stroke="${INK}" stroke-width="4"`) + R(mx - 8, 430, 16, 40, '#b0bec5');
  // callouts, circles ordered top-to-bottom to avoid crossings
  const left = [[140, rim - 30], [200, rim + 50], [300, 515], [175, 570], [250, 600], [270, 590], [250, 660]];
  const ys = [160, 270, 380, 490, 600, 710, 820];
  left.forEach(([px, py], i) => { o += call(px, py, 70, ys[i]); });
  const right = [[mx + 70, 340], [mx - 60, 388], [mx + 10, 414], [mx + 30, 458], [mx + 36, 700]];
  const ry = [160, 290, 420, 550, 780];
  right.forEach(([px, py], i) => { o += call(px, py, 950, ry[i]); });
  return svg(o);
}

// ================= IPA 05: Bumi & antariksa =================

// ---------- Sun slice + the eight planets in order, relative DIAMETERS to scale (Earth = 14 px) ----------
function solarSystemRow() {
  const k = 17; const cy = 512;
  const planets = [
    ['merkurius', 0.383, '#9e9e9e'], ['venus', 0.949, '#e9cf9f'], ['bumi', 1, '#2f78c9'], ['mars', 0.532, '#c1440e'],
    ['jupiter', 11.21, '#d9b48a'], ['saturnus', 9.45, '#e6cf92'], ['uranus', 4.01, '#a9e4ea'], ['neptunus', 3.88, '#3f5bd1'],
  ];
  let o = '<defs><radialGradient id="sun" cx="0.7" cy="0.5" r="0.7"><stop offset="0" stop-color="#fff59d"/><stop offset="0.6" stop-color="#ffb300"/><stop offset="1" stop-color="#ef6c00"/></radialGradient></defs>';
  o += C(-790, cy, 926, 'url(#sun)');         // a slice of the Sun (diameter ≈ 109 Earths at this scale)
  let x = 168;
  for (const [name, rel, col] of planets) {
    const r = (rel * k) / 2;
    const ext = name === 'saturnus' ? r * 2.2 : r;       // Saturn's rings are wider than the globe
    x += ext;
    if (name === 'saturnus') o += `<ellipse cx="${f(x)}" cy="${cy}" rx="${f(r * 2.1)}" ry="${f(r * 0.5)}" fill="none" stroke="#c9b27a" stroke-width="${f(r * 0.3)}" transform="rotate(-18 ${f(x)} ${cy})"/>`;
    o += C(x, cy, r, col);
    if (name === 'saturnus') o += `<path d="M${f(x - r * 2.1)},${cy} A${f(r * 2.1)},${f(r * 0.5)} 0 0 0 ${f(x + r * 2.1)},${cy}" fill="none" stroke="#c9b27a" stroke-width="${f(r * 0.3)}" transform="rotate(-18 ${f(x)} ${cy})"/>`;
    if (name === 'bumi') o += C(x - 3, cy - 2, r * 0.45, '#4caf50') + C(x + 4, cy + 4, r * 0.3, '#4caf50');
    if (name === 'jupiter') {
      o += `<clipPath id="jc"><circle cx="${f(x)}" cy="${cy}" r="${f(r)}"/></clipPath><g clip-path="url(#jc)">`;
      for (const [dy, c] of [[-0.55, '#a1704a'], [-0.2, '#f1dcc0'], [0.15, '#b9805a'], [0.5, '#e8c9a0']]) o += R(x - r, cy + dy * r - r * 0.09, 2 * r, r * 0.18, c);
      o += `<ellipse cx="${f(x + r * 0.2)}" cy="${f(cy + r * 0.35)}" rx="${f(r * 0.18)}" ry="${f(r * 0.1)}" fill="#c0392b"/></g>`;
    }
    x += ext + 12;
  }
  return svg(o, '#000');
}

// ---------- Orion: star positions from RA/Dec, no text ----------
function orion() {
  const ra0 = 5.58; const sc = 34; const cx = 512; const cy = 500;
  const X = (ra) => cx - (ra - ra0) * 15 * sc; const Y = (dec) => cy - dec * sc;
  const S = {
    betelgeuse: [5.919, 7.41, 15, '#ffb27a'], bellatrix: [5.419, 6.35, 11, '#cfe3ff'], mintaka: [5.533, -0.30, 9, '#cfe3ff'], alnilam: [5.603, -1.20, 11, '#cfe3ff'],
    alnitak: [5.679, -1.94, 11, '#cfe3ff'], saiph: [5.796, -9.67, 9, '#cfe3ff'], rigel: [5.242, -8.20, 17, '#aad4ff'], meissa: [5.585, 9.93, 6, '#ffffff'],
  };
  let o = '<defs><radialGradient id="neb"><stop offset="0" stop-color="#ff80ab" stop-opacity="0.75"/><stop offset="1" stop-color="#ff80ab" stop-opacity="0"/></radialGradient></defs>';
  // faint background stars (deterministic)
  const rnd = rng(11); for (let i = 0; i < 110; i++) o += C(rnd() * S0, rnd() * S0, 1 + rnd() * 1.6, '#ffffff', `opacity="${f(0.25 + rnd() * 0.5)}"`);
  const P2 = (n) => [X(S[n][0]), Y(S[n][1])];
  const link = (a, b) => { const [x1, y1] = P2(a); const [x2, y2] = P2(b); return L(x1, y1, x2, y2, '#90a4c0', 2, 'opacity="0.55"'); };
  o += link('betelgeuse', 'meissa') + link('meissa', 'bellatrix') + link('betelgeuse', 'alnitak') + link('bellatrix', 'mintaka') + link('alnitak', 'alnilam') + link('alnilam', 'mintaka') + link('alnitak', 'saiph') + link('mintaka', 'rigel');
  o += `<ellipse cx="${f(X(5.59))}" cy="${f(Y(-5.4))}" rx="40" ry="62" fill="url(#neb)"/>`;
  for (const n of Object.keys(S)) { const [x, y] = P2(n); const r = S[n][2]; o += C(x, y, r * 2.2, S[n][3], 'opacity="0.18"') + C(x, y, r, S[n][3]) + C(x, y, r * 0.45, '#ffffff'); }
  return svg(o, '#04060d');
}
const S0 = 1024;

// ---------- Eight Moon phases (north hemisphere: waxing lit on the RIGHT, waning on the LEFT) ----------
function moonPhases() {
  const r = 48; const gap = 30; const x0 = (S0 - (8 * 2 * r + 7 * gap)) / 2 + r; const cy = 512;
  let o = '';
  for (let i = 0; i < 8; i++) {
    const cx = x0 + i * (2 * r + gap); const a = i * 45; // 0 new … 180 full … 315 waning crescent
    const waxing = a < 180; const c = Math.cos(rad(a)); const rx = Math.abs(c) * r;
    o += C(cx, cy, r, '#1d2230', 'stroke="#46506a" stroke-width="2"');
    let d = '';
    if (a === 180) d = `M${cx - r},${cy} A${r},${r} 0 1 1 ${cx + r},${cy} A${r},${r} 0 1 1 ${cx - r},${cy} Z`;
    else if (a !== 0) {
      const lim = waxing ? 1 : 0;                                   // limb arc: right side for waxing
      const term = c > 0 ? (waxing ? 0 : 1) : (waxing ? 1 : 0);    // terminator bulge direction
      d = `M${cx},${cy - r} A${r},${r} 0 0 ${lim} ${cx},${cy + r} A${f(rx)},${r} 0 0 ${term} ${cx},${cy - r} Z`;
    }
    if (d) {
      o += `<clipPath id="m${i}"><path d="${d}"/></clipPath><path d="${d}" fill="#f3eed8"/>`;
      o += `<g clip-path="url(#m${i})">${C(cx - 14, cy - 12, 13, '#cfc9ae') + C(cx + 12, cy + 4, 16, '#cfc9ae') + C(cx - 4, cy + 22, 9, '#cfc9ae') + C(cx + 20, cy - 24, 8, '#cfc9ae')}</g>`;
    }
  }
  return svg(o, '#000');
}

// ---------- Cut-away planet: quarter wedge removed, concentric layers inside (to scale, crust exaggerated) ----------
function cutawayPlanet(kind, callouts, see) {
  const cx = 480; const cy = 540; const Rr = 360;
  const E = kind === 'earth';
  let L1;
  if (E) L1 = [[1.0, '#7b5230'], [0.975, '#f0902a'], [0.546, '#ffb300'], [0.191, '#fff9c4']];            // crust, mantle, outer core, inner core
  else L1 = [[1.0, '#e0b98d'], [0.97, '#f2c98a'], [0.80, '#8aa0b4'], [0.22, '#5d4037']];                  // cloud tops, H–He gas, metallic H, core
  let o = '';
  const surf = E ? '#2f78c9' : '#e8c9a0';
  o += `<path d="M${cx},${cy} L${cx},${cy - Rr} A${Rr},${Rr} 0 1 0 ${cx + Rr},${cy} Z" fill="${see ? (E ? 'rgba(47,120,201,0.35)' : 'rgba(232,201,160,0.5)') : surf}" stroke="${INK}" stroke-width="5"/>`;
  if (E) { o += `<path d="M${cx - 250},${cy - 120} q40,-60 100,-30 q30,50 -20,90 q-60,10 -80,-60 Z" fill="#43a047"/><path d="M${cx - 200},${cy + 160} q60,-30 110,20 q-10,60 -80,50 q-40,-30 -30,-70 Z" fill="#43a047"/>`; }
  else { o += `<clipPath id="pj"><path d="M${cx},${cy} L${cx},${cy - Rr} A${Rr},${Rr} 0 1 0 ${cx + Rr},${cy} Z"/></clipPath><g clip-path="url(#pj)">`; for (const [dy, c] of [[-0.7, '#a1704a'], [-0.4, '#f5e6c8'], [-0.1, '#b9805a'], [0.25, '#f1dcc0'], [0.55, '#a1704a']]) o += R(cx - Rr, cy + dy * Rr - 14, 2 * Rr, 28, c, 'opacity="0.9"'); o += '</g>'; }
  // interior layers in the removed quadrant (quarter discs, outermost first)
  for (const [fr, c] of L1) o += `<path d="M${cx},${cy} L${cx},${f(cy - Rr * fr)} A${f(Rr * fr)},${f(Rr * fr)} 0 0 1 ${f(cx + Rr * fr)},${cy} Z" fill="${c}" stroke="#fff" stroke-width="2.5" stroke-dasharray="9 6"/>`;
  o += L(cx, cy, cx, cy - Rr, INK, 4) + L(cx, cy, cx + Rr, cy, INK, 4);
  if (callouts) {
    const a = rad(-45); const at = (fr) => [cx + Rr * fr * Math.cos(a), cy + Rr * fr * Math.sin(a)];
    const pts4 = L1.map(([fr], i) => at(i === 0 ? 0.992 : (fr + (L1[i + 1] ? L1[i + 1][0] : 0)) / 2));
    pts4.forEach(([px, py], i) => { o += call(px, py, 900, 120 + i * 80); });
    o += call(cx - 230, cy + 30, 90, 800);
  }
  return svg(o, E ? '#fff' : '#000');
}

// ---------- Soil profile monolith: O (litter/humus), A (topsoil + roots + worm), B (clay), C (weathered rock), R (bedrock) ----------
function soilProfile(view, callouts) {
  const wide = view === 'depan' || view === 'belakang' || view === 'penampang';
  const x0 = wide ? 316 : 424; const w = wide ? 392 : 176; const top = 190;
  const H = [['O', 70, '#4e342e'], ['A', 140, '#3b2a20'], ['B', 190, '#b5651d'], ['C', 160, '#d7b98e'], ['R', 130, '#78909c']];
  let o = ''; let y = top;
  // grass blades on top
  for (let i = 0; i < Math.floor(w / 16); i++) o += `<path d="M${x0 + 8 + i * 16},${top} l4,-34 l5,34 Z" fill="#43a047"/>`;
  const ys = {};
  for (const [name, h, col] of H) {
    ys[name] = y;
    o += R(x0, y, w, h, col, `stroke="${INK}" stroke-width="3"`);
    y += h;
  }
  const front = view === 'depan' || view === 'penampang';
  // texture + contents
  const rnd = rng(5);
  for (let i = 0; i < Math.floor(w / 22); i++) o += `<path d="M${x0 + 10 + i * 22},${ys.O + 10} q10,18 22,6 q-6,22 -18,26 q-12,-8 -4,-32 Z" fill="#6d4c41" opacity="0.8"/>`;   // leaf litter
  if (front) {
    for (const [rx, ry] of [[x0 + 70, ys.A + 20], [x0 + 190, ys.A + 24], [x0 + 300, ys.A + 18]]) o += P(`M${rx},${ry} q10,30 -8,60 q-6,20 8,40`, 'none', '#d7ccc8', 4) + P(`M${rx},${ry + 30} q22,8 34,28`, 'none', '#d7ccc8', 3);
    o += P(`M${x0 + 120},${ys.A + 100} q16,-16 30,0 q16,16 30,0 q16,-16 30,0`, 'none', '#e57373', 8) + C(x0 + 120, ys.A + 100, 6, '#c62828');  // earthworm
  } else for (let i = 0; i < 5; i++) o += L(x0 + 12 + rnd() * (w - 24), ys.A + 18, x0 + 12 + rnd() * (w - 24), ys.A + 118, '#6d4c41', 2);
  for (let i = 0; i < 10; i++) o += C(x0 + 14 + rnd() * (w - 28), ys.B + 14 + rnd() * 160, 3 + rnd() * 3, '#8d4a12');
  for (let i = 0; i < Math.floor(w / 40); i++) o += `<polygon points="${pts([[x0 + 16 + i * 40, ys.C + 36], [x0 + 40 + i * 40, ys.C + 20], [x0 + 52 + i * 40, ys.C + 48], [x0 + 26 + i * 40, ys.C + 60]])}" fill="#a1887f" stroke="${INK}" stroke-width="2"/>`;
  for (let i = 0; i < Math.floor(w / 60); i++) o += `<polygon points="${pts([[x0 + 20 + i * 60, ys.C + 110], [x0 + 60 + i * 60, ys.C + 100], [x0 + 70 + i * 60, ys.C + 140], [x0 + 28 + i * 60, ys.C + 144]])}" fill="#bcaaa4" stroke="${INK}" stroke-width="2"/>`;
  for (let i = 0; i < 4; i++) o += L(x0, ys.R + 24 + i * 28, x0 + w, ys.R + 6 + i * 28, '#546e7a', 3);
  // horizon boundaries (dashed) between layers
  for (const n of ['A', 'B', 'C', 'R']) o += L(x0, ys[n], x0 + w, ys[n], '#ffffff', 3, 'stroke-dasharray="12 8"');
  if (callouts) ['O', 'A', 'B', 'C', 'R'].forEach((n, i) => { o += call(x0 + w - 24, ys[n] + 30, 930, ys[n] + 40); });
  o += L(150, y, 874, y, '#9e9e9e', 4);
  return svg(o);
}

// ---------- Primary + secondary rainbow (red OUTSIDE on the primary, reversed on the secondary), dark band between ----------
function rainbow() {
  const cx = 512; const cy = 800; const col = ['#e53935', '#fb8c00', '#fdd835', '#43a047', '#1e88e5', '#3949ab', '#8e24aa'];
  let o = '<defs><radialGradient id="sky" cx="0.5" cy="0.8" r="0.9"><stop offset="0" stop-color="#27385f"/><stop offset="0.45" stop-color="#16213b"/><stop offset="1" stop-color="#0a1020"/></radialGradient></defs>';
  o += R(0, 0, S0, S0, 'url(#sky)');
  o += `<path d="M${cx - 440},${cy} A440,440 0 0 1 ${cx + 440},${cy} L${cx + 330},${cy} A330,330 0 0 0 ${cx - 330},${cy} Z" fill="#060a14" opacity="0.55"/>`; // Alexander's dark band
  const bw = 10;
  col.forEach((c, i) => { const r = 380 - i * bw; o += `<path d="M${cx - r},${cy} A${r},${r} 0 0 1 ${cx + r},${cy}" fill="none" stroke="${c}" stroke-width="${bw + 0.5}"/>`; });              // primary: red outer
  col.forEach((c, i) => { const r = 470 + i * bw; o += `<path d="M${cx - r},${cy} A${r},${r} 0 0 1 ${cx + r},${cy}" fill="none" stroke="${c}" stroke-width="${bw + 0.5}" opacity="0.45"/>`; }); // secondary: red inner
  o += `<path d="M0,${cy} Q200,${cy - 70} 380,${cy - 10} T760,${cy - 20} T1024,${cy - 50} V1024 H0 Z" fill="#0d2615"/>`;
  return svg(o);
}

// ---------- Volcano cut through the centre: chamber, conduit, side vent, lava/ash layers, crater, ash column ----------
function volcanoSection(callouts, see) {
  const cx = 512; const gy = 560;
  let o = R(0, gy, S0, 1024 - gy, '#8d6e63');                                   // surrounding crust
  for (let i = 0; i < 9; i++) o += L(0, gy + 40 + i * 52, S0, gy + 20 + i * 52, '#6d4c41', 3, 'opacity="0.5"');
  // cone built of alternating layers (parallel to the slope)
  const layers = [['#4a4a4a', 0], ['#bcaaa4', 24], ['#4a4a4a', 48], ['#bcaaa4', 72], ['#4a4a4a', 96], ['#bcaaa4', 120]];
  layers.forEach(([c, off], i) => { const t = 270 + off * 0.5; o += `<polygon points="${pts([[cx - 330 + off * 1.1, gy], [cx - 46 + off * 0.35, t], [cx + 46 - off * 0.35, t], [cx + 330 - off * 1.1, gy]])}" fill="${c}" stroke="${INK}" stroke-width="2"/>`; });
  o += `<polygon points="${pts([[cx - 46, 270], [cx - 24, 292], [cx + 24, 292], [cx + 46, 270]])}" fill="#2b2b2b"/>`;                // crater
  // magma chamber, conduit, side vent
  o += `<ellipse cx="${cx}" cy="850" rx="190" ry="85" fill="#e64a19" stroke="${INK}" stroke-width="5"/><ellipse cx="${cx}" cy="850" rx="130" ry="50" fill="#ff8f00"/>`;
  o += R(cx - 22, 290, 44, 560, '#ff7043', `stroke="${INK}" stroke-width="3"`);
  o += `<polygon points="${pts([[cx + 22, 640], [cx + 22, 700], [cx + 218, 450], [cx + 190, 420]])}" fill="#ff7043" stroke="${INK}" stroke-width="3"/>`;
  // lava flow on the outer slope + ash column
  o += `<path d="M${cx + 204},435 L${cx + 262},505 L${cx + 300},545 L${cx + 330},560 L${cx + 296},560 L${cx + 236},498 Z" fill="#ff6f00" stroke="${INK}" stroke-width="3"/>`;
  const ash = [[cx, 250, 46], [cx - 30, 190, 52], [cx + 34, 150, 58], [cx - 10, 96, 62], [cx + 50, 70, 50]];
  for (const [x, y, r] of ash) o += C(x, y, r, see ? 'rgba(120,120,120,0.55)' : '#757575', 'stroke="#424242" stroke-width="3"');
  if (callouts) o += call(cx, 850, 100, 900) + call(cx, 540, 920, 640) + call(cx + 120, 540, 920, 560) + call(cx - 150, 450, 100, 420) + call(cx, 280, 100, 250) + call(cx + 10, 130, 920, 120) + call(cx + 262, 505, 920, 420) + call(cx - 450, 700, 100, 700);
  return svg(o, '#cfe9ff');
}

// ---------- Same beach, high tide (left) and low tide (right) ----------
function tides() {
  const panel = (x0, yW, high) => {
    const w = 480; const top = 220; const bot = 800;
    const slope = (x) => 740 - ((x - x0) * 150) / w;               // sand surface height at x
    const xw = x0 + ((740 - yW) * w) / 150;                         // where the water level meets the sand
    let g = R(x0, top, w, bot - top, '#d7efff', `stroke="${INK}" stroke-width="4"`);
    g += `<polygon points="${pts([[x0, 740], [x0 + w, 590], [x0 + w, bot], [x0, bot]])}" fill="#f2d49b"/>`;
    for (const px of [x0 + 150, x0 + 230, x0 + 310]) g += R(px - 6, 556, 12, slope(px) - 556, '#6d4c1f', `stroke="${INK}" stroke-width="2"`);   // jetty posts
    g += R(x0 + 120, 544, 250, 14, '#a1744a', `stroke="${INK}" stroke-width="3"`);                                                           // jetty deck
    // boat: floating at high tide, resting on the sand at low tide
    const bx = high ? x0 + 60 : x0 + 215; const by = high ? yW - 6 : slope(bx) - 2;
    g += `<path d="M${bx - 38},${by - 20} H${bx + 38} L${bx + 24},${by + 4} H${bx - 24} Z" fill="#e53935" stroke="${INK}" stroke-width="3"/>`;
    // sea (translucent so the lower part of the posts is seen through it)
    g += `<polygon points="${pts([[x0, yW], [xw, yW], [x0, 740]])}" fill="rgba(41,128,200,0.78)"/>`;
    g += L(x0 + 10, yW, xw, yW, '#ffffff', 3, 'opacity="0.7"');
    // palm tree
    const tx = x0 + 420; const ty = slope(tx);
    g += P(`M${tx},${ty} q-14,-90 8,-170`, 'none', '#8d6e63', 12);
    for (const [dx, dy] of [[-70, 18], [-40, -22], [0, -34], [40, -18], [72, 22]]) g += P(`M${tx + 8},${ty - 170} q${dx * 0.5},${dy - 40} ${dx},${dy}`, 'none', '#2e7d32', 9);
    return g;
  };
  return svg(panel(20, 614, true) + panel(524, 686, false));
}

// ================= IPA 01: sections of an egg, a leaf, roots, plant & animal cells =================

// ---------- Hen's egg, lengthwise: tiny flat air cell ONLY at the blunt (top) end ----------
function eggSection(callouts, see) {
  const EGG = 'M512,200 C660,200 750,350 750,510 C750,700 650,860 512,860 C374,860 274,700 274,510 C274,350 364,200 512,200 Z';
  const sc = (k) => `translate(512 530) scale(${k}) translate(-512 -530)`;
  let o = '';
  o += `<path d="${EGG}" fill="${see ? 'rgba(244,228,196,0.35)' : '#f3e2c4'}" stroke="#a1887f" stroke-width="14"/>`;               // shell
  o += `<g transform="${sc(0.955)}"><path d="${EGG}" fill="#fdf6cf" stroke="#ffffff" stroke-width="4"/></g>`;                         // membranes + thin albumen
  o += `<g transform="${sc(0.62)}"><path d="${EGG}" fill="#f8e58c" stroke="#e8c84a" stroke-width="3" opacity="0.9"/></g>`;           // thick albumen around the yolk
  o += `<path d="M408,270 Q512,222 616,270 Q512,296 408,270 Z" fill="#b3e5fc" stroke="#ffffff" stroke-width="3"/>`;                    // air cell, small and flat, blunt end only
  const twist = (y0, y1) => { let d = `M512,${y0}`; const n = 7; for (let i = 1; i <= n; i++) d += ` L${512 + (i % 2 ? 9 : -9)},${f(y0 + ((y1 - y0) / n) * i)}`; return `<path d="${d}" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="#d7ccc8" stroke-width="2"/>`; };
  o += twist(410, 296) + twist(640, 800);                                                                                              // chalazae to top and bottom
  o += C(512, 520, 126, '#f6a623', 'stroke="#d98a0b" stroke-width="4"') + C(512, 520, 92, 'none', 'stroke="#e08e0b" stroke-width="2.5" stroke-dasharray="6 6"') + C(512, 520, 58, 'none', 'stroke="#e08e0b" stroke-width="2.5" stroke-dasharray="6 6"');
  o += `<ellipse cx="512" cy="402" rx="24" ry="9" fill="#ffffff" stroke="#d98a0b" stroke-width="2"/>`;                                // germinal disc
  if (callouts) o += call(338, 296, 90, 180) + call(512, 402, 90, 350) + call(380, 600, 90, 520) + call(352, 745, 90, 830)
    + call(512, 246, 934, 170) + call(630, 420, 934, 330) + call(512, 350, 934, 500) + call(560, 560, 934, 670);
  return svg(o);
}

// ---------- Leaf blade, cross-section: cuticle, epidermis, palisade, spongy mesophyll, vein bundle, stomata ----------
function leafSection(callouts) {
  const x0 = 140; const x1 = 884; let o = '';
  o += R(x0, 200, x1 - x0, 10, '#b3e5fc', `stroke="${INK}" stroke-width="2"`);                                                      // upper cuticle
  const nE = 12; const wE = (x1 - x0) / nE;
  for (let i = 0; i < nE; i++) o += R(x0 + i * wE, 210, wE, 58, '#f6f9ec', `stroke="#9ccc65" stroke-width="3"`);                   // upper epidermis
  const nP = 15; const wP = (x1 - x0) / nP;
  for (let i = 0; i < nP; i++) {                                                                                                     // palisade
    o += R(x0 + i * wP + 2, 268, wP - 4, 200, '#a5d6a7', `stroke="#388e3c" stroke-width="3" rx="12"`);
    for (const dy of [14, 54, 94, 134, 174]) o += `<ellipse cx="${f(x0 + i * wP + wP / 2 - 9 + (dy % 3) * 6)}" cy="${268 + dy}" rx="7" ry="4.5" fill="#1b5e20"/>`;
  }
  o += R(x0, 468, x1 - x0, 250, '#e8f5e9');                                                                                          // spongy mesophyll
  const rnd = rng(3);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 11; c++) {
    const x = x0 + 38 + c * 66 + (r % 2) * 30 + rnd() * 10; const y = 500 + r * 62 + rnd() * 8;
    if (Math.abs(x - 512) < 120 && y > 480 && y < 640) continue;                                                                      // leave room for the vein
    o += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(27 + rnd() * 6)}" ry="${f(22 + rnd() * 5)}" fill="#c8e6c9" stroke="#388e3c" stroke-width="2.5"/>` + C(x - 6, y - 3, 3.5, '#1b5e20') + C(x + 8, y + 5, 3.5, '#1b5e20');
  }
  // vein: bundle sheath, xylem (blue, upper) and phloem (orange, lower)
  o += C(512, 560, 92, '#fff8e1', `stroke="#8d6e63" stroke-width="4"`);
  for (const [dx, dy] of [[-34, -28], [0, -40], [34, -28], [-16, -8], [18, -8]]) o += C(512 + dx, 560 + dy, 15, '#4fc3f7', `stroke="#0277bd" stroke-width="3"`);
  for (const [dx, dy] of [[-44, 30], [-14, 38], [16, 38], [46, 30], [0, 62]]) o += C(512 + dx, 560 + dy, 13, '#ffb74d', `stroke="#e65100" stroke-width="3"`);
  // lower epidermis with two stomata (guard-cell pairs with a pore) + lower cuticle
  const nL = 12; const wL = (x1 - x0) / nL;
  for (let i = 0; i < nL; i++) o += R(x0 + i * wL, 718, wL, 56, '#f6f9ec', `stroke="#9ccc65" stroke-width="3"`);
  for (const sx of [300, 730]) {
    o += `<path d="M${sx - 34},722 Q${sx - 34},768 ${sx - 4},772 Q${sx - 12},746 ${sx - 4},722 Z" fill="#2e7d32" stroke="${INK}" stroke-width="3"/>`;
    o += `<path d="M${sx + 34},722 Q${sx + 34},768 ${sx + 4},772 Q${sx + 12},746 ${sx + 4},722 Z" fill="#2e7d32" stroke="${INK}" stroke-width="3"/>`;
    o += R(sx - 5, 722, 10, 50, '#ffffff');
  }
  o += R(x0, 774, x1 - x0, 8, '#b3e5fc', `stroke="${INK}" stroke-width="2"`);
  if (callouts) o += call(200, 205, 60, 120) + call(260, 240, 60, 260) + call(330, 380, 60, 400) + call(220, 600, 60, 560)
    + call(512, 520, 960, 330) + call(512, 600, 960, 520) + call(600, 746, 960, 700) + call(300, 748, 60, 860);
  return svg(o);
}

// ---------- Root systems: dicot taproot (left) and monocot fibrous root (right) + cross-section discs ----------
function rootsSeeThrough(callouts) {
  let o = '';
  const rootStroke = (d, w) => P(d, 'none', '#8d6e63', w + 5) + P(d, 'none', '#d7b98e', w);
  // left: mango — thick central taproot with laterals and root hairs
  o += R(130, 150, 280, 24, '#6d4c41', `stroke="${INK}" stroke-width="3"`);
  o += P('M270,174 V210', 'none', '#43a047', 14);
  o += rootStroke('M270,210 C268,330 272,430 270,540', 22) + rootStroke('M270,260 C210,280 160,320 130,380', 8) + rootStroke('M270,290 C330,310 380,350 410,410', 8) + rootStroke('M270,360 C210,380 170,430 150,480', 7) + rootStroke('M270,400 C330,420 365,460 380,510', 7);
  for (let i = 0; i < 24; i++) { const y = 240 + i * 12; o += L(262, y, 252 - (i % 3) * 3, y + 6, '#ffffff', 1.5) + L(278, y, 288 + (i % 3) * 3, y + 6, '#ffffff', 1.5); }
  // right: rice — dense tuft of equal fibrous roots
  o += R(614, 150, 280, 24, '#6d4c41', `stroke="${INK}" stroke-width="3"`);
  o += P('M754,174 V215', 'none', '#7cb342', 10) + P('M738,174 V210', 'none', '#7cb342', 7) + P('M770,174 V210', 'none', '#7cb342', 7);
  for (let i = 0; i < 14; i++) { const a = -62 + i * 9.5; const x1 = 754 + Math.sin(rad(a)) * 130; const y1 = 215 + Math.cos(rad(a)) * 300; o += rootStroke(`M754,215 C${f(754 + Math.sin(rad(a)) * 40)},${f(300)} ${f(x1 - Math.sin(rad(a)) * 20)},${f(y1 - 90)} ${f(x1)},${f(y1)}`, 5); }
  // cross-section discs under each system
  const disc = (cx, cy, dicot) => {
    let g = '';
    for (let i = 0; i < 40; i++) { const a = rad(i * 9); g += L(cx + 148 * Math.cos(a), cy + 148 * Math.sin(a), cx + 168 * Math.cos(a), cy + 168 * Math.sin(a), '#ffffff', 2, 'stroke-linecap="round"'); }
    g += C(cx, cy, 148, '#d7b98e', `stroke="#8d6e63" stroke-width="4"`) + C(cx, cy, 128, '#e8d4b0') + C(cx, cy, 78, '#6d4c41') + C(cx, cy, 70, '#f6e7a1', `stroke="#d4b100" stroke-width="3"`) + C(cx, cy, 64, '#e8d4b0');
    if (dicot) {
      const arm = (a) => `<polygon points="${pts([[cx, cy], [cx + 10 * Math.cos(rad(a + 90)), cy + 10 * Math.sin(rad(a + 90))], [cx + 56 * Math.cos(rad(a)), cy + 56 * Math.sin(rad(a))], [cx + 10 * Math.cos(rad(a - 90)), cy + 10 * Math.sin(rad(a - 90))]])}" fill="#4fc3f7" stroke="#0277bd" stroke-width="2"/>`;
      for (const a of [0, 90, 180, 270]) g += arm(a);
      for (const a of [45, 135, 225, 315]) g += C(cx + 42 * Math.cos(rad(a)), cy + 42 * Math.sin(rad(a)), 11, '#ffb74d', `stroke="#e65100" stroke-width="2"`);
    } else {
      g += C(cx, cy, 44, '#fff8e1');                                   // large central pith
      for (let i = 0; i < 12; i++) { const a = rad(i * 30); g += C(cx + 54 * Math.cos(a), cy + 54 * Math.sin(a), 5.5, '#4fc3f7', `stroke="#0277bd" stroke-width="1.5"`) + C(cx + 54 * Math.cos(a + rad(15)), cy + 54 * Math.sin(a + rad(15)), 5, '#ffb74d', `stroke="#e65100" stroke-width="1.5"`); }
    }
    return g;
  };
  o += disc(270, 800, true) + disc(754, 800, false);
  if (callouts) o += call(270, 800 - 140, 90, 700) + call(270 + 100, 800, 420, 700) + call(754 - 20, 800 - 50, 960, 720) + call(754, 800, 960, 880);
  return svg(o);
}

// ---------- Plant cell, cut face: central vacuole holds ONLY sap; organelles sit in the thin peripheral cytoplasm ----------
function plantCellSection(callouts) {
  const x0 = 170; const y0 = 230; const w = 684; const h = 560; const wall = 26; const cyto = 50;
  let o = R(x0, y0, w, h, '#a1744a', `stroke="${INK}" stroke-width="4" rx="10"`);                                                    // cell wall
  o += R(x0 + wall, y0 + wall, w - 2 * wall, h - 2 * wall, '#fff9c4', `stroke="#f9a825" stroke-width="4" rx="6"`);                    // membrane (yellow line)
  o += R(x0 + wall + 4, y0 + wall + 4, w - 2 * wall - 8, h - 2 * wall - 8, '#c8e6c9');                                                // thin cytoplasm layer
  // vacuole = inner rectangle minus a notch at the bottom-left corner where the nucleus sits
  const vx0 = x0 + wall + cyto; const vy0 = y0 + wall + cyto; const vx1 = x0 + w - wall - cyto; const vy1 = y0 + h - wall - cyto; const nt = 112;
  o += `<polygon points="${pts([[vx0, vy0], [vx1, vy0], [vx1, vy1], [vx0 + nt, vy1], [vx0 + nt, vy1 - nt], [vx0, vy1 - nt]])}" fill="#b3e5fc" stroke="#4fc3f7" stroke-width="3"/>`;
  const chloro = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="30" ry="15" fill="#43a047" stroke="#1b5e20" stroke-width="3"/>` + L(x - 14, y, x + 14, y, '#1b5e20', 2) + L(x - 10, y - 5, x + 10, y - 5, '#1b5e20', 2) + L(x - 10, y + 5, x + 10, y + 5, '#1b5e20', 2);
  const mito = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="22" ry="11" fill="#ff8a65" stroke="#bf360c" stroke-width="3"/><path d="M${x - 14},${y} q5,-7 9,0 t9,0 t9,0" fill="none" stroke="#bf360c" stroke-width="2"/>`;
  const topY = y0 + wall + cyto / 2 + 2; const botY = y0 + h - wall - cyto / 2 - 2; const leftX = x0 + wall + cyto / 2 + 2; const rightX = x0 + w - wall - cyto / 2 - 2;
  o += chloro(330, topY) + chloro(520, topY) + chloro(720, topY) + chloro(rightX, 440) + chloro(leftX, 420) + chloro(640, botY) + chloro(rightX, 640);
  o += mito(420, topY) + mito(rightX, 540) + mito(500, botY);
  o += `<path d="M${x0 + 420},${botY} q16,-12 32,0 t32,0 t32,0" fill="none" stroke="#4fc3f7" stroke-width="5"/>`;                       // ER
  for (let i = 0; i < 4; i++) o += `<path d="M${770 - i * 6},${botY - 12 + i * 7} q12,-6 24,0" fill="none" stroke="#fbc02d" stroke-width="6" stroke-linecap="round"/>`; // Golgi
  o += C(vx0 + 52, vy1 - 52, 50, '#ce93d8', `stroke="#6a1b9a" stroke-width="4"`) + C(vx0 + 46, vy1 - 46, 15, '#4a148c');           // nucleus + nucleolus
  for (const y of [360, 560]) o += R(x0 - 2, y, wall + 4, 12, '#fff3e0', `stroke="${INK}" stroke-width="2"`);                        // plasmodesmata
  o += R(500, y0 - 2, 12, wall + 4, '#fff3e0', `stroke="${INK}" stroke-width="2"`);
  if (callouts) o += call(x0 + 8, 500, 70, 460) + call(x0 + wall + 2, 420, 70, 330) + call(512, 520, 960, 520) + call(rightX, 480, 960, 400) + call(330, topY, 70, 130)
    + call(vx0 + 52, vy1 - 52, 70, 880) + call(420, topY, 960, 150) + call(x0 + 450, botY, 400, 940) + call(772, botY - 4, 960, 880) + call(x0 + 6, 366, 70, 240);
  return svg(o);
}

// ---------- Intact plant cell: rigid box seen from the left / right, tan cellulose wall with plasmodesmata ----------
function plantCellBox(view) {
  const flip = view === 'kanan' ? -1 : 1; const cx = 512; const cy = 560; const dx = 230; const dy = 120; const hgt = 330;
  const P3 = (a, b, c) => [cx + flip * (a * dx - b * dx * 0.55), cy + (a * dy * 0.6 + b * dy * 0.75) - c * hgt];
  const face = (ps, fill) => `<polygon points="${pts(ps.map(([a, b, c]) => P3(a, b, c)))}" fill="${fill}" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>`;
  let o = face([[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], '#d7b98e');
  o += face([[0, 1, 0], [1, 1, 0], [1, 1, 1], [0, 1, 1]], '#b98b5a') + face([[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]], '#a1744a');
  for (const [a, b, c] of [[0.3, 1, 0.6], [0.7, 1, 0.35], [1, 0.3, 0.55], [1, 0.7, 0.3]]) { const [x, y] = P3(a, b, c); o += C(x, y, 7, '#fff3e0', `stroke="${INK}" stroke-width="2"`); }
  return svg(o);
}

// ---------- Animal cell: 'wedge' (quarter cut away), 'intact' (membrane surface, seed varies the view), 'see' (see-through) ----------
function animalCell(mode, seed = 1) {
  const cx = 512; const cy = 540; const Rr = 330;
  const rnd = rng(seed * 17 + 3);
  let o = '<defs><radialGradient id="cellg" cx="0.38" cy="0.35" r="0.8"><stop offset="0" stop-color="#ffe9d6"/><stop offset="1" stop-color="#f6b58a"/></radialGradient></defs>';
  const org = () => {
    let g = '';
    g += C(cx, cy, 124, '#b39ddb', `stroke="#4527a0" stroke-width="5"`) + C(cx, cy, 112, 'none', 'stroke="#7e57c2" stroke-width="2" stroke-dasharray="5 7"') + C(cx - 8, cy + 8, 36, '#4a148c');
    for (let i = 0; i < 4; i++) g += `<path d="M${cx + 140 + i * 11},${cy - 120 + i * 12} q80,-30 130,${20 + i * 6}" fill="none" stroke="#4fc3f7" stroke-width="9" stroke-linecap="round"/>`;  // rough ER
    for (let i = 0; i < 14; i++) g += C(cx + 150 + i * 9, cy - 118 + i * 3 - (i % 2 ? 7 : 0), 2.6, '#01579b');
    g += `<path d="M${cx - 230},${cy - 40} q40,-40 80,0 t80,40 t70,60" fill="none" stroke="#26a69a" stroke-width="9" stroke-linecap="round"/>`;                                          // smooth ER
    for (let i = 0; i < 4; i++) g += `<path d="M${cx + 150},${cy - 170 + i * 14} q50,-18 100,${-6 + i * 4}" fill="none" stroke="#fbc02d" stroke-width="10" stroke-linecap="round"/>`;                // Golgi
    for (const [dx, dy] of [[150, 100], [-170, -130], [60, -215], [-120, 170], [215, 60]]) g += `<ellipse cx="${cx + dx}" cy="${cy + dy}" rx="40" ry="20" fill="#ff7043" stroke="#bf360c" stroke-width="4"/><path d="M${cx + dx - 26},${cy + dy} q6,-12 13,0 t13,0 t13,0 t13,0" fill="none" stroke="#bf360c" stroke-width="2.5"/>`;
    for (const [dx, dy] of [[120, -200], [235, -70], [-235, 60], [30, 235]]) g += C(cx + dx, cy + dy, 13, '#66bb6a', `stroke="#1b5e20" stroke-width="3"`);
    for (const [dx, dy] of [[-60, -185], [200, 170]]) g += C(cx + dx, cy + dy, 24, 'rgba(255,255,255,0.7)', `stroke="#90a4ae" stroke-width="3"`);
    g += R(cx + 130, cy - 54, 14, 40, '#ce93d8', `stroke="#6a1b9a" stroke-width="2" rx="6"`) + R(cx + 118, cy - 22, 40, 14, '#ce93d8', `stroke="#6a1b9a" stroke-width="2" rx="6"`);
    const r2 = rng(99); for (let i = 0; i < 70; i++) { const a = r2() * 6.283; const r = Math.sqrt(r2()) * (Rr - 30); g += C(cx + r * Math.cos(a), cy + r * Math.sin(a), 2, '#6d4c41'); }
    return g;
  };
  if (mode === 'wedge') {
    o += `<path d="M${cx},${cy} L${cx},${cy - Rr} A${Rr},${Rr} 0 1 0 ${cx + Rr},${cy} Z" fill="url(#cellg)" stroke="#e65100" stroke-width="7"/>`;
    o += `<clipPath id="qd"><path d="M${cx},${cy} L${cx},${cy - Rr + 6} A${Rr - 6},${Rr - 6} 0 0 1 ${cx + Rr - 6},${cy} Z"/></clipPath>`;
    o += `<path d="M${cx},${cy} L${cx},${cy - Rr} A${Rr},${Rr} 0 0 1 ${cx + Rr},${cy} Z" fill="#fff0e0" stroke="#e65100" stroke-width="3" stroke-dasharray="10 8"/>`;
    o += `<g clip-path="url(#qd)">${org()}</g>`;
    o += L(cx, cy, cx, cy - Rr, INK, 4) + L(cx, cy, cx + Rr, cy, INK, 4);
  } else if (mode === 'see') {
    o += C(cx, cy, Rr, 'rgba(250,200,160,0.35)', 'stroke="#e65100" stroke-width="7"') + org();
  } else {
    o += C(cx, cy, Rr, 'url(#cellg)', 'stroke="#e65100" stroke-width="8"');
    for (let i = 0; i < 26; i++) { const a = rnd() * 6.283; const r = Math.sqrt(rnd()) * (Rr - 36); o += C(cx + r * Math.cos(a), cy + r * Math.sin(a), 5 + rnd() * 4, 'rgba(255,255,255,0.35)', 'stroke="#f48fb1" stroke-width="2"'); }
    o += `<ellipse cx="${cx - 110}" cy="${cy - 130}" rx="70" ry="36" fill="rgba(255,255,255,0.45)" transform="rotate(-35 ${cx - 110} ${cy - 130})"/>`;
  }
  return svg(o);
}

// ================= IPA 02: anatomical sections (zero text, empty callout circles) =================

// ---------- Alveolar cluster at the end of a bronchiole, one alveolus cut open, capillaries blue → red ----------
function alveolusCluster(callouts, see) {
  const A = see ? 0.55 : 1; let o = '';
  o += `<defs><linearGradient id="cap" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1e66d0"/><stop offset="0.5" stop-color="#7b5ea7"/><stop offset="1" stop-color="#e53935"/></linearGradient></defs>`;
  // blood vessels: arteriole (blue) arrives lower-left, venule (red) leaves upper-right
  o += P('M110,860 C230,840 330,780 340,664', 'none', '#0d47a1', 30) + P('M110,860 C230,840 330,780 340,664', 'none', '#1e66d0', 22);
  o += P('M640,372 C700,280 820,200 930,150', 'none', '#8e1b19', 30) + P('M640,372 C700,280 820,200 930,150', 'none', '#e53935', 22);
  // terminal bronchiole (pink tube) opening into the alveolar sacs
  o += P('M80,170 C200,190 300,300 400,420', 'none', '#c2185b', 58) + P('M80,170 C200,190 300,300 400,420', 'none', '#f8bbd0', 48);
  const sacs = [[470, 390, 80], [610, 450, 86], [600, 600, 80], [470, 650, 84], [340, 590, 78], [330, 450, 74]];
  // capillary mesh around each sac, gradient from blue (left) to red (right)
  for (const [x, y, r] of sacs) for (const k of [10, 20]) o += `<circle cx="${x}" cy="${y}" r="${r + k}" fill="none" stroke="url(#cap)" stroke-width="5" stroke-dasharray="${k === 10 ? '34 10' : '22 14'}" opacity="${A}"/>`;
  for (const [x, y, r] of sacs) o += C(x, y, r, `rgba(255,224,230,${see ? 0.45 : 0.92})`, `stroke="#c2185b" stroke-width="4"`);
  // the cut-open alveolus (second sac): dashed air–blood barrier + air inside, dots for O2 (red) and CO2 (blue)
  const [cx, cy, cr] = sacs[1];
  o += C(cx, cy, cr - 14, '#fffafa', `stroke="#c2185b" stroke-width="3" stroke-dasharray="9 7"`);
  for (const [dx, dy] of [[-34, -30], [-10, 18], [24, -20], [-40, 24], [30, 30], [8, -48]]) o += C(cx + dx, cy + dy, 6.5, '#e53935');                 // O2 moving from the air toward the blood
  for (const [dx, dy] of [[52, 10], [58, -22], [44, 44], [-58, 4]]) o += C(cx + dx, cy + dy, 6.5, '#1e66d0');                                         // CO2 moving from the blood into the air
  // sac walls toward the bronchiole
  for (const [x, y] of [[400, 420]]) o += C(x, y, 24, '#f8bbd0', `stroke="#c2185b" stroke-width="4"`);
  if (callouts) o += call(230, 250, 70, 150) + call(270, 590, 70, 480) + call(215, 820, 70, 820) + call(cx - cr + 6, cy, 950, 420)
    + call(cx + 36, cy - 34, 950, 560) + call(cx + 56, cy + 12, 950, 700) + call(800, 190, 950, 140) + call(600, 690, 950, 850);
  return svg(o);
}

// ---------- Stomach, front half cut away: wall layers visible at the cut edge, rugae inside ----------
function stomachSection() {
  const body = 'M400,250 C300,170 200,230 190,360 C180,520 280,700 470,740 C600,770 720,720 760,640 L780,560 C700,570 600,560 540,500 C480,440 440,340 400,250 Z';
  const centre = body;
  let o = '';
  // esophagus (top) and duodenum (right)
  o += P('M420,60 V240', 'none', '#b66a3c', 58) + P('M420,60 V240', 'none', '#ffccbc', 46);
  o += P('M772,600 C840,594 890,560 906,490', 'none', '#bf6b1e', 52) + P('M772,600 C840,594 890,560 906,490', 'none', '#ffb74d', 40);
  // lumen
  o += `<path d="${body}" fill="#ffe4e1"/>`;
  o += `<clipPath id="lum"><path d="${body}"/></clipPath><g clip-path="url(#lum)">`;
  for (let i = 0; i < 9; i++) { const y = 230 + i * 62; o += P(`M170,${y} q70,-34 130,0 t130,0 t130,0 t130,0 t130,0`, 'none', '#e57373', 12) + P(`M170,${y - 4} q70,-34 130,0 t130,0 t130,0 t130,0 t130,0`, 'none', '#ffcdd2', 4); }
  o += '</g>';
  // wall layers at the cut edge: stroke the outline with decreasing widths (serosa, 3 muscle layers, submucosa, mucosa)
  const bands = [[86, '#f48fb1'], [78, '#ad1457'], [66, '#d32f2f'], [54, '#ef5350'], [42, '#fff59d'], [30, '#ff8a80']];
  for (const [w, c] of bands) o += P(centre, 'none', c, w);
  o += P(centre, 'none', '#ffe4e1', 0.1);
  // sphincters: dark pink rings at the cardia and the pylorus
  o += `<ellipse cx="420" cy="246" rx="36" ry="12" fill="#c2185b" stroke="${INK}" stroke-width="3"/><ellipse cx="772" cy="598" rx="14" ry="38" fill="#c2185b" stroke="${INK}" stroke-width="3" transform="rotate(8 772 598)"/>`;
  if (true) o += call(420, 110, 90, 120) + call(420, 246, 90, 250) + call(250, 280, 90, 400) + call(450, 560, 90, 780) + call(775, 600, 950, 700) + call(895, 520, 950, 400)
    + call(190, 400, 90, 560) + call(300, 700, 380, 940) + call(520, 745, 700, 940) + call(600, 500, 950, 150);
  return svg(o);
}

// ---------- Eye, horizontal section: cornea at the left, retina with fovea (on the axis) and blind spot at the right ----------
function eyeSection(callouts) {
  const cx = 590; const cy = 520; const xl = cx - 205; let o = '';
  const yo = (r) => Math.sqrt(r * r - 205 * 205);
  o += `<defs><radialGradient id="vit" cx="0.35" cy="0.5" r="0.8"><stop offset="0" stop-color="#f1f8ff"/><stop offset="1" stop-color="#d9ecfb"/></radialGradient></defs>`;
  o += `<path d="M${xl},${f(cy - yo(246))} A246,246 0 1 1 ${xl},${f(cy + yo(246))} Z" fill="url(#vit)"/>`;                                          // vitreous humor
  const arc = (r, w, c) => P(`M${xl},${f(cy - yo(r))} A${r},${r} 0 1 1 ${xl},${f(cy + yo(r))}`, 'none', c, w);
  o += arc(246, 24, '#bdbdbd') + arc(246, 18, '#f5f5f5');                                                                                         // sclera
  o += arc(229, 12, '#4e342e');                                                                                                                   // choroid
  o += arc(218, 10, '#e64a19');                                                                                                                   // retina
  const ang = rad(22); const bx = cx + 218 * Math.cos(ang); const by = cy + 218 * Math.sin(ang);
  o += P(`M${f(bx + 2)},${f(by + 8)} L${f(bx + 118)},${f(by + 62)}`, 'none', '#bf9b00', 46) + P(`M${f(bx + 2)},${f(by + 8)} L${f(bx + 118)},${f(by + 62)}`, 'none', '#ffe082', 36);
  o += C(bx, by, 11, '#ffffff', `stroke="#9e9e9e" stroke-width="2"`);                                                                           // blind spot (optic disc)
  o += C(cx + 218, cy, 9, '#ffd600', `stroke="#f57f17" stroke-width="2"`);                                                                        // fovea, exactly on the axis
  // front: aqueous humor, cornea dome (attached to the sclera), ciliary body, iris, suspensory ligaments, lens
  o += `<path d="M${xl},${f(cy - yo(246))} A150,150 0 0 0 ${xl},${f(cy + yo(246))} L${cx - 150},${cy + 132} L${cx - 132},${cy + 58} L${cx - 128},${cy} L${cx - 132},${cy - 58} L${cx - 150},${cy - 132} Z" fill="#e1f5fe"/>`;
  o += P(`M${xl},${f(cy - yo(246))} A150,150 0 0 0 ${xl},${f(cy + yo(246))}`, 'none', '#29b6f6', 18) + P(`M${xl},${f(cy - yo(246))} A150,150 0 0 0 ${xl},${f(cy + yo(246))}`, 'none', '#e1f5fe', 9);
  for (const s of [-1, 1]) {
    o += `<polygon points="${pts([[cx - 207, cy + s * 130], [cx - 150, cy + s * 150], [cx - 102, cy + s * 88], [cx - 146, cy + s * 78]])}" fill="#f48fb1" stroke="${INK}" stroke-width="3"/>`;
    o += L(cx - 150, cy + s * 132, cx - 132, cy + s * 58, '#8d5524', 24);
    for (const k of [0, 1, 2]) o += L(cx - 112 + k * 5, cy + s * (88 - k * 4), cx - 96 + k * 8, cy + s * (62 - k * 2), '#ffffff', 1.8);
  }
  o += `<ellipse cx="${cx - 94}" cy="${cy}" rx="34" ry="84" fill="#fff59d" stroke="${INK}" stroke-width="4"/>`;                                      // lens
  if (callouts) {
    const left = [[299, cy], [350, cy - 10], [cx - 141, cy - 95], [cx - 141, cy + 8], [cx - 94, cy - 30], [cx - 151, cy + 111], [cx - 104, cy + 75]];
    left.sort((a, b) => a[1] - b[1]).forEach(([px, py], i) => { o += call(px, py, 70, 120 + i * 120); });
    const right = [[cx + 60, cy - 60], [cx + 167, cy - 140], [cx + 218, cy], [cx + 78, cy - 215], [cx + 231, cy - 84], [bx, by], [bx + 60, by + 35]];
    right.sort((a, b) => a[1] - b[1]).forEach(([px, py], i) => { o += call(px, py, 954, 120 + i * 120); });
  }
  return svg(o);
}

// ---------- Kidney, coronal section: capsule, cortex, pyramids, columns, calyces, pelvis, ureter, hilum vessels ----------
function kidneySection() {
  const shape = 'M560,170 C730,170 840,330 840,520 C840,720 730,860 560,860 C450,860 380,810 410,730 C440,670 520,640 520,520 C520,420 440,380 410,300 C390,230 460,170 560,170 Z';
  let o = '';
  const c = [600, 520]; const rB = 285; const rA = 125;
  const pol = (r, a) => [c[0] + r * 0.65 * Math.cos(rad(a)), c[1] + r * 1.05 * Math.sin(rad(a))];
  // hilum vessels: renal artery (red) above, renal vein (blue) below, entering the sinus
  o += P('M110,430 C240,420 360,430 508,452', 'none', '#8e1b19', 30) + P('M110,430 C240,420 360,430 508,452', 'none', '#e53935', 22);
  o += P('M110,620 C240,630 360,620 508,598', 'none', '#0d47a1', 36) + P('M110,620 C240,630 360,620 508,598', 'none', '#1e66d0', 28);
  o += `<path d="${shape}" fill="#b5483f" stroke="#ffd0c8" stroke-width="12"/>`;                                                                   // capsule + cortex / columns
  o += `<path d="${shape}" fill="none" stroke="#7b2b24" stroke-width="3"/>`;
  const angles = [-100, -70, -40, -10, 20, 50, 80, 110];
  for (const a of angles) {
    const [x1, y1] = pol(rB, a - 12); const [x2, y2] = pol(rB, a + 12); const [x3, y3] = pol(rA, a);
    o += `<polygon points="${pts([[x1, y1], [x2, y2], [x3, y3]])}" fill="#6d1f2a" stroke="#4a1018" stroke-width="2"/>`;
    for (const k of [-0.5, 0, 0.5]) { const [sx, sy] = pol(rB - 16, a + k * 14); const [ex, ey] = pol(rA + 18, a + k * 3); o += L(sx, sy, ex, ey, '#a14654', 2); }
    const [kx, ky] = pol(rA - 14, a);                                                                                                           // minor calyx cup at the tip
    o += `<circle cx="${f(kx)}" cy="${f(ky)}" r="14" fill="#fff59d" stroke="#f9a825" stroke-width="3"/>`;
  }
  // cortex / medulla boundary: dashed arc along the bases of the pyramids
  const [ax, ay] = pol(rB, -112); const [bx2, by2] = pol(rB, 122);
  o += `<path d="M${f(ax)},${f(ay)} A${f(rB * 0.65)},${f(rB * 1.05)} 0 0 1 ${f(bx2)},${f(by2)}" fill="none" stroke="#ffe0b2" stroke-width="3" stroke-dasharray="10 8"/>`;
  // major calyces → renal pelvis (in the sinus, at the hilum) → ureter leaving downward
  const px = c[0] - 80;
  for (const a of [-70, -10, 50, 110]) { const [kx, ky] = pol(rA - 14, a); const d = `M${f(kx)},${f(ky)} L${px},${c[1] + (a > 0 ? 24 : -24)}`; o += P(d, 'none', '#f9a825', 20) + P(d, 'none', '#ffee58', 12); }
  o += `<path d="M${px},${c[1] - 50} L${px},${c[1] + 50} L${px - 92},${c[1] + 16} L${px - 92},${c[1] - 16} Z" fill="#ffee58" stroke="#f9a825" stroke-width="4" stroke-linejoin="round"/>`;
  o += P(`M${px - 70},${c[1] + 16} C${px - 100},${c[1] + 130} ${px - 80},${c[1] + 250} ${px - 40},${c[1] + 390}`, 'none', '#f9a825', 38) + P(`M${px - 70},${c[1] + 16} C${px - 100},${c[1] + 130} ${px - 80},${c[1] + 250} ${px - 40},${c[1] + 390}`, 'none', '#ffee58', 28);
  const [ux, uy] = pol(rB - 40, 80); const [kc, kd] = pol(rB - 20, -10);
  o += call(560, 188, 760, 80) + call(790, 400, 950, 280) + call(kc, kd, 950, 520) + call(ux, uy, 950, 760) + call(pol(rA - 14, 20)[0], pol(rA - 14, 20)[1], 560, 920)
    + call(px - 50, c[1], 70, 300) + call(px - 70, c[1] + 220, 70, 880) + call(250, 427, 70, 150) + call(250, 626, 70, 700);
  return svg(o);
}

// ---------- Honey bee seen from BEHIND: abdomen + sting nearest, head small at the far end, wings folded over the back ----------
function beeRear() {
  const cx = 512; let o = '';
  const mirror = (fn) => fn(1) + fn(-1);
  const X = (dx) => cx + dx;
  // legs first (behind the body): front pair short, middle pair, hind pair with pollen baskets
  o += mirror((s) => P(`M${X(s * 34)},238 L${X(s * 78)},262 L${X(s * 104)},236`, 'none', '#3e2723', 7));                                        // front legs
  o += mirror((s) => P(`M${X(s * 60)},312 L${X(s * 150)},352 L${X(s * 178)},430 L${X(s * 168)},470`, 'none', '#3e2723', 8));                      // middle legs
  o += mirror((s) => P(`M${X(s * 70)},352 L${X(s * 170)},418 L${X(s * 196)},560 L${X(s * 178)},628`, 'none', '#3e2723', 10));                     // hind legs
  // pollen baskets (corbiculae) on the hind tibiae: orange pollen pellets
  o += mirror((s) => `<ellipse cx="${X(s * 186)}" cy="${492}" rx="32" ry="62" fill="#ffb300" stroke="#e65100" stroke-width="4" transform="rotate(${s * 6} ${X(s * 186)} 492)"/>` + C(X(s * 178), 470, 7, '#ffd54f') + C(X(s * 194), 500, 8, '#ffd54f') + C(X(s * 180), 525, 7, '#ffd54f'));
  // abdomen (teardrop, tip toward the viewer) with alternating amber / dark-brown bands, clipped to its outline
  const ab = 'M424,350 C380,430 368,560 408,680 C438,760 490,820 512,862 C534,820 586,760 616,680 C656,560 644,430 600,350 Z';
  o += `<clipPath id="ab"><path d="${ab}"/></clipPath><path d="${ab}" fill="#f2b134"/>`;
  o += '<g clip-path="url(#ab)">';
  [[430, 62], [552, 62], [674, 62], [796, 80]].forEach(([y, h]) => { o += `<path d="M300,${y} Q512,${y + 46} 724,${y} V${y + h} Q512,${y + h + 46} 300,${y + h} Z" fill="#3e2723"/>`; });
  o += '</g>' + `<path d="${ab}" fill="none" stroke="#3e2723" stroke-width="5"/>`;
  o += `<polygon points="${pts([[503, 852], [512, 912], [521, 852]])}" fill="#212121" stroke="#000" stroke-width="2" stroke-linejoin="round"/>`;                           // sting
  // thorax (fuzzy) and head
  o += `<ellipse cx="${cx}" cy="300" rx="96" ry="84" fill="#9a7b3f" stroke="#5d4a1f" stroke-width="5"/>`;
  for (let i = 0; i < 26; i++) { const a = (i / 26) * 6.283; o += L(cx + 70 * Math.cos(a), 300 + 60 * Math.sin(a), cx + 88 * Math.cos(a), 300 + 76 * Math.sin(a), '#6d5426', 3); }
  o += C(cx, 188, 48, '#4e342e', 'stroke="#2b1b17" stroke-width="5"') + `<ellipse cx="${X(-24)}" cy="178" rx="14" ry="20" fill="#212121"/><ellipse cx="${X(24)}" cy="178" rx="14" ry="20" fill="#212121"/>`;
  o += mirror((s) => P(`M${X(s * 16)},150 L${X(s * 52)},96 L${X(s * 86)},62`, 'none', '#212121', 6) + C(X(s * 86), 62, 6, '#212121'));                                 // elbowed antennae
  // four wings folded back over the abdomen, translucent so the stripes show through (the hind pair mostly hidden under the fore pair)
  o += mirror((s) => `<path d="M${X(s * 44)},282 C${X(s * 190)},330 ${X(s * 210)},560 ${X(s * 128)},740 C${X(s * 84)},650 ${X(s * 62)},470 ${X(s * 44)},330 Z" fill="rgba(206,224,240,0.6)" stroke="#78909c" stroke-width="3.5"/>`
    + P(`M${X(s * 52)},300 C${X(s * 130)},410 ${X(s * 140)},560 ${X(s * 128)},724`, 'none', '#78909c', 2.5) + P(`M${X(s * 70)},360 L${X(s * 164)},430`, 'none', '#78909c', 2.5) + P(`M${X(s * 76)},470 L${X(s * 176)},520`, 'none', '#78909c', 2.5));
  return svg(o);
}

// ================= Heart: posterior, left lateral and right lateral views (flat textbook schematic, zero text) =================
// Convention (same as the approved front view): arteries red, veins/cava/pulmonary arteries blue, pulmonary veins red.
const H_ART = '#e53935'; const H_ARTO = '#7f1d1d'; const H_VEIN = '#4f7be0'; const H_VEINO = '#1a3a8a'; const H_FAT = '#f2cf6a'; const H_LINE = '#5a1a18';
const hdefs = '<defs><radialGradient id="myo" cx="0.38" cy="0.32" r="0.9"><stop offset="0" stop-color="#d36a5f"/><stop offset="1" stop-color="#8c2d29"/></radialGradient><radialGradient id="atr" cx="0.4" cy="0.35" r="0.9"><stop offset="0" stop-color="#cf6f66"/><stop offset="1" stop-color="#a6403c"/></radialGradient></defs>';
const vessel = (d, w, c, o = '#222') => `<path d="${d}" fill="none" stroke="${o}" stroke-width="${w + 8}" stroke-linecap="butt" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="butt" stroke-linejoin="round"/>`;
const hpart = (d, fill) => `<path d="${d}" fill="${fill}" stroke="${H_LINE}" stroke-width="6" stroke-linejoin="round"/>`;
const hshine = (cx, cy, rx, ry, rot = -30) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="rgba(255,255,255,0.22)" transform="rotate(${rot} ${cx} ${cy})"/>`;

// viewed from BEHIND: person's left = viewer's left, apex points down-left; left atrium on top with 4 pulmonary veins,
// coronary sinus along the AV groove into the right atrium (right side) with SVC above and IVC below.
function heartPosterior() {
  let o = hdefs;
  o += vessel('M700,236 C610,116 380,108 268,228 L212,336', 66, H_ART, H_ARTO);                                                       // aortic arch → descending aorta (cut)
  o += vessel('M566,146 L562,90', 26, H_ART, H_ARTO) + vessel('M504,132 L498,80', 26, H_ART, H_ARTO) + vessel('M440,138 L430,90', 24, H_ART, H_ARTO);
  o += vessel('M500,352 C560,314 630,300 702,292', 46, H_VEIN, H_VEINO) + vessel('M488,354 C430,330 372,316 306,308', 44, H_VEIN, H_VEINO);   // right / left pulmonary artery
  o += vessel('M426,262 C424,290 428,314 430,332', 12, '#9e9e9e', '#555');                                                             // ligamentum arteriosum
  o += vessel('M794,190 L792,450', 54, H_VEIN, H_VEINO);                                                                              // superior vena cava
  o += vessel('M772,620 L782,860', 62, H_VEIN, H_VEINO);                                                                              // inferior vena cava
  o += vessel('M600,420 L688,352', 40, H_ART, H_ARTO) + vessel('M604,478 L690,488', 40, H_ART, H_ARTO);                                // right pulmonary veins (cut)
  o += vessel('M350,412 L252,362', 40, H_ART, H_ARTO) + vessel('M348,470 L236,486', 40, H_ART, H_ARTO);                                // left pulmonary veins (cut)
  o += hpart('M326,480 C262,640 300,820 410,888 C510,925 650,800 706,690 C742,620 738,560 700,520 L330,470 Z', 'url(#myo)');          // ventricles (left ventricle = viewer's left)
  o += hpart('M690,382 C760,372 852,424 852,524 C852,612 790,652 722,642 C662,632 640,562 650,482 C655,424 662,392 690,382 Z', 'url(#atr)'); // right atrium
  o += hpart('M338,444 C338,382 440,364 512,372 C586,378 646,402 646,452 C646,504 590,524 516,520 C436,518 338,504 338,444 Z', 'url(#atr)'); // left atrium
  o += P('M598,574 C560,684 482,792 420,874', 'none', H_FAT, 20) + P('M592,576 C554,682 478,790 414,872', 'none', H_ART, 7) + P('M610,574 C572,682 494,792 430,872', 'none', H_VEIN, 7); // posterior interventricular groove
  o += vessel('M344,552 C444,566 568,572 700,560', 26, H_VEIN, H_VEINO);                                                              // coronary sinus
  o += hshine(470, 700, 70, 150, -18);
  return svg(o);
}

// viewed from the person's LEFT: front (anterior) toward the image's left; left ventricle dominates, left auricle under the pulmonary trunk.
function heartLeftLateral() {
  let o = hdefs;
  o += vessel('M590,330 C610,130 800,100 852,262 L850,332', 70, H_ART, H_ARTO);                                                       // aortic arch (cut after the arch)
  o += vessel('M700,152 L704,94', 26, H_ART, H_ARTO) + vessel('M762,154 L770,102', 26, H_ART, H_ARTO) + vessel('M652,180 L642,130', 24, H_ART, H_ARTO);
  o += vessel('M474,292 C560,242 660,250 742,322', 58, H_VEIN, H_VEINO);                                                              // left pulmonary artery
  o += vessel('M772,426 L914,370', 40, H_ART, H_ARTO) + vessel('M778,486 L920,504', 40, H_ART, H_ARTO);                              // left pulmonary veins (cut)
  o += hpart('M580,450 C580,376 690,348 744,404 C800,462 770,544 690,548 C620,550 580,510 580,450 Z', 'url(#atr)');                   // left atrium (posterior)
  o += hpart('M640,480 C560,420 430,440 362,540 C302,630 290,762 322,832 C402,884 542,862 640,782 C742,700 762,560 640,480 Z', 'url(#myo)'); // left ventricle
  o += hpart('M440,452 C360,504 296,640 322,832 C336,742 346,596 446,470 Z', '#bf5a52');                                              // right ventricle sliver (anterior)
  o += P('M446,470 C346,598 336,744 322,832', 'none', H_FAT, 18) + P('M450,474 C352,600 342,748 330,826', 'none', H_ART, 8) + P('M438,480 C340,606 330,752 318,824', 'none', H_VEIN, 7); // anterior interventricular groove: LAD + great cardiac vein
  o += P('M524,492 C612,524 724,524 774,604', 'none', H_FAT, 16) + P('M524,492 C612,524 724,524 774,604', 'none', H_ART, 7);       // circumflex artery in the AV groove
  o += vessel('M432,474 C410,382 420,326 482,284', 62, H_VEIN, H_VEINO);                                                              // pulmonary trunk (anterior)
  o += hpart('M452,478 C446,424 522,404 564,436 C596,462 566,506 522,496 C500,492 470,494 452,478 Z', '#b8524c');                      // left auricle
  for (const [x1, y1, x2, y2] of [[480, 440, 500, 470], [508, 428, 530, 460], [538, 432, 556, 466]]) o += L(x1, y1, x2, y2, H_LINE, 3);
  o += hshine(520, 690, 70, 150, 12);
  return svg(o);
}

// viewed from the person's RIGHT: front (anterior) toward the image's right; right atrium with SVC (top) and IVC (bottom), right auricle over the aortic root.
function heartRightLateral() {
  let o = hdefs;
  // ascending aorta rises behind the auricle and arches back (cut) — kept short so it never crosses the SVC
  o += vessel('M650,430 L650,262 C650,166 566,122 498,166 L458,236', 66, H_ART, H_ARTO);
  o += vessel('M590,128 L584,76', 26, H_ART, H_ARTO) + vessel('M534,128 L526,80', 26, H_ART, H_ARTO);
  o += vessel('M424,300 L318,280', 44, H_VEIN, H_VEINO);                                                                              // right pulmonary artery (emerges behind the SVC)
  o += vessel('M262,440 L170,392', 38, H_ART, H_ARTO) + vessel('M258,572 L158,602', 38, H_ART, H_ARTO);                              // right pulmonary veins (cut)
  o += hpart('M240,510 C240,420 322,388 342,474 C362,564 320,642 266,616 C246,602 240,556 240,510 Z', 'url(#atr)');                   // left atrium peeking behind
  o += vessel('M728,520 L738,270', 58, H_VEIN, H_VEINO);                                                                              // pulmonary trunk (anterior)
  // one connected heart mass: right atrium (posterior, left) + right ventricle (anterior-inferior, right)
  o += hpart('M312,520 C312,420 410,366 540,420 C690,376 826,500 840,640 C852,760 780,864 660,872 C560,880 330,828 312,650 Z', 'url(#myo)');
  o += vessel('M428,128 L430,380', 54, H_VEIN, H_VEINO);                                                                              // superior vena cava into the top of the RA
  o += vessel('M446,884 L444,700', 62, H_VEIN, H_VEINO);                                                                              // inferior vena cava into the bottom of the RA
  o += hpart('M446,356 C538,356 584,440 584,540 C584,660 524,722 446,722 C356,722 304,648 304,544 C304,440 356,356 446,356 Z', 'url(#atr)'); // right atrium
  o += hpart('M524,410 C566,346 654,348 694,398 C716,428 684,460 628,460 C578,460 540,448 524,410 Z', '#b8524c');                     // right auricle over the aortic root
  for (const [x1, y1, x2, y2] of [[562, 372, 576, 410], [594, 362, 612, 408], [630, 364, 646, 408]]) o += L(x1, y1, x2, y2, H_LINE, 3);
  o += P('M604,458 C584,566 572,696 556,800', 'none', H_FAT, 22) + P('M608,460 C588,568 576,698 560,800', 'none', H_ART, 8) + P('M556,800 C530,838 500,856 470,862', 'none', H_ART, 8); // right AV groove + right coronary artery
  o += hshine(440, 530, 60, 120, 10) + hshine(700, 700, 60, 100, 20);
  return svg(o);
}

// ================= Liver (left / right lateral), tongue (right profile), respiratory system (see-through), potato (see-through), vaccine =================

// ---------- Liver seen from the RIGHT: thick posterior (left of picture), thin sharp inferior border toward the front (right), gallbladder fundus at the inferior border ----------
function liverRight() {
  let o = '<defs><linearGradient id="lv" x1="0.2" y1="0" x2="0.8" y2="1"><stop offset="0" stop-color="#b0503e"/><stop offset="1" stop-color="#6a2620"/></linearGradient></defs>';
  // gallbladder (pear, olive-green) lies under the liver; its fundus projects past the inferior border
  o += `<ellipse cx="716" cy="672" rx="46" ry="82" fill="#84a63a" stroke="#3f5a14" stroke-width="6" transform="rotate(28 716 672)"/>`;
  o += `<path d="M262,432 C300,300 440,236 560,250 C720,268 842,432 886,606 C760,642 520,722 330,714 C276,642 250,522 262,432 Z" fill="url(#lv)" stroke="#3b140f" stroke-width="7" stroke-linejoin="round"/>`;
  // bare area at the back (rough, darker) and the right triangular ligament
  o += `<path d="M262,432 C250,520 276,642 330,714 L360,708 C316,630 296,520 306,438 Z" fill="#8a7468" opacity="0.85"/>`;
  o += `<path d="M306,330 C360,284 440,262 520,260" fill="none" stroke="#e8c9b0" stroke-width="10" stroke-linecap="round" opacity="0.8"/>`;
  // surface vessels and sheen
  for (const d of ['M420,420 C520,400 640,430 760,520', 'M400,520 C520,500 660,540 800,600']) o += P(d, 'none', '#7a2a22', 5, 'opacity="0.6"');
  o += `<ellipse cx="560" cy="400" rx="130" ry="60" fill="rgba(255,255,255,0.18)" transform="rotate(18 560 400)"/>`;
  return svg(o);
}

// ---------- Liver seen from the LEFT: thin left lobe tapering toward the front (left of picture), falciform ligament on top, NO gallbladder visible ----------
function liverLeft() {
  let o = '<defs><linearGradient id="lv" x1="0.2" y1="0" x2="0.8" y2="1"><stop offset="0" stop-color="#b0503e"/><stop offset="1" stop-color="#6a2620"/></linearGradient></defs>';
  o += `<path d="M150,562 C250,440 380,322 520,264 C660,210 826,262 876,404 C912,512 880,640 782,692 C642,732 462,702 330,642 C250,612 192,592 150,562 Z" fill="url(#lv)" stroke="#3b140f" stroke-width="7" stroke-linejoin="round"/>`;
  // falciform ligament: thin pale membrane along the anterior-superior surface; left triangular ligament wisp at the tip
  o += `<path d="M292,404 C334,356 424,296 522,266 L534,232 C418,262 326,322 276,384 Z" fill="rgba(245,222,190,0.9)" stroke="#b79a78" stroke-width="4"/>`;
  o += `<path d="M152,560 C128,546 112,524 112,494" fill="none" stroke="#e8c9b0" stroke-width="9" stroke-linecap="round"/>`;
  for (const d of ['M300,500 C420,452 580,448 740,520', 'M350,574 C480,536 650,556 800,630']) o += P(d, 'none', '#7a2a22', 5, 'opacity="0.6"');
  o += `<ellipse cx="560" cy="400" rx="170" ry="58" fill="rgba(255,255,255,0.18)" transform="rotate(10 560 400)"/>`;
  return svg(o);
}

// ---------- Tongue in right profile (tip toward the right): papillae on the dorsum, V-row of circumvallate papillae, frenulum + deep veins underneath ----------
function tongueRight() {
  let o = '<defs><linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ee9a96"/><stop offset="1" stop-color="#c85a64"/></linearGradient></defs>';
  const S1 = [[150, 430], [260, 330], [420, 340], [560, 372]]; const S2 = [[560, 372], [700, 404], [840, 430], [910, 500]];
  const bez = (S, t) => { const u = 1 - t; return [0, 1].map((k) => u * u * u * S[0][k] + 3 * u * u * t * S[1][k] + 3 * u * t * t * S[2][k] + t * t * t * S[3][k]); };
  o += `<path d="M150,430 C260,330 420,340 560,372 C700,404 840,430 910,500 C930,540 900,580 850,594 C760,612 660,618 560,640 C470,662 400,716 300,740 C220,748 150,710 150,640 Z" fill="url(#tg)" stroke="#6e1f2a" stroke-width="7" stroke-linejoin="round"/>`;
  // underside: frenulum fold and two deep lingual veins along the lower edge
  o += `<path d="M540,646 C552,690 574,722 604,742 C612,702 618,672 624,640 Z" fill="#e8aaa6" stroke="#6e1f2a" stroke-width="4"/>`;
  o += P('M430,664 C500,640 600,618 700,602 C760,592 806,584 836,578', 'none', '#2f5fc9', 7, 'opacity="0.9"') + P('M450,680 C520,656 620,634 716,618', 'none', '#2f5fc9', 6, 'opacity="0.8"');
  // dorsal surface: filiform (tiny strokes), fungiform (round pink dots near the tip), circumvallate row (3 large bumps with a moat) in the back
  const rnd = rng(21);
  for (let i = 0; i < 110; i++) { const seg = rnd() < 0.55 ? S1 : S2; const [x, y] = bez(seg, rnd()); o += L(x, y + 4, x + 2, y - 7 - rnd() * 3, '#a8384a', 2.5); }
  for (let i = 0; i < 14; i++) { const [x, y] = bez(S2, 0.28 + rnd() * 0.66); o += C(x, y + 16 + rnd() * 10, 7, '#f6c0bc', 'stroke="#a8384a" stroke-width="2"'); }
  for (const t of [0.34, 0.5, 0.66]) { const [x, y] = bez(S1, t); o += `<circle cx="${f(x)}" cy="${f(y + 28)}" r="15" fill="#d9737a" stroke="#6e1f2a" stroke-width="3"/><circle cx="${f(x)}" cy="${f(y + 28)}" r="22" fill="none" stroke="#6e1f2a" stroke-width="2" stroke-dasharray="4 4"/>`; }
  o += `<ellipse cx="640" cy="470" rx="190" ry="24" fill="rgba(255,255,255,0.2)" transform="rotate(14 640 470)"/>`;
  return svg(o);
}

// ---------- Respiratory system, see-through lungs: larynx, ringed trachea that stops at the bifurcation, bronchial tree in BOTH lungs (right 3 lobes, left 2 + cardiac notch), thin diaphragm dome ----------
function respiratorySee() {
  let o = '';
  // diaphragm: thin dome-shaped muscle sheet under the lungs
  o += `<path d="M170,880 C300,730 724,730 854,880 L854,906 C724,770 300,770 170,906 Z" fill="#f2c6b2" stroke="#9a5a48" stroke-width="5"/>`;
  for (const d of ['M300,850 C420,790 604,790 724,850', 'M400,880 C460,830 564,830 624,880']) o += P(d, 'none', '#c98e78', 3);
  // lungs (translucent so the bronchi show through)
  const rl = 'M474,262 C400,226 272,298 242,470 C222,622 250,762 332,806 C404,826 472,792 482,704 L482,330 Z';
  const ll = 'M550,262 C624,226 752,298 782,470 C802,622 774,742 700,790 C650,808 596,792 578,744 C560,690 614,640 574,592 L574,330 Z';
  o += `<path d="${rl}" fill="rgba(246,176,176,0.62)" stroke="#a24a4a" stroke-width="6" stroke-linejoin="round"/><path d="${ll}" fill="rgba(246,176,176,0.62)" stroke="#a24a4a" stroke-width="6" stroke-linejoin="round"/>`;
  // lobe fissures (dashed): right lung horizontal + oblique, left lung oblique
  for (const d of ['M246,520 L480,520', 'M262,650 C330,600 380,560 400,520', 'M776,430 C720,520 650,610 590,730']) o += P(d, 'none', '#8a3a3a', 4, 'stroke-dasharray="12 9"');
  // bronchial tree
  const br = (x, y, ang, len, d, w) => {
    if (d === 0 || len < 14) return '';
    const x2 = x + len * Math.sin(rad(ang)); const y2 = y + len * Math.cos(rad(ang));
    return L(x, y, x2, y2, '#fff6f4', w, 'opacity="0.95"') + br(x2, y2, ang - 24 - d * 3, len * 0.72, d - 1, w * 0.72) + br(x2, y2, ang + 24 + d * 2, len * 0.72, d - 1, w * 0.72);
  };
  o += `<clipPath id="lungs"><path d="${rl}"/><path d="${ll}"/></clipPath><g clip-path="url(#lungs)">`;
  o += L(512, 420, 430, 470, '#fff6f4', 20) + L(512, 420, 596, 478, '#fff6f4', 20);
  o += br(430, 470, -38, 110, 4, 13) + br(430, 470, -4, 120, 4, 13) + br(430, 470, 14, 150, 4, 13);                                    // right: upper, middle, lower lobar bronchi
  o += br(596, 478, 36, 120, 4, 13) + br(596, 478, 8, 170, 4, 13);
  o += '</g>' + L(512, 420, 462, 452, '#fff6f4', 20) + L(512, 420, 570, 458, '#fff6f4', 20);                                                                    // left: upper, lower lobar bronchi
  // trachea with C-shaped cartilage rings, larynx on top (the tube STOPS at the carina)
  o += `<rect x="494" y="196" width="36" height="226" rx="10" fill="#fbe0d8" stroke="#a24a4a" stroke-width="5"/>`;
  for (let y = 206; y < 410; y += 14) o += `<path d="M494,${y} Q512,${y + 10} 530,${y}" fill="none" stroke="#c9a79c" stroke-width="5"/>`;
  o += `<path d="M470,196 C470,150 494,110 512,110 C530,110 554,150 554,196 Z" fill="#e8c8bc" stroke="#a24a4a" stroke-width="5"/><path d="M500,196 L512,150 L524,196" fill="none" stroke="#a24a4a" stroke-width="4"/>`;
  return svg(o);
}

// ---------- Potato tuber, see-through: skin semi-transparent, cortex / vascular ring / starchy storage tissue / pith, eyes with sprouts and young roots ----------
function potatoSee() {
  const body = 'M250,566 C214,430 320,330 470,320 C610,310 780,364 812,490 C842,612 746,736 596,752 C440,770 286,704 250,566 Z';
  const sc = (k, dy = 0) => `translate(530 540) scale(${k}) translate(-530 ${-540 + dy})`;
  let o = '';
  // sprouts first (they grow out of the eyes at the upper right), pale purple-white stems with tiny leaves; fine roots at the base of the longest one
  const sprout = (x, y, tx, ty, w) => P(`M${x},${y} C${x + (tx - x) * 0.2},${y + (ty - y) * 0.5} ${tx - (tx - x) * 0.1},${ty + 40} ${tx},${ty}`, 'none', '#7d5aa6', w + 4) + P(`M${x},${y} C${x + (tx - x) * 0.2},${y + (ty - y) * 0.5} ${tx - (tx - x) * 0.1},${ty + 40} ${tx},${ty}`, 'none', '#e0cfee', w)
    + `<ellipse cx="${tx - 8}" cy="${ty + 6}" rx="9" ry="5" fill="#7cb342" stroke="#33691e" stroke-width="2" transform="rotate(-30 ${tx - 8} ${ty + 6})"/><ellipse cx="${tx + 8}" cy="${ty + 2}" rx="9" ry="5" fill="#7cb342" stroke="#33691e" stroke-width="2" transform="rotate(30 ${tx + 8} ${ty + 2})"/>`;
  o += sprout(720, 372, 780, 170, 16) + sprout(618, 340, 588, 150, 14) + sprout(520, 330, 452, 190, 13);
  // tuber: skin (semi-transparent brown), cortex, vascular ring, storage parenchyma with starch grains, pith
  o += `<path d="${body}" fill="rgba(171,124,80,0.42)" stroke="#6d4c2f" stroke-width="8" stroke-linejoin="round"/>`;
  o += `<g transform="${sc(0.955)}"><path d="${body}" fill="#f2dcae" stroke="#caa86a" stroke-width="3"/></g>`;
  o += `<g transform="${sc(0.82)}"><path d="${body}" fill="#fff6d0" stroke="#d9b44a" stroke-width="4" stroke-dasharray="10 7"/></g>`;
  o += `<g transform="${sc(0.58)}"><path d="${body}" fill="#fbf1d8" stroke="#e6cf8f" stroke-width="2"/></g>`;
  const rnd = rng(8); for (let i = 0; i < 46; i++) { const a = rnd() * 6.283; const r = 40 + Math.sqrt(rnd()) * 150; o += C(530 + r * Math.cos(a) * 1.25, 540 + r * Math.sin(a) * 0.82, 3 + rnd() * 2.5, '#ffffff', 'opacity="0.9"'); }
  for (const [x, y] of [[720, 376], [620, 344], [522, 334], [330, 470], [380, 650], [660, 700]]) o += `<ellipse cx="${x}" cy="${y}" rx="11" ry="7" fill="#7b5636" stroke="#3e2a18" stroke-width="2"/>`;   // eyes (buds)
  o += `<ellipse cx="470" cy="470" rx="150" ry="52" fill="rgba(255,255,255,0.2)" transform="rotate(-14 470 470)"/>`;
  for (const [dx, dy] of [[-30, 26], [-10, 34], [12, 32], [34, 22]]) o += L(720 + dx * 0.3, 372, 720 + dx * 1.6, 372 + dy * 1.3, '#f1ece0', 3) + L(720 + dx * 1.6, 372 + dy * 1.3, 720 + dx * 2, 372 + dy * 1.9, '#f1ece0', 2);   // young roots at the sprout base
  return svg(o);
}

// ---------- Vaccine: blank glass vial (aluminium crimp cap, grey stopper, clear liquid) + capped 3 mL syringe, graduation lines without numbers ----------
function vaccine() {
  let o = ''; const GL = 'rgba(206,232,248,0.55)';
  o += L(80, 900, 944, 900, '#bdbdbd', 4);
  o += `<path d="M236,500 H388 V820 Q388,860 348,860 H276 Q236,860 236,820 Z" fill="${GL}" stroke="#37474f" stroke-width="6" stroke-linejoin="round"/>`;
  o += `<path d="M240,640 H384 V820 Q384,856 346,856 H278 Q240,856 240,820 Z" fill="rgba(144,202,249,0.55)"/>`;
  o += R(240, 592, 144, 160, '#ffffff', 'stroke="#90a4ae" stroke-width="3"');
  o += `<path d="M262,500 V470 Q262,452 280,452 H344 Q362,452 362,470 V500 Z" fill="${GL}" stroke="#37474f" stroke-width="6"/>`;
  o += R(250, 396, 124, 76, '#cfd8dc', 'stroke="#37474f" stroke-width="6" rx="8"');
  for (const x of [270, 300, 330, 356]) o += L(x, 402, x, 466, '#90a4ae', 3);
  o += `<ellipse cx="312" cy="396" rx="62" ry="14" fill="#eceff1" stroke="#37474f" stroke-width="5"/><ellipse cx="312" cy="394" rx="30" ry="7" fill="#757575" stroke="#37474f" stroke-width="3"/>`;
  // syringe, laid diagonally to the right of the vial (scaled so it never overlaps it)
  o += '<g transform="translate(720 640) scale(0.72) rotate(-24)">';
  o += R(-300, -34, 460, 68, 'rgba(225,245,254,0.7)', 'stroke="#37474f" stroke-width="6" rx="6"');
  o += R(-300, -34, 190, 68, 'rgba(144,202,249,0.65)');
  for (let i = 0; i <= 30; i++) { const x = -110 + i * 5.3; o += L(x, -34, x, i % 5 === 0 ? -8 : -20, '#37474f', i % 5 === 0 ? 3 : 2); }
  o += R(-384, -10, 90, 20, '#cfd8dc', 'stroke="#37474f" stroke-width="5"') + R(-424, -52, 18, 104, '#b0bec5', 'stroke="#37474f" stroke-width="5" rx="4"');
  o += R(160, -50, 16, 100, '#b0bec5', 'stroke="#37474f" stroke-width="5" rx="3"');
  o += R(176, -16, 48, 32, '#90caf9', 'stroke="#37474f" stroke-width="5"');
  o += R(224, -22, 150, 44, 'rgba(129,212,250,0.55)', 'stroke="#37474f" stroke-width="5" rx="10"') + L(230, 0, 366, 0, '#546e7a', 4);
  o += '</g>';
  return svg(o);
}

// ================= Organisation levels (sparrows), frog life cycle =================

// side-view sparrow, facing right (flip = -1 faces left); (x, y) = feet position, s = scale
const sparrow = (x, y, s = 1, flip = 1) => `<g transform="translate(${x} ${y}) scale(${flip * s} ${s})">`
  + `<path d="M-10,-6 L-10,0 M8,-6 L8,0" stroke="#b07a4f" stroke-width="3" stroke-linecap="round"/>`
  + `<path d="M-30,-30 L-62,-24 L-34,-40 Z" fill="#6d4c33" stroke="#3e2a1c" stroke-width="2" stroke-linejoin="round"/>`                          // tail
  + `<ellipse cx="0" cy="-30" rx="32" ry="22" fill="#a0714a" stroke="#3e2a1c" stroke-width="2.5"/>`                                              // body
  + `<ellipse cx="6" cy="-22" rx="22" ry="12" fill="#eadfca"/>`                                                                                  // belly
  + `<path d="M-24,-34 Q-4,-48 18,-34 Q0,-26 -24,-34 Z" fill="#6d4c33" stroke="#3e2a1c" stroke-width="2"/>`                                      // wing
  + `<circle cx="26" cy="-46" r="14" fill="#8b4a2b" stroke="#3e2a1c" stroke-width="2.5"/>`                                                       // head, chestnut cap
  + `<path d="M22,-44 Q32,-34 40,-42 Q34,-36 28,-34 Z" fill="#f3ead6"/><path d="M30,-38 Q36,-30 38,-36 Z" fill="#26211c"/>`                         // cheek + bib
  + `<polygon points="38,-48 50,-44 38,-42" fill="#d9a441" stroke="#7a5a1e" stroke-width="1.5"/><circle cx="31" cy="-50" r="2.4" fill="#111"/>`   // beak + eye
  + `</g>`;
const hopper = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">`
  + `<path d="M-6,-14 L18,-40 L34,-8 M-2,-14 L6,0" fill="none" stroke="#33691e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`  // hind leg
  + `<ellipse cx="-4" cy="-18" rx="30" ry="10" fill="#8bc34a" stroke="#33691e" stroke-width="2.5"/><circle cx="-34" cy="-22" r="8" fill="#7cb342" stroke="#33691e" stroke-width="2.5"/>`
  + `<path d="M-40,-28 Q-52,-44 -66,-46 M-38,-28 Q-46,-42 -54,-52" fill="none" stroke="#33691e" stroke-width="2"/><circle cx="-37" cy="-24" r="2" fill="#111"/>`
  + `</g>`;
const grassTuft = (x, y, h = 40) => [-12, -6, 0, 6, 12].map((d, i) => `<path d="M${x + d},${y} q${d * 0.4},${-h * (0.6 + 0.1 * (i % 3))} ${d * 0.8 + (i % 2 ? 6 : -6)},${-h * (0.7 + 0.1 * (i % 3))}" fill="none" stroke="#2e7d32" stroke-width="4" stroke-linecap="round"/>`).join('');

// ---------- three scenes in one row: individu (1 sparrow) → populasi (flock of 8, one species) → komunitas (flock + grasshoppers + grass + a tree) ----------
function organizationLevels() {
  let o = '';
  const W = 300; const H = 430; const y0 = 290; const gx = (i) => 46 + i * (W + 16);
  for (let i = 0; i < 3; i++) {
    const x = gx(i);
    o += `<clipPath id="pn${i}"><rect x="${x}" y="${y0}" width="${W}" height="${H}" rx="14"/></clipPath>`;
    o += `<g clip-path="url(#pn${i})">` + R(x, y0, W, H, '#d6efff') + R(x, y0 + 250, W, H - 250, '#8bc34a') + R(x, y0 + 330, W, H - 330, '#7cb342')
      + `<ellipse cx="${x + 60}" cy="${y0 + 60}" rx="40" ry="16" fill="#ffffff" opacity="0.9"/><ellipse cx="${x + 230}" cy="${y0 + 90}" rx="50" ry="18" fill="#ffffff" opacity="0.9"/></g>`
      + `<rect x="${x}" y="${y0}" width="${W}" height="${H}" rx="14" fill="none" stroke="#5d7a2e" stroke-width="4"/>`;
    for (const dx of [40, 120, 200, 280]) o += grassTuft(x + dx, y0 + 330, 34);
  }
  // 1: individual
  o += sparrow(gx(0) + 170, y0 + 330, 1.9, 1);
  // 2: population — eight sparrows of one species, facing various ways
  const pop = [[70, 300, 1.15, 1], [150, 320, 1.2, -1], [230, 304, 1.1, 1], [110, 360, 1.25, -1], [190, 372, 1.2, 1], [262, 356, 1.1, -1], [60, 372, 1.05, 1], [150, 262, 1.0, -1]];
  for (const [dx, dy, s, fl] of pop.sort((a, b) => a[1] - b[1])) o += sparrow(gx(1) + dx, y0 + dy, s, fl);
  // 3: community — the same flock with grasshoppers, grass clumps and a small tree
  o += R(gx(2) + 236, y0 + 130, 22, 150, '#6d4c33', 'stroke="#3e2a1c" stroke-width="3"') + `<circle cx="${gx(2) + 247}" cy="${y0 + 120}" r="62" fill="#2e7d32" stroke="#1b5e20" stroke-width="4"/><circle cx="${gx(2) + 214}" cy="${y0 + 150}" r="40" fill="#388e3c"/><circle cx="${gx(2) + 284}" cy="${y0 + 146}" r="42" fill="#388e3c"/>`;
  for (const [dx, dy] of [[40, 340], [190, 300]]) o += grassTuft(gx(2) + dx, y0 + dy, 56);
  for (const [dx, dy, s, fl] of [[56, 312, 0.95, 1], [120, 300, 1.0, -1], [92, 358, 1.05, 1], [160, 346, 1.0, -1], [40, 372, 0.95, -1], [140, 392, 0.95, 1]].sort((a, b) => a[1] - b[1])) o += sparrow(gx(2) + dx, y0 + dy, s * 0.82, fl);
  for (const [dx, dy] of [[226, 352], [72, 400], [270, 396]]) o += hopper(gx(2) + dx, y0 + dy, 1.0);
  return svg(o);
}

// ---------- frog life cycle: eggs → tadpole (cut open / see-through) → froglet → adult frog ----------
function frogCycle(callouts, see) {
  let o = ''; const base = 640;
  o += L(60, base + 6, 964, base + 6, '#cfd8dc', 4);
  // 1: egg mass — transparent jelly spheres, each with a black embryo
  const rnd = rng(4);
  for (let i = 0; i < 16; i++) { const a = rnd() * 6.283; const r = Math.sqrt(rnd()) * 70; const cx = 130 + r * Math.cos(a) * 1.2; const cy = base - 60 + r * Math.sin(a) * 0.8; o += C(cx, cy, 24, 'rgba(210,235,250,0.55)', 'stroke="#78a6c4" stroke-width="3"') + C(cx, cy, 8, '#212121'); }
  // 2: tadpole (large), body + tail, internal organs shown
  const tx = 300; const ty = base - 100;
  o += `<path d="M${tx + 60},${ty - 36} C${tx + 150},${ty - 70} ${tx + 250},${ty - 30} ${tx + 300},${ty + 14} C${tx + 250},${ty + 40} ${tx + 150},${ty + 56} ${tx + 60},${ty + 40} Z" fill="${see ? 'rgba(197,214,140,0.55)' : '#c5d68c'}" stroke="#5d6b2a" stroke-width="5" stroke-linejoin="round"/>`; // tail
  for (let k = 0; k < 6; k++) { const x = tx + 100 + k * 32; o += `<path d="M${x},${ty - 24 + k * 2} L${x + 14},${ty + 4} L${x},${ty + 30 - k * 2}" fill="none" stroke="#e57373" stroke-width="5"/>`; if (k) o += L(x - 4, ty - 26 + k * 2, x - 4, ty + 32 - k * 2, '#ffffff', 2, 'stroke-dasharray="5 4"'); }  // muscle blocks (chevrons)
  o += `<ellipse cx="${tx}" cy="${ty}" rx="92" ry="64" fill="${see ? 'rgba(160,180,100,0.5)' : '#a7b86a'}" stroke="#5d6b2a" stroke-width="5"/>`;                                       // body
  o += `<path d="M${tx - 56},${ty - 6} q-18,-26 -34,-12 m18,22 q-26,-10 -38,6 m22,16 q-26,6 -30,22" fill="none" stroke="#e53935" stroke-width="6" stroke-linecap="round"/>`;                // external gills
  o += `<path d="M${tx + 14},${ty + 16} m-26,0 a26,22 0 1 1 52,0 a22,18 0 1 1 -44,0 a18,14 0 1 1 36,0 a14,10 0 1 1 -28,0" fill="none" stroke="#fb8c00" stroke-width="6"/>`;               // spiral intestine
  o += `<path d="M${tx - 44},${ty + 2} c-10,-14 -24,0 -14,12 c4,6 12,10 14,16 c2,-6 10,-10 14,-16 c10,-12 -4,-26 -14,-12 Z" fill="#c62828" stroke="#7f1d1d" stroke-width="2"/>`;           // heart
  o += `<ellipse cx="${tx + 78}" cy="${ty + 42}" rx="14" ry="9" fill="#aed581" stroke="#558b2f" stroke-width="3"/>`;                                                                   // hind-leg bud
  o += C(tx - 66, ty - 30, 7, '#111');
  // 3: froglet (four legs, shrinking tail)
  const fx = 640; const fy = base - 32;
  o += `<path d="M${fx + 40},${fy} q34,8 52,26" fill="none" stroke="#6d8f2a" stroke-width="8" stroke-linecap="round"/>`;
  o += `<ellipse cx="${fx}" cy="${fy - 8}" rx="46" ry="30" fill="#8bc34a" stroke="#33691e" stroke-width="4"/><circle cx="${fx - 38}" cy="${fy - 26}" r="16" fill="#8bc34a" stroke="#33691e" stroke-width="4"/>`;
  o += `<path d="M${fx + 20},${fy + 14} l30,26 l-14,8 M${fx - 20},${fy + 18} l-8,26 l-14,6 M${fx - 40},${fy + 6} l-30,22" fill="none" stroke="#33691e" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>` + C(fx - 44, fy - 32, 4, '#111');
  // 4: adult frog (side view, hind legs folded)
  const ax = 860; const ay = base - 46;
  o += `<ellipse cx="${ax}" cy="${ay - 6}" rx="76" ry="48" fill="#7cb342" stroke="#33691e" stroke-width="5"/><ellipse cx="${ax - 54}" cy="${ay - 34}" rx="34" ry="26" fill="#8bc34a" stroke="#33691e" stroke-width="5"/>`;
  o += `<path d="M${ax + 40},${ay + 8} q40,-10 56,34 l-60,6 M${ax - 52},${ay + 16} l-8,34 l-28,4" fill="#7cb342" stroke="#33691e" stroke-width="6" stroke-linejoin="round"/>` + C(ax - 66, ay - 50, 9, '#fff59d', 'stroke="#33691e" stroke-width="3"') + C(ax - 66, ay - 50, 4, '#111');
  for (const [dx, dy] of [[0, -20], [26, -4], [-20, 0], [40, -26]]) o += C(ax + dx, ay + dy, 7, '#558b2f');
  if (callouts) o += call(tx - 78, ty - 14, 70, 330) + call(tx + 14, ty + 16, 300, 250) + call(tx - 44, ty + 8, 540, 230) + call(tx + 170, ty - 2, 780, 320) + call(tx + 78, ty + 42, 600, 790);
  return svg(o);
}

// ---------- Rib cage: 12 rib pairs (7 true, 3 false, 2 floating), sternum (manubrium, body, xiphoid), costal cartilages, thoracic vertebrae ----------
function ribCage(view) {
  const BONE = '#f1e7cf'; const BONEO = '#7a6a45'; const CART = '#9ec1e6'; const CARTO = '#3f6a99';
  const rib = (d, w = 15) => `<path d="${d}" fill="none" stroke="${BONEO}" stroke-width="${w + 5}" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${BONE}" stroke-width="${w}" stroke-linecap="round"/>`;
  const cart = (d, w = 12) => `<path d="${d}" fill="none" stroke="${CARTO}" stroke-width="${w + 4}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${CART}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const R_ = [88, 124, 160, 192, 214, 228, 232, 230, 218, 196, 150, 110];        // half-width of each rib in the front view (widest at ribs 7–8: barrel)
  const vert = (cx, cy, w = 58, h = 26) => `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="8" fill="${BONE}" stroke="${BONEO}" stroke-width="4"/>`;
  const cx = 512; let ribs = ''; let carts = ''; let top = '';
  if (view === 'depan') {
    const att = (k) => 252 + (k - 1) * 50;                                         // where true-rib cartilage meets the sternum
    const y0 = (k) => 226 + k * 28;
    for (let k = 1; k <= 12; k++) for (const s of [-1, 1]) {
      let ye; let xe;
      if (k <= 7) { ye = att(k) + 30 + 4 * k; xe = 56 + 18 * k; }
      else if (k <= 10) { ye = 604 + (k - 7) * 26; xe = 156 + (k - 7) * 16; }
      else { ye = y0(k) + (k === 11 ? 80 : 56); xe = R_[k - 1] - 22; }
      const Rk = R_[k - 1]; const y = y0(k);
      ribs += rib(`M${cx + s * 26},${y} C${cx + s * Rk * 0.9},${y - 8} ${cx + s * (Rk + 6)},${y + (ye - y) * 0.5} ${cx + s * xe},${ye}`);
      if (k <= 7) carts += cart(`M${cx + s * xe},${ye} C${cx + s * (xe - 40)},${ye - 6} ${cx + s * 40},${att(k) + 12} ${cx + s * 16},${att(k)}`);
      else if (k <= 10) { const t = 0.3 + (k - 8) * 0.22; carts += cart(`M${cx + s * xe},${ye} L${cx + s * (16 + t * 140)},${att(7) + 30 + 28 + t * 40}`); }   // false ribs join the cartilage above
      else carts += cart(`M${cx + s * xe},${ye} l${s * 8},10`, 9);                                                                                          // floating ribs: tiny free cartilage tip
    }
    top += `<path d="M${cx - 48},224 Q${cx},208 ${cx + 48},224 L${cx + 40},294 L${cx - 40},294 Z" fill="${BONE}" stroke="${BONEO}" stroke-width="5" stroke-linejoin="round"/>`;
    top += `<rect x="${cx - 32}" y="298" width="64" height="266" rx="8" fill="${BONE}" stroke="${BONEO}" stroke-width="5"/>`;
    top += `<path d="M${cx - 17},568 L${cx},628 L${cx + 17},568 Z" fill="${BONE}" stroke="${BONEO}" stroke-width="5" stroke-linejoin="round"/>`;
    for (let k = 1; k <= 5; k++) top += L(cx - 32, 298 + k * 44, cx + 32, 298 + k * 44, BONEO, 2);
  } else if (view === 'belakang') {
    // posterior view: 12 thoracic vertebrae in the middle; ribs leave them and wrap around the sides (no sternum or cartilage visible)
    for (let k = 1; k <= 12; k++) for (const s of [-1, 1]) {
      const y = 232 + (k - 1) * 30; const Rk = R_[k - 1] + 10; const drop = k <= 10 ? 74 + k * 7 : 40;
      ribs += rib(`M${cx + s * 34},${y} C${cx + s * Rk * 0.7},${y + 4} ${cx + s * (Rk + 8)},${y + drop * 0.3} ${cx + s * (Rk - 10)},${y + drop}`);
    }
    for (let i = 0; i < 12; i++) top += `<path d="M${cx - 10},${232 + i * 30 + 8} L${cx},${232 + i * 30 + 28} L${cx + 10},${232 + i * 30 + 8} Z" fill="${BONE}" stroke="${BONEO}" stroke-width="3"/>`;
    for (let i = 0; i < 12; i++) top += vert(cx, 232 + i * 30, 52, 24);
  } else {
    // lateral views: drawn as the LEFT view (front of the body toward the picture's left); the right view is the same drawing mirrored (the cage is symmetric)
    const sx = (i) => 800 - 24 * Math.sin((i / 11) * Math.PI);                       // gentle kyphosis of the thoracic spine
    const sy = (i) => 230 + i * 32;
    const stAt = (y) => 300 + ((y - 236) / (612 - 236)) * 56;                         // sternum is a slanted bar
    const ends = {};
    for (let k = 1; k <= 12; k++) {
      const x = sx(k - 1) - 14; const y = sy(k - 1) + 6; let xe; let ye;
      if (k <= 7) { ye = 268 + (k - 1) * 50 + 40 + 6 * k; xe = stAt(ye) + 74 + 6 * k; }
      else if (k <= 10) { ye = 620 + (k - 7) * 28; xe = stAt(ye) + 150 + (k - 7) * 30; }
      else { ye = k === 11 ? 668 : 646; xe = k === 11 ? 656 : 706; }               // floating ribs: short, tips behind and above rib 10
      ends[k] = [xe, ye];
      ribs += rib(`M${x},${y} C${x - (x - xe) * 0.55},${y + 6} ${xe + (x - xe) * 0.35},${ye - (ye - y) * 0.45} ${xe},${ye}`);
      if (k <= 7) carts += cart(`M${xe},${ye} L${stAt(268 + (k - 1) * 50) + 12},${268 + (k - 1) * 50}`);
      else if (k <= 10) { const pe = ends[k - 1]; carts += cart(`M${xe},${ye} L${pe[0]},${pe[1]}`); }   // costal margin: each false rib joins the one above
      else carts += cart(`M${xe},${ye} l-10,8`, 9);
    }
    top += `<path d="M${300 - 24},236 L${300 + 24},236 L${356 + 20},${612 - 56} L${356},612 L${356 - 20},${612 - 56} Z" fill="${BONE}" stroke="${BONEO}" stroke-width="5" stroke-linejoin="round"/>`;
    for (let i = 0; i < 12; i++) top += L(sx(i) + 16, sy(i), sx(i) + 48, sy(i) + 12, BONEO, 5) + vert(sx(i), sy(i), 40, 28);
    return svg(`<g ${view === 'kanan' ? 'transform="translate(1024 0) scale(-1 1)"' : ''}>${ribs}${carts}${top}</g>`);
  }
  return svg(ribs + carts + top);
}


// ================= Urinary system, front and back: kidneys + adrenals, aorta / vena cava, ureters, bladder, urethra =================
// Anterior view: the person's LEFT is the viewer's RIGHT (left kidney higher, aorta on the viewer's right, inferior vena cava on the viewer's left).
const U_BEAN = 'M10,-148 C80,-150 96,-100 88,-50 C84,-25 60,-24 56,0 C60,26 84,32 88,56 C96,110 80,150 10,148 C-60,146 -92,90 -92,0 C-92,-90 -60,-146 10,-148 Z';
const U_ART = '#e53935'; const U_ARTO = '#7f1d1d'; const U_VEIN = '#1e66d0'; const U_VEINO = '#0d3a8a';
function urinary(view, mode, callouts) {
  // mode: 'solid' (plain), 'belah' (left kidney + bladder cut open), 'see' (see-through)
  const KR = { cx: 358, cy: 352, sgn: 1, rot: 8 };   // person's right kidney (viewer's left), lower
  const KL = { cx: 666, cy: 308, sgn: -1, rot: 8 };  // person's left kidney (viewer's right), higher
  const W = (k, x, y) => { const a = rad(k.rot); const xr = x * Math.cos(a) - y * Math.sin(a); const yr = x * Math.sin(a) + y * Math.cos(a); return [k.cx + k.sgn * xr, k.cy + yr]; };
  const tube = (d, w, c, oc) => `<path d="${d}" fill="none" stroke="${oc}" stroke-width="${w + 7}" stroke-linecap="butt" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="butt" stroke-linejoin="round"/>`;
  const PYR = [-160, -125, -90, -55, 55, 90, 125, 160];
  const kidney = (k, id, m) => {
    let o = '';
    o += `<path d="M-14,-146 C2,-170 42,-164 58,-140 C36,-130 6,-128 -14,-146 Z" fill="#f2c14e" stroke="#a07a1a" stroke-width="5" stroke-linejoin="round"/>`; // adrenal cap
    o += `<path d="${U_BEAN}" fill="${m === 'see' ? 'rgba(181,72,63,0.34)' : '#b5483f'}" stroke="#7b2b24" stroke-width="7" stroke-linejoin="round"/>`;
    if (m === 'solid') {
      o += `<ellipse cx="-40" cy="-60" rx="20" ry="54" fill="rgba(255,255,255,0.16)" transform="rotate(10 -40 -60)"/>`;
    } else {
      o += `<clipPath id="kin${id}"><path d="${U_BEAN}" transform="scale(0.8)"/></clipPath><g clip-path="url(#kin${id})">`;
      for (const a of PYR) {
        const p1 = [36 + 24 * Math.cos(rad(a)), 24 * Math.sin(rad(a))]; const b1 = [36 + 200 * Math.cos(rad(a - 14)), 200 * Math.sin(rad(a - 14))]; const b2 = [36 + 200 * Math.cos(rad(a + 14)), 200 * Math.sin(rad(a + 14))];
        o += `<polygon points="${pts([p1, b1, b2])}" fill="${m === 'see' ? 'rgba(109,31,42,0.62)' : '#6d1f2a'}" stroke="#4a1018" stroke-width="2"/>`;
        o += L(36 + 50 * Math.cos(rad(a)), 50 * Math.sin(rad(a)), 36 + 130 * Math.cos(rad(a)), 130 * Math.sin(rad(a)), '#a14654', 2);
      }
      o += '</g>';
      o += `<path d="${U_BEAN}" transform="scale(0.8)" fill="none" stroke="#ffe0b2" stroke-width="3" stroke-dasharray="10 8"/>`;      // cortex / medulla border
      for (const a of PYR) o += `<circle cx="${f(36 + 28 * Math.cos(rad(a)))}" cy="${f(28 * Math.sin(rad(a)))}" r="9" fill="#fff59d" stroke="#f9a825" stroke-width="3"/>`; // minor calyces
      o += `<path d="M24,-30 C44,-34 60,-14 78,-6 L104,-4 L104,8 L78,10 C60,16 44,34 24,30 C14,20 14,-20 24,-30 Z" fill="#ffee58" stroke="#f9a825" stroke-width="4" stroke-linejoin="round"/>`; // renal pelvis
    }
    return `<g transform="translate(${k.cx} ${k.cy}) scale(${k.sgn} 1) rotate(${k.rot})">${o}</g>`;
  };
  const bladder = 'M440,770 C440,722 584,722 584,770 C592,842 562,896 512,900 C462,896 432,842 440,770 Z';
  const sR = W(KR, 58, 14); const sL = W(KL, 58, 14);
  const ureterR = `M${f(sR[0])},${f(sR[1])} C420,470 430,560 452,650 C462,700 462,730 466,764`;
  const ureterL = `M${f(sL[0])},${f(sL[1])} C604,430 594,540 572,640 C562,700 562,730 558,764`;
  const [arR, arRy] = W(KR, 64, -14); const [veR, veRy] = W(KR, 64, 10);
  const [arL, arLy] = W(KL, 64, -14); const [veL, veLy] = W(KL, 64, 10);
  let o = '';
  // layers, named so the back view can stack them in the opposite depth order
  const rra = tube(`M${f(arR)},${f(arRy)} C470,${f(arRy - 4)} 520,330 548,334`, 16, U_ART, U_ARTO);                    // right renal artery (passes behind the vena cava)
  const ivc = tube('M478,120 L478,596', 42, U_VEIN, U_VEINO) + tube('M478,596 C466,640 450,664 436,700 M478,596 C486,640 500,664 510,700', 28, U_VEIN, U_VEINO); // vena cava + common iliac veins
  const aorta = tube('M548,120 L548,580', 30, U_ART, U_ARTO) + tube('M548,580 C556,640 586,660 604,704 M548,580 C540,630 530,660 524,704', 24, U_ART, U_ARTO); // aorta + common iliac arteries
  const lra = tube(`M${f(arL)},${f(arLy)} C592,${f(arLy - 6)} 570,296 548,294`, 16, U_ART, U_ARTO);                    // left renal artery
  const rrv = tube(`M${f(veR)},${f(veRy)} C440,${f(veRy + 2)} 470,360 478,360`, 18, U_VEIN, U_VEINO);                  // right renal vein
  const lrv = tube(`M${f(veL)},${f(veLy)} C590,${f(veLy - 40)} 566,262 546,262 C520,262 500,274 478,282`, 18, U_VEIN, U_VEINO);   // left renal vein: long, crosses in front of the aorta
  const ur = (d) => tube(d, 18, '#ffee58', '#d6a000');
  const ureters = ur(ureterR) + ur(ureterL);                                                                           // in front of the iliac vessels
  const kids = kidney(KR, 'r', mode === 'belah' ? 'solid' : mode) + kidney(KL, 'l', mode === 'belah' ? 'cut' : mode);
  o += view === 'belakang' ? lrv + ivc + rra + rrv + aorta + lra + ureters + kids : rra + ivc + aorta + lra + rrv + ureters + kids + lrv;
  // bladder + urethra
  o += tube('M512,890 L512,986', 26, '#ffee58', '#d6a000');
  if (mode === 'solid') {
    o += `<path d="${bladder}" fill="#e9a99f" stroke="#8e5a52" stroke-width="7" stroke-linejoin="round"/><ellipse cx="480" cy="800" rx="16" ry="40" fill="rgba(255,255,255,0.2)" transform="rotate(10 480 800)"/>`;
  } else if (mode === 'see') {
    o += `<clipPath id="blc"><path d="${bladder}"/></clipPath><path d="${bladder}" fill="rgba(233,169,159,0.4)"/><g clip-path="url(#blc)">${R(420, 820, 190, 100, 'rgba(255,241,118,0.75)')}</g>`
      + `<path d="${bladder}" fill="none" stroke="#8e5a52" stroke-width="7" stroke-linejoin="round"/>` + L(430, 820, 594, 820, '#fff', 3, 'stroke-dasharray="9 7"');
  } else {
    o += `<clipPath id="blc"><path d="${bladder}"/></clipPath><path d="${bladder}" fill="#f6d7d0"/><g clip-path="url(#blc)">`;
    for (const [y, a] of [[760, 10], [790, 14], [820, 12]]) o += `<path d="M440,${y} q18,${-a} 36,0 t36,0 t36,0 t36,0 t36,0" fill="none" stroke="#c9837a" stroke-width="5"/>`;
    o += `${R(420, 845, 190, 70, 'rgba(255,241,118,0.85)')}</g><path d="${bladder}" fill="none" stroke="#8e5a52" stroke-width="16" stroke-linejoin="round"/><path d="${bladder}" fill="none" stroke="#d98a80" stroke-width="9" stroke-linejoin="round"/>`
      + C(466, 764, 7, '#5a1a18') + C(558, 764, 7, '#5a1a18') + C(512, 884, 9, '#5a1a18')
      + `<path d="M466,764 L558,764 L512,884 Z" fill="none" stroke="#a65d54" stroke-width="3" stroke-dasharray="9 7"/>` + L(430, 845, 594, 845, '#fff', 3, 'stroke-dasharray="9 7"');
  }
  if (callouts) {
    const a1 = W(KL, -60, -100); const a2 = W(KL, -48, 6); const a3 = W(KL, 36, 2); const a4 = W(KR, -50, 60); const a5 = W(KR, 26, -150);
    o += call(548, 170, 780, 70) + call(478, 170, 240, 70) + call(a1[0], a1[1], 954, 190) + call(a2[0], a2[1], 954, 330) + call(a3[0], a3[1], 954, 460)
      + call(a4[0], a4[1], 70, 440) + call(a5[0], a5[1], 70, 150) + call(452, 600, 70, 620) + call(440, 810, 70, 800) + call(540, 870, 954, 830) + call(512, 950, 954, 950);
  }
  return svg(view === 'belakang' ? `<g transform="translate(1024 0) scale(-1 1)">${o}</g>` : o);
}

// ================= Vertebral column, lateral view, built from exact counts: 7 cervical + 12 thoracic + 5 lumbar + sacrum + coccyx =================
// Right lateral: the person's front (anterior) points to the viewer's RIGHT; spinous processes point to the LEFT. Design space: x offset from the column axis, y 0..960.
const SPINE_CTL = [[0, -6], [100, 26], [193, 2], [418, -58], [610, -12], [720, 24], [830, -4], [880, -42], [922, -26], [960, 0]]; // gentle S-curve: cervical lordosis, thoracic kyphosis, lumbar lordosis, sacral kyphosis
function spineModel() {
  const list = []; let y = 0;
  const add = (kind, i, h, w, disc) => { list.push({ kind, i, y: y + h / 2, h, w }); y += h + disc; };
  [[16, 24], [26, 30], [20, 30], [20, 30], [20, 30], [20, 30], [22, 32]].forEach(([h, w], i) => add('C', i + 1, h, w, i === 0 ? 4 : 7));
  for (let i = 0; i < 12; i++) add('T', i + 1, 24 + i * 0.5, 34 + i, 8);
  for (let i = 0; i < 5; i++) add('L', i + 1, 32, 52 + i * 2, 12);
  const xAt = (yy) => {
    let k = 0; while (k < SPINE_CTL.length - 2 && yy > SPINE_CTL[k + 1][0]) k++;
    const sl = (j) => { const a = SPINE_CTL[Math.max(0, j - 1)]; const b = SPINE_CTL[Math.min(SPINE_CTL.length - 1, j + 1)]; return (b[1] - a[1]) / (b[0] - a[0]); };
    const [y0, x0] = SPINE_CTL[k]; const [y1, x1] = SPINE_CTL[k + 1]; const d = y1 - y0; const t = Math.min(1, Math.max(0, (yy - y0) / d));
    return (2 * t ** 3 - 3 * t ** 2 + 1) * x0 + (t ** 3 - 2 * t ** 2 + t) * d * sl(k) + (-2 * t ** 3 + 3 * t ** 2) * x1 + (t ** 3 - t ** 2) * d * sl(k + 1);
  };
  const ang = (yy) => -Math.atan((xAt(yy + 2) - xAt(yy - 2)) / 4) * 180 / Math.PI;   // rotate() angle that puts the local down-axis along the column
  return { list, xAt, ang, sT: y, sB: y + 92, cB: y + 130 };
}
// mode: 'bone' (ilustrasi) | 'color' (regions, opaque) | 'see' (regions, translucent + spinal cord). Returns svg fragment in design space.
function spineDraw(mode) {
  const m = spineModel(); const { list, xAt, ang } = m;
  const col = { C: '#9fcbea', T: '#a8dc9a', L: '#f3e48a', S: '#f2a65a', Co: '#e5665a' };
  const bone = '#f4d19b'; const OUT = '#4a3520';
  const fillOf = (k) => (mode === 'bone' ? bone : col[k]);
  const op = mode === 'see' ? 0.7 : 1;
  const rot = (th, lx, ly, cx, cy) => { const a = rad(th); return [cx + lx * Math.cos(a) - ly * Math.sin(a), cy + lx * Math.sin(a) + ly * Math.cos(a)]; };
  let o = ''; let discs = ''; let verts = '';
  // discs between neighbouring bodies (and below L5)
  for (let i = 0; i < list.length; i++) {
    const a = list[i]; const top = a.y + a.h / 2; const nextTop = i + 1 < list.length ? list[i + 1].y - list[i + 1].h / 2 : m.sT;
    const dh = nextTop - top; const ym = (top + nextTop) / 2; const w = (a.w + (i + 1 < list.length ? list[i + 1].w : 56)) / 2 * 0.98;
    const c = xAt(ym);
    discs += `<g transform="translate(${f(c)} ${f(ym)}) rotate(${f(ang(ym))})"><rect x="${-w / 2}" y="${-dh / 2}" width="${w}" height="${dh}" rx="3" fill="${mode === 'bone' ? '#9fd8ee' : '#dff1fb'}" stroke="${mode === 'bone' ? '#3b7fa0' : '#5b8bb0'}" stroke-width="2.5" fill-opacity="${op}"/>`
      + (mode === 'bone' ? '' : `<ellipse cx="0" cy="0" rx="${f(w * 0.28)}" ry="${f(Math.max(1.5, dh * 0.22))}" fill="#9fd8ee"/>`) + '</g>';
  }
  for (const v of list) {
    const c = xAt(v.y); const th = ang(v.y); const w = v.w; const h = v.h;
    const canal = v.kind === 'C' ? 16 : v.kind === 'T' ? 12 : 14;
    const sp = v.kind === 'C' ? (v.i === 1 ? 10 : v.i === 2 ? 22 : v.i === 7 ? 30 : 16) : v.kind === 'T' ? 36 : 32;
    const sl = v.kind === 'C' ? 0.15 : v.kind === 'T' ? 0.7 : 0;
    const xb = -w / 2; const xc = xb - canal; const tx = xc - sp; const ty = -h / 2 + 6 + sp * sl;
    const arch = [[xb + 3, -h / 2 + 3], [xc, -h / 2 + 2], [tx, ty - 3], [tx + 2, ty + 10], [xc + 4, h / 2 - 1], [xc + 12, h / 2 - 5], [xb + 3, h / 2 - 9]];
    verts += `<g transform="translate(${f(c)} ${f(v.y)}) rotate(${f(th)})">`
      + `<polygon points="${pts(arch)}" fill="${fillOf(v.kind)}" fill-opacity="${op}" stroke="${OUT}" stroke-width="2.5" stroke-linejoin="round"/>`
      + `<rect x="${xb}" y="${-h / 2}" width="${w}" height="${h}" rx="${v.kind === 'L' ? 7 : 5}" fill="${fillOf(v.kind)}" fill-opacity="${op}" stroke="${OUT}" stroke-width="2.5"/>`
      + (v.i === 2 && v.kind === 'C' ? `<rect x="-6" y="${-h / 2 - 14}" width="12" height="16" rx="5" fill="${fillOf('C')}" fill-opacity="${op}" stroke="${OUT}" stroke-width="2.5"/>` : '') + '</g>';
  }
  // sacrum (one fused wedge) and coccyx (one small fused tailbone)
  const sT = m.sT; const sB = m.sB; const c0 = xAt(sT); const c1 = xAt(sB);
  let sac = `<path d="M${f(c0 + 32)},${sT} C${f(c0 + 30)},${sT + 30} ${f(c1 + 22)},${sB - 34} ${f(c1 + 8)},${sB} L${f(c1 - 8)},${sB - 4} C${f(c1 - 30)},${sB - 40} ${f(c0 - 48)},${sT + 40} ${f(c0 - 56)},${sT + 4} L${f(c0 - 30)},${sT + 2} Z" fill="${mode === 'bone' ? bone : col.S}" fill-opacity="${op}" stroke="${OUT}" stroke-width="2.5" stroke-linejoin="round"/>`;
  for (let k = 1; k <= 4; k++) { const yy = sT + k * 17; const w2 = 54 - k * 8; sac += L(xAt(yy) - w2 * 0.55, yy, xAt(yy) + w2 * 0.4, yy, OUT, 1.6, 'stroke-dasharray="5 4"'); }
  let coc = '';
  [[sB + 6, 18], [sB + 18, 14], [sB + 29, 9]].forEach(([yy, ww], i) => { coc += `<ellipse cx="${f(c1 + 2 + i * 4)}" cy="${yy}" rx="${ww / 2}" ry="6" fill="${mode === 'bone' ? bone : col.Co}" fill-opacity="${op}" stroke="${OUT}" stroke-width="2.5"/>`; });
  // spinal cord (ends at L1-L2) with thread-like cauda equina below, running just behind the bodies
  let cord = '';
  if (mode === 'see') {
    const cp = (v) => rot(ang(v.y), -(v.w / 2 + (v.kind === 'C' ? 8 : v.kind === 'T' ? 6 : 7)), 0, xAt(v.y), v.y);
    const upto = list.findIndex((v) => v.kind === 'L' && v.i === 1);
    const top = list.slice(0, upto + 1).map(cp); const tail = list.slice(upto).map(cp);
    cord += `<polyline points="${pts(top)}" fill="none" stroke="#c9a400" stroke-width="15" stroke-linejoin="round" stroke-linecap="round"/><polyline points="${pts(top)}" fill="none" stroke="#ffe135" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/>`;
    for (const d of [-4, 0, 4]) cord += `<polyline points="${pts([...tail, [xAt(sT + 20) - 40, sT + 20]].map(([x, y]) => [x + d, y]))}" fill="none" stroke="#e6c200" stroke-width="2" stroke-linejoin="round"/>`;
  }
  o += (mode === 'see' ? cord + discs + sac + coc + verts : discs + sac + coc + verts + cord);
  return { o, m };
}
function spineView(mode, callouts) {
  const s = 0.9; const ty = 40; const { o, m } = spineDraw(mode);
  const Wd = (x, y) => [512 + s * x, ty + s * y];
  let body = `<g transform="translate(512 ${ty}) scale(${s})">${o}`;
  if (mode !== 'bone') {
    const edge = (aIdx) => { const a = m.list[aIdx]; const b = m.list[aIdx + 1]; return (a.y + a.h / 2 + b.y - b.h / 2) / 2; };
    const bs = [edge(6), edge(18), m.sT - 6, m.sB + 2];
    for (const yy of bs) body += L(m.xAt(yy) - 120, yy, m.xAt(yy) + 90, yy, '#444', 2.5, 'stroke-dasharray="9 7"');
  }
  body += '</g>';
  if (callouts) {
    const pick = (kind, i) => m.list.find((v) => v.kind === kind && v.i === i);
    const body_ = (v, dx = 0) => Wd(m.xAt(v.y) + v.w / 2 - 4 + dx, v.y);
    const [c4x, c4y] = body_(pick('C', 4)); const [t6x, t6y] = body_(pick('T', 6)); const [l3x, l3y] = body_(pick('L', 3));
    const sac = Wd(m.xAt(m.sT + 46) + 4, m.sT + 46); const coc = Wd(m.xAt(m.sB + 18) + 8, m.sB + 18);
    const tv = pick('T', 9); const cordPt = Wd(m.xAt(tv.y) - (tv.w / 2 + 6) * 1, tv.y); const spin = Wd(m.xAt(tv.y) - tv.w / 2 - 12 - 18, tv.y + 16);
    const dv = pick('L', 3); const dY = dv.y + dv.h / 2 + 6; const disc = Wd(m.xAt(dY) + 10, dY);
    body += call(c4x, c4y, 900, c4y - 10) + call(t6x, t6y, 900, t6y) + call(l3x, l3y, 900, l3y - 40) + call(disc[0], disc[1], 900, disc[1] + 30)
      + call(sac[0], sac[1], 900, sac[1] + 10) + call(coc[0], coc[1], 900, coc[1] + 20) + call(cordPt[0], cordPt[1], 124, cordPt[1] - 60) + call(spin[0], spin[1], 124, spin[1] + 40);
  }
  return svg(body);
}

// ---------- p11: full column (region colours, dashed borders) beside an enlarged midline section of three vertebrae ----------
function spineBelah() {
  const s = 0.88; const ty = 40; const X0 = 230; const { o, m } = spineDraw('color');
  const Wd = (x, y) => [X0 + s * x, ty + s * y];
  let body = `<g transform="translate(${X0} ${ty}) scale(${s})">${o}`;
  const edge = (i) => { const a = m.list[i]; const b = m.list[i + 1]; return (a.y + a.h / 2 + b.y - b.h / 2) / 2; };
  for (const yy of [edge(6), edge(18), m.sT - 6, m.sB + 2]) body += L(m.xAt(yy) - 110, yy, m.xAt(yy) + 80, yy, '#444', 2.5, 'stroke-dasharray="9 7"');
  body += '</g>';
  const pick = (kind, i) => m.list.find((v) => v.kind === kind && v.i === i);
  const ant = (v) => Wd(m.xAt(v.y) + v.w / 2 - 4, v.y);
  const pts5 = [ant(pick('C', 4)), ant(pick('T', 6)), ant(pick('L', 3)), Wd(m.xAt(m.sT + 46) + 4, m.sT + 46), Wd(m.xAt(m.sB + 18) + 8, m.sB + 18)];
  for (const [px, py] of pts5) body += call(px, py, 395, py);
  // section: three vertebral bodies (spongy bone), four discs (ring + jelly nucleus), canal with cord, laminae and spinous processes in the midline
  const r = rng(11); const bx = 650; const bw = 180; const bh = 150; const ys = [140, 342, 544];
  let sec = '';
  sec += `<rect x="598" y="70" width="44" height="716" fill="#fff8d6" stroke="#b79a1a" stroke-width="3"/>`;                                                  // spinal canal (dura)
  sec += `<rect x="606" y="70" width="28" height="716" fill="#ffe135" stroke="#c9a400" stroke-width="4"/>` + L(620, 74, 620, 782, '#e0b800', 2);        // spinal cord
  for (const y of ys) {
    sec += `<polygon points="${pts([[600, y + 6], [566, y + 2], [566, y + bh - 40], [600, y + bh - 26]])}" fill="#f3ecd2" stroke="#5a4326" stroke-width="4" stroke-linejoin="round"/>`;                 // lamina
    sec += `<polygon points="${pts([[570, y + 44], [470, y + 70], [474, y + 100], [570, y + 88]])}" fill="#f3ecd2" stroke="#5a4326" stroke-width="4" stroke-linejoin="round"/>`;                          // spinous process
  }
  for (const y of [90, 292, 494, 696]) {
    const h = y === 90 || y === 696 ? 50 : 52; const yy = y === 90 ? 90 : y; const hh = y === 90 ? 50 : y === 696 ? 50 : h;
    sec += `<rect x="${bx - 4}" y="${yy}" width="${bw + 8}" height="${hh}" rx="10" fill="#d6ebf8" stroke="#5b8bb0" stroke-width="4"/>`
      + `<rect x="${bx + 8}" y="${yy + 8}" width="${bw - 16}" height="${hh - 16}" rx="7" fill="none" stroke="#93bad6" stroke-width="2.5"/>`
      + `<ellipse cx="${bx + bw / 2}" cy="${yy + hh / 2}" rx="52" ry="${f(hh * 0.26)}" fill="#8fd0ee" stroke="#3b87ad" stroke-width="2.5"/>`;
  }
  for (const y of ys) {
    sec += `<rect x="${bx}" y="${y}" width="${bw}" height="${bh}" rx="16" fill="#e6c88f" stroke="#5a4326" stroke-width="4.5"/>`
      + `<rect x="${bx + 10}" y="${y + 10}" width="${bw - 20}" height="${bh - 20}" rx="9" fill="#f6ead0"/>`;
    for (let k = 0; k < 120; k++) sec += C(bx + 16 + r() * (bw - 32), y + 16 + r() * (bh - 32), 1.6 + r() * 1.8, '#b89560');
  }
  body += sec;
  const mid = (y) => y + bh / 2;
  body += call(bx + 90, mid(ys[0]), 955, 190) + call(bx + bw - 4, 316, 955, 330) + call(bx + 90, 518, 955, 520) + call(620, 400, 580, 52) + call(520, ys[2] + 84, 520, 880);
  return svg(body);
}

// ================= Femur (right bone, front view): lengthwise section (p03) and see-through (p04) =================
function femurSection(see) {
  const COMP = '#f1e6c8'; const OUT = '#5a4326';
  const NECK = 'translate(566 228) rotate(-40)';
  const DIST = 'M450,760 C446,830 366,850 368,908 C368,962 430,978 468,962 C484,956 490,946 496,944 C502,952 514,962 532,964 C594,966 614,930 592,880 C578,844 520,820 510,760 Z';
  const shapes = [
    '<path d="M458,280 C456,420 452,580 450,790 L510,790 C510,580 516,420 518,280 Z"/>',                                  // shaft
    `<rect x="-90" y="-38" width="180" height="76" rx="38" transform="${NECK}"/>`,                                       // neck
    '<circle cx="648" cy="150" r="54"/>',                                                                                // head
    '<ellipse cx="452" cy="252" rx="48" ry="80" transform="rotate(-6 452 252)"/>',                                       // greater trochanter (continuous with the lateral shaft)
    '<circle cx="520" cy="382" r="14"/>',                                                                                // lesser trochanter
    `<path d="${DIST}"/>`,                                                                                               // distal end (condyles)
  ];
  const al = see ? 0.55 : 1;
  let o = `<defs><pattern id="fsp" width="16" height="14" patternUnits="userSpaceOnUse"><rect width="16" height="14" fill="#f8e8bd"/><circle cx="4" cy="4" r="3.2" fill="#e0524a"/><circle cx="12" cy="11" r="3.2" fill="#e0524a"/><path d="M0,7 h16" stroke="#d9c08a" stroke-width="1.2"/></pattern>`
    + `<clipPath id="fclip">${shapes.join('')}</clipPath></defs>`;
  o += `<g fill="${OUT}" stroke="${OUT}" stroke-width="14" stroke-linejoin="round">${shapes.join('')}</g>`;
  o += (see ? `<g fill="#fff">${shapes.join('')}</g>` : '') + `<g fill="${COMP}" fill-opacity="${see ? 0.6 : 1}">${shapes.join('')}</g>`;
  // inner structures, clipped to the bone
  const spongy = [
    '<circle cx="648" cy="150" r="45"/>', `<rect x="-78" y="-26" width="156" height="52" rx="26" transform="${NECK}"/>`,
    '<ellipse cx="454" cy="254" rx="32" ry="60" transform="rotate(-6 454 254)"/>', '<rect x="470" y="282" width="38" height="62" rx="6"/>',
    `<path d="${DIST}" transform="translate(480 880) scale(0.8) translate(-480 -880)"/>`,
  ];
  let inner = `<g fill="url(#fsp)" fill-opacity="${see ? 0.85 : 1}" stroke="${see ? '#c9a54f' : 'none'}" stroke-width="2.5" ${see ? 'stroke-dasharray="9 7"' : ''}>${spongy.join('')}</g>`;
  inner += `<path d="M476,330 C474,480 470,640 468,775 L492,775 C494,640 498,480 500,330 Z" fill="#ffe36b" fill-opacity="${see ? 0.85 : 1}" stroke="#c9a400" stroke-width="3" ${see ? 'stroke-dasharray="9 7"' : ''}/>`;
  o += `<g clip-path="url(#fclip)">${inner}</g>`;
  // periosteum (thin pink line along the shaft), epiphyseal lines (dashed white), cartilage caps (light blue)
  o += `<path d="M460,300 C458,430 454,590 452,772" fill="none" stroke="#f08fa0" stroke-width="5"/><path d="M516,300 C516,430 510,590 508,772" fill="none" stroke="#f08fa0" stroke-width="5"/>`;
  o += L(446, 772, 514, 772, '#fff', 4, 'stroke-dasharray="8 6"') + L(580, 163, 632, 225, '#fff', 4, 'stroke-dasharray="8 6"');
  const cap = 'M613,109 A54,54 0 0 1 689,185';
  o += `<path d="${cap}" fill="none" stroke="#3b87ad" stroke-width="20" stroke-linecap="round"/><path d="${cap}" fill="none" stroke="#8fd0f0" stroke-width="12" stroke-linecap="round"/>`;
  const dcap = 'M372,936 C380,968 440,978 470,962 M530,964 C586,968 606,936 596,900';
  o += `<path d="${dcap}" fill="none" stroke="#3b87ad" stroke-width="20" stroke-linecap="round"/><path d="${dcap}" fill="none" stroke="#8fd0f0" stroke-width="12" stroke-linecap="round"/>`;
  // nutrient artery entering the shaft wall into the marrow cavity
  o += `<path d="M330,500 C390,498 430,540 480,556" fill="none" stroke="#7f1d1d" stroke-width="14" stroke-linecap="round"/><path d="M330,500 C390,498 430,540 480,556" fill="none" stroke="#e53935" stroke-width="8" stroke-linecap="round"/>`;
  o += call(690, 150, 920, 100) + call(646, 156, 920, 240) + call(456, 500, 110, 400) + call(484, 640, 920, 540) + call(516, 450, 920, 400)
    + call(380, 515, 110, 560) + call(430, 966, 110, 950) + call(540, 890, 920, 850) + call(482, 772, 920, 700) + call(452, 252, 110, 200);
  return svg(o);
}

// ================= Male reproductive organs (internal, clinical schematic): bladder section, ureters, prostate + urethra, seminal vesicles, vas deferens, testes + epididymis =================
function maleRepro(mode) { // 'solid' | 'belah' (left testis cut open) | 'see' (translucent)
  const see = mode === 'see'; const al = see ? 0.6 : 1;
  const mir = (d) => d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, (_, x, y) => `${f(1024 - Number(x))},${y}`);   // mirror a path of absolute "x,y" pairs
  const tube = (d, w, c, oc) => `<path d="${d}" fill="none" stroke="${oc}" stroke-width="${w + 6}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  let o = '';
  // ureters (cut ends at the top) and vasa deferentes (arch over the ureter, then run behind the bladder)
  const vasR = 'M700,885 C676,800 672,600 692,420 C706,300 690,190 640,140 C618,116 596,104 590,118 C592,140 620,200 650,250 C660,270 664,290 664,300';
  o += tube('M430,40 L430,150', 12, '#9fb4c7', '#5b7388') + tube('M594,40 L594,150', 12, '#9fb4c7', '#5b7388');
  o += tube(vasR, 11, '#4f7be0', '#1a3a8a') + tube(mir(vasR), 11, '#4f7be0', '#1a3a8a');
  // seminal vesicles (lobulated sacs behind the bladder base) + ejaculatory ducts into the prostate
  const ves = (sgn) => { const x = (v) => (sgn > 0 ? v : 1024 - v); let s = ''; s += `<path d="M${x(640)},300 C${x(684)},300 ${x(704)},340 ${x(692)},384" fill="none" stroke="#a58a00" stroke-width="44" stroke-linecap="round"/><path d="M${x(640)},300 C${x(684)},300 ${x(704)},340 ${x(692)},384" fill="none" stroke="#f6d84a" fill-opacity="${al}" stroke-width="36" stroke-linecap="round"/>`;
    s += `<path d="M${x(650)},296 C${x(690)},300 ${x(700)},340 ${x(688)},378" fill="none" stroke="#a58a00" stroke-width="2.5" stroke-dasharray="6 5"/>`; return s; };
  o += ves(1) + ves(-1);
  o += tube('M668,392 C640,404 606,388 580,376', 7, '#4f7be0', '#1a3a8a') + tube(mir('M668,392 C640,404 606,388 580,376'), 7, '#4f7be0', '#1a3a8a');
  // bladder: a bowl cut open at the top, with fold lines and a pale interior
  o += `<path d="M388,110 C388,250 440,310 512,310 C584,310 636,250 636,110 Z" fill="#fff1a8" fill-opacity="${see ? 0.55 : 1}" stroke="#b89a00" stroke-width="7" stroke-linejoin="round"/>`;
  o += `<ellipse cx="512" cy="110" rx="124" ry="20" fill="#f3d96a" stroke="#b89a00" stroke-width="5"/>`;
  for (const [x1, x2, y] of [[430, 590, 190], [450, 574, 240]]) o += `<path d="M${x1},${y} q${(x2 - x1) / 4},-12 ${(x2 - x1) / 2},0 t${(x2 - x1) / 2},0" fill="none" stroke="#d9bd45" stroke-width="4"/>`;
  // urethra + prostate
  o += tube('M512,296 L512,490', 22, '#ffe680', '#c9a400');
  o += `<ellipse cx="512" cy="372" rx="96" ry="66" fill="#f4a04a" fill-opacity="${see ? 0.55 : 1}" stroke="#9a5510" stroke-width="7"/>`;
  if (see || mode === 'belah') o += tube('M512,310 L512,436', 18, '#ffe680', '#c9a400') + `<ellipse cx="512" cy="372" rx="66" ry="40" fill="none" stroke="#9a5510" stroke-width="2.5" stroke-dasharray="8 6"/>`;
  // testes + epididymis (viewer's left testis is the one cut open in 'belah')
  const testis = (cx, cy, rot, cut, sgn) => {
    let s = '';
    const ell = `cx="${cx}" cy="${cy}" rx="66" ry="92" transform="rotate(${rot} ${cx} ${cy})"`;
    const epi = `M${cx},${cy - 92} C${cx + sgn * 70},${cy - 90} ${cx + sgn * 86},${cy - 10} ${cx + sgn * 76},${cy + 60} C${cx + sgn * 70},${cy + 100} ${cx + sgn * 40},${cy + 112} ${cx + sgn * 8},${cy + 100}`;
    s += tube(epi, 22, '#8ec5f0', '#3b7aa8');
    for (let k = 0; k < 9; k++) { const t = 0.08 + k * 0.1; const px = cx + sgn * (70 * Math.sin(t * Math.PI * 0.9)) ; const py = cy - 92 + t * 200; s += L(px - 9, py - 6, px + 9, py + 6, '#3b7aa8', 2.5); }
    s += `<ellipse ${ell} fill="#efe8ff" fill-opacity="${al}" stroke="#6a4fa3" stroke-width="7"/>`;
    s += `<clipPath id="tc${cx}"><ellipse ${ell}/></clipPath><g clip-path="url(#tc${cx})">`;
    if (cut || see) {
      const m0 = [cx - sgn * 30, cy - 62];                                                                       // mediastinum testis (where the tubules drain)
      for (let k = 0; k < 8; k++) {
        const a = rad(25 + k * 22) * (sgn > 0 ? 1 : 1); const ex = m0[0] + Math.cos(a) * sgn * 160; const ey = m0[1] + Math.sin(a) * 200;
        s += L(m0[0], m0[1], ex, ey, '#ffffff', 3);
        for (const d of [0.45, 0.7]) { const px = m0[0] + (ex - m0[0]) * d; const py = m0[1] + (ey - m0[1]) * d; s += `<path d="M${f(px - 12)},${f(py - 6)} q8,-12 14,0 t14,0 t14,0" fill="none" stroke="#9a7fd1" stroke-width="4" transform="rotate(${f(k * 20)} ${f(px)} ${f(py)})"/>`; }
      }
      s += C(m0[0], m0[1], 7, '#ffffff', 'stroke="#6a4fa3" stroke-width="2"');
    }
    s += '</g>';
    return s;
  };
  o += testis(300, 790, 8, mode === 'belah', -1) + testis(724, 790, -8, see, 1);
  if (mode !== 'solid') o += call(236, 800, 90, 760) + call(300, 800, 90, 900) + call(232, 740, 90, 640) + call(692, 420, 934, 420) + call(640, 200, 934, 200)
    + call(334, 350, 90, 360) + call(590, 380, 934, 520) + call(512, 470, 934, 640) + call(430, 60, 90, 90);
  return svg(o);
}

// ================= Planet discs on black (banded Jupiter, cratered Mercury, cloud-wrapped Venus): back / left / right illustration views =================
// Jupiter's Great Red Spot sits ~18 deg west of the front meridian: it is hidden on the back and right views and only a thin sliver near the right limb on the left view.
function planetDisc(kind, view) {
  const cx = 512; const cy = 512; const Rr = 310;
  const r = rng({ belakang: 7, kiri: 21, kanan: 33 }[view] + kind.length * 5);
  let o = `<defs><clipPath id="pdc"><circle cx="${cx}" cy="${cy}" r="${Rr}"/></clipPath><radialGradient id="psh" cx="0.38" cy="0.36" r="0.75"><stop offset="0" stop-color="#fff" stop-opacity="0.16"/><stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.6"/></radialGradient></defs>`;
  let g = '';
  const wave = (yy, amp, ph, k) => { const p = []; for (let x = cx - Rr - 10; x <= cx + Rr + 10; x += 16) p.push([x, yy + amp * Math.sin(x * k + ph) + amp * 0.5 * Math.sin(x * k * 2.3 + ph * 1.7)]); return p; };
  if (kind === 'jupiter') {
    const bands = [[0, '#e9dcc4'], [0.07, '#cfa27a'], [0.14, '#f3ead8'], [0.22, '#b9764a'], [0.30, '#f1e0bd'], [0.38, '#d9904f'], [0.47, '#f6ecd4'], [0.56, '#f3e3c0'], [0.63, '#bf7a4c'], [0.71, '#f2e6cc'], [0.79, '#c99568'], [0.88, '#e8d9bd'], [0.95, '#bfa88a']];
    const edge = bands.map(([t], i) => wave(cy - Rr + t * 2 * Rr, i === 0 ? 0 : 5, r() * 6, 0.02));
    edge.push(wave(cy + Rr + 20, 0, 0, 0.02));
    bands.forEach(([, c], i) => { const top = edge[i]; const bot = edge[i + 1].slice().reverse(); g += `<polygon points="${pts([...top, ...bot])}" fill="${c}"/>`; });
    for (let k = 0; k < 46; k++) {                                                                                 // turbulence: little curls and ovals inside the belts
      const x = cx + (r() * 2 - 1) * Rr; const y = cy + (r() * 2 - 1) * Rr * 0.9; const dark = r() < 0.5;
      g += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(8 + r() * 26)}" ry="${f(3 + r() * 7)}" fill="${dark ? 'rgba(150,80,40,0.45)' : 'rgba(255,248,230,0.55)'}" transform="rotate(${f((r() - 0.5) * 20)} ${f(x)} ${f(y)})"/>`;
    }
    for (let k = 0; k < 3; k++) { const x = cx + (r() * 2 - 1) * Rr * 0.7; const y = cy + 70 + r() * 130; g += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="20" ry="12" fill="#fffaf0" stroke="rgba(190,150,110,0.8)" stroke-width="3"/>`; }   // white oval storms
    if (view === 'kiri') g += `<ellipse cx="${f(cx + Rr * 0.94)}" cy="${f(cy + Rr * 0.37)}" rx="12" ry="46" fill="#d9602a" stroke="#f0a070" stroke-width="4"/>`;                  // Great Red Spot, foreshortened at the limb
  } else if (kind === 'merkurius') {
    g += `<rect x="${cx - Rr}" y="${cy - Rr}" width="${2 * Rr}" height="${2 * Rr}" fill="#8f8a84"/>`;
    for (let k = 0; k < 16; k++) { const x = cx + (r() * 2 - 1) * Rr; const y = cy + (r() * 2 - 1) * Rr; g += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(30 + r() * 70)}" ry="${f(20 + r() * 50)}" fill="${r() < 0.5 ? 'rgba(180,175,168,0.45)' : 'rgba(110,105,100,0.4)'}" transform="rotate(${f(r() * 180)} ${f(x)} ${f(y)})"/>`; }   // smooth plains vs older terrain
    for (let k = 0; k < 44; k++) {
      let x; let y; do { x = (r() * 2 - 1) * Rr; y = (r() * 2 - 1) * Rr; } while (x * x + y * y > Rr * Rr * 0.95);
      const d = Math.hypot(x, y); const z = Math.sqrt(Math.max(0.06, 1 - (d / Rr) ** 2)); const r0 = k < 4 ? 40 + r() * 30 : 8 + r() * 24; const ang = Math.atan2(y, x) * 180 / Math.PI;
      g += `<g transform="translate(${f(cx + x)} ${f(cy + y)}) rotate(${f(ang)})"><ellipse cx="0" cy="0" rx="${f(r0 * z)}" ry="${f(r0)}" fill="#6e6a64" stroke="#d8d3ca" stroke-width="${f(Math.max(2, r0 / 9))}"/><ellipse cx="${f(r0 * z * 0.18)}" cy="0" rx="${f(r0 * z * 0.7)}" ry="${f(r0 * 0.7)}" fill="#7d7973"/></g>`;
      if (k % 11 === 0) for (let a = 0; a < 12; a++) { const t = a * 36 + r() * 20; g += `<line x1="${f(cx + x)}" y1="${f(cy + y)}" x2="${f(cx + x + Math.cos(rad(t)) * r0 * 1.7)}" y2="${f(cy + y + Math.sin(rad(t)) * r0 * 1.7)}" stroke="rgba(230,226,218,0.38)" stroke-width="2"/>`; }   // bright ray crater
    }
  } else {
    g += `<rect x="${cx - Rr}" y="${cy - Rr}" width="${2 * Rr}" height="${2 * Rr}" fill="#efdfa6"/>`;
    for (let k = 0; k < 15; k++) {
      const y = cy - Rr + (k + 0.5) * (2 * Rr / 15); const p = wave(y, 14 + r() * 14, r() * 6, 0.012 + r() * 0.01);
      g += `<polyline points="${pts(p)}" fill="none" stroke="${['#f9f0cc', '#e2c984', '#d6bb70', '#fbf6dd'][k % 4]}" stroke-opacity="0.65" stroke-width="${f(24 + r() * 26)}" stroke-linecap="round"/>`;
    }
    g += `<polyline points="${pts([[cx - 180, cy - 120], [cx, cy], [cx + 180, cy - 120]])}" fill="none" stroke="#c9ab5c" stroke-opacity="0.16" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>`;
    g += `<line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy + 190}" stroke="#c9ab5c" stroke-opacity="0.16" stroke-width="40" stroke-linecap="round"/>`;
  }
  o += `<g clip-path="url(#pdc)">${g}<circle cx="${cx}" cy="${cy}" r="${Rr}" fill="url(#psh)"/></g><circle cx="${cx}" cy="${cy}" r="${Rr}" fill="none" stroke="#1a1a1a" stroke-width="5"/>`;
  return svg(o, '#000');
}

// ================= Moon, left (centre 90 deg W) and right (centre 90 deg E) limb views from real selenographic coordinates (orthographic, fully lit, black background) =================
function moonLimb(view) {
  const cx = 512; const cy = 512; const Rr = 360; const lon0 = view === 'kiri' ? -90 : 90;
  const d2r = Math.PI / 180;
  const proj = (lat, lon) => { const dl = (lon - lon0) * d2r; const la = lat * d2r; return { x: Math.cos(la) * Math.sin(dl), y: Math.sin(la), z: Math.cos(la) * Math.cos(dl) }; };
  const scr = (p) => { let { x, y } = p; if (p.z < 0) { const n = Math.hypot(x, y) || 1; x /= n; y /= n; } return [cx + Rr * x, cy - Rr * y]; };
  const dest = (lat, lon, dist, brg) => {                                                  // point at angular distance dist (deg) along bearing brg from (lat, lon)
    const la = lat * d2r; const lo = lon * d2r; const dd = dist * d2r; const b = brg * d2r;
    const la2 = Math.asin(Math.sin(la) * Math.cos(dd) + Math.cos(la) * Math.sin(dd) * Math.cos(b));
    const lo2 = lo + Math.atan2(Math.sin(b) * Math.sin(dd) * Math.cos(la), Math.cos(dd) - Math.sin(la) * Math.sin(la2));
    return [la2 / d2r, ((lo2 / d2r + 540) % 360) - 180];
  };
  const cap = (lat, lon, rDeg, fill, extra = '') => {
    if (proj(lat, lon).z < -0.25) return '';
    const p = []; for (let b = 0; b < 360; b += 15) { const [la, lo] = dest(lat, lon, rDeg, b); p.push(scr(proj(la, lo))); }
    return `<polygon points="${pts(p)}" fill="${fill}" ${extra}/>`;
  };
  const r = rng(view === 'kiri' ? 91 : 97);
  let g = `<rect x="${cx - Rr}" y="${cy - Rr}" width="${2 * Rr}" height="${2 * Rr}" fill="#bdbab3"/>`;
  // maria: [lat, lon, radius in deg] — circles approximating each mare (Wikipedia list of maria on the Moon)
  const maria = [
    [20.7, -57, 19], [8, -45, 11], [35, -47, 12], [0, -62, 8], [14, -70, 7],                                    // Oceanus Procellarum
    [34.7, -14.9, 15], [27.3, 18.4, 8.5], [8.4, 30.8, 11], [4, 26, 6], [16.2, 59.1, 7],                          // Imbrium, Serenitatis, Tranquillitatis, Crisium
    [-7.8, 53.7, 9], [-15.2, 34.6, 5], [57.6, -30, 4.5], [57.6, -10, 5], [57.6, 10, 5], [57.6, 30, 4.5],        // Fecunditatis, Nectaris, Frigoris
    [-24.5, -38.6, 5.5], [-20.6, -17.3, 9], [-10.5, -22.3, 4.5], [13.2, 4.1, 4], [7.8, -30.6, 7],               // Humorum, Nubium, Cognitum, Vaporum, Insularum
    [-1.7, 87, 5], [12.7, 86.5, 5], [-40, 85, 3], [-47.8, 92, 3.5], [-52, 100, 3], [-45, 106, 3],              // Smythii, Marginis, Australe patches
    [27.3, 148.1, 4.5], [-33.3, 164.8, 4.5], [-20.4, 129.1, 2.5], [-36.1, -151.8, 4], [-19.9, -94.7, 3.4],       // Moscoviense, Ingenii, Tsiolkovsky, Apollo, Orientale centre
    [-5.2, -68.3, 2.6], [51.6, -9.3, 1.8],                                                                       // Grimaldi, Plato floors
  ];
  for (const [la, lo, rr] of maria) g += cap(la, lo, rr, '#6f6f77');
  // Orientale rings (bull's-eye), drawn as outlines around its dark centre
  for (const rr of [6.5, 10, 15]) { const p = []; for (let b = 0; b < 360; b += 10) { const [la, lo] = dest(-19.9, -94.7, rr, b); const pr = proj(la, lo); if (pr.z > 0) p.push(scr(pr)); } if (p.length > 3) g += `<polyline points="${pts(p)}" fill="none" stroke="#8a877f" stroke-width="5" stroke-linejoin="round"/>`; }
  // ray systems: Tycho (long), Copernicus (short)
  const rays = (la0, lo0, n, len, op) => { let s = ''; for (let k = 0; k < n; k++) { const brg = k * (360 / n) + r() * 14; const p = []; for (let dd = 3; dd <= len * (0.6 + r() * 0.4); dd += 3) { const [la, lo] = dest(la0, lo0, dd, brg); const pr = proj(la, lo); if (pr.z > 0.02) p.push(scr(pr)); } if (p.length > 2) s += `<polyline points="${pts(p)}" fill="none" stroke="rgba(245,243,236,${op})" stroke-width="${f(3 + r() * 3)}" stroke-linecap="round"/>`; } return s; };
  g += rays(-43.3, -11.4, 14, 45, 0.5) + rays(9.6, -20, 9, 14, 0.45) + rays(8.1, -38, 6, 8, 0.4) + rays(23.7, -47.4, 6, 7, 0.45);
  // craters: named ones first, then random highlands craters; each foreshortened toward the limb
  const crater = (lat, lon, rDeg, bright) => {
    const pr = proj(lat, lon); if (pr.z < 0.08) return '';
    const [sx, sy] = scr(pr); const r0 = rDeg * d2r * Rr; const ang = Math.atan2(-pr.y, pr.x) * 180 / Math.PI; const z = pr.z;
    return `<g transform="translate(${f(sx)} ${f(sy)}) rotate(${f(ang)})"><ellipse cx="0" cy="0" rx="${f(Math.max(1.5, r0 * z))}" ry="${f(Math.max(1.5, r0))}" fill="${bright ? '#e8e6df' : '#8f8c85'}" stroke="${bright ? '#fffdf5' : '#d9d6cf'}" stroke-width="${f(Math.max(1.5, r0 / 6))}"/></g>`;
  };
  for (const [la, lo, rr, br] of [[-43.3, -11.4, 1.8, 1], [9.6, -20, 1.3, 1], [8.1, -38, 1.1, 1], [23.7, -47.4, 1.1, 1], [-8.9, 61, 2, 0], [-20.4, 129.1, 2.6, 0], [13.4, 124.3, 2, 0], [-46.2, 72.5, 2.2, 0], [-19.5, -105, 1.8, 0]]) g += crater(la, lo, rr, br);
  for (let k = 0; k < 70; k++) { const lat = Math.asin(r() * 2 - 1) / d2r; const lon = (r() * 360 - 180); g += crater(lat, lon, 0.6 + r() * 1.8, r() < 0.12); }
  const o = `<defs><clipPath id="mnc"><circle cx="${cx}" cy="${cy}" r="${Rr}"/></clipPath><radialGradient id="mns" cx="0.5" cy="0.5" r="0.5"><stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.62"/></radialGradient></defs>`
    + `<g clip-path="url(#mnc)">${g}<circle cx="${cx}" cy="${cy}" r="${Rr}" fill="url(#mns)"/></g><circle cx="${cx}" cy="${cy}" r="${Rr}" fill="none" stroke="#2a2a2a" stroke-width="4"/>`;
  return svg(o, '#000');
}

// ================= Mud crab seen from BEHIND: smooth rear carapace margin, no eyes or claws visible, trailing walking legs and swimming paddles =================
function crabRear() {
  const BODY = '#5d6b3b'; const BODYO = '#2f3a1c'; const LEG = '#6f7f48'; const LEGL = '#9aab68';
  const seg = (a, b, w) => `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${BODYO}" stroke-width="${w + 7}" stroke-linecap="round"/>`;
  const segF = (a, b, w, c = LEG) => `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
  const mx = (p) => [1024 - p[0], p[1]];
  const legs = [
    [[290, 500], [172, 424], [92, 502], [64, 612], [68, 690]],
    [[300, 514], [192, 452], [132, 536], [112, 632], [118, 692]],
    [[312, 528], [226, 482], [178, 558], [162, 642], [168, 696]],
  ];
  const wd = [38, 30, 24, 12];
  let back = ''; let front = '';
  for (const lg of legs) for (const side of [1, -1]) {
    const p = lg.map((q) => (side > 0 ? q : mx(q)));
    for (let i = 0; i < 4; i++) back += seg(p[i], p[i + 1], wd[i]);
    for (let i = 0; i < 4; i++) back += segF(p[i], p[i + 1], wd[i]) + (i < 3 ? `<circle cx="${p[i + 1][0]}" cy="${p[i + 1][1]}" r="${wd[i] / 2 - 4}" fill="${LEGL}"/>` : '');
    back += segF(p[3], p[4], 8, '#3b3a2a');
  }
  // carapace: smooth rear margin (no serrated front edge, no eyes)
  const shell = 'M232,486 C232,362 372,300 512,300 C652,300 792,362 792,486 C792,536 700,558 512,560 C324,558 232,536 232,486 Z';
  front += `<path d="${shell}" fill="${BODY}" stroke="${BODYO}" stroke-width="9" stroke-linejoin="round"/>`;
  front += `<path d="M290,510 C400,546 624,546 734,510" fill="none" stroke="#8a9a5b" stroke-width="12" stroke-linecap="round"/>`;                      // smooth posterior margin
  front += `<path d="M320,380 C420,342 604,342 704,380" fill="none" stroke="#4a5730" stroke-width="5" opacity="0.7"/><path d="M512,322 L512,480" stroke="#4a5730" stroke-width="5" opacity="0.6"/>`;
  front += `<ellipse cx="420" cy="380" rx="70" ry="24" fill="rgba(255,255,255,0.12)" transform="rotate(-12 420 360)"/>`;
  // swimming paddles (5th pair), nearest to the viewer, low on each side
  for (const side of [1, -1]) {
    const q = (x, y) => (side > 0 ? [x, y] : [1024 - x, y]);
    const a = q(340, 552); const b = q(268, 596); const c = q(214, 634);
    front += seg(a, b, 26) + segF(a, b, 26) + seg(b, c, 22) + segF(b, c, 22);
    const pc = q(196, 664); front += `<ellipse cx="${pc[0]}" cy="${pc[1]}" rx="64" ry="26" transform="rotate(${side > 0 ? -28 : 28} ${pc[0]} ${pc[1]})" fill="${LEG}" stroke="${BODYO}" stroke-width="7"/>`
      + `<ellipse cx="${pc[0]}" cy="${pc[1]}" rx="40" ry="10" transform="rotate(${side > 0 ? -28 : 28} ${pc[0]} ${pc[1]})" fill="${LEGL}" opacity="0.7"/>`;
  }
  const ground = `<ellipse cx="512" cy="704" rx="400" ry="20" fill="#e3e3dc"/>`;
  return svg(ground + back + front);
}

// ================= Female Aedes aegypti seen from BELOW (ventral): pale cream underside, legs with white bands, no spread wings =================
function mosquitoVentral() {
  const DARK = '#1f1f1f'; const CREAM = '#efe3c4'; const CREAMO = '#8a7a52';
  let o = '';
  const leg = (pts4, bands) => {
    let s = '';
    for (let i = 0; i < pts4.length - 1; i++) s += `<line x1="${pts4[i][0]}" y1="${pts4[i][1]}" x2="${pts4[i + 1][0]}" y2="${pts4[i + 1][1]}" stroke="${DARK}" stroke-width="${f(10 - i * 1.6)}" stroke-linecap="round"/>`;
    for (const [i, t] of bands) { const a = pts4[i]; const b = pts4[i + 1]; const x = a[0] + (b[0] - a[0]) * t; const y = a[1] + (b[1] - a[1]) * t; const dx = b[0] - a[0]; const dy = b[1] - a[1]; const n = Math.hypot(dx, dy); s += `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + dx / n * 14)}" y2="${f(y + dy / n * 14)}" stroke="#fff" stroke-width="${f(7 - i * 1.2)}" stroke-linecap="butt"/>`; }
    return s;
  };
  // three pairs of legs attach to the underside of the thorax: front forward-out, middle sideways, hind backward-out; white bands at the joints (Aedes aegypti)
  const cx = 512;
  const LEGS = [
    [[cx - 22, 300], [cx - 120, 250], [cx - 190, 150], [cx - 230, 80]],
    [[cx - 26, 336], [cx - 150, 340], [cx - 260, 300], [cx - 330, 330]],
    [[cx - 22, 372], [cx - 120, 450], [cx - 190, 590], [cx - 240, 700]],
  ];
  for (const lg of LEGS) for (const side of [-1, 1]) {
    const p = lg.map(([x, y]) => [side < 0 ? x : 1024 - x, y]);
    o += leg(p, [[1, 0.1], [1, 0.8], [2, 0.5]]);
  }
  // abdomen (8 segments, pale ventral side with thin dark segment borders and a few white bands), tapering to the tip
  const segs = 8; let y = 410;
  for (let i = 0; i < segs; i++) {
    const w = 46 - i * 3.4; const h = 44 - i * 1.5;
    o += `<rect x="${f(cx - w)}" y="${f(y)}" width="${f(2 * w)}" height="${f(h)}" rx="14" fill="${CREAM}" stroke="${CREAMO}" stroke-width="3"/>`;
    if (i % 2 === 1) o += `<rect x="${f(cx - w + 6)}" y="${f(y + h * 0.35)}" width="${f(2 * w - 12)}" height="${f(h * 0.3)}" rx="6" fill="#fffdf6"/>`;
    y += h - 2;
  }
  o += `<ellipse cx="${cx}" cy="${y + 8}" rx="14" ry="12" fill="${CREAM}" stroke="${CREAMO}" stroke-width="3"/>` + L(cx - 8, y + 16, cx - 12, y + 40, DARK, 3) + L(cx + 8, y + 16, cx + 12, y + 40, DARK, 3);
  // wings folded: only their narrow tips seen alongside the abdomen, edge-on
  for (const side of [-1, 1]) o += `<path d="M${cx + side * 52},370 C${cx + side * 64},470 ${cx + side * 60},580 ${cx + side * 36},650" fill="none" stroke="#6b6b6b" stroke-width="5" stroke-linecap="round" opacity="0.8"/>`
    + `<path d="M${cx + side * 52},370 C${cx + side * 70},470 ${cx + side * 66},590 ${cx + side * 40},660" fill="none" stroke="#9a9a9a" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>`;
  // thorax (pale underside with leg attachment plates) and halteres
  o += `<ellipse cx="${cx}" cy="338" rx="58" ry="74" fill="${CREAM}" stroke="${CREAMO}" stroke-width="4"/>`;
  for (const yy of [300, 336, 372]) for (const s of [-1, 1]) o += `<circle cx="${cx + s * 26}" cy="${yy}" r="9" fill="#d9c9a0" stroke="${CREAMO}" stroke-width="2.5"/>`;
  for (const s of [-1, 1]) o += `<line x1="${cx + s * 50}" y1="388" x2="${cx + s * 86}" y2="404" stroke="${DARK}" stroke-width="4" stroke-linecap="round"/><circle cx="${cx + s * 90}" cy="406" r="7" fill="${DARK}"/>`;
  // head from below: dark capsule with compound eyes at the sides, long proboscis forward, short palps, thin sparsely haired (female) antennae
  o += `<line x1="${cx}" y1="230" x2="${cx}" y2="62" stroke="${DARK}" stroke-width="9" stroke-linecap="round"/>`;
  for (const s of [-1, 1]) o += `<line x1="${cx + s * 14}" y1="226" x2="${cx + s * 22}" y2="150" stroke="#3a3a3a" stroke-width="7" stroke-linecap="round"/>`;
  for (const s of [-1, 1]) {
    o += `<polyline points="${cx + s * 22},232 ${cx + s * 70},178 ${cx + s * 100},110" fill="none" stroke="#555" stroke-width="3.5" stroke-linecap="round"/>`;
    for (const [px, py] of [[cx + s * 52, 196], [cx + s * 80, 150], [cx + s * 92, 128]]) o += `<line x1="${px}" y1="${py}" x2="${px + s * 14}" y2="${py - 6}" stroke="#777" stroke-width="1.8"/>`;
  }
  o += `<ellipse cx="${cx}" cy="250" rx="46" ry="38" fill="#2a2a2a" stroke="#000" stroke-width="3"/>`;
  for (const s of [-1, 1]) o += `<ellipse cx="${cx + s * 30}" cy="252" rx="20" ry="26" fill="#0f0f0f" stroke="#444" stroke-width="2"/>`;
  return svg(o);
}

// ================= Small + large intestine (front layout; the back view is the same layout mirrored left-right, because the person's right is the viewer's right from behind) =================
const catmull = (p, closed = false) => {
  const n = p.length; const g = (i) => p[Math.max(0, Math.min(n - 1, i))]; let d = `M${f(p[0][0])},${f(p[0][1])}`;
  for (let i = 0; i < n - 1; i++) { const a = g(i - 1); const b = g(i); const c = g(i + 1); const e = g(i + 2); d += ` C${f(b[0] + (c[0] - a[0]) / 6)},${f(b[1] + (c[1] - a[1]) / 6)} ${f(c[0] - (e[0] - b[0]) / 6)},${f(c[1] - (e[1] - b[1]) / 6)} ${f(c[0])},${f(c[1])}`; }
  return d;
};
function intestines(back) {
  const COL = '#c9a38a'; const COLO = '#7a5a46'; const SI = '#f4a6a0'; const SIO = '#b3524c';
  // large intestine centreline: cecum (person's right = viewer's left in front view) -> ascending -> transverse -> descending -> sigmoid -> rectum
  const colon = [[292, 706], [274, 600], [268, 470], [272, 340], [310, 268], [420, 300], [512, 318], [610, 300], [714, 268], [752, 340], [752, 470], [744, 580], [704, 650], [616, 672], [566, 704], [534, 764], [518, 850]];
  let o = '';
  o += `<path d="${catmull(colon)}" fill="none" stroke="${COLO}" stroke-width="58" stroke-linecap="round" stroke-linejoin="round"/>`;
  o += `<circle cx="292" cy="728" r="42" fill="${COLO}"/>`;
  o += `<path d="${catmull(colon)}" fill="none" stroke="${COL}" stroke-width="46" stroke-linecap="round" stroke-linejoin="round"/>`;
  o += `<circle cx="292" cy="728" r="36" fill="${COL}"/>`;
  // haustra: short cross ticks every ~26 px along the centreline (sampled from the same spline)
  const pl = []; for (let i = 0; i < colon.length - 1; i++) { const a = colon[Math.max(0, i - 1)]; const b = colon[i]; const c = colon[i + 1]; const e = colon[Math.min(colon.length - 1, i + 2)]; for (let t = 0; t < 1; t += 0.1) { const t2 = t * t; const t3 = t2 * t; pl.push([0.5 * ((2 * b[0]) + (-a[0] + c[0]) * t + (2 * a[0] - 5 * b[0] + 4 * c[0] - e[0]) * t2 + (-a[0] + 3 * b[0] - 3 * c[0] + e[0]) * t3), 0.5 * ((2 * b[1]) + (-a[1] + c[1]) * t + (2 * a[1] - 5 * b[1] + 4 * c[1] - e[1]) * t2 + (-a[1] + 3 * b[1] - 3 * c[1] + e[1]) * t3)]); } }
  let acc = 0;
  for (let i = 1; i < pl.length; i++) { const dx = pl[i][0] - pl[i - 1][0]; const dy = pl[i][1] - pl[i - 1][1]; const n = Math.hypot(dx, dy) || 1; acc += n; if (acc >= 26) { acc = 0; const nx = -dy / n; const ny = dx / n; o += L(pl[i][0] - nx * 20, pl[i][1] - ny * 20, pl[i][0] + nx * 20, pl[i][1] + ny * 20, '#a8806a', 3); } }
  // appendix (thin worm-like tube hanging from the cecum)
  o += `<path d="M286,760 C300,800 330,820 312,872 C304,896 282,890 286,868" fill="none" stroke="${COLO}" stroke-width="18" stroke-linecap="round"/><path d="M286,760 C300,800 330,820 312,872 C304,896 282,890 286,868" fill="none" stroke="${COL}" stroke-width="10" stroke-linecap="round"/>`;
  // small intestine: one long tube folded back and forth in many tight loops, ending at the cecum (ileocecal junction)
  const si = [[500, 338]]; const r = rng(5);
  for (let k = 0; k < 11; k++) {
    const y = 360 + k * 30; const l = 392 + r() * 22; const rt = 640 + r() * 24;
    const row = k % 2 === 0 ? [[l, y], [(l + rt) / 2, y + 14 + r() * 8], [rt, y]] : [[rt, y], [(l + rt) / 2, y - 12 - r() * 8], [l, y]];
    si.push(...row);
  }
  si.push([380, 690], [326, 696]);
  o += `<path d="${catmull(si)}" fill="none" stroke="${SIO}" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/><path d="${catmull(si)}" fill="none" stroke="${SI}" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/><path d="${catmull(si)}" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`;
  return svg(back ? `<g transform="translate(1024 0) scale(-1 1)">${o}</g>` : o);
}

// ================= Cockroach seen from BEHIND: pronotum + wing covers fill the view, three pairs of spiny legs splayed, two short cerci at the tip, antennae sweeping forward over the body =================
function cockroachRear() {
  const BR = '#8c3b1c'; const BRL = '#b5602a'; const OUT = '#4a1d0c'; const LEG = '#9a4a24';
  const m = (p) => p.map(([x, y]) => [1024 - x, y]);
  const leg = (p, w0, sp) => {
    let s = '';
    for (let i = 0; i < p.length - 1; i++) { const w = [w0, w0 * 0.78, w0 * 0.5][i] ?? 6; s += `<line x1="${p[i][0]}" y1="${p[i][1]}" x2="${p[i + 1][0]}" y2="${p[i + 1][1]}" stroke="${OUT}" stroke-width="${w + 5}" stroke-linecap="round"/>`; }
    for (let i = 0; i < p.length - 1; i++) { const w = [w0, w0 * 0.78, w0 * 0.5][i] ?? 6; s += `<line x1="${p[i][0]}" y1="${p[i][1]}" x2="${p[i + 1][0]}" y2="${p[i + 1][1]}" stroke="${LEG}" stroke-width="${w}" stroke-linecap="round"/>`; }
    if (sp) for (let i = 1; i < p.length - 1; i++) for (let k = 1; k <= 5; k++) { const t = k / 6; const x = p[i][0] + (p[i + 1][0] - p[i][0]) * t; const y = p[i][1] + (p[i + 1][1] - p[i][1]) * t; s += L(x, y, x + (x > 512 ? 13 : -13), y - 7, OUT, 2.5); }
    return s;
  };
  let o = '';
  // far parts first: antennae, head, pronotum (smaller, farther away), front and middle legs
  for (const s of [-1, 1]) o += `<path d="M${512 + s * 14},236 C${512 + s * 100},120 ${512 + s * 270},70 ${512 + s * 430},110" fill="none" stroke="${OUT}" stroke-width="3.5" stroke-linecap="round"/>`;
  const front = [[420, 360], [336, 326], [286, 392], [268, 452]]; const mid = [[408, 440], [300, 404], [222, 508], [190, 590]];
  o += leg(front, 12, true) + leg(m(front), 12, true) + leg(mid, 15, true) + leg(m(mid), 15, true);
  o += `<ellipse cx="512" cy="262" rx="30" ry="22" fill="#3b160a" stroke="${OUT}" stroke-width="4"/>`;
  o += `<ellipse cx="512" cy="318" rx="104" ry="52" fill="#a4481f" stroke="${OUT}" stroke-width="6"/><ellipse cx="512" cy="312" rx="76" ry="30" fill="#e3b04a" opacity="0.9"/><ellipse cx="512" cy="312" rx="42" ry="15" fill="#7a2f14" opacity="0.7"/>`;
  // wing covers seen from behind: a dome with a central seam running toward the viewer
  o += `<path d="M322,560 C310,360 410,290 512,290 C614,290 714,360 702,560 Z" fill="${BR}" stroke="${OUT}" stroke-width="7" stroke-linejoin="round"/>`;
  o += `<path d="M352,556 C346,390 430,322 512,322 C594,322 678,390 672,556 Z" fill="${BRL}" opacity="0.5"/>`;
  o += `<line x1="512" y1="294" x2="512" y2="560" stroke="${OUT}" stroke-width="5"/>`;
  for (const s of [-1, 1]) for (let k = 0; k < 4; k++) o += `<path d="M512,${340 + k * 50} C${512 + s * 60},${352 + k * 50} ${512 + s * 130},${400 + k * 40} ${512 + s * 168},${520}" fill="none" stroke="#6d2c12" stroke-width="2.5" opacity="0.55"/>`;
  // abdomen tip seen end-on (segmented), then the two cerci pointing at the viewer
  o += `<path d="M330,556 C330,640 420,672 512,672 C604,672 694,640 694,556 Z" fill="#5a2410" stroke="${OUT}" stroke-width="6" stroke-linejoin="round"/>`;
  for (const yy of [590, 622, 650]) o += `<path d="M${350 + (yy - 590) * 0.4},${yy} C430,${yy + 14} 594,${yy + 14} ${674 - (yy - 590) * 0.4},${yy}" fill="none" stroke="#8a3a1a" stroke-width="3"/>`;
  for (const s of [-1, 1]) for (let k = 0; k < 6; k++) { const cx = 512 + s * (46 + k * 6); const cy = 690 + k * 34; o += `<ellipse cx="${cx}" cy="${cy}" rx="${22 - k * 2.2}" ry="17" fill="#7a3216" stroke="${OUT}" stroke-width="3.5" transform="rotate(${s * -12} ${cx} ${cy})"/>`; }
  // big hind legs, nearest to the viewer, drawn last
  const hind = [[360, 560], [236, 520], [168, 650], [138, 770]];
  o += leg(hind, 20, true) + leg(m(hind), 20, true);
  return svg(o);
}
// ---------- slots ----------
const OBJECTS = {
  'ipa/04-cahaya-bunyi-panas-zat/ambulans-doppler': () => ambulanceDoppler(),
  'ipa/04-cahaya-bunyi-panas-zat/distilasi': () => distillation(),
  'ipa/02-tubuh-manusia/tulang-rusuk': (slot) => ribCage(slot.match(/(depan|belakang|kiri|kanan)$/)[1]),
  'ipa/01-makhluk-hidup/tingkatan-organisasi-makhluk-hidup-set': { draw: () => organizationLevels(), only: /^p02-/ },
  'ipa/01-makhluk-hidup/daur-katak-set': { draw: (slot) => frogCycle(/belah/.test(slot), /transparan/.test(slot)), only: /^p0[34]-/ },
  'ipa/02-tubuh-manusia/hati-empedu': { draw: (slot) => (/kiri$/.test(slot) ? liverLeft() : liverRight()), only: /^p(09|10)-/ },
  'ipa/02-tubuh-manusia/lidah': { draw: () => tongueRight(), only: /^p10-/ },
  'ipa/02-tubuh-manusia/sistem-pernapasan': { draw: () => respiratorySee(), only: /^p12-/ },
  'ipa/01-makhluk-hidup/kentang-bertunas': { draw: () => potatoSee(), only: /^p12-/ },
  'ipa/02-tubuh-manusia/vaksin-suntik': { draw: () => vaccine(), only: /^p01-/ },
  'ipa/02-tubuh-manusia/jantung': { draw: (slot) => (/belakang/.test(slot) ? heartPosterior() : /kiri/.test(slot) ? heartLeftLateral() : heartRightLateral()), only: /^p(04|08|09|10)-/ },
  'ipa/01-makhluk-hidup/lebah': { draw: () => beeRear(), only: /^p0[38]-/ },
  'ipa/02-tubuh-manusia/alveolus': { draw: (slot) => alveolusCluster(/belah/.test(slot), /transparan/.test(slot)), only: /^p0[34]-/ },
  'ipa/02-tubuh-manusia/lambung': { draw: () => stomachSection(), only: /^p11-/ },
  'ipa/02-tubuh-manusia/mata': { draw: () => eyeSection(true), only: /^p11-/ },
  'ipa/02-tubuh-manusia/mata-penampang': { draw: (slot) => eyeSection(/p03-/.test(slot)), only: /^p0[123]-/ },
  'ipa/02-tubuh-manusia/ginjal-penampang': { draw: () => kidneySection(), only: /^p01-/ },
  'ipa/02-tubuh-manusia/sistem-urinaria': { draw: (slot) => urinary(/belakang/.test(slot) ? 'belakang' : 'depan', /p11-/.test(slot) ? 'belah' : /p12-/.test(slot) ? 'see' : 'solid', /p1[12]-/.test(slot)), only: /^p(07|08|11|12)-/ },
  'ipa/02-tubuh-manusia/tulang-belakang': { draw: (slot) => (/p11-/.test(slot) ? spineBelah() : spineView(/p10-/.test(slot) ? 'bone' : 'see', /p12-/.test(slot))), only: /^p1[012]-/ },
  'ipa/02-tubuh-manusia/tulang-paha-penampang': { draw: (slot) => femurSection(/transparan/.test(slot)), only: /^p0[34]-/ },
  'ipa/02-tubuh-manusia/reproduksi-pria': { draw: (slot) => maleRepro(/transparan/.test(slot) ? 'see' : /p02-/.test(slot) ? 'solid' : 'belah'), only: /^p0[234]-/ },
  'ipa/01-makhluk-hidup/telur-ayam': { draw: (slot) => eggSection(/belah/.test(slot), /transparan/.test(slot)), only: /^p0[34]-/ },
  'ipa/01-makhluk-hidup/penampang-daun': { draw: (slot) => leafSection(/belah/.test(slot)), only: /^p0[34]-/ },
  'ipa/01-makhluk-hidup/akar-tunggang-serabut-set': { draw: () => rootsSeeThrough(false), only: /^p04-/ },
  'ipa/01-makhluk-hidup/sel-tumbuhan': { draw: (slot) => (/p11-/.test(slot) ? plantCellSection(true) : plantCellBox(/kiri$/.test(slot) ? 'kiri' : 'kanan')), only: /^p(09|10|11)-/ },
  'ipa/01-makhluk-hidup/sel-hewan': { draw: (slot) => (/p02-/.test(slot) ? animalCell('wedge') : /p12-/.test(slot) ? animalCell('see') : animalCell('intact', /kiri$/.test(slot) ? 1 : 2)), only: /^p(02|04|05|09|10|12)-/ },
  'ipa/05-bumi-antariksa/tata-surya-deret': () => solarSystemRow(),
  'ipa/05-bumi-antariksa/rasi-orion': { draw: () => orion(), only: /^p01-/ },
  'ipa/05-bumi-antariksa/fase-bulan-deret': () => moonPhases(),
  'ipa/05-bumi-antariksa/bumi-lapisan': { draw: (slot) => cutawayPlanet('earth', /belah/.test(slot), /transparan/.test(slot)), only: /^p0[34]-/ },
  'ipa/05-bumi-antariksa/jupiter': { draw: (slot) => (/p1[12]-/.test(slot) ? cutawayPlanet('jupiter', /belah/.test(slot), /transparan/.test(slot)) : planetDisc('jupiter', slot.match(/(belakang|kiri|kanan)$/)[1])), only: /^p(08|09|10)-/ },
  'ipa/05-bumi-antariksa/merkurius': { draw: (slot) => planetDisc('merkurius', slot.match(/(belakang|kiri|kanan)$/)[1]), only: /^p(08|09|10)-/ },
  'ipa/05-bumi-antariksa/venus': { draw: (slot) => planetDisc('venus', slot.match(/(belakang|kiri|kanan)$/)[1]), only: /^p(08|09|10)-/ },
  'ipa/05-bumi-antariksa/bulan': { draw: (slot) => moonLimb(/kiri$/.test(slot) ? 'kiri' : 'kanan'), only: /^p(09|10)-/ },
  'ipa/01-makhluk-hidup/kepiting': { draw: () => crabRear(), only: /^p08-/ },
  'ipa/01-makhluk-hidup/nyamuk-aedes': { draw: () => mosquitoVentral(), only: /^p0[38]-/ },
  'ipa/02-tubuh-manusia/usus-halus-besar': { draw: (slot) => intestines(/belakang/.test(slot)), only: /^p08-/ },
  'ipa/01-makhluk-hidup/kecoak': { draw: () => cockroachRear(), only: /^p03-/ },
  'ipa/05-bumi-antariksa/profil-tanah': { draw: (slot) => soilProfile(/penampang/.test(slot) ? 'penampang' : slot.match(/(depan|belakang|kiri|kanan)$/)[1], /belah/.test(slot)), only: /^p(0[2-5]|0[7-9]|10|11|12)-/ },
  'ipa/05-bumi-antariksa/pelangi': () => rainbow(),
  'ipa/05-bumi-antariksa/gunung-meletus': { draw: (slot) => volcanoSection(/belah/.test(slot), /transparan/.test(slot)), only: /^p0[34]-/ },
  'ipa/05-bumi-antariksa/pasang-surut-set': { draw: () => tides(), only: /^p02-/ },
  'ipa/04-cahaya-bunyi-panas-zat/teropong-bintang': { draw: (slot) => telescopeSection(/p11-/.test(slot)), only: /^p1[12]-/ },
  'ipa/03-gaya-gerak-energi/speaker-mikrofon-set': { draw: () => speakerSection(), only: /^p03-/ },
  'ipa/03-gaya-gerak-energi/kipas-angin': { draw: () => fanRight(), only: /^p05-/ },
  'ipa/03-gaya-gerak-energi/bel-listrik': { draw: () => electricBell(), only: /^p02-/ },
  'ipa/04-cahaya-bunyi-panas-zat/kamera-lubang-jarum': { draw: () => pinholeFront(), only: /^p02-/ },
  'ipa/04-cahaya-bunyi-panas-zat/termometer-set': { draw: () => thermometers(true), only: /^p03-/ },
  'ipa/04-cahaya-bunyi-panas-zat/mikroskop': { draw: (slot) => (/p03-/.test(slot) ? microscopeBack() : microscopeSection(/p11-/.test(slot), /p12-/.test(slot))), only: /^p(03|11|12)-/ },
  'ipa/06-metode-ilmiah-alat-lab/neraca-ohauss': (slot) => tripleBeam(slot.match(/(depan|belakang|kiri|kanan)$/)[1]),
  'ipa/06-metode-ilmiah-alat-lab/alat-gelas-lab-set': { draw: () => glasswareSet(), only: /^p01-/ },
  'ipa/04-cahaya-bunyi-panas-zat/periskop': { draw: (slot) => periscopeExterior(slot.match(/(depan|belakang|kiri|kanan)$/)[1]), only: /^p(07|08|09|10)-/ },
  'ipa/03-gaya-gerak-energi/bidang-miring-papan': { draw: () => rampFromHighEnd(), only: /^p10-/ },
  'ipa/03-gaya-gerak-energi/dinamo-sepeda': { draw: (slot) => dynamoSide(/kiri$/.test(slot) ? 'kiri' : 'kanan'), only: /^p(09|10)-/ },
  'ipa/03-gaya-gerak-energi/transformator': { draw: (slot) => (/penampang/.test(slot) ? transformerSection() : transformerEndOn()), only: /^p(10|11)-/ },
  'ipa/03-gaya-gerak-energi/kincir-angin': { draw: () => windTurbineRight(), only: /^p10-/ },
  'ipa/06-metode-ilmiah-alat-lab/gelas-ukur': { draw: (slot) => gradCylinder(slot.match(/(depan|belakang|kiri|kanan)$/)[1]), only: /^p0[2-5]-/ },
  'ipa/06-metode-ilmiah-alat-lab/stopwatch': (slot) => stopwatch(slot.match(/(depan|belakang|kiri|kanan)$/)[1]),
  'ipa/04-cahaya-bunyi-panas-zat/kromatografi': { draw: () => chromatography(), only: /^p02-/ },
  'ipa/04-cahaya-bunyi-panas-zat/model-atom': { draw: (slot) => carbonAtom(/belah/.test(slot)), only: /^p04-/ },
  'ipa/04-cahaya-bunyi-panas-zat/slinki': { draw: () => slinky(), only: /^p02-/ },
  'ipa/04-cahaya-bunyi-panas-zat/termos-penampang': { draw: (slot) => vacuumFlask(/belah/.test(slot) ? 'belah' : 'see'), only: /^p0[34]-/ },
  'ipa/04-cahaya-bunyi-panas-zat/lensa-cembung-cekung-set': () => lenses(),
  'ipa/04-cahaya-bunyi-panas-zat/larutan-koloid-suspensi': { draw: (slot) => threeGlasses(/belah/.test(slot)), only: /^p0[34]-/ },
  'ipa/04-cahaya-bunyi-panas-zat/molekul-set': { draw: () => molecules(), only: /^p02-/ },
};

const install = process.argv.includes('--install');
const outDir = install ? null : process.argv[2];
if (!install && !outDir) throw new Error('usage: vektor-ipa.mjs <outDir> | --install');
if (outDir) mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: S, height: S } });
let n = 0;
const only = (process.argv.find((a) => a.startsWith('--only=')) ?? '').slice(7);
for (const [rel, spec] of Object.entries(OBJECTS)) {
  if (only && !only.split(',').includes(rel.split('/').pop())) continue;
  const draw = typeof spec === 'function' ? spec : spec.draw;
  const dir = join('image-results', rel);
  const slots = [...new Set(readdirSync(dir).filter((x) => /^p\d\d-/.test(x) && !/[.]lama\d*[.]/.test(x) && !/turnaround/.test(x)).map((x) => x.replace(/\.[a-z]+$/, '')))];
  const slotRe = typeof spec === 'function' ? null : spec.only;
  for (const slot of slots.filter((x) => !slotRe || slotRe.test(x))) {
    await page.setContent(`<html><body style="margin:0">${draw(slot)}</body></html>`);
    const png = await page.screenshot({ clip: { x: 0, y: 0, width: S, height: S } });
    const id = rel.split('/').pop();
    if (install) {
      const old = readdirSync(dir).find((x) => new RegExp(`^${slot}[.](png|jpe?g|webp)$`).test(x));
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
if (install && !existsSync('image-results/_review.json')) console.warn('_review.json tidak ditemukan');
