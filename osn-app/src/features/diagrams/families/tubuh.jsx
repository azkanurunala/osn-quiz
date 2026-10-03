import { anim } from '../anim';

const INK = '#e2e8f0';
const MUTE = '#94a3b8';
const RED = '#f87171';
const BLUE = '#60a5fa';
const GREEN = '#4ade80';
const AMBER = '#fbbf24';
const PINK = '#f472b6';
const PURPLE = '#c084fc';

const label = (x, y, str, fill = MUTE, size = 12, anchor = 'middle') => (
  <text x={x} y={y} fill={fill} fontSize={size} fontWeight="800" textAnchor={anchor}
    fontFamily="'IBM Plex Sans',system-ui,sans-serif">{str}</text>
);

// ------------------------------------------------------------------ saluran pencernaan
export function SaluranPencernaan({ motion }) {
  const organs = [
    { t: 'Mulut', c: PINK, note: 'dikunyah', i: 0 },
    { t: 'Kerongkongan', c: AMBER, note: 'menelan', i: 1 },
    { t: 'Lambung', c: RED, note: 'mengaduk', i: 2 },
    { t: 'Usus Halus', c: GREEN, note: 'penyerapan', i: 3 },
    { t: 'Usus Besar', c: PURPLE, note: 'sisa', i: 4 },
  ];
  const xs = organs.map((_, i) => 70 + i * 95);
  return (
    <>
      <rect x="30" y="66" width="460" height="120" rx="18" fill="#1e293b" opacity="0.7" stroke={INK} strokeWidth="2" />
      {organs.map((o, i) => {
        const x = xs[i];
        return (
          <g key={o.t} {...anim(motion, 'ix-pulse', { duration: 2 + i * 0.35, origin: `${x}px 126px` })}>
            <circle cx={x} cy="126" r="28" fill="#0f172a" stroke={o.c} strokeWidth="3" />
            {o.i === 0 ? <path d={`M ${x - 13} 118 L ${x + 13} 118 M ${x - 13} 132 L ${x + 13} 132`} stroke={o.c} strokeWidth="3.5" strokeLinecap="round" /> : null}
            {o.i === 1 ? <path d={`M ${x} 112 L ${x} 140`} stroke={o.c} strokeWidth="5" strokeLinecap="round" /> : null}
            {o.i === 2 ? <path d={`M ${x - 16} 120 Q ${x} 106 ${x + 16} 120 Q ${x} 146 ${x - 16} 120 Z`} fill={o.c} /> : null}
            {o.i === 3 ? <path d={`M ${x - 16} 116 Q ${x + 16} 126 ${x - 16} 136`} fill="none" stroke={o.c} strokeWidth="4" strokeLinecap="round" /> : null}
            {o.i === 4 ? <path d={`M ${x - 15} 114 L ${x - 15} 130 Q ${x} 146 ${x + 15} 130 L ${x + 15} 114`} fill="none" stroke={o.c} strokeWidth="4" strokeLinecap="round" /> : null}
          </g>
        );
      })}
      {organs.slice(0, -1).map((o, i) => (
        <g key={`a${o.t}`} {...anim(motion, 'ix-flow', { duration: 1.5 })}>
          <line x1={xs[i] + 31} y1="126" x2={xs[i + 1] - 34} y2="126" stroke={INK} strokeWidth="3" strokeDasharray="8 6" />
          <polygon points={`${xs[i + 1] - 30},126 ${xs[i + 1] - 42},119 ${xs[i + 1] - 42},133`} fill={INK} />
        </g>
      ))}
      {organs.map((o, i) => (
        <g key={`n${o.t}`}>
          {label(xs[i], 210, o.t, o.c, 11)}
          {label(xs[i], 228, o.note, MUTE, 10)}
        </g>
      ))}
      {label(260, 262, 'urutan organ pencernaan: mulut - kerongkongan - lambung - usus halus - usus besar', MUTE, 10)}
    </>
  );
}

