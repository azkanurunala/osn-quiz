import { anim } from '../anim';

const INK = '#e2e8f0';
const MUTE = '#94a3b8';
const RED = '#f87171';
const BLUE = '#60a5fa';
const GREEN = '#4ade80';
const AMBER = '#fbbf24';
const PURPLE = '#c084fc';

const label = (x, y, str, fill = MUTE, size = 12, anchor = 'middle') => (
  <text x={x} y={y} fill={fill} fontSize={size} fontWeight="800" textAnchor={anchor}
    fontFamily="'IBM Plex Sans',system-ui,sans-serif">{str}</text>
);

// Moves a body (drawn around 0,0) counter-clockwise along a drawn ellipse, as seen from the north.
// CSS rotate() would spin the whole flattened orbit and fling the body off its path, so motion uses
// SMIL along the ellipse itself. `phase` (0..1) spreads bodies so they do not start in one line.
function OrbitBody({ motion, cx, cy, rx, ry, dur, phase = 0, children }) {
  const a = phase * Math.PI * 2;
  if (!motion) return <g transform={`translate(${cx + rx * Math.cos(a)} ${cy - ry * Math.sin(a)})`}>{children}</g>;
  return (
    <g>
      {children}
      <animateMotion dur={`${dur}s`} begin={`${-phase * dur}s`} repeatCount="indefinite"
        path={`M ${cx + rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx - rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx + rx} ${cy}`} />
    </g>
  );
}

// ------------------------------------------------------------------ tata surya
export function TataSurya({ motion }) {
  const planets = [
    { t: 'Merkurius', r: 8, o: 44 },
    { t: 'Venus', r: 11, o: 60 },
    { t: 'Bumi', r: 12, o: 78 },
    { t: 'Mars', r: 9, o: 94 },
    { t: 'Jupiter', r: 20, o: 118 },
    { t: 'Saturnus', r: 17, o: 140 },
    { t: 'Uranus', r: 13, o: 160 },
    { t: 'Neptunus', r: 13, o: 178 },
  ];
  const cx = 260; const cy = 158;
  // Static spots chosen so the inner planets sit beside the Sun instead of on top of it.
  const phases = [0.02, 0.52, 0.94, 0.45, 0.1, 0.62, 0.86, 0.33];
  return (
    <>
      <g {...anim(motion, 'ix-glow', { duration: 2.6, origin: `${cx}px ${cy}px` })}>
        <circle cx={cx} cy={cy} r="20" fill={AMBER} />
      </g>
      {label(cx, cy + 3, 'Matahari', '#0f172a', 8)}

      {planets.map((p) => (
        <ellipse key={p.t} cx={cx} cy={cy} rx={p.o} ry={p.o * 0.42} fill="none" stroke={INK}
          strokeWidth="1" opacity="0.35" />
      ))}

      {planets.map((p, i) => {
        const c = ['#cbd5e1', '#fbbf24', BLUE, RED, AMBER, '#fcd34d', '#67e8f9', '#a5b4fc'][i];
        return (
          <OrbitBody key={p.t} motion={motion} cx={cx} cy={cy} rx={p.o} ry={p.o * 0.42}
            dur={8 + i * 3} phase={phases[i]}>
            <circle r={p.r} fill={c} />
          </OrbitBody>
        );
      })}

      {label(20, 26, '8 planet, urut dari yang paling dekat ke Matahari', MUTE, 10, 'start')}
      {label(20, 44, 'Merkurius - Venus - Bumi - Mars - Jupiter - Saturnus - Uranus - Neptunus', MUTE, 9, 'start')}
      {label(20, 268, '4 planet dalam: kecil & berbatu  ·  4 planet luar: besar & sebagian besar gas', MUTE, 9, 'start')}
    </>
  );
}

