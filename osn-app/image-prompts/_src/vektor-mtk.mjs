// Exact vector pictures for MTK precision props, where Gemini kept getting the count/angle wrong
// (dice pips, spinner sectors, clock hands, tangram pieces, bead counts…). Every number in these
// pictures is computed here, so it cannot drift. Run from osn-app/:
//
//   node image-prompts/_src/vektor-mtk.mjs <outDir>            preview only, one PNG per slot
//   node image-prompts/_src/vektor-mtk.mjs --install           write into image-results/ slots
//   … --only=kubus,pizza-pecahan                               limit to some objects
//
// --install moves a non-approved slot image to <slot>.lama.png first (same convention as --fix).
// The review verdicts are written separately, after a human-style look at the preview.
import { mkdirSync, readdirSync, renameSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import { chromium } from 'playwright';

const S = 1024;
const INK = '#1f2a44';
const svg = (body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}"><rect width="${S}" height="${S}" fill="#fff"/>${body}</svg>`;
const f = (n) => Math.round(n * 10) / 10;
const pts = (a) => a.map(([x, y]) => `${f(x)},${f(y)}`).join(' ');
const rad = (d) => (d * Math.PI) / 180;

// ---------- 3D (orthographic, camera on -Y looking +Y, z up) ----------
const rotZ = ([x, y, z], a) => [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a), z];
const rotX = ([x, y, z], a) => [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
const view = (p, yaw, elev) => rotX(rotZ(p, rad(yaw)), rad(elev)); // camera slightly above
const sub = (a, b) => a.map((v, i) => v - b[i]);
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

// Draw a convex solid: faces = vertex index lists (counter-clockwise seen from outside).
function solid(V, F, { yaw, elev = 22, scale, cx = S / 2, cy = S / 2, fill = 'rgba(150,200,240,0.28)', dots = true }) {
  const P = V.map((v) => view(v, yaw, elev));
  const scr = (p) => [cx + p[0] * scale, cy - p[2] * scale];
  const front = F.map((fc) => cross(sub(P[fc[1]], P[fc[0]]), sub(P[fc[2]], P[fc[0]]))[1] < 0);
  const edges = new Map();
  F.forEach((fc, i) => fc.forEach((a, k) => {
    const b = fc[(k + 1) % fc.length];
    const key = [Math.min(a, b), Math.max(a, b)].join('-');
    edges.set(key, (edges.get(key) ?? false) || front[i]);
  }));
  let out = F.map((fc, i) => (front[i] ? `<polygon points="${pts(fc.map((j) => scr(P[j])))}" fill="${fill}"/>` : '')).join('');
  // hidden (dashed) edges first, so a visible edge in the same place is drawn on top
  for (const [key, vis] of [...edges].sort((a, b) => a[1] - b[1])) {
    const [a, b] = key.split('-').map(Number);
    const [p, q] = [scr(P[a]), scr(P[b])];
    out += `<line x1="${f(p[0])}" y1="${f(p[1])}" x2="${f(q[0])}" y2="${f(q[1])}" stroke="${vis ? INK : '#8a95ad'}" stroke-width="${vis ? 7 : 5}" ${vis ? '' : 'stroke-dasharray="18 14"'} stroke-linecap="round"/>`;
  }
  if (dots) out += P.map((p) => { const [x, y] = scr(p); return `<circle cx="${f(x)}" cy="${f(y)}" r="16" fill="#e53935" stroke="#8e1b19" stroke-width="3"/>`; }).join('');
  return out;
}

function tetrahedron(yaw) {
  const r = 1; // circumradius of the base triangle
  const base = [0, 1, 2].map((i) => [r * Math.cos(rad(90 + i * 120)), r * Math.sin(rad(90 + i * 120)), 0]);
  const h = r * Math.sqrt(3) * Math.sqrt(2 / 3); // regular: height = edge·√(2/3), edge = r·√3
  const V = [...base, [0, 0, h]];
  const F = [[0, 2, 1], [0, 1, 3], [1, 2, 3], [2, 0, 3]];
  return svg(solid(V, F, { yaw, scale: 330, cy: 640 }));
}

function prism(yaw) {
  const L = 2.2; const w = 1.2; const h = w * Math.sqrt(3) / 2; // equilateral end faces
  const end = (x) => [[x, -w / 2, 0], [x, w / 2, 0], [x, 0, h]];
  const V = [...end(-L / 2), ...end(L / 2)];
  const F = [[0, 2, 1], [3, 4, 5], [0, 1, 4, 3], [1, 2, 5, 4], [2, 0, 3, 5]];
  // end views (kiri/kanan) straight-on: the textbook side view of a lying prism is a plain triangle
  return svg(solid(V, F, { yaw, elev: Math.abs(yaw) === 90 ? 0 : 12, scale: 300, cy: 600 }));
}

// Standard die: opposite faces sum to 7. Face order: +y back, -y front, +x right, -x left, +z top, -z bottom.
const PIPS = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]],
  5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] };
