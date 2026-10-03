import { anim } from '../anim';
import { parseTextBars } from '../../../utils/textBars';

const INK = '#e2e8f0';
const MUTE = '#94a3b8';
const GREEN = '#4ade80';
const BLUE = '#60a5fa';
const AMBER = '#fbbf24';
const PURPLE = '#c084fc';
const COLORS = [BLUE, GREEN, AMBER, PURPLE];

const label = (x, y, str, fill = MUTE, size = 12, anchor = 'middle') => (
  <text x={x} y={y} fill={fill} fontSize={size} fontWeight="800" textAnchor={anchor}
    fontFamily="'IBM Plex Sans',system-ui,sans-serif">{str}</text>
);

// ------------------------------------------------------------------ diagram batang
// Smallest "nice" step (1, 2, 5 x 10^k) that keeps the y axis to at most 6 intervals.
function niceStep(max) {
  for (let p = 1; ; p *= 10) {
    for (const m of [1, 2, 5]) if (max / (m * p) <= 6) return m * p;
  }
}

const clip = (str, n) => (str.length > n ? `${str.slice(0, n - 1)}…` : str);

// Draws the soal's own numbers as a single-series bar chart, or a grouped ("ganda") chart when the
// stem carries two series. When the stem has no readable dataset it renders nothing — a made-up
// ABCDE sketch next to a question about different data teaches the wrong thing.
export function DiagramBatang({ motion, question }) {
  const { bars: single, grouped, names, intro: rawIntro, scale } = parseTextBars(question?.question);
  const intro = rawIntro
    .replace(/^diagram batang\s*(ganda|tunggal)?\s*(menunjukkan\s*)?/i, '')
    .replace(/^\((.*)\)$/, '$1')
    .replace(/^./, (c) => c.toUpperCase());

  const isGrouped = grouped.length >= 2 && names.length >= 2;
  if (!isGrouped && single.length < 2) return null;

  const left = 78; const right = 504; const top = 54; const base = 226;
  const cats = isGrouped ? grouped.map((g) => g.label) : single.map((b) => b.label);
  const values = isGrouped
    ? grouped.flatMap((g) => names.map((n) => g.pairs[n] ?? 0))
    : single.map((b) => b.value);
  const maxV = Math.max(...values);
  const step = niceStep(maxV || 1);
  const yMax = Math.max(step, Math.ceil(maxV / step) * step);
  const y = (v) => base - ((base - top) * v) / yMax;
  const ticks = Array.from({ length: Math.round(yMax / step) + 1 }, (_, k) => k * step);
  const slot = (right - left) / cats.length;

  const groupW = Math.min(70, slot * 0.68);
  const barW = isGrouped ? groupW / names.length : Math.min(64, slot * 0.6);
  const nameSize = cats.some((c) => c.length > 8) ? 11 : 14;
  const fmt = (n) => String(n).replace('.', ',');

  const units = single.map((b) => b.unit);
  const allKotak = !isGrouped && units.length > 0 && units.every((u) => /kotak/i.test(u));
  const yTitle = allKotak
    ? 'kotak'
    : intro.match(/nilai|skor/i)?.[0].toLowerCase() ?? units.find(Boolean) ?? 'jumlah';

  return (
    <>
      {label(260, 30, clip(intro, 52), INK, 15)}

      {ticks.map((t) => (
        <g key={t}>
          <line x1={left} y1={y(t)} x2={right} y2={y(t)} stroke="#1e293b" strokeWidth="1.5" />
          {label(left - 10, y(t) + 5, String(t), MUTE, 13, 'end')}
        </g>
      ))}
      <line x1={left} y1={top - 10} x2={left} y2={base} stroke={INK} strokeWidth="3" />
      <line x1={left} y1={base} x2={right} y2={base} stroke={INK} strokeWidth="3" />
      <text x="20" y={(top + base) / 2} fill={MUTE} fontSize="13" fontWeight="800" textAnchor="middle"
        transform={`rotate(-90 20 ${(top + base) / 2})`} fontFamily="'IBM Plex Sans',system-ui,sans-serif">{yTitle}</text>

      {isGrouped
        ? cats.map((cat, i) => {
          const cx = left + slot * (i + 0.5);
          return (
            <g key={`${cat}-${i}`}>
              {names.map((name, si) => {
                const v = grouped[i].pairs[name] ?? 0;
                const x = cx - groupW / 2 + si * barW;
                return (
                  <g key={name}>
                    <rect x={x} y={y(v)} width={Math.max(6, barW - 3)} height={base - y(v)} rx="3"
                      fill={COLORS[si % COLORS.length]} opacity="0.92"
                      {...anim(motion, 'ix-grow', { duration: 2.4 + si * 0.4, origin: `${x}px ${base}px` })} />
                    {label(x + barW / 2, y(v) - 6, fmt(v), INK, 12)}
                  </g>
                );
              })}
              {label(cx, base + 22, clip(cat, 12), INK, nameSize)}
            </g>
          );
        })
        : single.map((b, i) => {
          const cx = left + slot * (i + 0.5);
          return (
            <g key={`${b.label}-${i}`}>
              <rect x={cx - barW / 2} y={y(b.value)} width={barW} height={base - y(b.value)} rx="4"
                fill={BLUE} opacity="0.9"
                {...anim(motion, 'ix-grow', { duration: 3.2, origin: `${cx}px ${base}px` })} />
              {label(cx, y(b.value) - 8, fmt(b.value), INK, 15)}
              {label(cx, base + 22, clip(b.label, 12), INK, nameSize)}
            </g>
          );
        })}

      {isGrouped
        ? names.map((name, si) => (
          <g key={name} {...anim(motion, 'ix-pulse', { duration: 2.4 + si * 0.3 })}>
            <rect x={110 + si * 150} y={272} width="16" height="12" rx="3" fill={COLORS[si % COLORS.length]} />
            {label(132 + si * 150, 282, name, INK, 12, 'start')}
          </g>
        ))
        : label(260, 282, scale ? `skala: ${scale}` : 'tinggi batang menunjukkan besar nilai data', MUTE, 13)}
    </>
  );
}