// ------------------------------------------------------------------ rotasi & revolusi
export function RotasiRevolusi({ motion }) {
  return (
    <>
      <g {...anim(motion, 'ix-bob', { origin: '136px 130px', duration: 2.6 })}>
        <circle cx="136" cy="130" r="34" fill="#1e3a8a" stroke={BLUE} strokeWidth="3" />
        {label(136, 135, 'Bumi', BLUE, 11)}
        <g {...anim(motion, 'ix-spin-ccw', { duration: 6, origin: '136px 130px' })}>
          <path d="M 136 116 L 136 96" stroke={INK} strokeWidth="3" />
          <circle cx="136" cy="96" r="5" fill={INK} />
        </g>
        <ellipse cx="136" cy="130" rx="26" ry="10" fill="none" stroke={INK} strokeWidth="1.5" opacity="0.5" />
      </g>
      {label(136, 196, 'ROTASI', GREEN, 13)}
      {label(136, 216, 'Bumi berputar pada porosnya', MUTE, 10)}
      {label(136, 232, '1 putaran = 24 jam', MUTE, 10)}

      <ellipse cx="384" cy="130" rx="86" ry="44" fill="none" stroke={PURPLE} strokeWidth="2" opacity="0.6" />
      <circle cx="384" cy="130" r="18" fill={AMBER} />
      <OrbitBody motion={motion} cx={384} cy={130} rx={86} ry={44} dur={9}>
        <circle r="9" fill={BLUE} />
      </OrbitBody>
      {label(384, 196, 'REVOLUSI', PURPLE, 13)}
      {label(384, 216, 'Bumi mengelilingi Matahari', MUTE, 10)}
      {label(384, 232, '1 putaran = ± 365 hari', MUTE, 10)}

      {label(260, 268, 'rotasi = berputar pada poros, revolusi = mengelilingi', MUTE, 10)}
    </>
  );
}

// ------------------------------------------------------------------ gerhana
export function Gerhana({ motion }) {
  return (
    <>
      <rect x="20" y="52" width="240" height="200" rx="10" fill="#0b1220" stroke={INK} strokeWidth="1.5" />
      {label(140, 76, 'GERHANA MATAHARI', AMBER, 12)}
      <circle cx="140" cy="152" r="40" fill={AMBER} {...anim(motion, 'ix-glow', { duration: 2.6, origin: '140px 152px' })} />
      <circle cx="118" cy="146" r="34" fill="#0f172a" />
      <circle cx="118" cy="146" r="34" fill="none" stroke={MUTE} strokeWidth="2" />
      {label(196, 196, 'Bulan', INK, 10)}
      {label(196, 212, 'menutupi Matahari', MUTE, 9)}
      {label(140, 238, 'Matahari - Bulan - Bumi segaris', MUTE, 9)}

      <rect x="272" y="52" width="228" height="200" rx="10" fill="#020617" stroke={INK} strokeWidth="1.5" />
      {label(386, 76, 'GERHANA BULAN', PURPLE, 12)}
      <circle cx="386" cy="150" r="26" fill="#e2e8f0" />
      <path d="M 386 124 A 26 26 0 0 0 386 176 A 34 34 0 0 1 386 124 Z" fill={RED}
        {...anim(motion, 'ix-pulse', { duration: 2.6 })} />
      {label(450, 128, 'bayangan Bumi', BLUE, 10)}
      {label(450, 146, 'menutupi', MUTE, 9)}
      {label(450, 162, 'Bulan', MUTE, 9)}
      {label(386, 210, 'Matahari - Bumi - Bulan', MUTE, 9)}
      {label(386, 228, 'segaris', MUTE, 9)}

      {label(260, 278, 'gerhana terjadi ketika bulan, bumi, dan matahari berada dalam satu garis', MUTE, 10)}
    </>
  );
}

