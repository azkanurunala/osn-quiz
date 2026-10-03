import { anim } from '../anim';

const INK = '#e2e8f0';
const MUTE = '#94a3b8';
const GREEN = '#4ade80';
const BLUE = '#60a5fa';
const AMBER = '#fbbf24';
const PURPLE = '#c084fc';

const label = (x, y, str, fill = MUTE, size = 12, anchor = 'middle') => (
  <text x={x} y={y} fill={fill} fontSize={size} fontWeight="800" textAnchor={anchor}
    fontFamily="'IBM Plex Sans',system-ui,sans-serif">{str}</text>
);

// ------------------------------------------------------------------ diagram batang
export function DiagramBatang({ motion }) {
  const bars = [
    { v: '6', f: 3 }, { v: '7', f: 5 }, { v: '8', f: 8 }, { v: '9', f: 4 }, { v: '10', f: 2 },
  ];
  const base = 232;
  const unit = 16;
  return (
    <>
      <line x1="78" y1="56" x2="78" y2={base} stroke={INK} strokeWidth="3" />
      <line x1="78" y1={base} x2="468" y2={base} stroke={INK} strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((k) => (
        <g key={k}>
          <line x1="72" y1={base - k * unit} x2="78" y2={base - k * unit} stroke={MUTE} strokeWidth="2" />
          <line x1="78" y1={base - k * unit} x2="468" y2={base - k * unit} stroke="#1e293b" strokeWidth="1" />
          {label(64, base - k * unit + 4, String(k), MUTE, 10, 'end')}
        </g>
      ))}
      {bars.map((b, i) => {
        const cx = 110 + i * 70;
        const hgt = b.f * unit;
        return (
          <g key={b.v} {...anim(motion, 'ix-rise', { duration: 2 + i * 0.2 })}>
            <rect x={cx - 22} y={base - hgt} width="44" height={hgt} rx="4" fill={i === 2 ? AMBER : BLUE} opacity="0.9" />
            {label(cx, base - hgt - 6, String(b.f), INK, 11)}
            {label(cx, base + 20, b.v, MUTE, 12)}
          </g>
        );
      })}
      {label(273, 276, 'diagram batang: tinggi batang = frekuensi', MUTE, 11)}
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
