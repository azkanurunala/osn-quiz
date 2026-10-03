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

// ------------------------------------------------------------------ diskon & PPN
export function DiskonPPN({ motion }) {
  return (
    <>
      <g {...anim(motion, 'ix-pulse', { duration: 2.6 })}>
        <polygon points="70,80 248,80 292,150 248,220 70,220" fill="#0f172a" stroke={AMBER} strokeWidth="3" />
        <circle cx="98" cy="150" r="9" fill="#0f172a" stroke={AMBER} strokeWidth="2.5" />
      </g>

      {label(176, 116, 'Harga Rp200.000', MUTE, 13)}
      <line x1="112" y1="112" x2="240" y2="112" stroke={MUTE} strokeWidth="2" />
      {label(176, 152, 'Diskon 25%', GREEN, 14)}
      {label(176, 196, 'Bayar Rp150.000', AMBER, 16)}

      {label(322, 88, 'Menghitung sendiri', INK, 13, 'start')}
      {label(322, 122, 'diskon = 25% × 200.000', GREEN, 12, 'start')}
      {label(322, 148, '= 50.000', GREEN, 12, 'start')}
      {label(322, 182, 'bayar = 200.000 − 50.000', AMBER, 12, 'start')}
      {label(322, 208, '= 150.000', AMBER, 12, 'start')}
      {label(322, 244, 'PPN menambah harga:', PURPLE, 11, 'start')}
      {label(322, 264, 'harga + (persen × harga)', PURPLE, 11, 'start')}
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
        <Weight x={170} y={165} text="+3" color={GREEN} motion={motion} size={12} />
        <Weight x={370} y={165} text="7" color={BLUE} motion={motion} size={16} />
      </g>

      {label(150, 118 - 18, 'x + 3', GREEN, 13)}
      {label(370, 118 - 18, '7', BLUE, 13)}

      <polygon points="260,118 242,152 278,152" fill={INK} />
      <rect x="253" y="152" width="14" height="88" fill="#334155" stroke={INK} strokeWidth="2" />
      <rect x="226" y="240" width="68" height="12" rx="4" fill="#334155" stroke={INK} strokeWidth="2" />

      {label(260, 280, 'x + 3 = 7      x = 7 − 3 = 4', AMBER, 14)}
    </>
  );
}
