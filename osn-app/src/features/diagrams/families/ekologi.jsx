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

// ------------------------------------------------------------------ rantai makanan
export function RantaiMakanan({ motion }) {
  const nodes = [
    { x: 66, t: 'Rumput', c: GREEN },
    { x: 186, t: 'Belalang', c: AMBER },
    { x: 306, t: 'Katak', c: '#34d399' },
    { x: 426, t: 'Ular', c: PURPLE },
  ];
  return (
    <>
      {nodes.map((n, i) => (
        <g key={n.t} {...anim(motion, 'ix-bob', { origin: `${n.x}px 150px`, duration: 2 + i * 0.3 })}>
          <circle cx={n.x} cy={150} r="34" fill="#0f172a" stroke={n.c} strokeWidth="3" />
          {label(n.x, 155, n.t, n.c, 11)}
        </g>
      ))}
      {nodes.slice(0, -1).map((n, i) => (
        <g key={`a${n.t}`} {...anim(motion, 'ix-flow', { duration: 1.6 })}>
          <line x1={n.x + 38} y1={150} x2={nodes[i + 1].x - 40} y2={150}
            stroke={INK} strokeWidth="3" strokeDasharray="9 7" />
          <polygon
            points={`${nodes[i + 1].x - 40},150 ${nodes[i + 1].x - 54},143 ${nodes[i + 1].x - 54},157`}
            fill={INK} />
        </g>
      ))}
      {label(260, 226, 'panah menunjukkan aliran energi dari yang dimakan', MUTE, 11)}
      {label(260, 254, 'produsen → konsumen → decomposer', AMBER, 11)}
    </>
  );
}

// ------------------------------------------------------------------ siklus air
export function SiklusAir({ motion }) {
  return (
    <>
      <path d="M 60 236 Q 260 292 460 236 L 460 264 L 60 264 Z" fill="#1e3a8a" opacity="0.75" />
      <path d="M 60 236 Q 260 292 460 236" fill="none" stroke={BLUE} strokeWidth="2.5" />

      <g {...anim(motion, 'ix-vapor', { origin: '150px 190px', duration: 3 })}>
        <ellipse cx="150" cy="190" rx="34" ry="20" fill="#cbd5e1" opacity="0.7" />
      </g>

      <g {...anim(motion, 'ix-vapor', { origin: '380px 200px', duration: 3.6 })}>
        <ellipse cx="380" cy="200" rx="30" ry="17" fill="#cbd5e1" opacity="0.6" />
      </g>

      <circle cx="120" cy="212" r="15" fill={AMBER} {...anim(motion, 'ix-glow', { duration: 2.4, origin: '120px 212px' })} />
      {label(120, 292, 'evaporasi', AMBER, 11)}

      <g {...anim(motion, 'ix-drip', { origin: '250px 120px', duration: 2.2 })}>
        <path d="M 250 96 Q 258 112 250 124 Q 242 112 250 96" fill={BLUE} />
      </g>
      <g {...anim(motion, 'ix-drip', { origin: '310px 96px', duration: 2.6 })}>
        <path d="M 310 96 Q 318 112 310 124 Q 302 112 310 96" fill={BLUE} />
      </g>
      {label(280, 76, 'kondensasi', BLUE, 11)}

      <path d="M 400 92 Q 452 132 462 214" fill="none" stroke={GREEN} strokeWidth="2.5" strokeDasharray="8 6"
        {...anim(motion, 'ix-flow', { duration: 1.8 })} />
      {label(430, 150, 'presipitasi', GREEN, 11)}

      <path d="M 96 214 Q 60 160 74 120" fill="none" stroke={MUTE} strokeWidth="2.5" strokeDasharray="8 6"
        {...anim(motion, 'ix-flow', { duration: 2.2 })} />
      {label(260, 254, 'siklus air: penguapan → kondensasi → hujan → kembali ke laut', MUTE, 10)}
    </>
  );
}