function die({ x0, yaw, elev = 24, scale, cy, faces }) {
  const c = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];
  // each face: corner indices (CCW from outside) + in-plane axes u, v + centre
  const FF = [
    { n: faces.front, q: [0, 1, 5, 4], c: [0, -1, 0], u: [1, 0, 0], v: [0, 0, 1] },
    { n: 7 - faces.front, q: [2, 3, 7, 6], c: [0, 1, 0], u: [-1, 0, 0], v: [0, 0, 1] },
    { n: faces.right, q: [1, 2, 6, 5], c: [1, 0, 0], u: [0, 1, 0], v: [0, 0, 1] },
    { n: 7 - faces.right, q: [3, 0, 4, 7], c: [-1, 0, 0], u: [0, -1, 0], v: [0, 0, 1] },
    { n: faces.top, q: [4, 5, 6, 7], c: [0, 0, 1], u: [1, 0, 0], v: [0, 1, 0] },
    { n: 7 - faces.top, q: [0, 3, 2, 1], c: [0, 0, -1], u: [1, 0, 0], v: [0, -1, 0] },
  ];
  const T = (p) => { const r = view(p, yaw, elev); return [x0 + r[0] * scale, cy - r[2] * scale, r[1]]; };
  let out = '';
  for (const fc of FF) {
    const P = fc.q.map((i) => T(c[i]));
    const nrm = view(fc.c, yaw, elev);
    if (nrm[1] >= -1e-6) continue; // faces away
    const shade = 0.82 + 0.18 * Math.max(0, -nrm[1]);
    const g = Math.round(255 * shade);
    out += `<polygon points="${pts(P)}" fill="rgb(${g},${g},${g})" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>`;
    for (const [a, b] of PIPS[fc.n]) {
      const ring = Array.from({ length: 28 }, (_, k) => {
        const t = (k / 28) * 2 * Math.PI;
        const pu = a * 0.5 + 0.17 * Math.cos(t); const pv = -b * 0.5 + 0.17 * Math.sin(t);
        return T(fc.c.map((cc, i) => cc + pu * fc.u[i] + pv * fc.v[i]));
      });
      out += `<polygon points="${pts(ring)}" fill="#111"/>`;
    }
  }
  return out;
}
// Two dice per view, the second turned so three faces show. Both obey "opposite faces sum to 7".
const dice = (yaw) => svg(
  die({ x0: 300, yaw, scale: 140, cy: 540, faces: { front: 1, right: 3, top: 2 } })
  + die({ x0: 720, yaw: yaw + 35, scale: 140, cy: 540, faces: { front: 5, right: 4, top: 6 } }),
);

function cube(yaw) {
  const V = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];
  const F = [[0, 1, 5, 4], [2, 3, 7, 6], [1, 2, 6, 5], [3, 0, 4, 7], [4, 5, 6, 7], [0, 3, 2, 1]];
  return svg(solid(V, F, { yaw: yaw + 18, scale: 230, cy: 540 })); // slight turn so 8 vertices separate
}