// ------------------------------------------------------------------ penyerapan nutrient
export function PenyerapanNutrisi({ motion }) {
  return (
    <>
      <rect x="30" y="70" width="130" height="164" rx="14" fill="#1e293b" stroke={GREEN} strokeWidth="2.5" />
      {label(95, 96, 'USUS HALUS', GREEN, 12)}
      <path d="M 56 128 Q 134 118 56 150 Q 134 162 56 182" fill="none" stroke={GREEN} strokeWidth="5" />
      <path d="M 56 204 Q 134 194 56 218" fill="none" stroke={GREEN} strokeWidth="5" />

      {[0, 1, 2, 3].map((i) => (
        <g key={i} {...anim(motion, 'ix-flow', { duration: 2.2 })}>
          <line x1="174" y1={122 + i * 14} x2="228" y2={122 + i * 14} stroke={AMBER} strokeWidth="3" strokeDasharray="7 5" />
          <polygon points={`230,${122 + i * 14} 220,${117 + i * 14} 220,${127 + i * 14}`} fill={AMBER} />
        </g>
      ))}
      {label(201, 132, 'nutrisi', AMBER, 10)}

      <circle cx="318" cy="158" r="56" fill="#0f172a" stroke={RED} strokeWidth="3" />
      <path d="M 318 114 Q 372 128 362 168 Q 354 200 318 200 Q 290 200 292 168" fill="none" stroke={RED} strokeWidth="5" />
      {label(318, 246, 'pembuluh darah', RED, 11)}
      {label(318, 264, 'mengangkut zat hasil', MUTE, 10)}
      {label(318, 280, 'penyerapan ke seluruh tubuh', MUTE, 10)}

      <g {...anim(motion, 'ix-bob', { origin: '452px 108px', duration: 2.6 })}>
        <circle cx="452" cy="108" r="28" fill="#0f172a" stroke={PURPLE} strokeWidth="3" />
        <path d="M 436 108 Q 452 94 468 108 Q 452 122 436 108 Z" fill={PURPLE} />
        {label(452, 158, 'Hati', PURPLE, 11)}
      </g>
      {label(452, 178, 'zat makanan', MUTE, 9)}
      {label(452, 194, 'dari usus', MUTE, 9)}
      {label(452, 210, 'diolah; gula', MUTE, 9)}
      {label(452, 226, 'disimpan', MUTE, 9)}
    </>
  );
}

// ------------------------------------------------------------------ organ ekskresi
export function OrganEkskresi({ motion }) {
  const items = [
    { t: 'Ginjal', waste: 'urin', c: AMBER, x: 84, y: 116, i: 0 },
    { t: 'Paru-paru', waste: 'karbon dioksida + uap air', c: BLUE, x: 260, y: 116, i: 1 },
    { t: 'Kulit', waste: 'keringat', c: PURPLE, x: 436, y: 116, i: 2 },
    { t: 'Hati', waste: 'empedu', c: RED, x: 260, y: 220, i: 3 },
  ];
  return (
    <>
      {label(260, 32, 'ORGAN EKSKRESI - membuang zat sisa dari metabolisme', MUTE, 11)}
      {items.map((o, i) => (
        <g key={o.t} {...anim(motion, 'ix-bob', { duration: 2.4 + i * 0.3, origin: `${o.x}px ${o.y}px` })}>
          <circle cx={o.x} cy={o.y} r="38" fill="#0f172a" stroke={o.c} strokeWidth="3" />
          {o.i === 0 ? (
            <g>
              <path d={`M ${o.x - 14} ${o.y - 16} Q ${o.x - 22} ${o.y + 14} ${o.x - 3} ${o.y + 16}`} fill="none" stroke={o.c} strokeWidth="4" />
              <path d={`M ${o.x + 14} ${o.y - 16} Q ${o.x + 22} ${o.y + 14} ${o.x + 3} ${o.y + 16}`} fill="none" stroke={o.c} strokeWidth="4" />
            </g>
          ) : null}
          {o.i === 1 ? (
            <g fill="none" stroke={o.c} strokeWidth="3" strokeLinecap="round">
              <path d={`M ${o.x - 8} ${o.y - 18} L ${o.x - 15} ${o.y + 18} M ${o.x + 8} ${o.y - 18} L ${o.x + 1} ${o.y + 18}`} />
            </g>
          ) : null}
          {o.i === 2 ? (
            <path d={`M ${o.x - 14} ${o.y - 18} L ${o.x + 14} ${o.y - 18} L ${o.x + 10} ${o.y + 12} Q ${o.x} ${o.y + 24} ${o.x - 10} ${o.y + 12} Z`} fill="none" stroke={o.c} strokeWidth="3" />
          ) : null}
          {o.i === 3 ? <path d={`M ${o.x - 20} ${o.y} Q ${o.x} ${o.y - 18} ${o.x + 20} ${o.y} Q ${o.x} ${o.y + 18} ${o.x - 20} ${o.y} Z`} fill={o.c} /> : null}
          {label(o.x, o.y + 58, o.t, o.c, 12)}
          {label(o.x, o.y + 76, `buang: ${o.waste}`, MUTE, o.waste.length > 14 ? 9 : 10)}
        </g>
      ))}
    </>
  );
}

