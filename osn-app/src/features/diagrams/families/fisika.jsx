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

// Arrowhead whose tip sits at (x,y), pointing along `deg` (0 = right, clockwise positive).
const head = (x, y, deg, fill) => (
  <polygon points="0,0 -13,-7 -13,7" fill={fill} transform={`translate(${x} ${y}) rotate(${deg})`} />
);

// ------------------------------------------------------------------ perambatan cahaya
// Straight rays from the lamp graze the top and bottom edges of the block; the wedge between the
// two edge rays behind the block is the shadow.
export function PerambatanCahaya({ motion }) {
  const hits = [60, 104, 148, 192];
  return (
    <>
      <polygon points="318,56 500,28 500,292 318,204" fill="#334155" opacity="0.4" />
      {label(430, 164, 'bayangan', MUTE, 12)}
      <line x1="292" y1="60" x2="500" y2="28" stroke={AMBER} strokeWidth="1.5" opacity="0.45" />
      <line x1="292" y1="192" x2="500" y2="292" stroke={AMBER} strokeWidth="1.5" opacity="0.45" />

      {hits.map((y) => (
        <g key={y} {...anim(motion, 'ix-flow', { duration: 1.4 })}>
          <line x1="84" y1="92" x2="292" y2={y} stroke={AMBER} strokeWidth="3" strokeDasharray="9 6" />
        </g>
      ))}

      <g {...anim(motion, 'ix-glow', { duration: 2.4, origin: '84px 92px' })}>
        <circle cx="84" cy="92" r="24" fill={AMBER} />
      </g>
      {label(84, 136, 'sumber cahaya', AMBER, 11)}

      <rect x="292" y="60" width="26" height="132" rx="4" fill="#334155" stroke={INK} strokeWidth="2" />
      {label(250, 216, 'benda tak tembus cahaya', MUTE, 10)}

      {label(140, 256, 'cahaya merambat lurus', AMBER, 12)}
      {label(140, 276, 'terhalang benda, terbentuk bayangan', MUTE, 10)}
    </>
  );
}

// ------------------------------------------------------------------ pemantulan cahaya
// Incident ray (34,70)->(250,150); the reflected ray is its mirror image about the normal x=250.
export function PemantulanCahaya({ motion }) {
  return (
    <>
      <line x1="250" y1="60" x2="250" y2="150" stroke={MUTE} strokeWidth="2" strokeDasharray="6 5" />
      {label(258, 66, 'garis normal', MUTE, 10, 'start')}
      <line x1="30" y1="150" x2="490" y2="150" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      {label(486, 172, 'cermin datar', MUTE, 10, 'end')}

      <g {...anim(motion, 'ix-flow', { duration: 1.6 })}>
        <line x1="34" y1="70" x2="250" y2="150" stroke={AMBER} strokeWidth="3.5" strokeDasharray="9 6" />
      </g>
      {head(148, 112, 20.3, AMBER)}
      {label(130, 130, 'sinar datang', AMBER, 11)}

      <g {...anim(motion, 'ix-flow', { duration: 1.6 })}>
        <line x1="250" y1="150" x2="466" y2="70" stroke={BLUE} strokeWidth="3.5" strokeDasharray="9 6" />
      </g>
      {head(364, 108, -20.3, BLUE)}
      {label(390, 130, 'sinar pantul', BLUE, 11)}

      <path d="M 250 110 A 40 40 0 0 0 212.5 136.1" fill="none" stroke={PURPLE} strokeWidth="2" />
      {label(222, 110, 'i', PURPLE, 12)}
      <path d="M 250 110 A 40 40 0 0 1 287.5 136.1" fill="none" stroke={PURPLE} strokeWidth="2" />
      {label(278, 110, 'r', PURPLE, 12)}

      {motion ? (
        <>
          {label(260, 204, 'sudut datang (i) = sudut pantul (r)', INK, 12)}
          {label(260, 228, 'benda terlihat karena cahaya darinya dipantulkan ke mata', MUTE, 10)}
          {label(260, 252, 'pemantulan bunyi memakai hukum yang sama', MUTE, 9)}
        </>
      ) : null}
    </>
  );
}

