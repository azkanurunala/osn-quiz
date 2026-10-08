// Exact vector pictures for precision props, where Gemini kept getting the count/angle wrong
// (MTK: dice pips, spinner sectors, clock hands, tangram pieces, bead counts…; IPA: circuit wiring,
// periscope mirrors). Every number in these pictures is computed here, so it cannot drift. Run from osn-app/:
//
//   node image-prompts/_src/vektor-mtk.mjs <outDir>            preview only, one PNG per slot
//   node image-prompts/_src/vektor-mtk.mjs --install           write into image-results/ slots
//   … --only=kubus,pizza-pecahan                               limit to some objects
//
//   … --empty                                                  skip slots that already have a picture
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

// ---------- IPA: circuits on a wooden board (top view) — the wiring topology is the point ----------
const RED = '#d32f2f';
const BLACK = '#263238';
const wire = (d, c) => `<path d="${d}" fill="none" stroke="#111" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`;
const screw = (x, y) => `<circle cx="${x}" cy="${y}" r="11" fill="#d4af37" stroke="#7a5f10" stroke-width="3"/><line x1="${x - 6}" y1="${y}" x2="${x + 6}" y2="${y}" stroke="#7a5f10" stroke-width="3"/>`;

function board(x, y, w, h) {
  let o = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="#deb887" stroke="#9c6b3c" stroke-width="5"/>`;
  for (let i = 1; i < 6; i++) {
    const g = y + (h * i) / 6;
    o += `<path d="M${x + 24},${f(g)} C${f(x + w * 0.3)},${f(g - 12)} ${f(x + w * 0.6)},${f(g + 12)} ${x + w - 24},${f(g - 4)}" fill="none" stroke="#c99a62" stroke-width="3" opacity="0.6"/>`;
  }
  return o;
}

// 2×AA holder. The cells lie head-to-tail and are joined by a strip on the left, so the right-hand
// tabs are + (top, red wire) and − (bottom, black wire). No printed symbols.
function batteries(x, y) {
  let o = `<rect x="${x}" y="${y}" width="190" height="160" rx="14" fill="#3a3a3a" stroke="#1b1b1b" stroke-width="5"/>`;
  o += `<rect x="${x + 8}" y="${y + 38}" width="10" height="84" rx="3" fill="#c0c0c0" stroke="#666" stroke-width="2"/>`;
  [[y + 50, true], [y + 110, false]].forEach(([cy, plusRight]) => {
    o += `<rect x="${x + 24}" y="${cy - 24}" width="140" height="48" rx="10" fill="#5b8def" stroke="#24447a" stroke-width="4"/>`;
    o += `<rect x="${plusRight ? x + 150 : x + 24}" y="${cy - 24}" width="14" height="48" fill="#cfd8dc" stroke="#24447a" stroke-width="2"/>`;
    o += `<rect x="${plusRight ? x + 164 : x + 14}" y="${cy - 9}" width="10" height="18" rx="3" fill="#c0c0c0" stroke="#666" stroke-width="2"/>`;
  });
  o += `<rect x="${x + 176}" y="${y + 15}" width="22" height="20" rx="3" fill="#d4af37" stroke="#7a5f10" stroke-width="3"/>`;
  o += `<rect x="${x + 176}" y="${y + 125}" width="22" height="20" rx="3" fill="#d4af37" stroke="#7a5f10" stroke-width="3"/>`;
  return o;
}

// toggle switch, lever thrown = ON (the bulbs are lit), screw terminals left/right
const toggle = (cx, cy) => `<rect x="${cx - 42}" y="${cy - 28}" width="84" height="56" rx="8" fill="#263238" stroke="#000" stroke-width="4"/>`
  + `<circle cx="${cx}" cy="${cy}" r="14" fill="#90a4ae" stroke="#37474f" stroke-width="3"/>`
  + `<rect x="${cx}" y="${cy - 7}" width="30" height="14" rx="7" fill="#eceff1" stroke="#607d8b" stroke-width="3"/>`
  + screw(cx - 55, cy) + screw(cx + 55, cy);

// porcelain holder + lit bulb seen from above, terminals on either side (or above/below when vertical)
function bulb(cx, cy, { vertical = false, bright }) {
  const [dx, dy] = vertical ? [0, 62] : [62, 0];
  return `<circle cx="${cx}" cy="${cy}" r="${bright ? 118 : 82}" fill="url(#${bright ? 'glowB' : 'glowD'})"/>`
    + `<circle cx="${cx}" cy="${cy}" r="50" fill="#f4f1ea" stroke="#9e9e9e" stroke-width="4"/>`
    + `<circle cx="${cx}" cy="${cy}" r="33" fill="${bright ? '#fff176' : '#fff8d6'}" stroke="#c9a227" stroke-width="3"/>`
    + `<path d="M${cx - 13},${cy} q6.5,-11 13,0 t13,0" fill="none" stroke="${bright ? '#ff6f00' : '#ffa726'}" stroke-width="3"/>`
    + screw(cx - dx, cy - dy) + screw(cx + dx, cy + dy);
}

// seri: battery + → switch → bulb 1 → bulb 2 → bulb 3 → battery −, one single loop, bulbs dim.
// paralel: switch in the main wire, then two rails; each bulb on its own branch across them, bulbs bright.
function circuit(kind) {
  let o = `<defs><radialGradient id="glowB"><stop offset="0" stop-color="#fff59d" stop-opacity="0.95"/><stop offset="1" stop-color="#fff59d" stop-opacity="0"/></radialGradient>`
    + `<radialGradient id="glowD"><stop offset="0" stop-color="#fff59d" stop-opacity="0.5"/><stop offset="1" stop-color="#fff59d" stop-opacity="0"/></radialGradient></defs>`;
  o += board(52, 290, 920, 450) + batteries(90, 430); // tabs: + (280,455), − (280,565)
  if (kind === 'seri') {
    const y = 410;
    o += wire(`M280,455 H298 V${y} H315`, RED) + wire(`M425,${y} H458`, RED) + wire(`M582,${y} H618`, RED) + wire(`M742,${y} H778`, RED);
    o += wire(`M902,${y} H935 V670 H298 V565 H280`, BLACK);
    o += toggle(370, y) + [520, 680, 840].map((x) => bulb(x, y, { bright: false })).join('');
  } else {
    const top = 360; const bot = 680; const xs = [560, 700, 840];
    o += wire(`M280,455 H298 V${top} H315`, RED) + wire(`M425,${top} H840`, RED) + wire(`M280,565 H298 V${bot} H840`, BLACK);
    for (const x of xs) o += wire(`M${x},${top} V458`, RED) + wire(`M${x},582 V${bot}`, BLACK);
    o += toggle(370, top) + xs.map((x) => bulb(x, 520, { vertical: true, bright: true }) + screw(x, top) + screw(x, bot)).join('');
  }
  return svg(o);
}

// ---------- IPA: battery set — AA, 9V, coin cell, car battery (exactly four); counts are the point ----------
const DASH = 'stroke="#455a64" stroke-width="2.5" stroke-dasharray="7 5"';
const box = (x, y, w, h, fill, extra = '') => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${fill}" ${extra}/>`;

// AA alkaline cell. Inside, mirrored on both sides of the axis: steel can (+, nub on top), MnO2 cathode
// ring, separator, zinc anode gel, brass collector pin; plastic seal and negative end cap at the bottom.
function cellAA(x, y, w, h, see) {
  const cx = x + w / 2; const wall = w * 0.08; const cat = w * 0.2; const sep = w * 0.035;
  let o = box(cx - w * 0.15, y - 20, w * 0.3, 20, '#cfd8dc', `stroke="${INK}" stroke-width="4"`); // + nub
  o += box(x, y, w, h, '#cfd8dc', `stroke="${INK}" stroke-width="5"`);                               // can
  const top = y + 12; const bot = y + h - 40;
  for (const s of [-1, 1]) {
    const xo = s < 0 ? x + wall : x + w - wall - cat;
    o += box(xo, top, cat, bot - top, '#546e7a', DASH);                                              // cathode
    o += box(s < 0 ? x + wall + cat : x + w - wall - cat - sep, top, sep, bot - top, '#fafafa', DASH); // separator
  }
  o += box(x + wall + cat + sep, top + 8, w - 2 * (wall + cat + sep), bot - top - 8, '#b0bec5', DASH);  // anode gel
  o += box(x + wall, bot, w - 2 * wall, 22, '#e53935', DASH);                                         // seal
  o += box(x, bot + 22, w, h - (bot + 22 - y), '#cfd8dc', `stroke="${INK}" stroke-width="5"`);        // − end cap
  o += box(cx - w * 0.035, top + 30, w * 0.07, bot - top - 8, '#d4a017', 'stroke="#7a5f10" stroke-width="2"'); // pin
  if (see) o += box(x, y, w, h, '#cfd8dc', `fill-opacity="0.35" stroke="${INK}" stroke-width="5"`);  // see-through can over it
  return o;
}

// 9V: small round + snap and larger hexagonal − snap on top; see-through shows its SIX 1.5 V cells
function nineVolt(x, y, w, h, see) {
  const hex = (cx, cy, r) => `<polygon points="${pts([0, 60, 120, 180, 240, 300].map((a) => [cx + r * Math.cos(rad(a)), cy + r * Math.sin(rad(a))]))}" fill="#cfd8dc" stroke="${INK}" stroke-width="4"/>`;
  let o = `<rect x="${f(x + w * 0.22)}" y="${y - 22}" width="${f(w * 0.16)}" height="22" rx="4" fill="#cfd8dc" stroke="${INK}" stroke-width="4"/>` + hex(x + w * 0.7, y - 12, w * 0.13);
  o += box(x, y, w, h, see ? '#eceff1' : '#37474f', `fill-opacity="${see ? 0.5 : 1}" stroke="${INK}" stroke-width="5" rx="10"`);
  o += box(x, y, w, h * 0.12, '#b0bec5', `stroke="${INK}" stroke-width="4"`);
  if (see) {
    const ch = (h * 0.84) / 6;
    for (let i = 0; i < 6; i++) {
      const cy = y + h * 0.14 + i * ch;
      o += `<rect x="${f(x + 12)}" y="${f(cy + 3)}" width="${f(w - 24)}" height="${f(ch - 6)}" rx="6" fill="#ffcc80" stroke="#8d6e63" stroke-width="3" stroke-dasharray="7 5"/>`;
      o += box(x + 12, cy + 3, (w - 24) * 0.12, ch - 6, '#90a4ae'); // contact plate
    }
  }
  return o;
}

// coin cell lying flat: wide disc, smaller raised − cap on top; see-through shows its layers
function coinCell(cx, y, rx, t, see) {
  const ry = rx * 0.3;
  let o = `<path d="M${cx - rx},${y} V${y + t} A${rx},${ry} 0 0 0 ${cx + rx},${y + t} V${y} Z" fill="#b0bec5" stroke="${INK}" stroke-width="4"/>`;
  if (see) {
    o += `<path d="M${cx - rx + 6},${f(y + t * 0.3)} H${cx + rx - 6} M${cx - rx + 6},${f(y + t * 0.6)} H${cx + rx - 6}" ${DASH}/>`;
    o += box(cx - rx + 6, y + t * 0.6, 2 * rx - 12, t * 0.35, '#546e7a', 'fill-opacity="0.8"') + box(cx - rx + 6, y + 4, 2 * rx - 12, t * 0.26, '#cfd8dc', 'fill-opacity="0.9"');
  }
  o += `<ellipse cx="${cx}" cy="${y}" rx="${rx}" ry="${f(ry)}" fill="#cfd8dc" stroke="${INK}" stroke-width="4"/>`;
  o += `<ellipse cx="${cx}" cy="${f(y - 4)}" rx="${f(rx * 0.72)}" ry="${f(ry * 0.72)}" fill="#dfe6ea" stroke="${INK}" stroke-width="3"/>`;
  return o;
}

// 12 V lead-acid car battery: red-capped + post, black-capped − post; see-through shows SIX cells of plates in electrolyte
function carBattery(x, y, w, h, see) {
  const post = (px, cap) => box(px - 14, y - 34, 28, 34, '#9e9e9e', `stroke="${INK}" stroke-width="3"`) + `<ellipse cx="${px}" cy="${y - 34}" rx="18" ry="8" fill="${cap}" stroke="${INK}" stroke-width="3"/>`;
  let o = post(x + w * 0.15, '#e53935') + post(x + w * 0.85, '#212121');
  o += box(x, y + h * 0.14, w, h * 0.86, '#eceff1', `fill-opacity="${see ? 0.45 : 1}" stroke="${INK}" stroke-width="5" rx="8"`);
  o += box(x - 6, y, w + 12, h * 0.14, '#37474f', `stroke="${INK}" stroke-width="5" rx="6"`);
  if (!see) return o + box(x + w * 0.12, y + h * 0.32, w * 0.76, h * 0.42, '#fafafa', `stroke="#b0bec5" stroke-width="3" rx="6"`);
  const cw = w / 6; const top = y + h * 0.2; const bot = y + h - 10;
  o += box(x + 4, top + (bot - top) * 0.12, w - 8, (bot - top) * 0.88, '#b3e5fc', 'fill-opacity="0.7"'); // electrolyte
  for (let i = 0; i < 6; i++) {
    const cx0 = x + i * cw;
    if (i) o += `<line x1="${f(cx0)}" y1="${f(top)}" x2="${f(cx0)}" y2="${f(bot)}" ${DASH}/>`;
    for (let k = 0; k < 4; k++) o += box(cx0 + cw * (0.14 + k * 0.2), top + 8, cw * 0.1, bot - top - 16, k % 2 ? '#78909c' : '#6d4c41');
    if (i < 5) o += box(cx0 + cw * 0.6, top - 6, cw * 0.8, 10, '#455a64'); // strap to the next cell
  }
  return o;
}

function batterySet(cut) {
  if (cut) {
    // the AA cut lengthwise (with callouts); the other three whole, to the right
    const call = (px, py, cx, cy) => `<line x1="${px}" y1="${py}" x2="${cx}" y2="${cy}" stroke="${INK}" stroke-width="3"/><circle cx="${px}" cy="${py}" r="5" fill="${INK}"/><circle cx="${cx}" cy="${cy}" r="18" fill="#fff" stroke="${INK}" stroke-width="3.5"/>`;
    let o = cellAA(330, 270, 120, 460, false);
    o += call(390, 258, 530, 200) + call(335, 420, 190, 360) + call(352, 500, 190, 460) + call(366, 580, 190, 560)
      + call(380, 650, 190, 660) + call(390, 450, 530, 400) + call(420, 701, 530, 680) + call(440, 722, 530, 780);
    return svg(o + carBattery(610, 300, 290, 190, false) + nineVolt(620, 545, 110, 185, false) + coinCell(840, 690, 58, 22, false));
  }
  return svg(cellAA(102, 320, 110, 400, true) + nineVolt(252, 430, 150, 290, true) + coinCell(512, 655, 70, 40, true) + carBattery(622, 480, 300, 240, true));
}

// ---------- IPA: movable pulley on a clamp stand — rope fixed at one end, under the wheel, free end up ----------
function movablePulley() {
  const ROPE = '#c8a96b'; const STEEL = '#b0bec5';
  const cx = 500; const cy = 560; const r = 62; const left = cx - r; const right = cx + r;
  let o = box(300, 880, 460, 34, STEEL, `stroke="${INK}" stroke-width="4" rx="8"`)                    // base plate
    + box(688, 120, 24, 762, STEEL, `stroke="${INK}" stroke-width="4"`)                                // upright rod
    + box(230, 140, 520, 20, STEEL, `stroke="${INK}" stroke-width="4" rx="6"`)                         // horizontal rod
    + box(674, 128, 52, 44, '#78909c', `stroke="${INK}" stroke-width="4" rx="6"`);                     // clamp
  // rope: tied round the rod at the left, down to the wheel, UNDER it, and up to a free hand loop
  const rope = `M${left},150 V${cy} A${r},${r} 0 0 0 ${right},${cy} V250`;
  o += `<path d="${rope}" fill="none" stroke="#6d5a33" stroke-width="15" stroke-linejoin="round"/><path d="${rope}" fill="none" stroke="${ROPE}" stroke-width="9" stroke-linejoin="round"/>`;
  o += `<ellipse cx="${right}" cy="232" rx="16" ry="22" fill="none" stroke="#6d5a33" stroke-width="15"/><ellipse cx="${right}" cy="232" rx="16" ry="22" fill="none" stroke="${ROPE}" stroke-width="9"/>`;
  for (let i = 0; i < 3; i++) o += `<ellipse cx="${left - 8 + i * 8}" cy="150" rx="7" ry="16" fill="${ROPE}" stroke="#6d5a33" stroke-width="3"/>`; // knot turns
  // wheel with groove, frame strap in front, hook, 1 kg mass
  o += `<circle cx="${cx}" cy="${cy}" r="${r - 6}" fill="#90a4ae" stroke="${INK}" stroke-width="5"/><circle cx="${cx}" cy="${cy}" r="${r - 22}" fill="#cfd8dc" stroke="${INK}" stroke-width="3"/>`;
  o += box(cx - 14, cy - 14, 28, 128, '#607d8b', `stroke="${INK}" stroke-width="4" rx="8"`) + `<circle cx="${cx}" cy="${cy}" r="9" fill="#37474f"/>`;
  o += `<path d="M${cx},${cy + 112} v26 a18,18 0 1 1 -18,18" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>`;
  o += `<circle cx="${cx}" cy="${cy + 172}" r="13" fill="none" stroke="${INK}" stroke-width="6"/>`;
  o += box(cx - 58, cy + 182, 116, 120, '#455a64', `stroke="${INK}" stroke-width="5" rx="10"`) + `<ellipse cx="${cx}" cy="${cy + 184}" rx="58" ry="12" fill="#546e7a" stroke="${INK}" stroke-width="4"/>`;
  return svg(o);
}

// ---------- IPA: fixed well pulley — rope OVER the wheel groove: one end to the bucket, the other end free ----------
// depan: wheel face-on, bucket on the left strand; belakang: mirrored; kiri/kanan: wheel edge-on (both strands in one line).
function fixedPulley(yaw) {
  const ROPE = '#c8a96b'; const IRON = '#546e7a'; const STEEL = '#90a4ae'; const WOOD = '#a1764a';
  const cx = 512; const cy = 330; const R = 110;
  const rope = (d) => `<path d="${d}" fill="none" stroke="#6d5a33" stroke-width="16" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${ROPE}" stroke-width="10" stroke-linecap="round"/>`;
  const bucket = (bx, edge) => {
    let b = `<path d="M${bx - 100},700 L${bx - 80},900 H${bx + 80} L${bx + 100},700 Z" fill="#cfd8dc" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>`
      + `<ellipse cx="${bx}" cy="700" rx="100" ry="16" fill="#eceff1" stroke="${INK}" stroke-width="4"/>`
      + `<path d="M${bx - 95},760 H${bx + 95} M${bx - 89},820 H${bx + 89}" stroke="#90a4ae" stroke-width="4"/>`;
    b += edge ? `<line x1="${bx}" y1="700" x2="${bx}" y2="640" stroke="${INK}" stroke-width="5"/>` // handle seen edge-on
      : `<path d="M${bx - 98},706 Q${bx},560 ${bx + 98},706" fill="none" stroke="${INK}" stroke-width="5"/>`;
    return b + `<circle cx="${bx}" cy="636" r="15" fill="${ROPE}" stroke="#6d5a33" stroke-width="4"/>`; // knot on the handle
  };
  if (Math.abs(yaw) === 90) {
    let o = box(477, 100, 70, 70, WOOD, `stroke="${INK}" stroke-width="5"`);                       // beam end-on
    o += box(cx - 20, cy - R, 40, 2 * R, IRON, `stroke="${INK}" stroke-width="5" rx="18"`);          // wheel edge-on
    o += rope(`M${cx},${cy - R + 6} V636`);                                                           // both strands in line
    o += box(cx - 34, 170, 12, cy - 170 + 14, STEEL, `stroke="${INK}" stroke-width="3"`) + box(cx + 22, 170, 12, cy - 170 + 14, STEEL, `stroke="${INK}" stroke-width="3"`);
    o += box(cx - 44, cy - 8, 88, 16, '#78909c', `stroke="${INK}" stroke-width="3" rx="4"`);         // axle bolt
    return svg(o + bucket(cx, true));
  }
  const L = cx - R + 8; const Rt = cx + R - 8;
  let o = box(250, 110, 524, 60, WOOD, `stroke="${INK}" stroke-width="5"`) + `<path d="M270,132 C420,124 600,142 754,130 M270,152 C450,146 620,160 754,150" fill="none" stroke="#7a5230" stroke-width="3" opacity="0.6"/>`;
  o += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${IRON}" stroke="${INK}" stroke-width="5"/><circle cx="${cx}" cy="${cy}" r="${R - 18}" fill="#78909c" stroke="${INK}" stroke-width="3"/>`;
  for (let k = 0; k < 4; k++) { const a = rad(45 + k * 90); o += `<circle cx="${f(cx + 55 * Math.cos(a))}" cy="${f(cy + 55 * Math.sin(a))}" r="16" fill="#fff" stroke="${INK}" stroke-width="3"/>`; }
  o += rope(`M${L},640 V${cy} A${R - 8},${R - 8} 0 0 1 ${Rt},${cy} V900`);                          // over the top, free end right
  o += `<path d="M${Rt - 8},905 l-6,16 M${Rt},905 v18 M${Rt + 8},905 l6,16" stroke="#6d5a33" stroke-width="3"/>`; // frayed tip
  o += box(cx - 16, 170, 32, cy - 170 + 16, STEEL, `stroke="${INK}" stroke-width="4" rx="6"`) + `<circle cx="${cx}" cy="${cy}" r="14" fill="#cfd8dc" stroke="${INK}" stroke-width="4"/>`;
  o += bucket(L, false);
  return svg(yaw === 180 ? `<g transform="translate(${S},0) scale(-1,1)">${o}</g>` : o);
}

// ---------- IPA: brass compass, top view — degrees and N-E-S-W must be correct and in order ----------
function compass() {
  const cx = 512; const cy = 620; const R = 230;
  const P = (r, deg) => [cx + r * Math.sin(rad(deg)), cy - r * Math.cos(rad(deg))]; // 0° = up (north), clockwise
  let o = `<defs><radialGradient id="brass" cx="0.4" cy="0.35"><stop offset="0" stop-color="#f3d27a"/><stop offset="1" stop-color="#b8892b"/></radialGradient></defs>`;
  // open lid tilted back behind the hinge (an ellipse from above), hinge, case
  o += `<ellipse cx="${cx}" cy="${cy - R - 96}" rx="${R - 10}" ry="78" fill="url(#brass)" stroke="#6b4e12" stroke-width="5"/><ellipse cx="${cx}" cy="${cy - R - 96}" rx="${R - 36}" ry="60" fill="#d9b25a" stroke="#8a6a1f" stroke-width="3"/>`;
  o += box(cx - 36, cy - R - 24, 72, 26, '#c9a23f', `stroke="#6b4e12" stroke-width="4" rx="6"`);
  o += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="url(#brass)" stroke="#6b4e12" stroke-width="6"/><circle cx="${cx}" cy="${cy}" r="${R - 30}" fill="#f6ecd2" stroke="#6b4e12" stroke-width="4"/>`;
  for (let d = 0; d < 360; d += 5) {
    const long = d % 30 === 0; const [x1, y1] = P(R - 32, d); const [x2, y2] = P(R - (long ? 62 : 48), d);
    o += `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="#3e2f10" stroke-width="${long ? 4 : 2}"/>`;
  }
  // degree numbers follow the dial; the four letters stay upright so children can read them
  const label = (txt, d, r, size, color, upright) => { const [x, y] = P(r, d); return `<text x="${f(x)}" y="${f(y)}" font-family="Arial, sans-serif" font-size="${size}" font-weight="700" fill="${color}" text-anchor="middle" dominant-baseline="central"${upright ? '' : ` transform="rotate(${d} ${f(x)} ${f(y)})"`}>${txt}</text>`; };
  for (let d = 0; d < 360; d += 30) if (d % 90) o += label(String(d), d, R - 86, 24, '#3e2f10');
  o += label('N', 0, R - 82, 44, '#c62828', true) + label('E', 90, R - 82, 40, '#3e2f10', true) + label('S', 180, R - 82, 40, '#3e2f10', true) + label('W', 270, R - 82, 40, '#3e2f10', true);
  // needle: red half points north, silver half south; pivot cap; glass glint
  o += `<polygon points="${pts([[cx, cy - 112], [cx - 16, cy], [cx + 16, cy]])}" fill="#d32f2f" stroke="#7f1d1d" stroke-width="3"/>`;
  o += `<polygon points="${pts([[cx, cy + 112], [cx - 16, cy], [cx + 16, cy]])}" fill="#cfd8dc" stroke="#455a64" stroke-width="3"/>`;
  o += `<circle cx="${cx}" cy="${cy}" r="14" fill="#c9a23f" stroke="#6b4e12" stroke-width="3"/>`;
  o += `<path d="M${cx - 150},${cy - 140} A${R - 40},${R - 40} 0 0 1 ${cx + 40},${cy - 210}" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity="0.5"/>`;
  return svg(o);
}

// ---------- IPA: periscope, side section — both mirrors parallel at exactly 45° ----------
// Window on the LEFT at the top, on the RIGHT at the bottom. Ray: in horizontally → top mirror →
// straight down → bottom mirror → out horizontally. `cut`: section with callout circles (p11);
// otherwise the whole tube is drawn see-through (p12).
function periscope(cut) {
  const L = 402; const R = 622; const T = 150; const B = 874; const W = R - L; // W = 220, so the mirrors are 45°
  const mid = (L + R) / 2; const yIn = T + W / 2; const yOut = B - W / 2;
  const TUBE = '#b07a4a'; const EDGE = '#5d3a1a';
  let o = '';
  if (!cut) o += `<rect x="${L}" y="${T}" width="${W}" height="${B - T}" fill="${TUBE}" fill-opacity="0.25"/>`;
  // walls: top, bottom, left (below the top window), right (above the bottom window)
  const walls = [[L - 22, T - 22, W + 44, 22], [L - 22, B, W + 44, 22], [L - 22, T + W, 22, B - T - W], [R, T, 22, B - T - W]];
  o += walls.map(([x, y, w, h]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${TUBE}" ${cut ? '' : 'fill-opacity="0.45" '}stroke="${EDGE}" stroke-width="4"/>`).join('');
  // the open windows: dashed line across each opening
  o += `<line x1="${L - 11}" y1="${T}" x2="${L - 11}" y2="${T + W}" stroke="${EDGE}" stroke-width="3" stroke-dasharray="12 9"/>`;
  o += `<line x1="${R + 11}" y1="${B - W}" x2="${R + 11}" y2="${B}" stroke="${EDGE}" stroke-width="3" stroke-dasharray="12 9"/>`;
  // light ray (behind the mirrors' edges), with small heads showing the direction
  const ray = `M${L - 190},${yIn} H${mid} V${yOut} H${R + 190}`;
  o += `<path d="${ray}" fill="none" stroke="#fbc02d" stroke-width="7" stroke-dasharray="18 10" stroke-linejoin="round"/>`;
  const head = (x, y, dir) => { const p = { r: [[0, 0], [-22, -12], [-22, 12]], d: [[0, 0], [-12, -22], [12, -22]] }[dir]; return `<polygon points="${pts(p.map(([a, b]) => [x + a, y + b]))}" fill="#f9a825"/>`; };
  o += head(L - 70, yIn, 'r') + head(mid, (yIn + yOut) / 2, 'd') + head(R + 140, yOut, 'r');
  // mirrors "\" from (L, top) to (R, top + W); silvered face toward the ray, dark backing behind
  const mirror = (y0, back) => `<line x1="${L + 4 + back[0]}" y1="${y0 + 4 + back[1]}" x2="${R - 4 + back[0]}" y2="${y0 + W - 4 + back[1]}" stroke="#455a64" stroke-width="8" stroke-linecap="round"/>`
    + `<line x1="${L + 4}" y1="${y0 + 4}" x2="${R - 4}" y2="${y0 + W - 4}" stroke="#90caf9" stroke-width="12" stroke-linecap="round"/>`
    + `<line x1="${L + 4}" y1="${y0 + 4}" x2="${R - 4}" y2="${y0 + W - 4}" stroke="#e3f2fd" stroke-width="4" stroke-linecap="round"/>`;
  o += mirror(T, [8, -8]) + mirror(B - W, [-8, 8]);
  if (cut) {
    // leader line from a point on each part to an empty circle outside the object
    const call = (px, py, cx, cy) => `<line x1="${px}" y1="${py}" x2="${cx}" y2="${cy}" stroke="${INK}" stroke-width="3"/><circle cx="${px}" cy="${py}" r="5" fill="${INK}"/><circle cx="${cx}" cy="${cy}" r="18" fill="#fff" stroke="${INK}" stroke-width="3.5"/>`;
    o += call(R + 11, 420, 860, 420)                  // tube wall
      + call(L + 170, T + 170, 860, 300)              // top mirror
      + call(L + 50, B - W + 50, 160, 720)            // bottom mirror
      + call(L - 11, T + 40, 160, 190)                // top window
      + call(R + 11, B - 30, 860, 840)                // bottom window
      + call(mid, 560, 160, 540);                     // light path
  }
  return svg(o);
}

