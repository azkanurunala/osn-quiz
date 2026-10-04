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

// "1.500.000" -> 1500000, "2,5" -> 2.5
const num = (s) => Number(String(s).replace(/\.(?=\d{3}\b)/g, '').replace(',', '.'));
// 1500000 -> "1.500.000", 2.5 -> "2,5"
const fmt = (n) => {
  const [i, d] = String(Math.round(n * 1000) / 1000).split('.');
  return i.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (d ? `,${d}` : '');
};

// ------------------------------------------------------------------ tangga satuan
export function TanggaSatuan({ motion }) {
  const units = [
    ['km', GREEN], ['hm', GREEN], ['dam', GREEN], ['m', AMBER],
    ['dm', BLUE], ['cm', BLUE], ['mm', BLUE],
  ];
  const x0 = 40;
  const y0 = 72;
  const w = 62;
  const h = 26;
  const dx = w;
  const dy = 26;
  return (
    <>
      {units.map(([u, c], i) => {
        const x = x0 + i * dx;
        const y = y0 + i * dy;
        return (
          <g key={u}>
            <rect x={x} y={y} width={w} height={h} fill={i % 2 ? '#111c2e' : '#0f172a'} stroke={c} strokeWidth="2.5"
              {...anim(motion, 'ix-pulse', { duration: 2 + i * 0.2 })} />
            {label(x + w / 2, y + 18, u, c, 14)}
            {i < units.length - 1 ? (
              <>
                <line x1={x + w} y1={y + h / 2} x2={x + w} y2={y + dy + h / 2} stroke={MUTE} strokeWidth="2" />
                <polygon points={`${x + w},${y + dy + h / 2} ${x + w - 5},${y + dy + h / 2 - 9} ${x + w + 5},${y + dy + h / 2 - 9}`} fill={MUTE} />
                {label(x + w + 20, y + 20, '×10', GREEN, 11)}
              </>
            ) : null}
          </g>
        );
      })}
      {label(310, 74, 'turun (kanan) → ×10', GREEN, 12, 'start')}
      {label(310, 98, 'naik (kiri) → ÷10', BLUE, 12, 'start')}
      {label(310, 130, 'setiap turun 1 tangga,', MUTE, 11, 'start')}
      {label(310, 148, 'koma bergeser 1 langkah', MUTE, 11, 'start')}
      {label(40, 286, 'luas: turun ×100, naik ÷100  ·  volume: turun ×1000, naik ÷1000', PURPLE, 11, 'start')}
    </>
  );
}

// ------------------------------------------------------------------ kecepatan, jarak, waktu
// The "magic triangle": jarak (s) on top, kecepatan (V) and waktu (t) below. Cover the one you
// want: s = V × t (side by side), V = s ÷ t and t = s ÷ V (one over the other).
export function KecepatanJarakWaktu({ motion }) {
  return (
    <>
      <g {...anim(motion, 'ix-pulse', { duration: 2.6 })}>
        <polygon points="180,62 272,206 88,206" fill="#0f172a" stroke={INK} strokeWidth="3" />
      </g>
      <line x1="124" y1="150" x2="236" y2="150" stroke={INK} strokeWidth="2.5" />
      <line x1="180" y1="150" x2="180" y2="206" stroke={INK} strokeWidth="2.5" />
      {label(180, 132, 's', GREEN, 22)}
      {label(150, 188, 'V', AMBER, 20)}
      {label(210, 188, 't', BLUE, 20)}
      {label(180, 236, 's = jarak · V = kecepatan · t = waktu', MUTE, 11)}

      {label(320, 84, 'Rumus', INK, 13, 'start')}
      {label(320, 120, 's = V × t', GREEN, 14, 'start')}
      {label(320, 156, 'V = s ÷ t', AMBER, 14, 'start')}
      {label(320, 192, 't = s ÷ V', BLUE, 14, 'start')}
      {label(320, 230, 'tutup yang dicari,', MUTE, 11, 'start')}
      {label(320, 248, 'sisanya rumusnya', MUTE, 11, 'start')}
    </>
  );
}