// ------------------------------------------------------------------ pernapasan / alveolus
export function PernapasanParu({ motion }) {
  return (
    <>
      <g {...anim(motion, 'ix-bob', { origin: '250px 150px', duration: 3 })}>
        <path d="M 250 66 L 250 106" stroke={INK} strokeWidth="6" strokeLinecap="round" />
        <path d="M 250 106 Q 152 116 126 176 Q 112 234 170 244 Q 226 250 250 212 Z" fill="#1e3a8a" opacity="0.75" stroke={BLUE} strokeWidth="2.5" />
        <path d="M 250 106 Q 348 116 374 176 Q 388 234 330 244 Q 274 250 250 212 Z" fill="#1e3a8a" opacity="0.75" stroke={BLUE} strokeWidth="2.5" />
        <g stroke={MUTE} strokeWidth="2" fill="none" opacity="0.5">
          <path d="M 178 130 Q 212 172 178 236" />
          <path d="M 322 130 Q 288 172 322 236" />
        </g>
      </g>
      <g {...anim(motion, 'ix-flow', { duration: 1.8 })}>
        <line x1="150" y1="24" x2="150" y2="56" stroke={GREEN} strokeWidth="3" strokeDasharray="8 6" />
        <polygon points="150,62 143,50 157,50" fill={GREEN} />
      </g>
      {label(150, 16, 'oksigen masuk', GREEN, 11)}
      <g {...anim(motion, 'ix-flow', { duration: 1.8 })}>
        <line x1="352" y1="62" x2="352" y2="30" stroke={RED} strokeWidth="3" strokeDasharray="8 6" />
        <polygon points="352,24 345,36 359,36" fill={RED} />
      </g>
      {label(356, 16, 'karbon dioksida keluar', RED, 11)}
      {motion ? label(250, 272, 'pertukaran gas terjadi di alveolus di dalam paru-paru', MUTE, 10) : null}
      {motion ? label(250, 290, 'jalur napas: hidung - tenggorokan - paru-paru', MUTE, 9) : null}
    </>
  );
}

// ------------------------------------------------------------------ peredaran darah
export function PeredaranDarah({ motion }) {
  return (
    <>
      <circle cx="196" cy="128" r="64" fill="#0f172a" stroke={INK} strokeWidth="3" />
      <line x1="196" y1="70" x2="196" y2="186" stroke={INK} strokeWidth="3" />
      <line x1="140" y1="130" x2="252" y2="130" stroke={INK} strokeWidth="3" />
      <rect x="160" y="92" width="30" height="34" rx="5" fill={BLUE} opacity="0.9" />
      <rect x="204" y="92" width="30" height="34" rx="5" fill={RED} opacity="0.9" />
      <rect x="160" y="136" width="30" height="34" rx="5" fill={BLUE} opacity="0.9" />
      <rect x="204" y="136" width="30" height="34" rx="5" fill={RED} opacity="0.9" />
      {label(175, 114, 'K', '#0f172a', 12)}
      {label(219, 114, 'Ki', '#0f172a', 12)}
      {label(175, 158, 'K', '#0f172a', 12)}
      {label(219, 158, 'Ki', '#0f172a', 12)}

      {/* right ventricle -> lungs (oxygen-poor) */}
      <g {...anim(motion, 'ix-flow', { duration: 1.4 })}>
        <path d="M 160 150 Q 108 110 132 44" fill="none" stroke={BLUE} strokeWidth="3.5" strokeDasharray="9 6" />
        <polygon points="134,36 126,48 140,49" fill={BLUE} />
      </g>
      {label(112, 26, 'ke paru-paru', BLUE, 10)}

      {/* lungs -> left atrium (oxygen-rich) */}
      <g {...anim(motion, 'ix-flow', { duration: 1.4 })}>
        <path d="M 262 36 Q 270 76 240 100" fill="none" stroke={RED} strokeWidth="3.5" strokeDasharray="9 6" />
        <polygon points="234,104 240,92 248,102" fill={RED} />
      </g>
      {label(282, 26, 'dari paru-paru', RED, 10)}

      {/* left ventricle -> aorta -> body */}
      <g {...anim(motion, 'ix-flow', { duration: 1.4 })}>
        <path d="M 236 156 Q 320 160 380 112" fill="none" stroke={RED} strokeWidth="3.5" strokeDasharray="9 6" />
        <polygon points="386,106 372,110 380,120" fill={RED} />
      </g>
      {label(420, 96, 'ke seluruh tubuh', RED, 10)}

      {/* body -> right atrium */}
      <g {...anim(motion, 'ix-flow', { duration: 1.4 })}>
        <path d="M 40 250 Q 52 140 154 108" fill="none" stroke={BLUE} strokeWidth="3.5" strokeDasharray="9 6" />
        <polygon points="160,106 148,101 151,115" fill={BLUE} />
      </g>
      {label(72, 272, 'dari seluruh tubuh', BLUE, 10)}

      {label(196, 214, 'jantung punya 4 ruang', INK, 12)}
      {label(196, 236, 'atas = serambi, bawah = bilik', MUTE, 10)}
      {label(420, 168, 'biru = darah tanpa oksigen', BLUE, 10)}
      {label(420, 186, 'merah = darah beroksigen', RED, 10)}
      {label(420, 210, 'K = kanan, Ki = kiri tubuh', MUTE, 9)}
      {label(420, 226, '(kiri gambar = sisi kanan tubuh)', MUTE, 9)}
    </>
  );
}