// ---------- MTK: more precision solids (same acrylic look as kubus/limas-segitiga) ----------
function cuboid(yaw) {
  const a = 1.5; const b = 1; const c = 0.75; // length : width : height = 3 : 2 : 1.5
  const V = [[-a, -b, -c], [a, -b, -c], [a, b, -c], [-a, b, -c], [-a, -b, c], [a, -b, c], [a, b, c], [-a, b, c]];
  const F = [[0, 1, 5, 4], [2, 3, 7, 6], [1, 2, 6, 5], [3, 0, 4, 7], [4, 5, 6, 7], [0, 3, 2, 1]];
  return svg(solid(V, F, { yaw: yaw + 18, scale: 210, cy: 540 }));
}

function squarePyramid(yaw) {
  const V = [[-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], [0, 0, 1.6]]; // square base, apex over its centre
  const F = [[0, 3, 2, 1], [0, 1, 4], [1, 2, 4], [2, 3, 4], [3, 0, 4]];
  return svg(solid(V, F, { yaw: yaw + 18, scale: 255, cy: 700 }));
}

// Right circular cone seen slightly from above: the two outline lines touch the base ellipse at its
// tangent points; the far half of the base circle is hidden behind the curved surface (dashed).
function coneShape(cx, by, R, H, e, { fill, edge, base, dots }) {
  const ry = R * Math.sin(e); const h = H * Math.cos(e);
  const y0 = -(ry * ry) / h; const x0 = R * Math.sqrt(1 - (y0 * y0) / (ry * ry));
  const L = [cx - x0, by + y0]; const Rt = [cx + x0, by + y0]; const A = [cx, by - h];
  let o = `<path d="M${f(A[0])},${f(A[1])} L${f(L[0])},${f(L[1])} A${f(R)},${f(ry)} 0 1 0 ${f(Rt[0])},${f(Rt[1])} Z" fill="${fill}"/>`;
  o += `<path d="M${f(L[0])},${f(L[1])} A${f(R)},${f(ry)} 0 0 1 ${f(Rt[0])},${f(Rt[1])}" fill="none" stroke="${base}" stroke-width="5" stroke-dasharray="18 14"/>`;
  o += `<path d="M${f(L[0])},${f(L[1])} A${f(R)},${f(ry)} 0 1 0 ${f(Rt[0])},${f(Rt[1])}" fill="none" stroke="${base}" stroke-width="7"/>`;
  o += `<path d="M${f(L[0])},${f(L[1])} L${f(A[0])},${f(A[1])} L${f(Rt[0])},${f(Rt[1])}" fill="none" stroke="${edge}" stroke-width="7" stroke-linejoin="round"/>`;
  if (dots) o += `<circle cx="${f(A[0])}" cy="${f(A[1])}" r="16" fill="#e53935" stroke="#8e1b19" stroke-width="3"/>`;
  return o;
}
const cone = () => svg(coneShape(512, 790, 250, 560, rad(20), { fill: 'rgba(150,200,240,0.28)', edge: INK, base: '#1f4e9c', dots: true }));

