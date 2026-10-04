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

/** Arrow with optional motion. Used for every force / effort / energy direction. */
function Arrow({ x, y, dx, dy, color, motion, name = 'ix-flow', width = 5, dash = '10 6',
  labelText, labelDx = 0, labelDy = -9 }) {
  const a = Math.atan2(dy, dx);
  const head = 9;
  const tipX = x + dx;
  const tipY = y + dy;
  const p1 = [tipX - head * Math.cos(a - 0.42), tipY - head * Math.sin(a - 0.42)];
  const p2 = [tipX - head * Math.cos(a + 0.42), tipY - head * Math.sin(a + 0.42)];
  return (
    <g {...anim(motion, name)}>
      <line x1={x} y1={y} x2={tipX} y2={tipY} stroke={color} strokeWidth={width}
        strokeDasharray={dash} strokeLinecap="round" />
      <polygon points={`${tipX},${tipY} ${p1[0]},${p1[1]} ${p2[0]},${p2[1]}`} fill={color} />
      {labelText ? label(tipX + labelDx, tipY + labelDy, labelText, color, 12) : null}
    </g>
  );
}

function Box({ x, y, w = 46, h = 46, stroke = BLUE, labelText, labelFill = INK, r = 5 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={r} fill="#0f172a" stroke={stroke} strokeWidth="2.5" />
      {labelText ? label(x + w / 2, y + h / 2 + 4, labelText, labelFill, 13) : null}
    </g>
  );
}

// Dimension line with end ticks, for "lengan kuasa" / "lengan beban".
function Span({ x1, x2, y, color, text }) {
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth="2" />
      <line x1={x1} y1={y - 6} x2={x1} y2={y + 6} stroke={color} strokeWidth="2" />
      <line x1={x2} y1={y - 6} x2={x2} y2={y + 6} stroke={color} strokeWidth="2" />
      {label((x1 + x2) / 2, y - 8, text, color, 11)}
    </g>
  );
}

// ------------------------------------------------------------------ tuas (lever)
// First-class lever: fulcrum between effort and load. Both the effort (F) and the load's weight (W)
// push DOWN on the beam; the arms are measured from the fulcrum.
export function Tuas({ motion }) {
  return (
    <>
      <Span x1={110} x2={260} y={112} color={GREEN} text="lengan kuasa" />
      <Span x1={260} x2={395} y={112} color={BLUE} text="lengan beban" />

      <polygon points="260,228 238,258 282,258" fill="#334155" stroke={MUTE} strokeWidth="2" />
      {label(292, 254, 'titik tumpu', MUTE, 11, 'start')}

      <g {...anim(motion, 'ix-swing', { origin: '260px 222px', duration: 3.4 })}>
        <rect x="96" y="216" width="328" height="12" rx="6" fill="#334155" stroke={INK} strokeWidth="2.5" />
        <Box x={372} y={170} labelText="B" />
      </g>
      <circle cx="260" cy="222" r="6" fill="#0f172a" stroke={AMBER} strokeWidth="3" />

      <Arrow x={110} y={140} dx={0} dy={66} color={GREEN} motion={motion} labelText="F (kuasa)" labelDx={0} labelDy={-74} />
      <Arrow x={395} y={238} dx={0} dy={34} color={BLUE} motion={motion} name="ix-pulse" labelText="W (beban)" labelDx={46} labelDy={-6} />

      {label(260, 292, 'kuasa × lengan kuasa = beban × lengan beban', AMBER, 12)}
    </>
  );
}