function pizza() {
  const cx = 470; const cy = 512; const R = 360; const pull = 70; let o = '';
  for (let i = 0; i < 8; i++) { // 8 equal 45° slices, slice 0 pulled out along its bisector
    const a0 = rad(-90 + i * 45); const a1 = rad(-45 + i * 45); const am = (a0 + a1) / 2;
    const dx = i === 0 ? pull * Math.cos(am) : 0; const dy = i === 0 ? pull * Math.sin(am) : 0;
    const c = [cx + dx, cy + dy];
    const arc = (r) => `L${f(c[0] + r * Math.cos(a0))},${f(c[1] + r * Math.sin(a0))} A${r},${r} 0 0 1 ${f(c[0] + r * Math.cos(a1))},${f(c[1] + r * Math.sin(a1))} Z`;
    o += `<path d="M${f(c[0])},${f(c[1])} ${arc(R)}" fill="#e3b46b" stroke="#8a5a1f" stroke-width="5"/>`;
    o += `<path d="M${f(c[0])},${f(c[1])} ${arc(R - 45)}" fill="#d9452b"/>`;
    for (const [rr, t] of [[0.45, 0.35], [0.7, 0.7], [0.55, 0.5]]) {
      const a = a0 + (a1 - a0) * t; const r = (R - 45) * rr;
      o += `<circle cx="${f(c[0] + r * Math.cos(a))}" cy="${f(c[1] + r * Math.sin(a))}" r="34" fill="#fff4d6"/>`;
    }
    const ab = a0 + (a1 - a0) * 0.62; const rb = (R - 45) * 0.36;
    o += `<ellipse cx="${f(c[0] + rb * Math.cos(ab))}" cy="${f(c[1] + rb * Math.sin(ab))}" rx="24" ry="13" fill="#2e7d32" transform="rotate(${f((ab * 180) / Math.PI)} ${f(c[0] + rb * Math.cos(ab))} ${f(c[1] + rb * Math.sin(ab))})"/>`;
  }
  return svg(o);
}

// ---------- flat props ----------
function clock() {
  const cx = 512; const cy = 512; let o = '';
  o += `<circle cx="${cx}" cy="${cy}" r="440" fill="#c9cdd3"/><circle cx="${cx}" cy="${cy}" r="410" fill="#fff" stroke="${INK}" stroke-width="6"/>`;
  for (let i = 0; i < 60; i++) {
    const a = rad(i * 6 - 90); const big = i % 5 === 0;
    const r1 = big ? 330 : 370; const r2 = 395;
    o += `<line x1="${f(cx + r1 * Math.cos(a))}" y1="${f(cy + r1 * Math.sin(a))}" x2="${f(cx + r2 * Math.cos(a))}" y2="${f(cy + r2 * Math.sin(a))}" stroke="#111" stroke-width="${big ? 16 : 5}"/>`;
  }
  // exactly 3:00 — hour hand at 3 (right), minute hand at 12 (up): a right angle.
  o += `<line x1="${cx}" y1="${cy}" x2="${cx + 230}" y2="${cy}" stroke="#111" stroke-width="26" stroke-linecap="round"/>`;
  o += `<line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - 330}" stroke="#111" stroke-width="16" stroke-linecap="round"/>`;
  o += `<line x1="${cx}" y1="${cy + 60}" x2="${cx}" y2="${cy - 370}" stroke="#e53935" stroke-width="6" stroke-linecap="round"/>`;
  o += `<circle cx="${cx}" cy="${cy}" r="20" fill="#e53935"/>`;
  return svg(o);
}