// ------------------------------------------------------------------ metamorfosis
export function Metamorfosis({ motion }) {
  const stages = [
    { t: 'Telur', c: '#fde68a' },
    { t: 'Ulat', c: '#a3e635' },
    { t: 'Pupa', c: '#c084fc' },
    { t: 'Kupu', c: '#f472b6' },
  ];
  return (
    <>
      {stages.map((s, i) => {
        const x = 62 + i * 116;
        return (
          <g key={s.t} {...anim(motion, 'ix-pulse', { duration: 2 + i * 0.4 })}>
            <circle cx={x} cy={140} r="36" fill="#0f172a" stroke={s.c} strokeWidth="3" />
            {i === 0 ? <ellipse cx={x} cy={140} rx="15" ry="20" fill={s.c} opacity="0.85" /> : null}
            {i === 1 ? (
              <g>
                <rect x={x - 20} y={132} width="40" height="16" rx="8" fill={s.c} />
                <circle cx={x + 18} cy={126} r="7" fill={s.c} />
              </g>
            ) : null}
            {i === 2 ? <ellipse cx={x} cy={140} rx="17" ry="26" fill={s.c} opacity="0.85" /> : null}
            {i === 3 ? (
              <g>
                <ellipse cx={x} cy={146} rx="9" ry="17" fill={s.c} />
                <path d={`M ${x} 132 Q ${x - 24} 108 ${x - 16} 116 Z`} fill={s.c} />
                <path d={`M ${x} 132 Q ${x + 24} 108 ${x + 16} 116 Z`} fill={s.c} />
              </g>
            ) : null}
            {label(x, 196, s.t, s.c, 11)}
          </g>
        );
      })}
      {stages.slice(0, -1).map((s, i) => (
        <g key={`a${s.t}`} {...anim(motion, 'ix-flow', { duration: 1.6 })}>
          <line x1={62 + i * 116 + 40} y1={140} x2={62 + (i + 1) * 116 - 40} y2={140}
            stroke={INK} strokeWidth="3" strokeDasharray="8 6" />
          <polygon points={`${62 + (i + 1) * 116 - 40},140 ${62 + (i + 1) * 116 - 54},133 ${62 + (i + 1) * 116 - 54},147`} fill={INK} />
        </g>
      ))}
      {label(260, 240, 'metamorfosis: bentuk tubuh berubah total pada tiap tahap', MUTE, 11)}
      {label(260, 266, 'telur → larva → pupa → imago (dewasa)', PURPLE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ ekosistem
export function Ekosistem({ motion }) {
  return (
    <>
      <rect x="40" y="60" width="440" height="184" rx="10" fill="#052e16" opacity="0.55" stroke={GREEN} strokeWidth="2.5" />
      {label(260, 88, 'EKOSISTEM', GREEN, 13)}

      <g {...anim(motion, 'ix-bob', { origin: '150px 180px' })}>
        <circle cx="150" cy="176" r="26" fill="#0f172a" stroke={GREEN} strokeWidth="3" />
        {label(150, 181, 'tumbuhan', GREEN, 10)}
      </g>
      <g {...anim(motion, 'ix-bob', { origin: '260px 176px', duration: 2.6 })}>
        <circle cx="260" cy="176" r="26" fill="#0f172a" stroke={AMBER} strokeWidth="3" />
        {label(260, 181, 'hewan', AMBER, 10)}
      </g>
      <g {...anim(motion, 'ix-bob', { origin: '370px 176px', duration: 2.2 })}>
        <circle cx="370" cy="176" r="26" fill="#0f172a" stroke={BLUE} strokeWidth="3" />
        {label(370, 181, 'pengurai', BLUE, 10)}
      </g>

      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <circle key={i} {...anim(motion, 'ix-rise', { duration: 2.6 + i * 0.2 })}
          cx={70 + i * 54} cy={226} r="4.5" fill={i % 2 ? GREEN : BLUE} />
      ))}
      {label(260, 268, 'unsur biotik saling berhubungan dengan unsur abiotik', MUTE, 11)}
    </>
  );
}