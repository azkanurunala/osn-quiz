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

// A unit bar split into `n` equal parts, the first `filled` of them shaded — the clearest way to
// show "3/4" and its equivalent "6/8" side by side.
function Bar({ x, y, w, h, n, filled, color, motion, delay }) {
  const seg = w / n;
  return (
    <g>
      {Array.from({ length: n }).map((_, i) => (
        <rect key={i} x={x + i * seg} y={y} width={seg} height={h}
          fill={i < filled ? color : '#0f172a'} stroke={INK} strokeWidth="2"
          {...anim(motion, 'ix-pulse', { duration: 2.2 + delay + i * 0.08 })} />
      ))}
    </g>
  );
}

export function Pecahan({ motion }) {
  const cell = 26;
  const gx = 372;
  const gy = 70;
  return (
    <>
      {label(40, 92, '3/4', AMBER, 16, 'end')}
      <Bar x={52} y={64} w={288} h={50} n={4} filled={3} color={AMBER} motion={motion} delay={0} />
      {label(196, 128, 'senilai  (dikali 2)', GREEN, 11)}

      {label(40, 162, '6/8', BLUE, 16, 'end')}
      <Bar x={52} y={134} w={288} h={50} n={8} filled={6} color={BLUE} motion={motion} delay={0.4} />

      {Array.from({ length: 16 }).map((_, i) => {
        const r = Math.floor(i / 4);
        const c = i % 4;
        return (
          <rect key={i} x={gx + c * cell} y={gy + r * cell} width={cell} height={cell}
            fill={i < 12 ? AMBER : '#0f172a'} stroke={INK} strokeWidth="1.5"
            {...anim(motion, 'ix-pulse', { duration: 2 + i * 0.06 })} />
        );
      })}
      {label(gx + 52, gy + 130, '12/16 = 75%', PURPLE, 13)}

      {label(260, 216, '3/4 = 6/8  →  pecahan senilai', GREEN, 12)}
      {label(260, 244, '3/4 = 0,75 = 75%', PURPLE, 13)}
      {label(260, 272, 'operasi pecahan: samakan penyebut dulu', MUTE, 11)}
    </>
  );
}