// ------------------------------------------------------------------ pembiasan / pelangi
// White light bends at each prism face and fans out: red bends least (top), violet most (bottom).
export function PembiasanCahaya({ motion }) {
  const colors = ['#f87171', '#fb923c', '#fde047', '#4ade80', '#60a5fa', '#6366f1', '#a78bfa'];
  return (
    <>
      <g {...anim(motion, 'ix-flow', { duration: 1.4 })}>
        <line x1="14" y1="162" x2="170" y2="130" stroke="#f8fafc" strokeWidth="4" strokeDasharray="12 5" />
      </g>
      {label(70, 180, 'cahaya putih', '#f8fafc', 11)}

      <polygon points="200,60 140,200 260,200" fill="#1e3a8a" opacity="0.5" stroke={INK} strokeWidth="2.5" />
      {label(200, 222, 'prisma kaca', MUTE, 10)}
      <line x1="170" y1="130" x2="232" y2="136" stroke="#f8fafc" strokeWidth="3" opacity="0.8" />

      {colors.map((c, i) => (
        <g key={c} {...anim(motion, 'ix-flow', { duration: 1.4 })}>
          <line x1="232" y1="136" x2="490" y2={140 + i * 13} stroke={c} strokeWidth="3" strokeDasharray="12 4" />
        </g>
      ))}
      {label(490, 132, 'merah', colors[0], 9, 'end')}
      {label(490, 236, 'ungu', colors[6], 9, 'end')}

      {motion ? (
        <>
          {label(370, 56, 'cahaya putih terurai', PURPLE, 11)}
          {label(370, 74, 'menjadi 7 warna (dispersi)', PURPLE, 10)}
          {label(370, 92, 'mejikuhibiniu, seperti pelangi', MUTE, 9)}
          {label(260, 270, 'cahaya dibiaskan (dibelokkan) saat masuk ke medium yang berbeda', MUTE, 10)}
        </>
      ) : null}
    </>
  );
}

// ------------------------------------------------------------------ perpindahan panas
export function PerpindahanPanas({ motion }) {
  const cols = [
    { t: 'Konduksi', sub: 'zat padat', ex: 'panci logam', c: RED },
    { t: 'Konveksi', sub: 'zat cair / gas', ex: 'air yang sedang mendidih', c: AMBER },
    { t: 'Radiasi', sub: 'tanpa medium', ex: 'panas matahari', c: PURPLE },
  ];
  return (
    <>
      {cols.map((col, i) => {
        const x = 92 + i * 168;
        return (
          <g key={col.t} {...anim(motion, 'ix-bob', { duration: 2.4 + i * 0.3, origin: `${x}px 118px` })}>
            <rect x={x - 72} y="62" width="144" height="112" rx="12" fill="#1e293b" opacity="0.75" stroke={col.c} strokeWidth="2.5" />
            {label(x, 92, col.t, col.c, 13)}
            {label(x, 112, col.sub, MUTE, 10)}
            {i === 0 ? (
              <g>
                <rect x={x - 40} y="130" width="26" height="20" rx="4" fill={col.c} />
                {[0, 1, 2].map((k) => (
                  <circle key={k} {...anim(motion, 'ix-rise', { duration: 2.6 + k * 0.3 })}
                    cx={x - 6 + k * 16} cy="128" r="5" fill={col.c} />
                ))}
              </g>
            ) : null}
            {i === 1 ? (
              <g>
                <rect x={x - 34} y="140" width="68" height="22" rx="4" fill={col.c} opacity="0.85" />
                {[0, 1].map((k) => (
                  <path key={k} {...anim(motion, 'ix-vapor', { duration: 2.4 + k * 0.4, origin: `${x - 12 + k * 24}px 138px` })}
                    d={`M ${x - 12 + k * 24} 132 Q ${x - 8 + k * 24} 122 ${x - 12 + k * 24} 114`} stroke={col.c}
                    strokeWidth="3" fill="none" strokeLinecap="round" />
                ))}
              </g>
            ) : null}
            {i === 2 ? (
              <g>
                <circle {...anim(motion, 'ix-glow', { duration: 2.2, origin: `${x - 26}px 140px` })} cx={x - 26} cy="140" r="15" fill={col.c} />
                <g {...anim(motion, 'ix-flow', { duration: 1.8 })}>
                  <line x1={x - 6} y1="140" x2={x + 46} y2="140" stroke={col.c} strokeWidth="3" strokeDasharray="8 6" />
                  {head(x + 58, 140, 0, col.c)}
                </g>
              </g>
            ) : null}
            {label(x, 194, col.ex, MUTE, 10)}
          </g>
        );
      })}
      {label(260, 238, 'perpindahan panas: konduksi, konveksi, dan radiasi', INK, 12)}
      {label(260, 262, 'pegangan panci dari plastik/kayu: isolator, sulit menghantarkan panas', MUTE, 9)}
    </>
  );
}