// sphere: equator great circle (near half solid, far half dashed) and the red centre point
function sphere() {
  const cx = 512; const cy = 512; const R = 360; const ry = R * Math.sin(rad(18));
  let o = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="rgba(150,200,240,0.25)" stroke="${INK}" stroke-width="7"/>`;
  o += `<path d="M${cx - R},${cy} A${R},${f(ry)} 0 0 1 ${cx + R},${cy}" fill="none" stroke="#8a95ad" stroke-width="5" stroke-dasharray="18 14"/>`;
  o += `<path d="M${cx - R},${cy} A${R},${f(ry)} 0 0 0 ${cx + R},${cy}" fill="none" stroke="#1f4e9c" stroke-width="6"/>`;
  o += `<path d="M${cx - 250},${cy - 200} A${R - 60},${R - 60} 0 0 1 ${cx - 40},${cy - 300}" fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round" opacity="0.7"/>`;
  return svg(o + `<circle cx="${cx}" cy="${cy}" r="13" fill="#e53935" stroke="#8e1b19" stroke-width="3"/>`);
}

// ---------- MTK: set of eight painted solids in a row ----------
const shade = (hex, k) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgb(${[n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.min(255, Math.round(v * k))).join(',')})`;
};
// opaque faces lit from the upper left, no vertex dots, hidden edges not drawn
function solidOpaque(V, F, { yaw, elev = 20, scale, cx, cy, color }) {
  const P = V.map((v) => view(v, yaw, elev));
  const scr = (p) => [cx + p[0] * scale, cy - p[2] * scale];
  return F.map((fc) => {
    const n = cross(sub(P[fc[1]], P[fc[0]]), sub(P[fc[2]], P[fc[0]]));
    if (n[1] >= 0) return '';
    const lit = Math.max(0, (-0.45 * n[0] - 0.55 * n[1] + 0.7 * n[2]) / Math.hypot(...n));
    return `<polygon points="${pts(fc.map((j) => scr(P[j])))}" fill="${shade(color, 0.62 + 0.45 * lit)}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>`;
  }).join('');
}
function solidsSet() {
  const X = [128, 384, 640, 896]; const G1 = 470; const G2 = 880; // 4 solids per row, ground line of each row
  const box3 = (a, b, c) => [[-a, -b, 0], [a, -b, 0], [a, b, 0], [-a, b, 0], [-a, -b, 2 * c], [a, -b, 2 * c], [a, b, 2 * c], [-a, b, 2 * c]];
  const BOXF = [[0, 1, 5, 4], [2, 3, 7, 6], [1, 2, 6, 5], [3, 0, 4, 7], [4, 5, 6, 7], [0, 3, 2, 1]];
  let o = '';
  o += solidOpaque(box3(1, 1, 1), BOXF, { yaw: 28, scale: 68, cx: X[0], cy: G1, color: '#1e88e5' });             // kubus
  o += solidOpaque(box3(1.6, 0.8, 0.65), BOXF, { yaw: 28, scale: 62, cx: X[1], cy: G1, color: '#e53935' });       // balok
  const pr = [[-1.3, -0.75, 0], [-1.3, 0.75, 0], [-1.3, 0, 1.3], [1.3, -0.75, 0], [1.3, 0.75, 0], [1.3, 0, 1.3]];
  o += solidOpaque(pr, [[0, 2, 1], [3, 4, 5], [0, 1, 4, 3], [1, 2, 5, 4], [2, 0, 3, 5]], { yaw: 35, scale: 78, cx: X[2], cy: G1, color: '#43a047' }); // prisma segitiga
  o += solidOpaque([[-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], [0, 0, 2]], [[0, 3, 2, 1], [0, 1, 4], [1, 2, 4], [2, 3, 4], [3, 0, 4]],
    { yaw: 25, scale: 80, cx: X[3], cy: G1, color: '#fdd835' });                                                  // limas segiempat
  const tb = [0, 1, 2].map((i) => [Math.cos(rad(90 + i * 120)), Math.sin(rad(90 + i * 120)), 0]);
  o += solidOpaque([...tb, [0, 0, 1.63]], [[0, 2, 1], [0, 1, 3], [1, 2, 3], [2, 0, 3]], { yaw: 10, scale: 110, cx: X[0], cy: G2, color: '#8e24aa' }); // limas segitiga
  // tabung
  const tr = 66; const tryy = tr * Math.sin(rad(20)); const th = 170;
  o += `<path d="M${X[1] - tr},${G2 - th} V${G2} A${tr},${f(tryy)} 0 0 0 ${X[1] + tr},${G2} V${G2 - th} Z" fill="url(#cyl)" stroke="${INK}" stroke-width="5"/>`
    + `<ellipse cx="${X[1]}" cy="${G2 - th}" rx="${tr}" ry="${f(tryy)}" fill="${shade('#fb8c00', 1.12)}" stroke="${INK}" stroke-width="5"/>`;
  // kerucut (the far half of the base is hidden, so its dashed arc is made invisible)
  o += coneShape(X[2], G2, 70, 190, rad(20), { fill: 'url(#con)', edge: INK, base: INK, dots: false })
    .replace(/stroke-dasharray="18 14"/, 'stroke-opacity="0"');
  // bola
  o += `<circle cx="${X[3]}" cy="${G2 - 62}" r="72" fill="url(#sph)" stroke="${INK}" stroke-width="5"/>`;
  const defs = `<defs><linearGradient id="cyl" x1="0" x2="1"><stop offset="0" stop-color="${shade('#fb8c00', 1.1)}"/><stop offset="1" stop-color="${shade('#fb8c00', 0.7)}"/></linearGradient>`
    + `<linearGradient id="con" x1="0" x2="1"><stop offset="0" stop-color="${shade('#00897b', 1.25)}"/><stop offset="1" stop-color="${shade('#00897b', 0.75)}"/></linearGradient>`
    + `<radialGradient id="sph" cx="35%" cy="32%"><stop offset="0" stop-color="#f8bbd0"/><stop offset="1" stop-color="#c2185b"/></radialGradient></defs>`;
  return svg(defs + o);
}

