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

// ------------------------------------------------------------------ bangun datar
export function BangunDatar({ motion }) {
  return (
    <>
      {/* persegi */}
      <g {...anim(motion, 'ix-pulse', { duration: 2.2 })}>
        <rect x="62" y="62" width="66" height="66" fill="#0f172a" stroke={GREEN} strokeWidth="3" />
      </g>
      {label(95, 56, 's', GREEN, 12)}
      {label(95, 168, 'L = s × s', GREEN, 12)}
      {label(95, 190, 'K = 4 × s', MUTE, 11)}

      {/* persegi panjang */}
      <g {...anim(motion, 'ix-pulse', { duration: 2.6 })}>
        <rect x="164" y="67" width="82" height="56" fill="#0f172a" stroke={BLUE} strokeWidth="3" />
      </g>
      {label(205, 60, 'p', BLUE, 12)}
      {label(154, 99, 'l', BLUE, 12)}
      {label(205, 168, 'L = p × l', BLUE, 12)}
      {label(205, 190, 'K = 2(p + l)', MUTE, 11)}

      {/* segitiga */}
      <g {...anim(motion, 'ix-pulse', { duration: 3 })}>
        <polygon points="280,132 350,132 315,58" fill="#0f172a" stroke={AMBER} strokeWidth="3" />
        <line x1="315" y1="58" x2="315" y2="132" stroke={AMBER} strokeWidth="2" strokeDasharray="5 4" />
      </g>
      {label(315, 150, 'a', AMBER, 12)}
      {label(323, 96, 't', AMBER, 12, 'start')}
      {label(315, 168, 'L = ½ × a × t', AMBER, 12)}
      {label(315, 190, 'K = jumlah sisi', MUTE, 11)}

      {/* jajar genjang */}
      <g {...anim(motion, 'ix-pulse', { duration: 2.8 })}>
        <polygon points="385,132 445,132 460,100 400,100" fill="#0f172a" stroke={PURPLE} strokeWidth="3" />
        <line x1="400" y1="100" x2="400" y2="132" stroke={PURPLE} strokeWidth="2" strokeDasharray="5 4" />
      </g>
      {label(415, 150, 'a', PURPLE, 12)}
      {label(407, 96, 't', PURPLE, 12, 'end')}
      {label(422, 168, 'L = a × t', PURPLE, 12)}
      {label(422, 190, 'K = 2(a + b)', MUTE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ unsur lingkaran
export function LingkaranUnsur({ motion }) {
  const cx = 165;
  const cy = 150;
  const r = 92;
  return (
    <>
      <circle cx={cx} cy={cy} r={r} fill="#0f172a" stroke={BLUE} strokeWidth="3" />
      <g {...anim(motion, 'ix-spin-ccw', { origin: `${cx}px ${cy}px`, duration: 6 })}>
        <line x1={cx} y1={cy} x2={cx} y2={cy - r} stroke={GREEN} strokeWidth="3" strokeDasharray="6 5" />
        <circle cx={cx} cy={cy - r} r="5" fill={GREEN} />
      </g>
      <line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke={AMBER} strokeWidth="3" />
      <circle cx={cx} cy={cy} r="4.5" fill={AMBER} />
      {label(cx + 46, cy - 10, 'r', AMBER, 15)}

      {label(320, 92, 'r = jari-jari (pusat → tepi)', INK, 12, 'start')}
      {label(320, 126, 'd = diameter = 2 × r', BLUE, 12, 'start')}
      {label(320, 160, 'K = 2 × π × r', AMBER, 12, 'start')}
      {label(320, 194, 'L = π × r × r', PURPLE, 12, 'start')}
      {label(320, 228, 'π ≈ 3,14 atau 22/7', MUTE, 11, 'start')}
      {label(260, 282, 'K = keliling   L = luas', MUTE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ jenis sudut
function Angle({ vx, deg, arc, color, name, motion }) {
  const len = 88;
  const rad = (deg * Math.PI) / 180;
  const ex = vx + len * Math.cos(rad);
  const ey = 210 - len * Math.sin(rad);
  const ax = vx + arc * Math.cos(rad);
  const ay = 210 - arc * Math.sin(rad);
  const sweep = deg > 0 ? 0 : 1;
  return (
    <g {...anim(motion, 'ix-pulse', { duration: 2.4 })}>
      <line x1={vx} y1="210" x2={vx + len} y2="210" stroke={color} strokeWidth="3" />
      <line x1={vx} y1="210" x2={ex} y2={ey} stroke={color} strokeWidth="3" />
      {deg === 90 ? (
        <rect x={vx} y={210 - 16} width="16" height="16" fill="none" stroke={color} strokeWidth="2" />
      ) : (
        <path d={`M ${vx + arc} 210 A ${arc} ${arc} 0 0 ${sweep} ${ax} ${ay}`} fill="none" stroke={color} strokeWidth="2.5" />
      )}
      <circle cx={vx} cy="210" r="4" fill={color} />
      {label(vx + 6, 236, name, color, 12, 'start')}
    </g>
  );
}

export function Sudut({ motion }) {
  return (
    <>
      <Angle vx={70} deg={52} arc={44} color={GREEN} name="lancip < 90°" motion={motion} />
      <Angle vx={215} deg={90} arc={44} color={BLUE} name="siku-siku = 90°" motion={motion} />
      <Angle vx={355} deg={132} arc={44} color={AMBER} name="tumpul > 90°" motion={motion} />
      {label(260, 274, 'sudut lurus = 180°   sudut refleks > 180°', MUTE, 11)}
    </>
  );
}