function spinner() {
  const cx = 512; const cy = 512; const R = 420;
  const col = ['#e53935', '#fb8c00', '#fdd835', '#43a047', '#00897b', '#1e88e5', '#8e24aa', '#ec407a'];
  let o = `<circle cx="${cx}" cy="${cy}" r="${R + 24}" fill="#fff" stroke="${INK}" stroke-width="8"/>`;
  col.forEach((c, i) => { // 8 sectors × 45°
    const a0 = rad(-90 + i * 45); const a1 = rad(-90 + (i + 1) * 45);
    o += `<path d="M${cx},${cy} L${f(cx + R * Math.cos(a0))},${f(cy + R * Math.sin(a0))} A${R},${R} 0 0 1 ${f(cx + R * Math.cos(a1))},${f(cy + R * Math.sin(a1))} Z" fill="${c}" stroke="#fff" stroke-width="8"/>`;
  });
  const a = rad(-90 + 112.5); // arrow points at the middle of sector 3 (never on a border)
  const tip = [cx + 330 * Math.cos(a), cy + 330 * Math.sin(a)];
  const back = [cx - 90 * Math.cos(a), cy - 90 * Math.sin(a)];
  const n = [-Math.sin(a), Math.cos(a)];
  const head = [[tip[0], tip[1]], [tip[0] - 70 * Math.cos(a) + 34 * n[0], tip[1] - 70 * Math.sin(a) + 34 * n[1]], [tip[0] - 70 * Math.cos(a) - 34 * n[0], tip[1] - 70 * Math.sin(a) - 34 * n[1]]];
  o += `<line x1="${f(back[0])}" y1="${f(back[1])}" x2="${f(tip[0] - 60 * Math.cos(a))}" y2="${f(tip[1] - 60 * Math.sin(a))}" stroke="#111" stroke-width="22" stroke-linecap="round"/>`;
  o += `<polygon points="${pts(head)}" fill="#111"/><circle cx="${cx}" cy="${cy}" r="34" fill="#9aa0a6" stroke="#111" stroke-width="6"/>`;
  return svg(o);
}

function tangram() {
  // classic 7-piece dissection of a 4×4 square (areas 4+4+2+2+2+1+1 = 16)
  const P = [
    [[[0, 0], [4, 0], [2, 2]], '#e53935'], [[[0, 0], [2, 2], [0, 4]], '#1e88e5'],
    [[[2, 4], [4, 2], [4, 4]], '#43a047'], [[[3, 1], [4, 2], [3, 3], [2, 2]], '#fdd835'],
    [[[0, 4], [1, 3], [3, 3], [2, 4]], '#8e24aa'], [[[4, 0], [4, 2], [3, 1]], '#fb8c00'],
    [[[2, 2], [3, 3], [1, 3]], '#00897b'],
  ];
  const k = 200; const ox = 112; const oy = 112;
  return svg(P.map(([poly, c]) => `<polygon points="${pts(poly.map(([x, y]) => [ox + x * k, oy + y * k]))}" fill="${c}" stroke="${INK}" stroke-width="8" stroke-linejoin="round"/>`).join(''));
}

function soroban() {
  const rods = 13; const x0 = 90; const x1 = 934; const yTop = 300; const yBot = 724; const beam = 420;
  const dx = (x1 - x0) / (rods + 1);
  let o = `<rect x="${x0 - 30}" y="${yTop - 30}" width="${x1 - x0 + 60}" height="${yBot - yTop + 60}" rx="14" fill="#4e342e"/><rect x="${x0}" y="${yTop}" width="${x1 - x0}" height="${yBot - yTop}" fill="#f6efe6"/>`;
  const bead = (x, y) => `<polygon points="${pts([[x - 28, y], [x - 12, y - 17], [x + 12, y - 17], [x + 28, y], [x + 12, y + 17], [x - 12, y + 17]])}" fill="#a1683a" stroke="#4e342e" stroke-width="3"/>`;
  for (let i = 1; i <= rods; i++) {
    const x = x0 + i * dx;
    o += `<line x1="${f(x)}" y1="${yTop}" x2="${f(x)}" y2="${yBot}" stroke="#8d6e63" stroke-width="6"/>`;
    o += bead(x, yTop + 20); // 1 upper bead, resting up (value 0)
    for (let j = 0; j < 4; j++) o += bead(x, yBot - 20 - j * 36); // 4 lower beads, resting down
  }
  o += `<rect x="${x0}" y="${beam - 12}" width="${x1 - x0}" height="24" fill="#4e342e"/>`;
  for (let i = 2; i <= rods; i += 3) o += `<circle cx="${f(x0 + i * dx)}" cy="${beam}" r="5" fill="#fff"/>`; // unit dots
  return svg(o);
}