// ---------- MTK: nine flat shape tiles in a 3 × 3 grid ----------
function flatShapes() {
  const tile = (points, color) => `<polygon points="${pts(points.map(([x, y]) => [x + 7, y + 7]))}" fill="${shade(color, 0.55)}"/>`
    + `<polygon points="${pts(points)}" fill="${color}" fill-opacity="0.9" stroke="${shade(color, 0.6)}" stroke-width="6" stroke-linejoin="round"/>`;
  const at = (cx, cy, list) => list.map(([x, y]) => [cx + x, cy + y]);
  const C = [200, 512, 824];
  let o = '';
  o += tile(at(C[0], C[0], [[-95, -95], [95, -95], [95, 95], [-95, 95]]), '#e53935');                        // persegi
  o += tile(at(C[1], C[0], [[-125, -70], [125, -70], [125, 70], [-125, 70]]), '#fb8c00');                     // persegi panjang
  const s = 220; const hgt = s * Math.sqrt(3) / 2;
  o += tile(at(C[2], C[0] + 15, [[0, -hgt * 2 / 3], [s / 2, hgt / 3], [-s / 2, hgt / 3]]), '#fdd835');        // segitiga sama sisi
  o += tile(at(C[0], C[1], [[-80, -100], [-80, 100], [90, 100]]), '#43a047');                                 // segitiga siku-siku
  o += `<polyline points="${pts(at(C[0], C[1], [[-80, 72], [-52, 72], [-52, 100]]))}" fill="none" stroke="#1b5e20" stroke-width="5"/>`;
  o += tile(at(C[1], C[1], [[-130, 70], [60, 70], [130, -70], [-60, -70]]), '#00897b');                      // jajargenjang
  o += tile(at(C[2], C[1], [[-120, 70], [120, 70], [65, -70], [-65, -70]]), '#1e88e5');                      // trapesium
  o += tile(at(C[0], C[2], [[0, -120], [80, -40], [0, 120], [-80, -40]]), '#8e24aa');                        // layang-layang
  o += tile(at(C[1], C[2], [[0, -115], [75, 0], [0, 115], [-75, 0]]), '#ec407a');                            // belah ketupat
  o += `<circle cx="${C[2] + 7}" cy="${C[2] + 7}" r="100" fill="${shade('#9e9e9e', 0.55)}"/><circle cx="${C[2]}" cy="${C[2]}" r="100" fill="#9e9e9e" fill-opacity="0.9" stroke="#616161" stroke-width="6"/>`; // lingkaran
  return svg(o);
}