// ------------------------------------------------------------------ diagram lingkaran
function sector(cx, cy, r, a0, a1, fill, motion, delay) {
  const s = ((a0 - 90) * Math.PI) / 180;
  const e = ((a1 - 90) * Math.PI) / 180;
  const x0 = cx + r * Math.cos(s);
  const y0 = cy + r * Math.sin(s);
  const x1 = cx + r * Math.cos(e);
  const y1 = cy + r * Math.sin(e);
  const large = a1 - a0 > 180 ? 1 : 0;
  return (
    <path key={fill} d={`M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`}
      fill={fill} stroke="#0f172a" strokeWidth="2" {...anim(motion, 'ix-pulse', { duration: 2.4 + delay })} />
  );
}

function LegendRow({ x, y, color, text, motion, delay }) {
  return (
    <g {...anim(motion, 'ix-pulse', { duration: 2.6 + delay })}>
      <rect x={x} y={y - 12} width="18" height="14" rx="3" fill={color} />
      {label(x + 28, y, text, INK, 12, 'start')}
    </g>
  );
}

export function DiagramLingkaran({ motion }) {
  const cx = 165;
  const cy = 150;
  const r = 92;
  return (
    <>
      {sector(cx, cy, r, 0, 90, GREEN, motion, 0)}
      {sector(cx, cy, r, 90, 216, BLUE, motion, 0.3)}
      {sector(cx, cy, r, 216, 360, AMBER, motion, 0.6)}
      {label(cx, cy - 40, '25%', '#052e16', 13)}
      {label(cx - 30, cy + 40, '35%', '#052e16', 13)}
      {label(cx + 40, cy + 6, '40%', '#052e16', 13)}

      {label(300, 84, 'Diagram Lingkaran', INK, 13, 'start')}
      <LegendRow x={300} y={116} color={GREEN} text="A = 25% = 90°" motion={motion} delay={0} />
      <LegendRow x={300} y={148} color={BLUE} text="B = 35% = 126°" motion={motion} delay={0.2} />
      <LegendRow x={300} y={180} color={AMBER} text="C = 40% = 144°" motion={motion} delay={0.4} />
      {label(300, 220, 'satu lingkaran penuh = 360°', MUTE, 11, 'start')}
      {label(300, 244, 'besar sudut = persen × 360°', PURPLE, 11, 'start')}
    </>
  );
}