function speedometer() {
  const cx = 512; const cy = 540; const R = 380; let o = '';
  o += `<circle cx="${cx}" cy="${cy}" r="${R + 50}" fill="#c9cdd3"/><circle cx="${cx}" cy="${cy}" r="${R + 22}" fill="#15181d"/>`;
  for (let i = 0; i <= 40; i++) { // 270° sweep from lower-left to lower-right, no printed numbers
    const a = rad(135 + i * (270 / 40)); const big = i % 5 === 0;
    const r1 = big ? R - 70 : R - 35;
    o += `<line x1="${f(cx + r1 * Math.cos(a))}" y1="${f(cy + r1 * Math.sin(a))}" x2="${f(cx + (R - 8) * Math.cos(a))}" y2="${f(cy + (R - 8) * Math.sin(a))}" stroke="#f5f5f5" stroke-width="${big ? 12 : 5}"/>`;
  }
  o += `<rect x="${cx - 110}" y="${cy + 150}" width="220" height="70" rx="10" fill="#2b313a" stroke="#4a525e" stroke-width="4"/>`;
  const a = rad(135 + 0.4 * 270);
  o += `<line x1="${f(cx - 40 * Math.cos(a))}" y1="${f(cy - 40 * Math.sin(a))}" x2="${f(cx + (R - 60) * Math.cos(a))}" y2="${f(cy + (R - 60) * Math.sin(a))}" stroke="#ff7a1a" stroke-width="14" stroke-linecap="round"/>`;
  o += `<circle cx="${cx}" cy="${cy}" r="38" fill="#3a4049" stroke="#c9cdd3" stroke-width="6"/>`;
  return svg(o);
}

function cardsAndBalls() {
  let o = '';
  for (let i = 0; i < 5; i++) { // fan of 5 blank cards
    const a = -24 + i * 12;
    o += `<g transform="rotate(${a} 270 760)"><rect x="170" y="330" width="200" height="300" rx="22" fill="#fff" stroke="${INK}" stroke-width="6"/></g>`;
  }
  o += `<path d="M590,360 C560,520 560,700 600,780 L900,780 C940,700 940,520 910,360 Z" fill="rgba(200,225,245,0.35)" stroke="${INK}" stroke-width="6"/>`;
  o += `<path d="M700,360 L800,360 L780,300 L720,300 Z" fill="rgba(200,225,245,0.35)" stroke="${INK}" stroke-width="5"/><rect x="712" y="340" width="76" height="16" fill="#e53935"/>`;
  // exactly 10 balls: 5 red, 3 blue, 2 yellow — rows of 4, 3, 3, none overlapping
  const colors = ['#e53935', '#e53935', '#e53935', '#e53935', '#e53935', '#1e88e5', '#1e88e5', '#1e88e5', '#fdd835', '#fdd835'];
  const pos = [[655, 725], [725, 725], [795, 725], [865, 725], [690, 655], [760, 655], [830, 655], [690, 585], [760, 585], [830, 585]];
  pos.forEach(([x, y], i) => { o += `<circle cx="${x}" cy="${y}" r="32" fill="${colors[i]}" stroke="#333" stroke-width="3"/>`; });
  return svg(o);
}

function triangleBeads() {
  let o = `<defs><radialGradient id="w" cx="35%" cy="35%"><stop offset="0" stop-color="#e8c28f"/><stop offset="1" stop-color="#9c6a3a"/></radialGradient></defs>`;
  const r = 40; const d = 2 * r;
  let x = 40;
  for (const rows of [1, 2, 3, 4]) { // triangular numbers 1, 3, 6, 10
    const w = rows * d;
    for (let row = 0; row < rows; row++) {
      for (let k = 0; k <= row; k++) {
        const cx = x + (rows - 1 - row) * r + k * d + r; const cy = 680 - (rows - 1 - row) * r * Math.sqrt(3);
        o += `<circle cx="${f(cx)}" cy="${f(cy)}" r="${r - 1}" fill="url(#w)" stroke="#6d4523" stroke-width="2"/>`;
      }
    }
    x += w + 34;
  }
  return svg(o);
}