// ---------- MTK: school geometry set — protractor, compass, 45° and 30-60° set squares ----------
function geometrySet() {
  const ACRYL = 'fill="#bbdefb" fill-opacity="0.45" stroke="#1f4e9c" stroke-width="5" stroke-linejoin="round"';
  let o = '';
  // protractor: 180°, a tick every 1°, longer every 5° and 10° (no printed numbers)
  const pcx = 210; const pcy = 620; const R = 165;
  o += `<path d="M${pcx - R},${pcy} A${R},${R} 0 0 1 ${pcx + R},${pcy} Z" ${ACRYL}/>`;
  o += `<path d="M${pcx - 90},${pcy} A90,90 0 0 1 ${pcx + 90},${pcy}" fill="none" stroke="#1f4e9c" stroke-width="3"/>`;
  for (let d = 0; d <= 180; d++) {
    const a = rad(180 + d); const len = d % 10 === 0 ? 30 : d % 5 === 0 ? 20 : 11;
    o += `<line x1="${f(pcx + (R - 3) * Math.cos(a))}" y1="${f(pcy + (R - 3) * Math.sin(a))}" x2="${f(pcx + (R - 3 - len) * Math.cos(a))}" y2="${f(pcy + (R - 3 - len) * Math.sin(a))}" stroke="#0d2c5e" stroke-width="${d % 10 ? 1.5 : 2.5}"/>`;
  }
  o += `<line x1="${pcx - 12}" y1="${pcy}" x2="${pcx + 12}" y2="${pcy}" stroke="#0d2c5e" stroke-width="3"/><line x1="${pcx}" y1="${pcy - 12}" x2="${pcx}" y2="${pcy}" stroke="#0d2c5e" stroke-width="3"/>`;
  // compass: needle leg + pencil leg from a hinge with a knob
  const hx = 455; const hy = 330;
  o += `<line x1="${hx}" y1="${hy}" x2="400" y2="700" stroke="#78909c" stroke-width="16" stroke-linecap="round"/><line x1="400" y1="700" x2="396" y2="735" stroke="#263238" stroke-width="5" stroke-linecap="round"/>`;
  o += `<line x1="${hx}" y1="${hy}" x2="512" y2="690" stroke="#78909c" stroke-width="16" stroke-linecap="round"/>`;
  o += `<polygon points="${pts([[505, 680], [523, 683], [516, 728], [508, 727]])}" fill="#ffca28" stroke="#5d4037" stroke-width="3"/><polygon points="${pts([[508, 727], [516, 728], [512, 742]])}" fill="#424242"/>`;
  o += `<circle cx="${hx}" cy="${hy}" r="22" fill="#b0bec5" stroke="#455a64" stroke-width="4"/><rect x="${hx - 8}" y="${hy - 70}" width="16" height="50" rx="6" fill="#90a4ae" stroke="#455a64" stroke-width="3"/>`;
  // set squares with a cut-out window
  const sq = (P, inset) => {
    const c = [(P[0][0] + P[1][0] + P[2][0]) / 3, (P[0][1] + P[1][1] + P[2][1]) / 3];
    const Q = P.map(([x, y]) => [c[0] + (x - c[0]) * inset, c[1] + (y - c[1]) * inset]);
    return `<path d="M${pts(P).replace(/ /g, ' L')} Z M${pts(Q).replace(/ /g, ' L')} Z" fill-rule="evenodd" ${ACRYL}/>`;
  };
  o += sq([[565, 730], [795, 730], [565, 500]], 0.5);                                // 45°-45°-90°
  const leg = 128; o += sq([[835, 760], [835 + leg, 760], [835, 760 - leg * Math.sqrt(3)]], 0.5); // 30°-60°-90° (legs 1 : √3)
  return svg(o);
}

