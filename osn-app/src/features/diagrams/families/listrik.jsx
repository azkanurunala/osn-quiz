import { anim } from '../anim';

const INK = '#e2e8f0';
const MUTE = '#94a3b8';
const RED = '#f87171';
const BLUE = '#60a5fa';
const GREEN = '#4ade80';
const AMBER = '#fbbf24';

const label = (x, y, str, fill = MUTE, size = 12, anchor = 'middle') => (
  <text x={x} y={y} fill={fill} fontSize={size} fontWeight="800" textAnchor={anchor}
    fontFamily="'IBM Plex Sans',system-ui,sans-serif">{str}</text>
);

/**
 * Battery on a vertical rail: long thin plate = + (top), short thick plate = − (bottom).
 * The rail is left open between y and y + 26 so the plates sit in the gap.
 */
function Battery({ x, y }) {
  return (
    <g>
      <line x1={x - 14} y1={y + 8} x2={x + 14} y2={y + 8} stroke={INK} strokeWidth="2.5" />
      <line x1={x - 7} y1={y + 18} x2={x + 7} y2={y + 18} stroke={INK} strokeWidth="5" />
      {label(x + 22, y + 12, '+', AMBER, 14, 'start')}
      {label(x + 22, y + 26, '−', MUTE, 14, 'start')}
    </g>
  );
}

function Bulb({ x, y, lit }) {
  return (
    <g {...anim(lit, 'ix-glow', { duration: 1.6, extra: { color: AMBER } })}>
      <circle cx={x} cy={y} r="15" fill={lit ? '#fef3c7' : '#1e293b'} stroke={AMBER} strokeWidth="3" />
      <path d={`M ${x - 8} ${y + 4} Q ${x} ${y - 10} ${x + 8} ${y + 4}`} fill="none" stroke={lit ? '#b45309' : '#475569'} strokeWidth="2" />
    </g>
  );
}

/** Current flow: dashes travel along the wire while `motion` is on. */
function Wire({ x1, y1, x2, y2, motion, color = INK }) {
  const horizontal = y1 === y2;
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3.5"
      strokeDasharray="12 12"
      {...(motion
        ? { style: { animation: horizontal ? 'ix-flow-x 1.6s linear infinite' : 'ix-flow-y 1.6s linear infinite' } }
        : { strokeDasharray: '0', style: { stroke: color } })}
    />
  );
}

const FLOW_CSS = `
@keyframes ix-flow-x { to { stroke-dashoffset: -24; } }
@keyframes ix-flow-y { to { stroke-dashoffset: -24; } }
`;

