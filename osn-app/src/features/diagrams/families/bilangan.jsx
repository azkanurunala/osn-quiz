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

// ------------------------------------------------------------------ pohon faktor
function TreeNode({ x, y, value, color, motion, delay }) {
  return (
    <g {...anim(motion, 'ix-pulse', { duration: 2 + delay })}>
      <rect x={x - 19} y={y - 15} width="38" height="30" rx="8" fill="#0f172a" stroke={color} strokeWidth="3" />
      {label(x, y + 5, value, color, 14)}
    </g>
  );
}

function branch(x1, y1, x2, y2, motion) {
  return (
    <line key={`${x1}-${y1}-${x2}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={MUTE} strokeWidth="2.5" {...anim(motion, 'ix-pulse', { duration: 2.4 })} />
  );
}

export function PohonFaktor({ motion }) {
  const root = { x: 150, y: 44, v: '36', c: AMBER };
  const a = { x: 70, y: 108, v: '2', c: GREEN };
  const b = { x: 250, y: 108, v: '18', c: BLUE };
  const c = { x: 195, y: 172, v: '2', c: GREEN };
  const d = { x: 335, y: 172, v: '9', c: PURPLE };
  const e = { x: 300, y: 236, v: '3', c: GREEN };
  const f = { x: 385, y: 236, v: '3', c: GREEN };
  const nodes = [root, a, b, c, d, e, f];
  const edges = [
    [root, a], [root, b],
    [b, c], [b, d],
    [d, e], [d, f],
  ];
  return (
    <>
      {edges.map(([p, q]) => branch(p.x, p.y + 15, q.x, q.y - 15, motion))}
      {nodes.map((n, i) => <TreeNode key={n.v + i} {...n} motion={motion} delay={i * 0.15} />)}
      {label(260, 288, 'Faktorisasi prima:  36 = 2² × 3²', AMBER, 13)}
    </>
  );
}

// ------------------------------------------------------------------ garis bilangan
export function GarisBilangan({ motion }) {
  const x0 = 60;
  const step = 40;
  const axisY = 168;
  const tickX = (n) => x0 + (n + 5) * step;
  return (
    <>
      {label(260, 60, 'GARIS BILANGAN', INK, 14)}
      <line x1={x0 - 20} y1={axisY} x2={tickX(5) + 34} y2={axisY} stroke={INK} strokeWidth="3" />
      <polygon points={`${tickX(5) + 34},${axisY} ${tickX(5) + 18},${axisY - 8} ${tickX(5) + 18},${axisY + 8}`} fill={INK} />

      {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((n) => (
        <g key={n}>
          <line x1={tickX(n)} y1={axisY - 8} x2={tickX(n)} y2={axisY + 8} stroke={MUTE} strokeWidth="2" />
          {label(tickX(n), axisY + 28, String(n), n === 0 ? INK : MUTE, 12)}
        </g>
      ))}

      <circle cx={tickX(-3)} cy={axisY} r="9" fill={BLUE} stroke="#0f172a" strokeWidth="2"
        {...anim(motion, 'ix-pulse', { duration: 2 })} />
      {label(tickX(-3), axisY - 26, '-3', BLUE, 13)}
      <circle cx={tickX(2)} cy={axisY} r="9" fill={AMBER} stroke="#0f172a" strokeWidth="2"
        {...anim(motion, 'ix-pulse', { duration: 2.6 })} />
      {label(tickX(2), axisY - 26, '2', AMBER, 13)}

      {label(130, 250, 'semakin ke kanan', MUTE, 12)}
      {label(130, 270, 'semakin besar', GREEN, 12)}
      {label(370, 250, '-3 < 2', AMBER, 16)}
    </>
  );
}

// ------------------------------------------------------------------ pola bilangan
function TermBox({ x, y, value, color, motion }) {
  return (
    <g>
      <rect x={x - 24} y={y - 20} width="48" height="40" rx="9" fill="#0f172a" stroke={color} strokeWidth="3"
        {...anim(motion, 'ix-pulse', { duration: 2.4 })} />
      {label(x, y + 6, value, color, 15)}
    </g>
  );
}

function plusArrow(key, x1, x2, y, text, motion) {
  return (
    <g key={key} {...anim(motion, 'ix-flow', { duration: 1.6 })}>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={MUTE} strokeWidth="2.5" strokeDasharray="7 6" />
      <polygon points={`${x2},${y} ${x2 - 12},${y - 6} ${x2 - 12},${y + 6}`} fill={MUTE} />
      <text x={(x1 + x2) / 2} y={y - 10} fill={GREEN} fontSize="12" fontWeight="800" textAnchor="middle"
        fontFamily="'IBM Plex Sans',system-ui,sans-serif">{text}</text>
    </g>
  );
}

export function PolaBilangan({ motion }) {
  const row1 = [
    { x: 70, v: '2', c: GREEN }, { x: 160, v: '4', c: GREEN }, { x: 250, v: '6', c: GREEN },
    { x: 340, v: '8', c: GREEN }, { x: 430, v: '?', c: AMBER },
  ];
  const row2 = [
    { x: 70, v: '1', c: PURPLE }, { x: 160, v: '4', c: PURPLE }, { x: 250, v: '9', c: PURPLE },
    { x: 340, v: '16', c: PURPLE }, { x: 430, v: '?', c: AMBER },
  ];
  return (
    <>
      {label(70, 52, 'Pola +2', GREEN, 12, 'start')}
      {row1.map((t) => <TermBox key={`r1${t.v}${t.x}`} x={t.x} y={80} value={t.v} color={t.c} motion={motion} />)}
      {[+2, +2, +2, +2].map((d, i) => plusArrow(`r1a${i}`, row1[i].x + 26, row1[i + 1].x - 26, 80, `+${d}`, motion))}

      {label(70, 176, 'Pola kuadrat (selisih naik +2)', PURPLE, 12, 'start')}
      {row2.map((t) => <TermBox key={`r2${t.v}${t.x}`} x={t.x} y={204} value={t.v} color={t.c} motion={motion} />)}
      {[3, 5, 7, 9].map((d, i) => plusArrow(`r2a${i}`, row2[i].x + 26, row2[i + 1].x - 26, 204, `+${d}`, motion))}
    </>
  );
}
