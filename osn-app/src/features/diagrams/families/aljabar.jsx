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

// ------------------------------------------------------------------ diskon & PPN
// Price tag with the soal's own price and discount. The amount to pay is the answer to most of these
// soal, so the worked numbers appear only in the explanation phase.
export function DiskonPPN({ motion, question }) {
  const text = String(question?.question ?? '');
  const priceRaw = text.match(/Rp\s?(\d[\d.]*)/i)?.[1];
  const price = priceRaw ? num(priceRaw) : null;
  const discs = [...text.matchAll(/diskon\D{0,12}?(\d+(?:,\d+)?)\s*%/gi)];
  const pct = discs.length === 1 ? num(discs[0][1]) : null;
  const worked = price && pct && !/asli|semula|ppn|pajak|untung|rugi|modal|\+/i.test(text);
  const cut = worked ? (price * pct) / 100 : 0;
  return (
    <>
      <g {...anim(motion, 'ix-pulse', { duration: 2.6 })}>
        <polygon points="70,80 248,80 292,150 248,220 70,220" fill="#0f172a" stroke={AMBER} strokeWidth="3" />
        <circle cx="98" cy="150" r="9" fill="#0f172a" stroke={AMBER} strokeWidth="2.5" />
      </g>

      {label(184, 116, price ? `Harga Rp${fmt(price)}` : 'Harga awal', MUTE, 13)}
      {label(184, 152, pct ? `Diskon ${fmt(pct)}%` : 'Diskon p%', GREEN, 14)}
      {label(184, 194, motion && worked ? `Bayar Rp${fmt(price - cut)}` : 'Bayar = ?', AMBER, 16)}

      {label(322, 88, 'Cara menghitung', INK, 13, 'start')}
      {label(322, 120, 'potongan = persen × harga', GREEN, 12, 'start')}
      {label(322, 144, 'bayar = harga − potongan', AMBER, 12, 'start')}
      {motion && worked ? (
        <>
          {label(322, 176, `${fmt(pct)}% × ${fmt(price)} = ${fmt(cut)}`, GREEN, 12, 'start')}
          {label(322, 200, `${fmt(price)} − ${fmt(cut)} = ${fmt(price - cut)}`, AMBER, 12, 'start')}
        </>
      ) : null}
      {label(322, 240, 'PPN menambah harga:', PURPLE, 11, 'start')}
      {label(322, 260, 'harga + (persen × harga)', PURPLE, 11, 'start')}
    </>
  );
}

// ------------------------------------------------------------------ timbangan aljabar
function Hanger({ x, y }) {
  return (
    <>
      <line x1={x} y1="118" x2={x - 28} y2={y} stroke={MUTE} strokeWidth="2" />
      <line x1={x} y1="118" x2={x + 28} y2={y} stroke={MUTE} strokeWidth="2" />
      <path d={`M ${x - 40} ${y} Q ${x} ${y + 28} ${x + 40} ${y}`} fill="none" stroke={INK} strokeWidth="3" />
    </>
  );
}

function Weight({ x, y, text, color, motion, size = 15 }) {
  return (
    <g {...anim(motion, 'ix-pulse', { duration: 2.4 })}>
      <rect x={x - 16} y={y - 15} width="32" height="30" rx="7" fill="#0f172a" stroke={color} strokeWidth="2.5" />
      {label(x, y + 6, text, color, size)}
    </g>
  );
}

export function TimbanganAljabar({ motion }) {
  return (
    <>
      <g {...anim(motion, 'ix-bob', { duration: 2.8 })}>
        <line x1="120" y1="118" x2="400" y2="118" stroke={INK} strokeWidth="4" />
        <Hanger x={150} y={180} />
        <Hanger x={370} y={180} />
        <Weight x={132} y={165} text="x" color={GREEN} motion={motion} size={16} />
        <Weight x={170} y={165} text="a" color={GREEN} motion={motion} size={15} />
        <Weight x={370} y={165} text="b" color={BLUE} motion={motion} size={16} />
      </g>

      {label(150, 118 - 18, 'x + a', GREEN, 13)}
      {label(370, 118 - 18, 'b', BLUE, 13)}

      <polygon points="260,118 242,152 278,152" fill={INK} />
      <rect x="253" y="152" width="14" height="88" fill="#334155" stroke={INK} strokeWidth="2" />
      <rect x="226" y="240" width="68" height="12" rx="4" fill="#334155" stroke={INK} strokeWidth="2" />

      {label(260, 274, 'x + a = b  →  x = b − a', AMBER, 14)}
      {label(260, 294, 'kurangi kedua sisi dengan angka yang sama: tetap seimbang', MUTE, 10)}
    </>
  );
}