// ------------------------------------------------------------------ seri
// One closed loop; both bulbs sit in the same wire, so the same current passes through each.
// Wires are listed in the direction of conventional current (out of +, back into −).
export function RangkaianSeri({ motion }) {
  return (
    <>
      <style>{FLOW_CSS}</style>
      <Wire x1={70} y1={142} x2={70} y2={80} motion={motion} />
      <Wire x1={70} y1={80} x2={185} y2={80} motion={motion} />
      <Bulb x={200} y={80} lit={motion} />
      <Wire x1={215} y1={80} x2={315} y2={80} motion={motion} />
      <Bulb x={330} y={80} lit={motion} />
      <Wire x1={345} y1={80} x2={450} y2={80} motion={motion} />
      <Wire x1={450} y1={80} x2={450} y2={230} motion={motion} />
      <Wire x1={450} y1={230} x2={70} y2={230} motion={motion} />
      <Wire x1={70} y1={230} x2={70} y2={168} motion={motion} />
      <Battery x={70} y={142} />
      {label(260, 120, 'satu jalur arus', MUTE, 11)}

      {label(260, 266, 'seri: satu jalur, lampu lebih redup', RED, 12)}
      {label(260, 286, 'satu lampu putus → semua lampu padam', MUTE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ paralel
// Two branches between the same top and bottom rails: each bulb gets the full battery voltage.
export function RangkaianParalel({ motion }) {
  return (
    <>
      <style>{FLOW_CSS}</style>
      <Wire x1={70} y1={142} x2={70} y2={64} motion={motion} />
      <Wire x1={70} y1={64} x2={250} y2={64} motion={motion} />
      <Wire x1={250} y1={64} x2={410} y2={64} motion={motion} />
      <Wire x1={250} y1={64} x2={250} y2={133} motion={motion} />
      <Bulb x={250} y={148} lit={motion} />
      <Wire x1={250} y1={163} x2={250} y2={232} motion={motion} />
      <Wire x1={410} y1={64} x2={410} y2={133} motion={motion} />
      <Bulb x={410} y={148} lit={motion} />
      <Wire x1={410} y1={163} x2={410} y2={232} motion={motion} />
      <Wire x1={410} y1={232} x2={250} y2={232} motion={motion} />
      <Wire x1={250} y1={232} x2={70} y2={232} motion={motion} />
      <Wire x1={70} y1={232} x2={70} y2={168} motion={motion} />
      <Battery x={70} y={142} />
      <circle cx="250" cy="64" r="5" fill={INK} />
      <circle cx="250" cy="232" r="5" fill={INK} />
      {label(330, 152, 'cabang', MUTE, 11)}

      {label(260, 266, 'paralel: jalur bercabang, lampu lebih terang', GREEN, 12)}
      {label(260, 286, 'satu lampu putus → lampu lain tetap menyala', MUTE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ konduktor vs isolator
export function KonduktorIsolator({ motion }) {
  return (
    <>
      <rect x="52" y="64" width="200" height="176" rx="8" fill="#1e293b" stroke={BLUE} strokeWidth="2.5" />
      {label(152, 88, 'KONDUKTOR', BLUE, 12)}
      {label(152, 258, 'logam: elektron bebas bergerak', MUTE, 10)}
      <circle cx="112" cy="152" r="13" fill="#0f172a" stroke={INK} strokeWidth="2" />
      <circle cx="192" cy="152" r="13" fill="#0f172a" stroke={INK} strokeWidth="2" />
      <circle cx="152" cy="196" r="13" fill="#0f172a" stroke={INK} strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <circle key={i} {...anim(motion, 'ix-pulse', { duration: 1.5 })}
          cx={112 + i * 40} cy={126} r="5" fill={AMBER} />
      ))}

      <rect x="278" y="64" width="200" height="176" rx="8" fill="#1e293b" stroke={RED} strokeWidth="2.5" />
      {label(378, 88, 'ISOLATOR', RED, 12)}
      {label(378, 258, 'plastik · kayu · karet', MUTE, 10)}
      <rect x="330" y="128" width="96" height="96" rx="6" fill="#0f172a" stroke={INK} strokeWidth="2" strokeDasharray="6 5" />
      <text x="378" y="182" fill={RED} fontSize="13" fontWeight="800" textAnchor="middle"
        fontFamily="'IBM Plex Sans',system-ui,sans-serif">✕</text>

      <line x1="262" y1="60" x2="262" y2="244" stroke={MUTE} strokeWidth="2" strokeDasharray="4 6" />
    </>
  );
}

// ------------------------------------------------------------------ magnet
// Bar magnet with the textbook colours (U/utara red, S/selatan blue). Field lines leave the north
// pole, loop around outside the magnet and enter the south pole; the dashes travel U -> S.
export function Magnetik({ motion }) {
  const loops = [30, 55, 80];
  return (
    <>
      {loops.map((h, i) => (
        <g key={h}>
          <path d={`M 190 ${142} C ${150 - i * 20} ${142 - h * 1.4}, ${370 + i * 20} ${142 - h * 1.4}, 330 ${142}`}
            fill="none" stroke={MUTE} strokeWidth="2.5" strokeDasharray="8 6"
            {...anim(motion, 'ix-flow', { duration: 1.8 })} />
          <path d={`M 190 ${178} C ${150 - i * 20} ${178 + h * 1.4}, ${370 + i * 20} ${178 + h * 1.4}, 330 ${178}`}
            fill="none" stroke={MUTE} strokeWidth="2.5" strokeDasharray="8 6"
            {...anim(motion, 'ix-flow', { duration: 1.8 })} />
          <polygon points="0,0 -11,-6 -11,6" fill={MUTE}
            transform={`translate(${266} ${142 - h * 1.05}) rotate(0)`} />
          <polygon points="0,0 -11,-6 -11,6" fill={MUTE}
            transform={`translate(${266} ${178 + h * 1.05}) rotate(0)`} />
        </g>
      ))}

      <rect x="190" y="132" width="70" height="56" rx="4" fill="#dc2626" stroke={INK} strokeWidth="2" />
      <rect x="260" y="132" width="70" height="56" rx="4" fill="#1d4ed8" stroke={INK} strokeWidth="2" />
      {label(225, 168, 'U', '#fff', 22)}
      {label(295, 168, 'S', '#fff', 22)}

      {label(260, 290, 'garis gaya keluar dari kutub utara (U), masuk ke kutub selatan (S)', MUTE, 11)}
    </>
  );
}
