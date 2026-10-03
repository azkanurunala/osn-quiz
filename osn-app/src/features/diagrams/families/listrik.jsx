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

/** Battery symbol, drawn vertically so it can sit in the left rail of either circuit. */
function Battery({ x, y, h = 26 }) {
  const cy = y + h / 2;
  return (
    <g>
      <line x1={x - 9} y1={cy} x2={x + 9} y2={cy} stroke={INK} strokeWidth="4" />
      <line x1={x - 4} y1={cy - 8} x2={x + 4} y2={cy - 8} stroke={INK} strokeWidth="2.5" />
      <line x1={x - 4} y1={cy + 8} x2={x + 4} y2={cy + 8} stroke={INK} strokeWidth="2.5" />
      {label(x - 16, cy + 4, '−', MUTE, 13)}
      {label(x + 16, cy + 4, '+', MUTE, 13)}
    </g>
  );
}

function Bulb({ x, y, lit }) {
  return (
    <g {...anim(lit, 'ix-glow', { duration: 1.6, extra: { color: AMBER } })}>
      <circle cx={x} cy={y} r="15" fill={lit ? '#fef3c7' : '#1e293b'} stroke={AMBER} strokeWidth="3" />
      <path d={`M ${x - 15} ${y} A 15 15 0 0 1 ${x + 15} ${y}`} fill="none" stroke={lit ? '#fff' : '#475569'} strokeWidth="2" />
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
export function RangkaianSeri({ motion }) {
  return (
    <>
      <style>{FLOW_CSS}</style>
      <Wire x1={70} y1={80} x2={450} y2={80} motion={motion} />
      <Wire x1={450} y1={80} x2={450} y2={230} motion={motion} />
      <Wire x1={450} y1={230} x2={70} y2={230} motion={motion} />
      <Wire x1={70} y1={80} x2={70} y2={230} motion={motion} />
      <Battery x={70} y={142} />

      <Wire x1={200} y1={80} x2={200} y2={112} motion={motion} />
      <Bulb x={200} y={128} lit={motion} />
      <Wire x1={200} y1={144} x2={200} y2={230} motion={motion} />

      <Wire x1={330} y1={80} x2={330} y2={112} motion={motion} />
      <Bulb x={330} y={128} lit={motion} />
      <Wire x1={330} y1={144} x2={330} y2={230} motion={motion} />

      {label(260, 262, 'seri: satu jalur, arus sama, kedua lampu redup', RED, 11)}
    </>
  );
}

// ------------------------------------------------------------------ paralel
export function RangkaianParalel({ motion }) {
  return (
    <>
      <style>{FLOW_CSS}</style>
      <Wire x1={70} y1={70} x2={450} y2={70} motion={motion} />
      <Wire x1={70} y1={70} x2={70} y2={250} motion={motion} />
      <Wire x1={70} y1={250} x2={450} y2={250} motion={motion} />
      <Battery x={70} y={160} />

      <Wire x1={450} y1={70} x2={450} y2={128} motion={motion} />
      <Wire x1={450} y1={128} x2={392} y2={128} motion={motion} />
      <Bulb x={376} y={128} lit={motion} />
      <Wire x1={360} y1={128} x2={302} y2={128} motion={motion} />
      <Wire x1={302} y1={128} x2={302} y2={250} motion={motion} />

      <Wire x1={450} y1={190} x2={392} y2={190} motion={motion} />
      <Bulb x={376} y={190} lit={motion} />
      <Wire x1={360} y1={190} x2={302} y2={190} motion={motion} />
      <Wire x1={302} y1={190} x2={302} y2={250} motion={motion} />

      {label(260, 278, 'paralel: jalur bercabang, tiap lampu tetap terang', GREEN, 11)}
    </>
  );
}

// ------------------------------------------------------------------ konduktor vs isolator
export function KonduktorIsolator({ motion }) {
  return (
    <>
      <rect x="52" y="64" width="200" height="176" rx="8" fill="#1e293b" stroke={BLUE} strokeWidth="2.5" />
      {label(152, 88, 'KONDUKTOR', BLUE, 12)}
      {label(152, 258, 'logam · ion bebas', MUTE, 10)}
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
export function Magnetik({ motion }) {
  return (
    <>
      <g {...anim(motion, 'ix-slide', { origin: '260px 180px', duration: 2.8 })}>
        <rect x="120" y="150" width="70" height="60" rx="4" fill="#dc2626" stroke={INK} strokeWidth="2" />
        <rect x="190" y="150" width="70" height="60" rx="4" fill="#1d4ed8" stroke={INK} strokeWidth="2" />
        {label(155, 186, 'S', '#fff', 20)}
        {label(225, 186, 'N', '#fff', 20)}
      </g>

      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M 300 ${108 + i * 22} Q 360 ${96 + i * 22} 420 ${108 + i * 22}`}
          fill="none" stroke={BLUE} strokeWidth="2.5" opacity="0.8" strokeDasharray="8 6"
          {...anim(motion, 'ix-flow', { duration: 1.8 })} />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={`l${i}`} d={`M 190 ${112 + i * 22} Q 130 ${100 + i * 22} 70 ${112 + i * 22}`}
          fill="none" stroke={RED} strokeWidth="2.5" opacity="0.8" strokeDasharray="8 6"
          {...anim(motion, 'ix-flow', { duration: 1.8 })} />
      ))}

      {label(260, 240, 'garis gaya magnet dari kutub N ke kutub S', MUTE, 11)}
    </>
  );
}