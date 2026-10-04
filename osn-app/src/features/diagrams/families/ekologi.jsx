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
// The soal's own chain when it writes one ("padi → tikus → ular → elang"), else a labelled example.
// Roles (produsen, konsumen I...) are often the answer, so they appear only in the explanation.
function chainFromText(text) {
  const m = String(text ?? '').match(/([A-Za-z][\w ]{0,18}?\s*(?:→|->|⇒)\s*){2,4}[A-Za-z][\w ]{0,18}/);
  if (!m) return null;
  const items = m[0].split(/→|->|⇒/).map((t) => t.trim()).filter(Boolean);
  return items.length >= 3 && items.length <= 5 ? items : null;
}

const CHAIN_COLORS = [GREEN, AMBER, '#34d399', PURPLE, BLUE];
const ROLES = ['produsen', 'konsumen I', 'konsumen II', 'konsumen III', 'konsumen IV'];

export function RantaiMakanan({ motion, question }) {
  const own = chainFromText(question?.question);
  const names = own ?? ['Rumput', 'Belalang', 'Katak', 'Ular'];
  const gap = 440 / names.length;
  const nodes = names.map((t, i) => ({ x: 40 + gap * (i + 0.5), t, c: CHAIN_COLORS[i] }));
  const r = Math.min(36, gap / 2 - 12);
  return (
    <>
      {own ? null : label(500, 40, 'contoh', MUTE, 11, 'end')}
      {nodes.map((n, i) => (
        <g key={`${n.t}-${i}`} {...anim(motion, 'ix-bob', { origin: `${n.x}px 140px`, duration: 2 + i * 0.3 })}>
          <circle cx={n.x} cy={140} r={r} fill="#0f172a" stroke={n.c} strokeWidth="3" />
          {label(n.x, 145, n.t.length > 9 ? `${n.t.slice(0, 8)}…` : n.t, n.c, n.t.length > 7 ? 10 : 12)}
          {motion ? label(n.x, 140 + r + 22, ROLES[i], MUTE, 10) : null}
        </g>
      ))}
      {nodes.slice(0, -1).map((n, i) => (
        <g key={`a${i}`} {...anim(motion, 'ix-flow', { duration: 1.6 })}>
          <line x1={n.x + r + 4} y1={140} x2={nodes[i + 1].x - r - 6} y2={140}
            stroke={INK} strokeWidth="3" strokeDasharray="9 7" />
          <polygon
            points={`${nodes[i + 1].x - r - 4},140 ${nodes[i + 1].x - r - 16},133 ${nodes[i + 1].x - r - 16},147`}
            fill={INK} />
        </g>
      ))}
      {label(260, 240, 'panah = "dimakan oleh" (arah aliran energi)', MUTE, 11)}
      {label(260, 264, 'produsen → konsumen; pengurai menguraikan sisa makhluk hidup', AMBER, 11)}
    </>
  );
}