// ------------------------------------------------------------------ katrol (pulley)
// Rope tied to the ceiling, under the movable pulley, over the fixed pulley, down to the hand.
// Two rope segments hold the load, so the pull is about half the weight; the fixed pulley only
// changes the direction of the pull.
export function Katrol({ motion }) {
  return (
    <>
      <rect x="110" y="38" width="340" height="16" rx="5" fill="#334155" stroke={INK} strokeWidth="2" />
      {label(280, 28, 'langit-langit', MUTE, 11)}

      <path d="M 326 54 L 326 186 A 30 30 0 0 0 386 186 L 386 80 A 26 26 0 0 1 438 80 L 438 222"
        fill="none" stroke={INK} strokeWidth="2.5" />

      <line x1="412" y1="54" x2="412" y2="80" stroke={MUTE} strokeWidth="3" />
      <circle cx="412" cy="80" r="26" fill="none" stroke={AMBER} strokeWidth="5" />
      <g {...anim(motion, 'ix-spin', { origin: '412px 80px' })}>
        {[0, 45, 90, 135].map((deg) => (
          <line key={deg} x1={412 - 26 * Math.cos((deg * Math.PI) / 180)} y1={80 - 26 * Math.sin((deg * Math.PI) / 180)}
            x2={412 + 26 * Math.cos((deg * Math.PI) / 180)} y2={80 + 26 * Math.sin((deg * Math.PI) / 180)}
            stroke={AMBER} strokeWidth="2" opacity="0.6" />
        ))}
      </g>
      {label(470, 76, 'katrol', MUTE, 10, 'start')}
      {label(470, 90, 'tetap', MUTE, 10, 'start')}

      <g>
        <circle cx="356" cy="186" r="30" fill="none" stroke={AMBER} strokeWidth="5" />
        <circle cx="356" cy="186" r="6" fill="#0f172a" stroke={AMBER} strokeWidth="2" />
        <line x1="356" y1="192" x2="356" y2="232" stroke={MUTE} strokeWidth="3" />
        <Box x={326} y={232} w={60} h={40} labelText="W" stroke={BLUE} />
      </g>
      {label(312, 180, 'katrol', MUTE, 10, 'end')}
      {label(312, 194, 'bergerak', MUTE, 10, 'end')}

      <Arrow x={438} y={226} dx={0} dy={40} color={GREEN} motion={motion} labelText="F" labelDx={16} labelDy={-6} />

      {label(150, 140, 'beban ditahan', INK, 12)}
      {label(150, 158, '2 utas tali', INK, 12)}
      {label(150, 196, 'F ≈ ½ × W', GREEN, 15)}
      {label(150, 222, 'katrol tetap hanya', MUTE, 10)}
      {label(150, 236, 'mengubah arah tarikan', MUTE, 10)}
    </>
  );
}