// ------------------------------------------------------------------ mean, median, modus
export function MeanMedianModus({ motion }) {
  const data = [
    { v: '6', kind: 'plain' }, { v: '7', kind: 'modus' }, { v: '7', kind: 'median' },
    { v: '8', kind: 'plain' }, { v: '9', kind: 'plain' },
  ];
  return (
    <>
      {label(230, 66, 'data terurut: 6, 7, 7, 8, 9', INK, 13)}
      {data.map((d, i) => {
        const x = 110 + i * 60;
        const stroke = d.kind === 'median' ? GREEN : d.kind === 'modus' ? AMBER : MUTE;
        return (
          <g key={i} {...anim(motion, 'ix-pulse', { duration: 2 + i * 0.2 })}>
            <rect x={x - 22} y="92" width="44" height="44" rx="8" fill="#0f172a" stroke={stroke} strokeWidth="3" />
            {label(x, 122, d.v, stroke, 17)}
            {d.kind === 'modus' ? <circle cx={x} cy="82" r="4.5" fill={AMBER} /> : null}
          </g>
        );
      })}
      <line x1="230" y1="152" x2="230" y2="176" stroke={GREEN} strokeWidth="2.5" />
      <polygon points="230,152 224,164 236,164" fill={GREEN} />

      {label(230, 200, 'median = nilai tengah = 7', GREEN, 12)}
      {label(230, 226, 'modus = paling sering muncul = 7  (titik kuning)', AMBER, 12)}
      {label(230, 252, 'rata-rata = 37 ÷ 5 = 7,4', PURPLE, 13)}
      {label(230, 276, 'rata-rata = jumlah data ÷ banyak data', MUTE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ peluang dadu
const PIP_LAYOUT = {
  1: [[0, 0]],
  2: [[-1, -1], [1, 1]],
  3: [[-1, -1], [0, 0], [1, 1]],
  4: [[-1, -1], [1, -1], [-1, 1], [1, 1]],
  5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]],
  6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]],
};

function Pips({ cx, cy, s, value, color }) {
  const g = s / 4;
  return (
    <>
      {PIP_LAYOUT[value].map(([dx, dy], i) => (
        <circle key={i} cx={cx + dx * g} cy={cy + dy * g} r={s / 9} fill={color} />
      ))}
    </>
  );
}

export function PeluangDadu({ motion }) {
  return (
    <>
      <g {...anim(motion, 'ix-spin', { origin: '108px 104px', duration: 6 })}>
        <rect x="58" y="54" width="100" height="100" rx="16" fill="#0f172a" stroke={AMBER} strokeWidth="3" />
        <Pips cx={108} cy={104} s={100} value={3} color={AMBER} />
      </g>
      {label(108, 180, 'mata dadu', MUTE, 11)}

      {label(210, 72, 'Ruang sampel dadu:', INK, 12, 'start')}
      {label(210, 98, '{ 1, 2, 3, 4, 5, 6 }   n(S) = 6', BLUE, 12, 'start')}
      {label(210, 130, 'P(kejadian) = n(A) ÷ n(S)', GREEN, 12, 'start')}
      {label(210, 162, 'P(mata 3) = 1 ÷ 6 = 1/6', AMBER, 12, 'start')}
      {label(210, 194, 'P(mata genap) = 3 ÷ 6 = 1/2', PURPLE, 12, 'start')}

      {[1, 2, 3, 4, 5, 6].map((n, i) => {
        const x = 52 + i * 70;
        return (
          <g key={n} {...anim(motion, 'ix-bob', { duration: 2 + i * 0.15 })}>
            <rect x={x} y="230" width="44" height="44" rx="9" fill="#111c2e" stroke={BLUE} strokeWidth="2.5" />
            {label(x + 22, 260, String(n), BLUE, 16)}
          </g>
        );
      })}
    </>
  );
}