// ------------------------------------------------------------------ fase bulan
// Top view from above the north pole: sunlight comes from the left, the Moon circles the Earth
// counter-clockwise, and the half facing the Sun is always lit. Only the Earth-facing share changes.
export function FaseBulan({ motion }) {
  const cx = 250; const cy = 140; const R = 84;
  const phases = [
    { t: 'Bulan Baru', deg: 180 }, { t: 'Sabit Awal', deg: 135 }, { t: 'Kuartal I', deg: 90 },
    { t: 'Cembung Awal', deg: 45 }, { t: 'Purnama', deg: 0 }, { t: 'Cembung Akhir', deg: -45 },
    { t: 'Kuartal III', deg: -90 }, { t: 'Sabit Akhir', deg: -135 },
  ];
  const moon = (x, y) => (
    <g>
      <circle cx={x} cy={y} r="10" fill="#334155" />
      <path d={`M ${x} ${y - 10} A 10 10 0 0 0 ${x} ${y + 10} Z`} fill="#f1f5f9" />
    </g>
  );
  return (
    <>
      {[70, 140, 210].map((y) => (
        <g key={y} {...anim(motion, 'ix-flow', { duration: 1.4 })}>
          <line x1="14" y1={y} x2="74" y2={y} stroke={AMBER} strokeWidth="3" strokeDasharray="8 6" />
          <polygon points={`80,${y} 68,${y - 6} 68,${y + 6}`} fill={AMBER} />
        </g>
      ))}
      {label(46, 40, 'sinar Matahari', AMBER, 10)}

      <circle cx={cx} cy={cy} r={R} fill="none" stroke={INK} strokeWidth="1.5" strokeDasharray="4 5" opacity="0.4" />
      <circle cx={cx} cy={cy} r="16" fill="#1e3a8a" stroke={BLUE} strokeWidth="2.5" />
      {label(cx, cy + 32, 'Bumi', BLUE, 10)}

      {phases.map((f) => {
        const a = (f.deg * Math.PI) / 180;
        const x = cx + R * Math.cos(a); const y = cy + R * Math.sin(a);
        const c = Math.cos(a);
        const anchor = c < -0.3 ? 'end' : c > 0.3 ? 'start' : 'middle';
        const lx = x + 16 * c; const ly = y + 4 + 20 * Math.sin(a);
        return (
          <g key={f.t}>
            {moon(x, y)}
            {label(lx, ly, f.t, f.t === 'Purnama' ? PURPLE : MUTE, 9, anchor)}
          </g>
        );
      })}

      {motion ? (
        <g>
          <circle r="15" fill="none" stroke={PURPLE} strokeWidth="2.5" />
          <animateMotion dur="12s" repeatCount="indefinite"
            path={`M ${cx - R} ${cy} A ${R} ${R} 0 1 0 ${cx + R} ${cy} A ${R} ${R} 0 1 0 ${cx - R} ${cy}`} />
        </g>
      ) : null}

      {label(442, 112, 'separuh Bulan yang', MUTE, 9)}
      {label(442, 126, 'menghadap Matahari', MUTE, 9)}
      {label(442, 140, 'selalu terang', MUTE, 9)}
      {label(260, 270, 'fase berubah karena posisi Bulan saat mengelilingi Bumi', MUTE, 10)}
      {label(260, 288, 'satu putaran fase (Bulan Baru ke Bulan Baru) ± 29,5 hari', MUTE, 9)}
    </>
  );
}