// ------------------------------------------------------------------ bidang miring
// Block resting on the slope (rotated to match it); its weight W points straight down, the push F
// points up along the slope.
export function BidangMiring({ motion }) {
  const deg = (Math.atan2(164, 400) * 180) / Math.PI;
  return (
    <>
      <polygon points="70,248 470,248 470,84" fill="#1e293b" stroke={INK} strokeWidth="2.5" />
      <g transform={`translate(190 198.8) rotate(${-deg})`}>
        <rect x="-26" y="-42" width="52" height="42" rx="5" fill="#0f172a" stroke={BLUE} strokeWidth="3" />
        <Arrow x={34} y={-21} dx={74} dy={0} color={GREEN} motion={motion} labelText="F (dorong)" labelDx={4} labelDy={-12} />
      </g>
      <Arrow x={182} y={190} dx={0} dy={48} color={RED} motion={motion} name="ix-pulse" labelText="W" labelDx={-16} labelDy={-4} />

      {label(480, 170, 'tinggi', MUTE, 11, 'start')}
      {label(260, 274, 'makin landai → gaya dorong makin kecil', AMBER, 12)}
      {label(260, 292, 'tetapi lintasannya makin panjang', MUTE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ roda berporos
// Effort on the big wheel's rim, load hanging from the small axle: a small force on the big
// radius balances a big load on the small radius.
export function RodaPoros({ motion }) {
  return (
    <>
      <g {...anim(motion, 'ix-spin', { origin: '200px 116px', duration: 6 })}>
        <circle cx="200" cy="116" r="80" fill="#1e293b" stroke={AMBER} strokeWidth="6" />
        {[0, 45, 90, 135].map((d) => (
          <line key={d} x1={200 - 80 * Math.cos((d * Math.PI) / 180)} y1={116 - 80 * Math.sin((d * Math.PI) / 180)}
            x2={200 + 80 * Math.cos((d * Math.PI) / 180)} y2={116 + 80 * Math.sin((d * Math.PI) / 180)}
            stroke="#475569" strokeWidth="3" />
        ))}
      </g>
      <circle cx="200" cy="116" r="20" fill="#0f172a" stroke={INK} strokeWidth="4" />

      <line x1="120" y1="116" x2="120" y2="206" stroke={INK} strokeWidth="2.5" />
      <Arrow x={120} y={206} dx={0} dy={36} color={GREEN} motion={motion} labelText="F" labelDx={-14} labelDy={-6} />

      <line x1="220" y1="116" x2="220" y2="214" stroke={INK} strokeWidth="2.5" />
      <g {...anim(motion, 'ix-bob', { origin: '220px 236px', duration: 2.8 })}>
        <Box x={196} y={214} w={48} h={40} labelText="W" stroke={BLUE} />
      </g>

      {label(340, 70, 'roda (besar)', AMBER, 12, 'start')}
      {label(340, 92, 'tempat gaya F', MUTE, 11, 'start')}
      {label(340, 132, 'poros (kecil)', INK, 12, 'start')}
      {label(340, 154, 'tempat beban W', MUTE, 11, 'start')}
      {label(340, 200, 'roda besar →', GREEN, 12, 'start')}
      {label(340, 220, 'gaya lebih kecil', GREEN, 12, 'start')}
      {label(260, 290, 'F × jari-jari roda = W × jari-jari poros', AMBER, 12)}
    </>
  );
}

// ------------------------------------------------------------------ gaya resultan
// Symbolic on purpose: the soal carry their own numbers, and a fixed "30 N + 20 N" example next to
// them would invite copying the wrong values.
export function GayaResultan({ motion }) {
  return (
    <>
      {label(30, 46, 'gaya searah', INK, 12, 'start')}
      <rect x="180" y="62" width="80" height="56" rx="6" fill="#1e293b" stroke={INK} strokeWidth="2.5" />
      <Arrow x={92} y={78} dx={84} dy={0} color={GREEN} motion={motion} dash="0" labelText="F1" labelDx={-42} labelDy={-8} />
      <Arrow x={92} y={110} dx={84} dy={0} color={BLUE} motion={motion} name="ix-pulse" dash="0" labelText="F2" labelDx={-42} labelDy={-8} />
      <Arrow x={290} y={90} dx={96} dy={0} color={AMBER} motion={motion} dash="0" labelText="R" labelDx={-48} labelDy={-10} />
      {label(400, 95, 'R = F1 + F2', AMBER, 14, 'start')}

      {label(30, 160, 'gaya berlawanan arah', INK, 12, 'start')}
      <rect x="180" y="176" width="80" height="56" rx="6" fill="#1e293b" stroke={INK} strokeWidth="2.5" />
      <Arrow x={92} y={204} dx={84} dy={0} color={GREEN} motion={motion} dash="0" labelText="F1" labelDx={-42} labelDy={-8} />
      <Arrow x={348} y={204} dx={-84} dy={0} color={BLUE} motion={motion} name="ix-pulse" dash="0" labelText="F2" labelDx={42} labelDy={-8} />
      {label(400, 210, 'R = F1 − F2', AMBER, 14, 'start')}

      {label(260, 270, 'berlawanan: yang besar dikurangi yang kecil, arahnya ikut gaya yang besar', MUTE, 11)}
      {label(260, 290, 'R = 0 → benda diam (seimbang)', MUTE, 11)}
    </>
  );
}