// ---------- MTK: geoboard 7 × 7 pegs with three rubber bands ----------
function geoboard() {
  const x0 = 152; const d = 120; const P = (c, r) => [x0 + c * d, x0 + r * d];
  let o = `<rect x="82" y="82" width="860" height="860" rx="36" fill="#e8cfa0" stroke="#9c6b3c" stroke-width="6"/>`;
  for (let i = 1; i < 8; i++) o += `<path d="M110,${82 + i * 107} C350,${70 + i * 107} 650,${96 + i * 107} 914,${80 + i * 107}" fill="none" stroke="#d4b07a" stroke-width="3" opacity="0.6"/>`;
  const band = (list, color) => `<polygon points="${pts(list.map(([c, r]) => P(c, r)))}" fill="none" stroke="${color}" stroke-width="10" stroke-linejoin="round" opacity="0.92"/>`;
  o += band([[1, 0], [3, 2], [0, 2]], '#e53935');                 // segitiga
  o += band([[4, 0], [6, 0], [6, 3], [4, 3]], '#1e88e5');         // persegi panjang 2 × 3
  o += band([[1, 4], [4, 4], [5, 6], [0, 6]], '#43a047');         // trapesium (sisi sejajar 3 dan 5)
  for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
    const [x, y] = P(c, r);
    o += `<circle cx="${x}" cy="${y}" r="12" fill="#b0bec5" stroke="#546e7a" stroke-width="3"/><circle cx="${x - 3}" cy="${y - 3}" r="4" fill="#eceff1"/>`;
  }
  return svg(o);
}