// ------------------------------------------------------------------ debit
export function Debit({ motion }) {
  return (
    <>
      <rect x="66" y="58" width="46" height="16" rx="6" fill="#334155" stroke={INK} strokeWidth="2.5" />
      <rect x="104" y="62" width="34" height="10" rx="4" fill="#334155" stroke={INK} strokeWidth="2.5" />

      <g {...anim(motion, 'ix-drip', { origin: '108px 80px', duration: 2 })}>
        <path d="M 108 78 Q 116 94 108 106 Q 100 94 108 78" fill={BLUE} />
      </g>
      <g {...anim(motion, 'ix-drip', { origin: '96px 80px', duration: 2.4 })}>
        <path d="M 96 78 Q 104 94 96 106 Q 88 94 96 78" fill={BLUE} />
      </g>

      <rect x="52" y="150" width="120" height="104" rx="8" fill="#0f172a" stroke={INK} strokeWidth="3" />
      <rect x="56" y="188" width="112" height="62" rx="4" fill="#1e3a8a" opacity="0.85" />
      <path d="M 56 188 Q 112 178 168 188" fill="none" stroke={BLUE} strokeWidth="2.5" />
      {label(112, 226, 'Volume (V)', BLUE, 12)}
      {label(112, 272, 'Waktu (t)', INK, 11)}

      {label(300, 96, 'Debit = Volume ÷ Waktu', AMBER, 14)}
      {label(300, 140, 'Q = V ÷ t', GREEN, 16)}
      {label(300, 184, 'satuan: liter/detik,', MUTE, 11)}
      {label(300, 204, 'm³/jam, mL/detik', MUTE, 11)}
      {label(300, 246, 'makin besar debit,', PURPLE, 11)}
      {label(300, 266, 'makin cepat wadah terisi', PURPLE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ skala peta
// Uses the soal's own scale and map distance. The worked result is the answer to most of these soal,
// so it is shown only in the explanation phase; without readable numbers only the rule is shown.
function realDistance(cm) {
  if (cm >= 100000) return `${fmt(cm / 100000)} km`;
  if (cm >= 100) return `${fmt(cm / 100)} m`;
  return `${fmt(cm)} cm`;
}

export function SkalaPeta({ motion, question }) {
  const text = String(question?.question ?? '');
  const scaleRaw = text.match(/1\s*:\s*(\d[\d.]*)/)?.[1];
  const scale = scaleRaw ? num(scaleRaw) : null;
  const cmRaw = text.match(/(\d+(?:,\d+)?)\s*cm\b/)?.[1];
  const cm = cmRaw && /peta|denah|maket/i.test(text) ? num(cmRaw) : null;
  const worked = scale && cm;
  return (
    <>
      <rect x="46" y="68" width="214" height="154" rx="10" fill="#0f172a" stroke={GREEN} strokeWidth="2.5" />
      <path d="M 60 120 Q 140 96 240 132" fill="none" stroke="#1e293b" strokeWidth="6" />
      <path d="M 70 190 Q 150 168 244 196" fill="none" stroke="#1e293b" strokeWidth="6" />

      <line x1="84" y1="164" x2="216" y2="104" stroke={AMBER} strokeWidth="2.5" strokeDasharray="8 6"
        {...anim(motion, 'ix-flow', { duration: 1.8 })} />
      <circle cx="84" cy="164" r="7" fill={BLUE} stroke="#0f172a" strokeWidth="2" />
      <circle cx="216" cy="104" r="7" fill={AMBER} stroke="#0f172a" strokeWidth="2" />
      {label(76, 186, 'A', BLUE, 13)}
      {label(226, 96, 'B', AMBER, 13)}
      {label(150, 248, cm ? `jarak pada peta = ${fmt(cm)} cm` : 'jarak pada peta', MUTE, 12)}

      {label(380, 84, scale ? `Skala 1 : ${fmt(scale)}` : 'Skala 1 : n', INK, 14)}
      {label(380, 114, '1 cm di peta =', MUTE, 11)}
      {label(380, 132, scale ? `${fmt(scale)} cm sebenarnya` : 'n cm sebenarnya', MUTE, 11)}
      {label(380, 164, 'jarak sebenarnya', GREEN, 12)}
      {label(380, 184, '= jarak peta × skala', GREEN, 12)}
      {motion && worked ? (
        <>
          {label(380, 214, `= ${fmt(cm)} × ${fmt(scale)} = ${fmt(cm * scale)} cm`, AMBER, 12)}
          {label(380, 242, `= ${realDistance(cm * scale)}`, PURPLE, 15)}
        </>
      ) : null}
      {label(380, 280, '1 km = 100.000 cm · 1 m = 100 cm', MUTE, 10)}
    </>
  );
}
