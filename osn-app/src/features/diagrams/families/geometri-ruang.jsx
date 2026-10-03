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

const spin = (motion, extra = {}) => anim(motion, 'ix-pulse', { duration: 2.6, ...extra });

function Cube({ cx, cy, s, color, motion }) {
  const x = cx - s / 2;
  const y = cy - s / 2;
  const d = s * 0.42;
  return (
    <g {...spin(motion)}>
      <polygon points={`${x},${y} ${x + s},${y} ${x + s + d},${y - d} ${x + d},${y - d}`} fill="#111c2e" stroke={color} strokeWidth="2.5" />
      <polygon points={`${x + s},${y} ${x + s},${y + s} ${x + s + d},${y + s - d} ${x + s + d},${y - d}`} fill="#0b1220" stroke={color} strokeWidth="2.5" />
      <rect x={x} y={y} width={s} height={s} fill="#0f172a" stroke={color} strokeWidth="2.5" />
    </g>
  );
}

function Box({ cx, cy, w, h, dp, color, motion }) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  return (
    <g {...spin(motion)}>
      <polygon points={`${x},${y} ${x + w},${y} ${x + w + dp},${y - dp} ${x + dp},${y - dp}`} fill="#111c2e" stroke={color} strokeWidth="2.5" />
      <polygon points={`${x + w},${y} ${x + w},${y + h} ${x + w + dp},${y + h - dp} ${x + w + dp},${y - dp}`} fill="#0b1220" stroke={color} strokeWidth="2.5" />
      <rect x={x} y={y} width={w} height={h} fill="#0f172a" stroke={color} strokeWidth="2.5" />
    </g>
  );
}

function Cylinder({ cx, cy, r, h, color, motion }) {
  const top = cy - h / 2;
  const bot = cy + h / 2;
  return (
    <g {...spin(motion)}>
      <path d={`M ${cx - r} ${top} L ${cx - r} ${bot} A ${r} ${r * 0.35} 0 0 0 ${cx + r} ${bot} L ${cx + r} ${top} Z`}
        fill="#0f172a" stroke={color} strokeWidth="2.5" />
      <ellipse cx={cx} cy={top} rx={r} ry={r * 0.35} fill="#111c2e" stroke={color} strokeWidth="2.5" />
    </g>
  );
}

function Cone({ cx, cy, r, h, color, motion }) {
  const apex = cy - h / 2;
  const base = cy + h / 2;
  return (
    <g {...spin(motion)}>
      <path d={`M ${cx} ${apex} L ${cx - r} ${base} A ${r} ${r * 0.35} 0 0 0 ${cx + r} ${base} Z`}
        fill="#0f172a" stroke={color} strokeWidth="2.5" />
    </g>
  );
}

function Ball({ cx, cy, r, color, motion }) {
  return (
    <g {...spin(motion)}>
      <circle cx={cx} cy={cy} r={r} fill="#0f172a" stroke={color} strokeWidth="2.5" />
      <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.35} fill="none" stroke={color} strokeWidth="2" strokeDasharray="5 4" />
    </g>
  );
}

function Pyramid({ cx, cy, w, h, color, motion }) {
  const base = cy + h / 2;
  const dx = 14;
  const dy = 9;
  const bl = [cx - w / 2, base];
  const br = [cx + w / 2, base];
  const tr = [cx + w / 2 + dx, base - dy];
  const tl = [cx - w / 2 + dx, base - dy];
  const apex = [cx + dx / 2, base - h];
  return (
    <g {...spin(motion)}>
      <polygon points={`${bl} ${br} ${tr} ${tl}`} fill="#111c2e" stroke={color} strokeWidth="2.5" />
      <polygon points={`${tl} ${tr} ${apex}`} fill="#0f172a" stroke={color} strokeWidth="2.5" />
      <polygon points={`${bl} ${br} ${apex}`} fill="#0b1220" stroke={color} strokeWidth="2.5" opacity="0.9" />
    </g>
  );
}