// ---------- MTK: matchstick pattern — 1, 2, 3 joined squares (4, 7, 10 sticks), one pattern per row ----------
function matchsticks() {
  const L = 210;
  const stick = (x1, y1, x2, y2) => {
    const a = Math.atan2(y2 - y1, x2 - x1); const ux = Math.cos(a); const uy = Math.sin(a);
    const p = [x1 + ux * 12, y1 + uy * 12]; const q = [x2 - ux * 12, y2 - uy * 12];
    const hx = Math.abs(ux) > 0.5;
    return `<line x1="${f(p[0])}" y1="${f(p[1])}" x2="${f(q[0])}" y2="${f(q[1])}" stroke="#8d6e63" stroke-width="22" stroke-linecap="round"/>`
      + `<line x1="${f(p[0])}" y1="${f(p[1])}" x2="${f(q[0])}" y2="${f(q[1])}" stroke="#e3c08d" stroke-width="15" stroke-linecap="round"/>`
      + `<ellipse cx="${f(q[0])}" cy="${f(q[1])}" rx="${hx ? 20 : 15}" ry="${hx ? 15 : 20}" fill="#c62828" stroke="#7f0000" stroke-width="3"/>`;
  };
  let o = '';
  const x0 = (1024 - 3 * L) / 2;
  [1, 2, 3].forEach((n, k) => {
    const y0 = 105 + k * 315; const y1 = y0 + L;
    for (let i = 0; i < n; i++) o += stick(x0 + i * L, y0, x0 + (i + 1) * L, y0) + stick(x0 + i * L, y1, x0 + (i + 1) * L, y1);
    for (let i = 0; i <= n; i++) o += stick(x0 + i * L, y1, x0 + i * L, y0);
  });
  return svg(o);
}