// ------------------------------------------------------------------ pemantulan bunyi
// Gema: the reflection arrives after the original sound ends (far wall, about 17 m or more).
// Gaung: it arrives while the sound is still going (near wall), so the words blur together.
export function PemantulanBunyi({ motion }) {
  return (
    <>
      <path d="M 300 70 L 340 88 L 340 222 L 300 240 Z" fill="#334155" stroke={INK} strokeWidth="2.5" />
      {label(320, 158, 'tebing', MUTE, 10)}

      <g {...anim(motion, 'ix-glow', { duration: 2.2, origin: '96px 156px' })}>
        <circle cx="96" cy="156" r="22" fill={AMBER} />
      </g>
      {label(96, 200, 'sumber bunyi', AMBER, 11)}

      <g {...anim(motion, 'ix-flow', { duration: 1.4 })}>
        <path d="M 120 148 Q 200 132 288 140" fill="none" stroke={AMBER} strokeWidth="3.5" strokeDasharray="10 6" />
        <polygon points="292,140 280,133 280,147" fill={AMBER} />
      </g>
      {label(204, 124, 'bunyi asli', AMBER, 10)}
      <g {...anim(motion, 'ix-flow', { duration: 1.4 })}>
        <path d="M 288 172 Q 200 180 122 164" fill="none" stroke={GREEN} strokeWidth="3.5" strokeDasharray="10 6" />
        <polygon points="118,164 130,157 130,171" fill={GREEN} />
      </g>
      {label(204, 198, 'bunyi pantul', GREEN, 10)}

      <rect x="356" y="70" width="148" height="68" rx="10" fill="#1e293b" opacity="0.8" stroke={GREEN} strokeWidth="2.5" />
      {label(430, 94, 'GEMA', GREEN, 13)}
      {motion ? label(430, 112, 'dinding jauh: terdengar', MUTE, 9) : null}
      {motion ? label(430, 126, 'setelah bunyi asli selesai', MUTE, 9) : null}
      <rect x="356" y="152" width="148" height="68" rx="10" fill="#1e293b" opacity="0.8" stroke={PURPLE} strokeWidth="2.5" />
      {label(430, 176, 'GAUNG', PURPLE, 13)}
      {motion ? label(430, 194, 'dinding dekat: bersamaan', MUTE, 9) : null}
      {motion ? label(430, 208, 'bunyi asli, jadi tidak jelas', MUTE, 9) : null}

      {motion ? label(260, 264, 'gema terdengar jika jarak ke pemantul kira-kira 17 meter atau lebih', MUTE, 10) : null}
    </>
  );
}

// ------------------------------------------------------------------ pemisahan campuran
// Distillation of sea water: water boils off, condenses in the cooled tube and drips into a
// separate beaker; the salt stays behind in the heated flask.
export function PemisahanCampuran({ motion }) {
  return (
    <>
      <path d="M 96 70 L 96 104 Q 52 120 52 160 Q 52 204 104 204 Q 156 204 156 160 Q 156 120 112 104 L 112 70 Z"
        fill="#1e293b" opacity="0.85" stroke={INK} strokeWidth="2" />
      <path d="M 56 168 Q 104 160 152 168 Q 150 202 104 202 Q 58 202 56 168 Z" fill={BLUE} opacity="0.7" />
      {label(104, 190, 'air laut', '#0f172a', 10)}
      <g {...anim(motion, 'ix-vapor', { origin: '104px 150px', duration: 2.4 })}>
        <ellipse cx="104" cy="146" rx="18" ry="8" fill="#cbd5e1" opacity="0.6" />
      </g>
      <g {...anim(motion, 'ix-pulse', { duration: 1.2 })}>
        <path d="M 92 236 Q 98 214 104 222 Q 110 210 116 236 Z" fill={RED} />
      </g>
      {label(104, 254, 'dipanaskan', RED, 10)}
      {label(104, 40, 'garam tertinggal', AMBER, 11)}
      {label(104, 56, 'di dalam labu', AMBER, 9)}

      <line x1="112" y1="78" x2="360" y2="150" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <line x1="190" y1="100" x2="320" y2="138" stroke={BLUE} strokeWidth="20" strokeLinecap="round" opacity="0.3" />
      {label(266, 92, 'pendingin: uap mengembun', BLUE, 10)}

      <g {...anim(motion, 'ix-drip', { duration: 1.8, origin: '360px 156px' })}>
        <circle cx="360" cy="156" r="4" fill={BLUE} />
      </g>
      <path d="M 330 168 L 334 236 L 390 236 L 394 168" fill="none" stroke={INK} strokeWidth="2" />
      <rect x="335" y="210" width="54" height="25" fill={BLUE} opacity="0.6" />
      {label(362, 256, 'air murni', BLUE, 10)}

      {label(260, 284, 'distilasi: air diuapkan lalu diembunkan; garam tertinggal di labu', MUTE, 10)}
    </>
  );
}
