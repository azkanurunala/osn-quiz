// Readers for MTK soal text used by families/mtk-tambahan.jsx. Every reader returns null when the
// soal does not say exactly what it needs: those figures draw the soal's own numbers, and a figure
// built from a half-read soal is worse than none. Indonesian notation: "1.200" thousands, "3,7" decimal.

const MINUS = /[−–]/g;
export const toNum = (s) => Number(String(s).replace(MINUS, '-').replace(/\.(?=\d{3}(?!\d))/g, '').replace(',', '.'));
export const fmt = (n) => {
  const r = Math.round(n * 1e6) / 1e6;
  const s = Number.isInteger(r) ? r.toLocaleString('id-ID') : r.toLocaleString('id-ID', { maximumFractionDigits: 4 });
  return s.replace('-', '−');
};
const clean = (t) => String(t ?? '').replace(/\*\*|`/g, '').replace(MINUS, '-');

// ------------------------------------------------------------------ pertidaksamaan
// "x + 5 > 9", "2x ≥ 10", "3x − 2 ≥ 7"  ->  { a, b, op, c, bound }  (solution: x op bound)
export function parseInequality(text) {
  const t = clean(text);
  // x on both sides, brackets, fractions, a negative coefficient or a chain (a < x < b) need algebra
  // steps this figure does not draw.
  if ((t.match(/(?<![a-z])x(?![a-z])/gi) || []).length > 1 || /\d\s*\(|\)\s*\/|-\s*\d*\s*x|[<>≤≥][^.?]*[<>≤≥]/i.test(t)) return null;
  const m = t.match(/(?<![\w.])(\d*)\s*x\s*(?:([+-])\s*(\d+))?\s*(>=|<=|≥|≤|>|<)\s*(-?\d+)(?!\d|[,.]\d|\s*[+\-×÷*/(]|\s*[a-z](?![a-z]))/i);
  if (!m) return null;
  const a = m[1] ? Number(m[1]) : 1;
  const b = m[2] ? (m[2] === '-' ? -1 : 1) * Number(m[3]) : 0;
  const op = { '>=': '≥', '<=': '≤' }[m[4]] ?? m[4];
  const c = Number(m[5]);
  if (!a) return null;
  const bound = (c - b) / a;
  if (!Number.isFinite(bound) || Math.abs(bound) > 60 || !Number.isInteger(bound * 2)) return null;
  return { a, b, op, c, bound };
}

// ------------------------------------------------------------------ pembulatan
const PLACE = {
  jutaan: 1e6, 'ratusan ribu': 1e5, 'puluhan ribu': 1e4, ribuan: 1000, ratusan: 100, puluhan: 10, satuan: 1,
  persepuluhan: 0.1, perseratusan: 0.01, perseribuan: 0.001,
};
// "Pembulatan 47 ke puluhan terdekat", "3,478 ke 1 angka desimal", "1.567 ke ratusan"
export function parseRounding(text) {
  const t = clean(text);
  if (!/pembulatan|dibulatkan|membulatkan|bulatkan/i.test(t)) return null;
  if (/\d\s*[+×÷-]\s*\d/.test(t)) return null; // "487 + 312": estimating a sum, not rounding one number
  const m = t.match(/(-?\d{1,3}(?:\.\d{3})+(?:,\d+)?|-?\d+(?:,\d+)?)\s*(?:\w+\s*){0,2}?(?:ke|menjadi)\s*(?:bilangan\s*)?(jutaan|ratusan ribu|puluhan ribu|ribuan|ratusan|puluhan|satuan|persepuluhan|perseratusan|perseribuan|(\d)\s*(?:angka|tempat)\s*(?:di belakang koma|desimal))/i);
  if (!m) return null;
  const value = toNum(m[1]);
  // "ke ratusan terdekat (dua angka di belakang koma)": the explicit decimal places win
  const dp = t.match(/(\d|satu|dua|tiga)\s*angka\s*(?:di belakang koma|desimal)/i)?.[1]?.toLowerCase();
  const places = dp ? ({ satu: 1, dua: 2, tiga: 3 }[dp] ?? Number(dp)) : null;
  const step = places ? 10 ** -places : PLACE[m[2].toLowerCase()];
  if (!step || !Number.isFinite(value) || value < 0) return null;
  const lower = Math.floor(value / step + 1e-9) * step;
  const upper = lower + step;
  if (Math.abs(value - lower) < 1e-9) return null; // already round: nothing to show
  const mid = lower + step / 2;
  const result = value >= mid - 1e-9 ? upper : lower;
  return { value, step, lower, upper, mid, result };
}

// ------------------------------------------------------------------ persen
// "25% dari 80"  -> { kind: 'dari', p, whole }      "Berapa persen 15 dari 60?" -> { kind: 'berapa', part, whole }
export function parsePercent(text) {
  const t = clean(text);
  // chained or mixed percentages ("75% dari 80% dari", "2/5 dari … + 30% dari") and soal asking for
  // the rest or the original number need more steps than one bar shows
  if ((t.match(/%/g) || []).length !== 1 && !/berapa\s*persen/i.test(t)) return null;
  if (/\d\s*\/\s*\d|sisa|bilangan tersebut|sebuah bilangan|rata-rata/i.test(t)) return null;
  // price soal (diskon, pajak, untung/rugi, bunga) want the price after the change, not the percentage
  // part itself; their own figure (diskon-ppn) shows that flow
  if (/diskon|potongan|pajak|ppn|pph|untung|rugi|bunga|harga|dibayar|bayar|tabungan|gaji/i.test(t)) return null;
  let m = t.match(/(\d+(?:,\d+)?)\s*%\s*dari\s*(?:Rp\s*)?(\d{1,3}(?:\.\d{3})+|\d+(?:,\d+)?)/i);
  if (m && !/=\s*\d|adalah\s*\d|sama dengan\s*\d/i.test(t.slice(m.index + m[0].length, m.index + m[0].length + 20))) {
    const p = toNum(m[1]); const whole = toNum(m[2]);
    if (p > 0 && p <= 200 && whole > 0) return { kind: 'dari', p, whole, part: (p * whole) / 100 };
  }
  m = t.match(/berapa\s*persen\s*(?:Rp\s*)?(\d{1,3}(?:\.\d{3})+|\d+(?:,\d+)?)\s*(?:\w+\s*)?dari\s*(?:Rp\s*)?(\d{1,3}(?:\.\d{3})+|\d+(?:,\d+)?)/i);
  if (m) {
    const part = toNum(m[1]); const whole = toNum(m[2]);
    if (whole > 0 && part >= 0 && part <= whole * 2) return { kind: 'berapa', part, whole, p: (part / whole) * 100 };
  }
  return null;
}

// ------------------------------------------------------------------ langkah hitung
// Expression after "Hitunglah:", "Hasil dari", "Nilai dari", or inside backticks, ending at "=" / "adalah".
const OPS = { '+': 1, '-': 1, '×': 2, '÷': 2 };

function tokenize(src) {
  const s = src.replace(/\s+/g, '').replace(/[x*·]/g, '×').replace(/:/g, '÷');
  if (s.includes('/')) return null; // a/b is a fraction (pecahan figure), not a division to evaluate
  const out = [];
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    const prev = out[out.length - 1];
    const unary = ch === '-' && (!prev || prev.t === 'op' || prev.v === '(');
    if (/\d/.test(ch) || unary) {
      const m = s.slice(i).match(/^-?\d+(?:,\d+)?/);
      if (!m) return null;
      out.push({ t: 'num', v: toNum(m[0]) }); i += m[0].length;
    } else if (ch === '√') { out.push({ t: 'fn', v: '√' }); i += 1;
    } else if (ch === '²' || ch === '³') { out.push({ t: 'pow', v: ch === '²' ? 2 : 3 }); i += 1;
    } else if (ch === '(' || ch === ')') { out.push({ t: 'par', v: ch }); i += 1;
    } else if (OPS[ch]) { out.push({ t: 'op', v: ch }); i += 1;
    } else return null;
  }
  return out;
}

const show = (tokens) => tokens.map((k, i) => {
  if (k.t === 'num') {
    const prev = tokens[i - 1];
    return k.v < 0 && prev && (prev.t === 'op') ? `(${fmt(k.v)})` : fmt(k.v);
  }
  if (k.t === 'pow') return k.v === 2 ? '²' : '³';
  if (k.t === 'op') return ` ${k.v === '-' ? '−' : k.v} `;
  return k.v;
}).join('').replace(/\(\s+/g, '(').replace(/\s+\)/g, ')');

// One reduction in the school order: parentheses (innermost), powers/roots, × ÷ left to right,
// + − left to right. Returns the new token list or null when stuck.
// A parenthesis around a single number is dropped as soon as it appears ("(6 + 4)" -> "10", and a
// given "(−6)" is just −6); show() puts the brackets back for a negative after an operator.
function collapse(tokens) {
  const tk = tokens.slice();
  for (let i = 0; i + 2 < tk.length; i += 1) {
    if (tk[i].v === '(' && tk[i + 1].t === 'num' && tk[i + 2].v === ')' && tk[i - 1]?.t !== 'fn' && tk[i + 3]?.t !== 'pow') {
      tk.splice(i, 3, tk[i + 1]); i = -1;
    }
  }
  return tk;
}

function step(tokens) {
  const tk = tokens.slice();
  let lo = 0; let hi = tk.length;
  for (let i = 0; i < tk.length; i += 1) {
    if (tk[i].v === '(') lo = i + 1;
    if (tk[i].v === ')') { hi = i; break; }
  }
  const seg = tk.slice(lo, hi);
  const at = (j) => lo + j;
  for (let j = 0; j < seg.length; j += 1) {
    if (seg[j].t === 'pow' && seg[j - 1]?.t === 'num') { tk.splice(at(j - 1), 2, { t: 'num', v: seg[j - 1].v ** seg[j].v }); return tk; }
    if (seg[j].t === 'fn' && seg[j + 1]?.t === 'num') {
      const r = Math.sqrt(seg[j + 1].v); if (!Number.isInteger(r)) return null;
      tk.splice(at(j), 2, { t: 'num', v: r }); return tk;
    }
  }
  for (const level of [2, 1]) {
    for (let j = 1; j + 1 < seg.length; j += 1) {
      if (seg[j].t !== 'op' || OPS[seg[j].v] !== level || seg[j - 1].t !== 'num' || seg[j + 1].t !== 'num') continue;
      const a = seg[j - 1].v; const b = seg[j + 1].v;
      const v = { '+': a + b, '-': a - b, '×': a * b, '÷': b === 0 ? NaN : a / b }[seg[j].v];
      // a non-terminating decimal means the soal is really about fractions — leave it to that figure
      if (!Number.isFinite(v) || Math.abs(v * 1e4 - Math.round(v * 1e4)) > 1e-6) return null;
      tk.splice(at(j - 1), 3, { t: 'num', v }); return tk;
    }
  }
  if (lo > 0 && hi < tk.length && seg.length === 1 && seg[0].t === 'num') {
    const before = tk[lo - 2];
    if (before?.t === 'fn' || tk[hi + 1]?.t === 'pow') { tk.splice(lo - 1, 3, seg[0]); return tk; }
  }
  return null;
}

export function parseExpression(text) {
  const t = clean(text).replace(/\^2/g, '²').replace(/\^3/g, '³');
  // Only soal whose whole task is the calculation ("Hitunglah: …", "Hasil dari … adalah"): in
  // "Jumlah angka pada hasil 25²" or "Hasil 2 × 3 × 5 = 30. Banyak faktor …" the value is not the answer.
  const m = t.match(/^\s*(?:hitunglah|hitung|hasil(?: dari)?|nilai(?: dari)?|tentukan(?: hasil(?: dari)?)?)\s*:?\s*([-\d√(][\d\s+\-×x*·÷:/(),²³√]*?)\s*(=\s*(?:\.|…|$)|adalah|sama dengan|\?|\.{2,}|…|$)/i);
  if (!m) return null;
  if (/^=\s*\d/.test(t.slice(m.index + m[0].length - m[2].length))) return null;
  const expr = m[1].trim().replace(/[,.]$/, '');
  // "−1 + 2 − 3 + … + 20" is a series, not this expression; "−2²" means −(2²), which the plain
  // tokenizer would read as (−2)² — skip both rather than show a wrong step.
  if (/[+\-×÷]\s*$/.test(expr) || /(^|[^\d)])-\d+[²³]/.test(expr)) return null;
  const tokens = tokenize(expr);
  if (!tokens || tokens.length < 2) return null;
  if (!tokens.some((k) => k.t === 'op' || k.t === 'pow' || k.t === 'fn')) return null;
  const lines = [show(tokens)];
  let cur = collapse(tokens);
  for (let n = 0; n < 12 && !(cur.length === 1 && cur[0].t === 'num'); n += 1) {
    cur = step(cur);
    if (!cur) return null;
    cur = collapse(cur);
    lines.push(show(cur));
  }
  if (cur.length !== 1) return null;
  return { lines, result: cur[0].v, hasNegative: tokens.some((k) => k.t === 'num' && k.v < 0) };
}

// "−8 + 5", "7 + (−12)", "10 − (−4)": a single + or − between two small integers, one of them
// negative, can be drawn as jumps on a number line instead of text steps.
export function simpleIntegerSum(text) {
  const e = parseExpression(text);
  if (!e || e.lines.length !== 2 && e.lines.length !== 3) return null;
  const tk = tokenize(clean(text).match(/(?:hitunglah|hasil(?: dari)?|nilai(?: dari)?)\s*:?\s*([-\d(][\d\s+\-()]*?)\s*(?:=|adalah|\?|$)/i)?.[1] ?? '');
  const nums = tk?.filter((k) => k.t === 'num'); const ops = tk?.filter((k) => k.t === 'op');
  if (!nums || nums.length !== 2 || ops.length !== 1 || !'+-'.includes(ops[0].v)) return null;
  const [a, b] = nums.map((k) => k.v);
  if (![a, b].every((v) => Number.isInteger(v) && Math.abs(v) <= 20) || (a >= 0 && b >= 0)) return null;
  const delta = ops[0].v === '+' ? b : -b;
  if (Math.abs(a + delta) > 20) return null;
  return { a, op: ops[0].v, b, end: a + delta };
}

// ------------------------------------------------------------------ diagram garis
// Strict label–value pairs for a line chart: "Senin: 37", "minggu 1 = 5 cm", "Jan 300", "Senin 28°C".
// The generic bar reader is too loose here ("minggu 4 = 15 cm" once came out as minggu → 4).
const DAY_MONTH = 'Sen(?:in)?|Sel(?:asa)?|Rab(?:u)?|Kam(?:is)?|Jum(?:at)?|Sab(?:tu)?|Min(?:ggu)?|Sn|Sl|Rb|Km|Jm|Sb|Mg|Jan(?:uari)?|Feb(?:ruari)?|Mar(?:et)?|Apr(?:il)?|Mei|Jun(?:i)?|Jul(?:i)?|Agu(?:stus)?|Agt|Sep(?:tember)?|Okt(?:ober)?|Nov(?:ember)?|Des(?:ember)?';
export function parseLinePoints(text) {
  const t = clean(text);
  const pairs = (re) => [...t.matchAll(re)].map((m) => ({ label: m[1].trim(), value: toNum(m[2]) }));
  let pts = pairs(/(?<![\w.])((?:[A-Za-z][A-Za-z]*)(?:\s+(?:ke-?)?\d{1,2})?)\s*[:=]\s*(\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+(?:,\d+)?)(?![\d:])/g);
  if (pts.length < 3) pts = pairs(new RegExp(String.raw`(?<![\w])(${DAY_MONTH})\b\s*:?\s*(\d+(?:,\d+)?)(?!\d|[.,]\d)`, 'gi'));
  if (pts.length < 3 || pts.length > 12) return null;
  const labels = pts.map((p) => p.label.toLowerCase());
  if (new Set(labels).size !== labels.length) return null; // repeated label = two series, not one line
  return pts;
}

// ------------------------------------------------------------------ konversi satuan
// "Hasil konversi 2 cm ke mm", "3 m² = … cm²", "2,5 liter = … ml", "5 ha = … m²".
// One ladder per family; every rung is ×base going down. Liter rungs map onto the cubic ladder only
// where they are equal (kL = m³, L = dm³, mL = cm³).
const LADDERS = {
  panjang: { base: 10, rungs: ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'] },
  berat: { base: 10, rungs: ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'] },
  luas: { base: 100, rungs: ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'] },
  volume: { base: 1000, rungs: ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'] },
  liter: { base: 10, rungs: ['kL', 'hL', 'daL', 'L', 'dL', 'cL', 'mL'] },
};
const ALIAS = {
  ons: 'hg', gram: 'g', kilogram: 'kg', miligram: 'mg', ha: 'hm²', hektare: 'hm²', hektar: 'hm²', are: 'dam²', a: 'dam²', ca: 'm²',
  liter: 'L', l: 'L', ml: 'mL', kl: 'kL', hl: 'hL', dal: 'daL', dl: 'dL', cl: 'cL', cc: 'cm³', meter: 'm', kilometer: 'km', centimeter: 'cm', sentimeter: 'cm', milimeter: 'mm',
};
const CUBE_OF = { kL: 'm³', L: 'dm³', mL: 'cm³' };
function unitOf(raw) {
  let u = raw.replace(/\^?2|²/, '²').replace(/\^?3|³/, '³');
  u = ALIAS[u] ?? ALIAS[u.toLowerCase()] ?? u;
  for (const [fam, l] of Object.entries(LADDERS)) {
    const i = l.rungs.findIndex((r) => r.toLowerCase() === u.toLowerCase());
    if (i >= 0) return { fam, i, u: l.rungs[i] };
  }
  return null;
}
const UNIT_RE = String.raw`(kilometer|centimeter|sentimeter|milimeter|meter|kilogram|miligram|gram|hektare|hektar|liter|ons|km|hm|dam|dm|cm|mm|kg|hg|dag|dg|cg|mg|kl|hl|dal|dl|cl|ml|cc|ha|are|ca|m|g|l|a)(\^?[23]|[²³])?`;
export function parseConversion(text) {
  const t = clean(text).replace(/\s+/g, ' ');
  const m = t.match(new RegExp(String.raw`(\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+(?:,\d+)?)\s*${UNIT_RE}(?![a-z])\s*(?:ke|=|menjadi|dalam|setara|sama dengan)\s*(?:satuan\s*)?(?:\.{2,}|…|\?)?\s*(?:\.{2,}|…|\?)?\s*${UNIT_RE}(?![a-z])`, 'i'));
  if (!m) return null;
  // conversions inside a bigger story (sums, several quantities) are not a single ladder walk
  if ((t.match(/\d+(?:,\d+)?\s*(?:km|hm|dam|m|dm|cm|mm|kg|g|liter|ml|ha)\b/gi) || []).length > 2) return null;
  if (/\d\s*[a-zA-Z²³]*\s*[+−-]\s*\d|selisih|jumlah|total|sisa/i.test(t)) return null;
  let a = unitOf(m[2] + (m[3] ?? '')); let b = unitOf(m[4] + (m[5] ?? ''));
  if (!a || !b || a.u === b.u) return null;
  if (a.fam !== b.fam) {
    const ca = CUBE_OF[a.u]; const cb = CUBE_OF[b.u];
    if (a.fam === 'liter' && b.fam === 'volume' && ca) a = unitOf(ca);
    else if (b.fam === 'liter' && a.fam === 'volume' && cb) b = unitOf(cb);
    else return null;
  }
  const lad = LADDERS[a.fam];
  const value = toNum(m[1]);
  const steps = b.i - a.i;
  const result = value * lad.base ** steps;
  return { value, from: m[2] + (m[3] ?? ''), to: m[4] + (m[5] ?? ''), fam: a.fam, iFrom: a.i, iTo: b.i, rungs: lad.rungs, base: lad.base, steps, result };
}

// ------------------------------------------------------------------ faktor, kelipatan, prima
// { kind: 'faktor', n } | { kind: 'kelipatan', n } | { kind: 'prima' }. FPB/KPK and prime
// factorisation belong to the factor-tree figure, so those soal are left to it.
export function parseFactorTask(text) {
  const t = clean(text).toLowerCase();
  if (/persekutuan|fpb|kpk|faktorisasi|faktor prima|pohon faktor/.test(t)) return null;
  // two different numbers' multiples (KPK-like), dice probability, sequence terms: other figures
  if (/peluang|dadu|suku ke/.test(t) || new Set([...t.matchAll(/kelipatan\s+(?:[a-z]+\s+){0,2}?(\d+)/g)].map((x) => x[1])).size > 1) return null;
  let m = t.match(/(?:banyak(?:nya)?\s+)?faktor(?:-faktor)?\s+(?:[a-z]+\s+){0,2}?(?:dari\s+)?(?:bilangan\s+)?(\d{1,3})(?![\d,.]\d)/);
  if (m && Number(m[1]) >= 2 && Number(m[1]) <= 100) return { kind: 'faktor', n: Number(m[1]) };
  m = t.match(/kelipatan\s+(?:[a-z]+\s+){0,2}?(?:dari\s+)?(?:bilangan\s+)?(\d{1,2})(?![\d,.]\d)/);
  if (m && Number(m[1]) >= 2 && Number(m[1]) <= 20) return { kind: 'kelipatan', n: Number(m[1]) };
  if (/\bprima\b|komposit/.test(t) && !/\d{3,}/.test(t.replace(/\./g, ''))) {
    const top = Math.max(0, ...[...t.matchAll(/\d+/g)].map((x) => Number(x[0])));
    return { kind: 'prima', upto: top > 50 ? 100 : 50 };
  }
  return null;
}
export const factorPairs = (n) => {
  const out = [];
  for (let a = 1; a * a <= n; a += 1) if (n % a === 0) out.push([a, n / a]);
  return out;
};
export const isPrime = (n) => n > 1 && factorPairs(n).length === 1;