// ------------------------------------------------------------------ lapisan atmosfer
export function LapisanAtmosfer({ motion }) {
  const layers = [
    { t: 'Troposfer', d: 'cuaca, awan, hujan, angin', h: '0-12 km', c: BLUE },
    { t: 'Stratosfer', d: 'mengandung ozon (pelindung UV)', h: '12-50 km', c: GREEN },
    { t: 'Mesosfer', d: 'meteor yang terbakar', h: '50-85 km', c: AMBER },
    { t: 'Termosfer', d: 'aurora dan cahaya kutub', h: '85-500 km', c: PURPLE },
    { t: 'Eksosfer', d: 'batas luar, satelit', h: '> 500 km', c: MUTE },
  ];
  return (
    <>
      {layers.map((l, i) => {
        const y = 52 + (layers.length - 1 - i) * 44; // Troposfer at the bottom, next to the ground
        return (
          <g key={l.t}>
            <rect x="26" y={y} width="468" height="40" rx="6" fill={l.c} opacity={0.16 + i * 0.04} stroke={l.c} strokeWidth="1.5" />
            {label(44, y + 18, l.t, l.c, 12, 'start')}
            {label(44, y + 34, l.d, MUTE, 9, 'start')}
            {label(482, y + 26, l.h, l.c, 10, 'end')}
          </g>
        );
      })}
      {/* meteor burning up in the mesosphere */}
      <g {...anim(motion, 'ix-flow', { duration: 1.2 })}>
        <line x1="300" y1="146" x2="352" y2="170" stroke={AMBER} strokeWidth="3" strokeDasharray="8 5" strokeLinecap="round" />
        <circle cx="354" cy="171" r="4" fill={RED} />
      </g>
      {label(260, 290, 'semakin ke atas, udara semakin tipis dan tekanannya semakin kecil', MUTE, 10)}
    </>
  );
}

// ------------------------------------------------------------------ siklus batu
export function SiklusBatu({ motion }) {
  const rocks = [
    { t: 'Magma', c: RED, x: 76, y: 82 },
    { t: 'Batuan beku', c: AMBER, x: 240, y: 82 },
    { t: 'Batuan sedimen', c: BLUE, x: 404, y: 82 },
    { t: 'Batuan metamorf', c: PURPLE, x: 404, y: 190 },
  ];
  const notes = [
    'batuan cair panas',
    'magma mendingin',
    'lapuk & mengendap',
    'tekanan & panas',
  ];
  return (
    <>
      {rocks.map((r, i) => (
        <g key={r.t} {...anim(motion, 'ix-bob', { duration: 2.6 + i * 0.3, origin: `${r.x}px ${r.y}px` })}>
          <circle cx={r.x} cy={r.y} r="34" fill="#0f172a" stroke={r.c} strokeWidth="3" />
          <path d={`M ${r.x - 15} ${r.y - 8} L ${r.x} ${r.y - 16} L ${r.x + 15} ${r.y - 6} L ${r.x + 12} ${r.y + 12} L ${r.x - 12} ${r.y + 12} Z`} fill={r.c} opacity="0.75" />
          {label(r.x, r.y + 50, r.t, r.c, 11)}
          {label(r.x, r.y + 66, notes[i], MUTE, 9)}
        </g>
      ))}
      <g {...anim(motion, 'ix-flow', { duration: 1.6 })}>
        <line x1="114" y1="82" x2="204" y2="82" stroke={INK} strokeWidth="3" strokeDasharray="8 6" />
        <polygon points="208,82 196,75 196,89" fill={INK} />
      </g>
      <g {...anim(motion, 'ix-flow', { duration: 1.6 })}>
        <line x1="278" y1="82" x2="366" y2="82" stroke={INK} strokeWidth="3" strokeDasharray="8 6" />
        <polygon points="370,82 358,75 358,89" fill={INK} />
      </g>
      <g {...anim(motion, 'ix-flow', { duration: 1.6 })}>
        <path d="M 440 92 Q 494 138 444 152" fill="none" stroke={INK} strokeWidth="3" strokeDasharray="8 6" />
        <polygon points="0,0 -12,-6 -12,6" fill={INK} transform="translate(438 155) rotate(160)" />
      </g>
      <g {...anim(motion, 'ix-flow', { duration: 1.8 })}>
        <path d="M 370 196 Q 220 236 116 130" fill="none" stroke={MUTE} strokeWidth="3" strokeDasharray="9 7" />
        <polygon points="112,126 118,138 124,126" fill={MUTE} />
      </g>

      {label(226, 232, 'meleleh lagi jadi magma', MUTE, 9)}
      {label(260, 286, 'batuan terus berubah dari satu jenis ke jenis lain', MUTE, 10)}
    </>
  );
}