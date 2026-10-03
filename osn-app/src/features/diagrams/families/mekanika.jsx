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

// ------------------------------------------------------------------ tuas (lever)
export function Tuas({ motion }) {
  return (
    <>
      <polygon points="260,230 234,262 286,262" fill="#334155" stroke={MUTE} strokeWidth="2" />
      {label(260, 282, 'poros', MUTE, 11)}

      <g {...anim(motion, 'ix-swing', { origin: '260px 230px', duration: 3.4 })}>
        <rect x="96" y="220" width="328" height="13" rx="6" fill="#334155" stroke={INK} strokeWidth="2.5" />
        <circle cx="260" cy="226" r="8" fill="#0f172a" stroke={AMBER} strokeWidth="3" />
        <Box x={366} y={158} labelText="B" />
        {label(389, 150, 'beban', BLUE, 11)}
        <Box x={118} y={158} labelText="F" stroke={GREEN} />
        {label(141, 150, 'gaya', GREEN, 11)}
      </g>

      <line x1="260" y1="252" x2="260" y2="210" stroke={AMBER} strokeWidth="2" strokeDasharray="4 4" />
      {label(150, 206, 'L', AMBER, 12)}
      {label(372, 206, 'L', AMBER, 12)}

      <Arrow x={90} y={226} dx={0} dy={-42} color={GREEN} motion={motion} labelText="F" labelDx={17} labelDy={2} />
      <Arrow x={404} y={226} dx={0} dy={-42} color={BLUE} motion={motion} name="ix-pulse" labelText="W" labelDx={17} labelDy={2} />
    </>
  );
}

// ------------------------------------------------------------------ katrol (pulley)
export function Katrol({ motion }) {
  return (
    <>
      <rect x="110" y="38" width="300" height="16" rx="5" fill="#334155" stroke={INK} strokeWidth="2" />
      {label(260, 28, 'langit-langit', MUTE, 11)}

      <circle cx="200" cy="74" r="26" fill="none" stroke={AMBER} strokeWidth="5" />
      <g {...anim(motion, 'ix-spin', { origin: '200px 74px' })}>
        {[0, 45, 90, 135].map((deg) => (
          <line key={deg} x1="200" y1="74" x2={200 + 26 * Math.cos((deg * Math.PI) / 180)}
            y2={74 + 26 * Math.sin((deg * Math.PI) / 180)} stroke={AMBER} strokeWidth="2" opacity="0.75" />
        ))}
      </g>
      {label(200, 118, 'katrol tetap', MUTE, 10)}

      <circle cx="356" cy="186" r="30" fill="none" stroke={AMBER} strokeWidth="5" />
      <circle cx="356" cy="186" r="6" fill="#0f172a" stroke={AMBER} strokeWidth="2" />
      {label(356, 236, 'katrol bergerak', MUTE, 10)}

      <line x1="200" y1="48" x2="356" y2="156" stroke={INK} strokeWidth="2.5"
        {...anim(motion, 'ix-flow')} strokeDasharray="10 6" />
      <line x1="356" y1="216" x2="356" y2="246" stroke={INK} strokeWidth="2.5" strokeDasharray="10 6" />

      <g {...anim(motion, 'ix-bob', { origin: '356px 266px' })}>
        <Box x={326} y={246} w={60} h={40} labelText="W" stroke={BLUE} />
      </g>

      <Arrow x={452} y={226} dx={0} dy={-46} color={GREEN} motion={motion} labelText="F" labelDx={18} labelDy={2} />
      {label(452, 272, '½ berat', GREEN, 11)}
    </>
  );
}

// ------------------------------------------------------------------ bidang miring
export function BidangMiring({ motion }) {
  return (
    <>
      <polygon points="70,248 470,248 470,84" fill="#1e293b" stroke={INK} strokeWidth="2.5" />
      <polygon points="70,248 470,84 470,102 86,248" fill="#334155" />

      <g {...anim(motion, 'ix-slide', { origin: '150px 196px', duration: 3 })}>
        <rect x="126" y="176" width="48" height="40" rx="5" fill="#0f172a" stroke={BLUE} strokeWidth="3" />
      </g>

      <Arrow x={118} y={158} dx={0} dy={-34} color={RED} motion={motion} name="ix-pulse" labelText="W" labelDx={18} labelDy={2} />
      {label(260, 274, 'makin landai → gaya dorong makin kecil', MUTE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ roda berporos
export function RodaPoros({ motion }) {
  return (
    <>
      <circle cx="190" cy="148" r="82" fill="#1e293b" stroke={AMBER} strokeWidth="6" />
      <circle cx="190" cy="148" r="19" fill="#0f172a" stroke={AMBER} strokeWidth="4" />
      <g {...anim(motion, 'ix-spin', { origin: '190px 148px' })}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line key={deg} x1="190" y1="148" x2={190 + 82 * Math.cos((deg * Math.PI) / 180)}
            y2={148 + 82 * Math.sin((deg * Math.PI) / 180)} stroke="#475569" strokeWidth="3" />
        ))}
      </g>

      <rect x="178" y="148" width="238" height="16" rx="7" fill="#334155" stroke={INK} strokeWidth="2.5" />
      {label(300, 140, 'poros', MUTE, 11)}

      <g {...anim(motion, 'ix-bob', { origin: '418px 210px' })}>
        <Box x={386} y={188} w={64} h={44} labelText="W" stroke={BLUE} />
      </g>
      <Arrow x={386} y={244} dx={0} dy={-30} color={GREEN} motion={motion} labelText="F" labelDx={18} labelDy={2} />
      {label(190, 262, 'roda besar → gaya putar lebih kecil', MUTE, 11)}
    </>
  );
}

// ------------------------------------------------------------------ gaya resultan
export function GayaResultan({ motion }) {
  return (
    <>
      <rect x="190" y="112" width="140" height="96" rx="6" fill="#1e293b" stroke={INK} strokeWidth="2.5" />
      {label(260, 166, 'balok', INK, 13)}

      <Arrow x={148} y={138} dx={58} dy={0} color={GREEN} motion={motion} dash="0" labelText="30 N" labelDy={-10} />
      <Arrow x={188} y={194} dx={80} dy={0} color={BLUE} motion={motion} name="ix-pulse" dash="0" labelText="20 N" labelDy={24} />

      <line x1="336" y1="66" x2="336" y2="250" stroke={AMBER} strokeWidth="2" strokeDasharray="5 5" />
      {label(344, 78, 'resultan 50 N', AMBER, 12)}

      <Arrow x={372} y={160} dx={58} dy={0} color={RED} motion={motion} name="ix-pulse" dash="0" labelText="F" labelDy={-10} />
      {label(260, 274, 'resultan = jumlah gaya yang searah', MUTE, 11)}
    </>
  );
}