// ------------------------------------------------------------------ siklus air
// Sun heats the sea -> water evaporates -> condenses into clouds -> rain falls on the mountain ->
// water flows back down to the sea.
export function SiklusAir({ motion }) {
  return (
    <>
      <g {...anim(motion, 'ix-glow', { duration: 2.4, origin: '62px 52px' })}>
        <circle cx="62" cy="52" r="22" fill={AMBER} />
      </g>

      <path d="M 0 236 Q 30 228 60 236 T 120 236 T 180 236 T 240 236 L 260 236 L 260 300 L 0 300 Z"
        fill="#1e3a8a" opacity="0.85" />
      {label(110, 276, 'laut', BLUE, 12)}
      <polygon points="230,300 380,118 520,300" fill="#334155" stroke="#475569" strokeWidth="2" />

      {[70, 120, 170].map((x) => (
        <g key={x} {...anim(motion, 'ix-flow', { duration: 1.6 })}>
          <path d={`M ${x} 224 Q ${x - 8} 200 ${x} 180 Q ${x + 8} 160 ${x} 140`} fill="none" stroke="#cbd5e1"
            strokeWidth="2.5" strokeDasharray="7 6" />
          <polygon points={`${x},132 ${x - 6},144 ${x + 6},144`} fill="#cbd5e1" />
        </g>
      ))}
      {label(120, 106, 'penguapan', '#cbd5e1', 12)}
      {label(120, 122, '(evaporasi)', MUTE, 10)}

      <g {...anim(motion, 'ix-bob', { duration: 3, origin: '330px 66px' })}>
        <ellipse cx="300" cy="70" rx="34" ry="20" fill="#cbd5e1" />
        <ellipse cx="338" cy="60" rx="34" ry="24" fill="#e2e8f0" />
        <ellipse cx="372" cy="72" rx="30" ry="18" fill="#cbd5e1" />
      </g>
      {label(240, 30, 'pengembunan (kondensasi) → awan', INK, 11)}

      {[330, 352, 374, 396].map((x, i) => (
        <line key={x} x1={x} y1={98} x2={x - 6} y2={128 + (i % 2) * 10} stroke={BLUE} strokeWidth="2.5"
          strokeDasharray="6 5" {...anim(motion, 'ix-flow', { duration: 1 + i * 0.1 })} />
      ))}
      {label(512, 104, 'hujan', BLUE, 12, 'end')}
      {label(512, 118, '(presipitasi)', MUTE, 10, 'end')}

      <g {...anim(motion, 'ix-flow', { duration: 1.8 })}>
        <path d="M 340 168 Q 300 220 262 240" fill="none" stroke={BLUE} strokeWidth="3" strokeDasharray="8 6" />
        <polygon points="0,0 -12,-6 -12,6" fill={BLUE} transform="translate(256 243) rotate(152)" />
      </g>
      {label(410, 262, 'air mengalir', INK, 11)}
      {label(410, 278, 'kembali ke laut', INK, 11)}
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
      {label(260, 238, 'metamorfosis: bentuk tubuh berubah pada tiap tahap', MUTE, 11)}
      {label(260, 264, 'sempurna: telur → larva → pupa → imago (dewasa)', PURPLE, 11)}
      {label(260, 284, 'tidak sempurna (mis. belalang): telur → nimfa → dewasa', MUTE, 10)}
    </>
  );
}

// ------------------------------------------------------------------ ekosistem
export function Ekosistem({ motion }) {
  return (
    <>
      <rect x="40" y="60" width="440" height="184" rx="10" fill="#052e16" opacity="0.55" stroke={GREEN} strokeWidth="2.5" />
      {label(260, 88, 'EKOSISTEM', GREEN, 13)}
      {label(260, 126, 'biotik (makhluk hidup)', INK, 11)}

      <g {...anim(motion, 'ix-bob', { origin: '150px 180px' })}>
        <circle cx="150" cy="176" r="34" fill="#0f172a" stroke={GREEN} strokeWidth="3" />
        {label(150, 180, 'tumbuhan', GREEN, 11)}
      </g>
      <g {...anim(motion, 'ix-bob', { origin: '260px 176px', duration: 2.6 })}>
        <circle cx="260" cy="176" r="34" fill="#0f172a" stroke={AMBER} strokeWidth="3" />
        {label(260, 181, 'hewan', AMBER, 10)}
      </g>
      <g {...anim(motion, 'ix-bob', { origin: '370px 176px', duration: 2.2 })}>
        <circle cx="370" cy="176" r="34" fill="#0f172a" stroke={BLUE} strokeWidth="3" />
        {label(370, 181, 'pengurai', BLUE, 10)}
      </g>

      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <circle key={i} {...anim(motion, 'ix-rise', { duration: 2.6 + i * 0.2 })}
          cx={70 + i * 54} cy={220} r="4.5" fill={i % 2 ? GREEN : BLUE} />
      ))}
      {label(260, 238, 'abiotik (tak hidup): air, tanah, udara, cahaya', INK, 10)}
      {label(260, 268, 'unsur biotik saling berhubungan dengan unsur abiotik', MUTE, 11)}
    </>
  );
}