function isoCube(ox, oy, s, [x, y, z], color) {
  const P = ([a, b, c]) => [ox + (a - b) * s * 0.866, oy + (a + b) * s * 0.5 - c * s];
  const top = [[x, y, z + 1], [x + 1, y, z + 1], [x + 1, y + 1, z + 1], [x, y + 1, z + 1]].map(P);
  const right = [[x + 1, y, z], [x + 1, y + 1, z], [x + 1, y + 1, z + 1], [x + 1, y, z + 1]].map(P);
  const left = [[x, y + 1, z], [x + 1, y + 1, z], [x + 1, y + 1, z + 1], [x, y + 1, z + 1]].map(P);
  const [r, g, b] = color;
  const tone = (k) => `rgb(${Math.round(r * k)},${Math.round(g * k)},${Math.round(b * k)})`;
  const c = P([x + 0.5, y + 0.5, z + 1]);
  return `<polygon points="${pts(top)}" fill="${tone(1)}" stroke="${INK}" stroke-width="3"/>`
    + `<polygon points="${pts(right)}" fill="${tone(0.78)}" stroke="${INK}" stroke-width="3"/>`
    + `<polygon points="${pts(left)}" fill="${tone(0.62)}" stroke="${INK}" stroke-width="3"/>`
    + `<ellipse cx="${f(c[0])}" cy="${f(c[1])}" rx="${f(s * 0.22)}" ry="${f(s * 0.13)}" fill="${tone(0.85)}" stroke="${INK}" stroke-width="2"/>`;
}
function unitCubes() {
  const pal = [[229, 57, 53], [30, 136, 229], [253, 216, 53], [67, 160, 71]];
  const cubes = [];
  for (let z = 0; z < 2; z++) for (let x = 0; x < 4; x++) for (let y = 0; y < 3; y++) cubes.push([x, y, z]); // 4 × 3 × 2 = 24
  cubes.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]) || a[2] - b[2]);
  let o = cubes.map((c, i) => isoCube(330, 380, 78, c, pal[(c[0] + c[1] + c[2]) % 4])).join('');
  [[0, 0, 0], [1.4, 0, 0], [0.7, 1.3, 0]].forEach((c, i) => { o += isoCube(700, 640, 78, c, pal[i]); }); // 3 loose cubes
  return svg(o);
}