// ------------------------------------------------------------------ bangun ruang
export function BangunRuang({ motion }) {
  return (
    <>
      <Cube cx={100} cy={70} s={42} color={GREEN} motion={motion} />
      {label(100, 122, 'Kubus', GREEN, 13)}
      {label(100, 140, 'V = s × s × s', MUTE, 11)}

      <Box cx={260} cy={70} w={52} h={38} dp={15} color={BLUE} motion={motion} />
      {label(260, 122, 'Balok', BLUE, 13)}
      {label(260, 140, 'V = p × l × t', MUTE, 11)}

      <Cylinder cx={420} cy={70} r={22} h={50} color={AMBER} motion={motion} />
      {label(420, 122, 'Tabung', AMBER, 13)}
      {label(420, 140, 'V = π × r² × t', MUTE, 11)}

      <Cone cx={100} cy={196} r={22} h={50} color={PURPLE} motion={motion} />
      {label(100, 248, 'Kerucut', PURPLE, 13)}
      {label(100, 266, 'V = ⅓ × π × r² × t', MUTE, 11)}

      <Ball cx={260} cy={196} r={23} color={GREEN} motion={motion} />
      {label(260, 248, 'Bola', GREEN, 13)}
      {label(260, 266, 'V = 4/3 × π × r³', MUTE, 11)}

      <Pyramid cx={420} cy={196} w={46} h={50} color={BLUE} motion={motion} />
      {label(420, 248, 'Limas', BLUE, 13)}
      {label(420, 266, 'V = ⅓ × La × t', MUTE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ jaring-jaring
export function JaringJaring({ motion }) {
  const s = 28;
  const ox = 132;
  const oy = 46;
  const squares = [
    [ox, oy], [ox, oy + s], [ox, oy + 2 * s], [ox, oy + 3 * s],
    [ox - s, oy + s], [ox + s, oy + s],
  ];
  return (
    <>
      <g {...anim(motion, 'ix-pulse', { duration: 2.6 })}>
        {squares.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={s} height={s} fill="#0f172a" stroke={BLUE} strokeWidth="2.5" />
        ))}
      </g>
      {label(ox + s / 2, 196, 'kubus → 6 persegi', BLUE, 12)}

      <g {...anim(motion, 'ix-pulse', { duration: 3 })}>
        <rect x={300} y={100} width={140} height={62} fill="#0f172a" stroke={AMBER} strokeWidth="2.5" />
        <circle cx={370} cy={82} r={17} fill="#111c2e" stroke={AMBER} strokeWidth="2.5" />
        <circle cx={370} cy={180} r={17} fill="#111c2e" stroke={AMBER} strokeWidth="2.5" />
      </g>
      {label(370, 216, 'tabung → persegi panjang + 2 lingkaran', AMBER, 11)}

      {label(260, 266, 'jaring-jaring = bangun datar yang dilipat menjadi bangun ruang', MUTE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ bangun ruang gabungan
export function BangunRuangGabungan({ motion }) {
  return (
    <>
      <Cylinder cx={165} cy={155} r={30} h={70} color={AMBER} motion={motion} />
      <Box cx={165} cy={214} w={150} h={48} dp={22} color={BLUE} motion={motion} />

      {label(165, 112, 'tabung', AMBER, 12)}
      {label(165, 256, 'balok', BLUE, 12)}
      <line x1="96" y1="120" x2="120" y2="112" stroke={AMBER} strokeWidth="2" />
      <line x1="96" y1="150" x2="120" y2="158" stroke={AMBER} strokeWidth="2" />
      <line x1="96" y1="210" x2="70" y2="256" stroke={BLUE} strokeWidth="2" />

      {label(340, 96, 'Volume gabungan', INK, 13, 'start')}
      {label(340, 132, 'V = V balok + V tabung', GREEN, 12, 'start')}
      {label(340, 162, 'V = (p × l × t)', AMBER, 12, 'start')}
      {label(360, 188, '+ (π × r² × t)', AMBER, 12, 'start')}
      {label(340, 226, 'menghitung bertahap,', MUTE, 11, 'start')}
      {label(340, 244, 'lalu jumlahkan hasilnya', MUTE, 11, 'start')}
    </>
  );
}