// ---------- MTK: chocolate bar 3 × 4 = 12 squares, the top row (3 squares) broken off and lying beside ----------
function chocolate() {
  const s = 140;
  const piece = (x, y, rot = 0) => `<g transform="rotate(${rot} ${x + s / 2} ${y + s / 2})"><rect x="${x}" y="${y}" width="${s}" height="${s}" rx="8" fill="#5d3a1a" stroke="#3e2410" stroke-width="5"/>`
    + `<rect x="${x + 16}" y="${y + 16}" width="${s - 32}" height="${s - 32}" rx="6" fill="#7b4a22" stroke="#4e2c12" stroke-width="3"/>`
    + `<path d="M${x + 24},${y + 30} h${s - 60}" stroke="#a06a3b" stroke-width="6" stroke-linecap="round" opacity="0.6"/></g>`;
  let o = '';
  for (let r = 1; r < 4; r++) for (let c = 0; c < 3; c++) o += piece(150 + c * s, 230 + r * s); // 9 squares still in the bar
  o += `<path d="M150,${230 + s} l20,-8 l25,10 l30,-9 l35,8 l40,-10 l35,9 l40,-8 l35,10 l40,-9 l35,7 l25,-6 l20,6" fill="none" stroke="#3e2410" stroke-width="5" stroke-linejoin="round"/>`; // snapped edge
  o += piece(700, 170, 12) + piece(745, 420, -9) + piece(690, 660, 16);                                  // the 3 broken squares
  return svg(o);
}

// ---------- MTK: round cake from above, 8 equal slices, one slice taken out and set beside ----------
function cake() {
  const cx = 470; const cy = 600; const R = 270;
  let o = `<circle cx="${cx}" cy="${cy}" r="${R + 40}" fill="#eceff1" stroke="#b0bec5" stroke-width="5"/>`; // plate
  const wedge = (i, ox = 0, oy = 0) => {
    const a0 = rad(-90 + i * 45); const a1 = rad(-45 + i * 45);
    const c = [cx + ox, cy + oy];
    return `<path d="M${f(c[0])},${f(c[1])} L${f(c[0] + R * Math.cos(a0))},${f(c[1] + R * Math.sin(a0))} A${R},${R} 0 0 1 ${f(c[0] + R * Math.cos(a1))},${f(c[1] + R * Math.sin(a1))} Z" fill="#fffaf0" stroke="#c49a5a" stroke-width="5" stroke-linejoin="round"/>`
      + `<path d="M${f(c[0] + (R - 14) * Math.cos(a0))},${f(c[1] + (R - 14) * Math.sin(a0))} A${R - 14},${R - 14} 0 0 1 ${f(c[0] + (R - 14) * Math.cos(a1))},${f(c[1] + (R - 14) * Math.sin(a1))}" fill="none" stroke="#f5d6a0" stroke-width="12"/>`;
  };
  for (let i = 1; i < 8; i++) o += wedge(i);
  const am = rad(-67.5); o += wedge(0, 175 * Math.cos(am), 175 * Math.sin(am)); // the slice taken out, moved outward
  return svg(o);
}

// ---------- slots ----------
const VIEWS = { depan: 0, kanan: -90, belakang: 180, kiri: 90 };
const per4 = (fn) => (slot) => fn(VIEWS[slot.match(/(depan|belakang|kiri|kanan)$/)[1]]);
const OBJECTS = {
  // only the slots Gemini got wrong / that must match them; the other slots keep their reviewed picture
  'mtk/04-geometri-ruang/kubus': per4(cube),
  'mtk/04-geometri-ruang/balok': per4(cuboid),
  'mtk/04-geometri-ruang/limas-segiempat': { draw: per4(squarePyramid), only: /^p0[2-5]-|^p0[78]-/ },
  'mtk/04-geometri-ruang/kerucut': { draw: () => cone(), only: /^p0[2-5]-/ },
  'mtk/04-geometri-ruang/bola': () => sphere(),
  'mtk/04-geometri-ruang/bangun-ruang-set': () => solidsSet(),
  'mtk/03-geometri-datar/bangun-datar-set': () => flatShapes(),
  'mtk/03-geometri-datar/alat-geometri-set': () => geometrySet(),
  'mtk/03-geometri-datar/geoboard': { draw: () => geoboard(), only: /^p01-/ },
  'mtk/08-pola-logika-aljabar/batang-korek-pola': () => matchsticks(),
  'mtk/01-bilangan-pecahan/cokelat-batang': () => chocolate(),
  'mtk/01-bilangan-pecahan/kue-bolu-pecahan': { draw: () => cake(), only: /^p01-/ },
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
  'ipa/03-gaya-gerak-energi/rangkaian-seri': () => circuit('seri'),
  'ipa/03-gaya-gerak-energi/rangkaian-paralel': () => circuit('paralel'),
  'ipa/04-cahaya-bunyi-panas-zat/periskop': { draw: (slot) => periscope(/belah/.test(slot)), only: /penampang/ },
  'ipa/03-gaya-gerak-energi/baterai-set': { draw: (slot) => batterySet(/belah/.test(slot)), only: /penampang/ },
  'ipa/03-gaya-gerak-energi/katrol-bergerak': () => movablePulley(),
  'ipa/03-gaya-gerak-energi/katrol-tetap': per4(fixedPulley),
  'ipa/03-gaya-gerak-energi/kompas': { draw: () => compass(), only: /realistis/ },
};

const install = process.argv.includes('--install');
const outDir = install ? null : process.argv[2];
if (!install && !outDir) throw new Error('usage: vektor-mtk.mjs <outDir> | --install');
if (outDir) mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: S, height: S } });
let n = 0;
const only = (process.argv.find((a) => a.startsWith('--only=')) ?? '').slice(7);
const emptyOnly = process.argv.includes('--empty'); // skip every slot that already has a picture
const hasPic = (dir, slot) => readdirSync(dir).some((f) => new RegExp(`^${slot}[.](png|jpe?g|webp)$`).test(f));
for (const [rel, spec] of Object.entries(OBJECTS)) {
  if (only && !only.split(',').includes(rel.split('/').pop())) continue;
  const { draw, only: slotRe } = typeof spec === 'function' ? { draw: spec } : spec;
  const dir = join('image-results', rel);
  const slots = [...new Set(readdirSync(dir).filter((f) => /^p\d\d-/.test(f) && !f.includes('.lama.') && !/turnaround/.test(f)).map((f) => f.replace(/\.[a-z]+$/, '')))]
    .filter((s) => !slotRe || slotRe.test(s))
    .filter((s) => !emptyOnly || !hasPic(dir, s));
  for (const slot of slots) {
    await page.setContent(`<html><body style="margin:0">${draw(slot)}</body></html>`);
    const png = await page.screenshot({ clip: { x: 0, y: 0, width: S, height: S } });
    const id = rel.split('/').pop();
    if (install) {
      const old = readdirSync(dir).find((f) => new RegExp(`^${slot}[.](png|jpe?g|webp)$`).test(f)); // exact: never the .lama copy
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