function cubeNet() {
  // net: a column of four squares (top, front, bottom, back) with left/right beside the 2nd one.
  const s = 130; const ox = 120; const oy = 200;
  const col = { top: '#ffcdd2', front: '#bbdefb', bottom: '#fff9c4', back: '#c8e6c9', left: '#e1bee7', right: '#ffe0b2' };
  const sq = (cx, cy, c) => `<rect x="${ox + cx * s}" y="${oy + cy * s}" width="${s}" height="${s}" fill="${c}" stroke="${INK}" stroke-width="6"/>`;
  let o = sq(1, 0, col.top) + sq(1, 1, col.front) + sq(1, 2, col.bottom) + sq(1, 3, col.back) + sq(0, 1, col.left) + sq(2, 1, col.right);
  // the same six faces folded into a cube (front, right and top visible, matching colours)
  const C = ([a, b, c]) => [760 + (a - b) * 150 * 0.866, 560 + (a + b) * 150 * 0.5 - c * 150];
  const face = (ps, c) => `<polygon points="${pts(ps.map(C))}" fill="${c}" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>`;
  o += face([[0, 1, 0], [1, 1, 0], [1, 1, 1], [0, 1, 1]], col.front)
    + face([[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]], col.right)
    + face([[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], col.top);
  return svg(o);
}

function balanceScale() {
  let o = '';
  o += `<rect x="440" y="860" width="144" height="34" rx="8" fill="#c9a227" stroke="#7a5f10" stroke-width="4"/><rect x="497" y="300" width="30" height="566" fill="#d4af37" stroke="#7a5f10" stroke-width="4"/>`;
  o += `<rect x="150" y="290" width="724" height="22" rx="10" fill="#d4af37" stroke="#7a5f10" stroke-width="4"/><circle cx="512" cy="301" r="22" fill="#c9a227" stroke="#7a5f10" stroke-width="4"/>`;
  const pan = (x) => `<line x1="${x}" y1="301" x2="${x - 120}" y2="620" stroke="#7a5f10" stroke-width="4"/><line x1="${x}" y1="301" x2="${x + 120}" y2="620" stroke="#7a5f10" stroke-width="4"/><path d="M${x - 150},620 Q${x},700 ${x + 150},620 Z" fill="#e6c55a" stroke="#7a5f10" stroke-width="5"/>`;
  o += pan(195) + pan(829); // both pans at the same height: equilibrium
  const cube = (x, y) => `<rect x="${x}" y="${y}" width="52" height="52" fill="#d9a46b" stroke="#7a4a1e" stroke-width="4"/>`;
  o += `<path d="M95,618 L105,520 L185,520 L195,618 Z" fill="#e8d3b0" stroke="#8a6a3a" stroke-width="4"/><path d="M105,520 L125,500 L165,500 L185,520 Z" fill="#d8bf95" stroke="#8a6a3a" stroke-width="4"/>`; // closed paper bag
  o += cube(205, 566) + cube(262, 566); // + 2 cubes on the left
  for (let i = 0; i < 5; i++) o += cube(694 + i * 55, 566); // 5 cubes on the right
  return svg(o);
}

// ---------- slots ----------
const VIEWS = { depan: 0, kanan: -90, belakang: 180, kiri: 90 };
const per4 = (fn) => (slot) => fn(VIEWS[slot.match(/(depan|belakang|kiri|kanan)$/)[1]]);
const OBJECTS = {
  // only the slots Gemini got wrong / that must match them; the other slots keep their reviewed picture
  'mtk/04-geometri-ruang/kubus': { draw: per4(cube), only: /ilustrasi-(depan|belakang|kiri|kanan)/ },
  'mtk/01-bilangan-pecahan/pizza-pecahan': { draw: () => pizza(), only: /^p01-/ },
  'mtk/01-bilangan-pecahan/sempoa': () => soroban(),
  'mtk/03-geometri-datar/jam-analog': () => clock(),
  'mtk/03-geometri-datar/tangram': () => tangram(),
  'mtk/04-geometri-ruang/jaring-jaring-kubus': () => cubeNet(),
  'mtk/04-geometri-ruang/kubus-satuan': () => unitCubes(),
  'mtk/04-geometri-ruang/limas-segitiga': per4(tetrahedron),
  'mtk/04-geometri-ruang/prisma-segitiga': per4(prism),
  'mtk/05-pengukuran/speedometer': () => speedometer(),
  'mtk/07-statistika-peluang/dadu': per4(dice),
  'mtk/07-statistika-peluang/kartu-bernomor': () => cardsAndBalls(),
  'mtk/07-statistika-peluang/spinner': () => spinner(),
  'mtk/08-pola-logika-aljabar/susunan-pola-bola': () => triangleBeads(),
  'mtk/08-pola-logika-aljabar/timbangan-aljabar': () => balanceScale(),
};

const install = process.argv.includes('--install');
const outDir = install ? null : process.argv[2];
if (!install && !outDir) throw new Error('usage: vektor-mtk.mjs <outDir> | --install');
if (outDir) mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: S, height: S } });
let n = 0;
const only = (process.argv.find((a) => a.startsWith('--only=')) ?? '').slice(7);
for (const [rel, spec] of Object.entries(OBJECTS)) {
  if (only && !only.split(',').includes(rel.split('/').pop())) continue;
  const { draw, only: slotRe } = typeof spec === 'function' ? { draw: spec } : spec;
  const dir = join('image-results', rel);
  const slots = [...new Set(readdirSync(dir).filter((f) => /^p\d\d-/.test(f) && !f.includes('.lama.') && !/turnaround/.test(f)).map((f) => f.replace(/\.[a-z]+$/, '')))]
    .filter((s) => !slotRe || slotRe.test(s));
  for (const slot of slots) {
    await page.setContent(`<html><body style="margin:0">${draw(slot)}</body></html>`);
    const png = await page.screenshot({ clip: { x: 0, y: 0, width: S, height: S } });
    const id = rel.split('/').pop();
    if (install) {
      const old = readdirSync(dir).find((f) => f.startsWith(`${slot}.`) && /\.(png|jpe?g|webp)$/.test(f));
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
