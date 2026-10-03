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

// ------------------------------------------------------------------ keanekaragaman hayati
export function KeanekaragamanHayati({ motion }) {
  const levels = [
    { t: 'Tingkat Gen', ex: 'berbagai varietas padi', c: PURPLE, x: 92 },
    { t: 'Tingkat Jenis', ex: 'harimau & kucing', c: AMBER, x: 260 },
    { t: 'Tingkat Ekosistem', ex: 'hutan, sawah, laut', c: GREEN, x: 428 },
  ];
  return (
    <>
      {label(260, 30, 'KEANEKARAGAMAN HAYATI', MUTE, 12)}
      <g {...anim(motion, 'ix-flow', { duration: 1.6 })}>
        <line x1="120" y1="44" x2="400" y2="44" stroke={INK} strokeWidth="2.5" strokeDasharray="8 6" />
        <polygon points="404,44 392,38 392,50" fill={INK} />
      </g>

      {levels.map((l, i) => (
        <g key={l.t} {...anim(motion, 'ix-bob', { duration: 2.6 + i * 0.4, origin: `${l.x}px 150px` })}>
          <rect x={l.x - 76} y="82" width="152" height="136" rx="12" fill="#1e293b" opacity="0.8" stroke={l.c} strokeWidth="2.5" />
          {label(l.x, 108, l.t, l.c, 12)}
          {i === 0 ? (
            <g>
              {[0, 1, 2].map((k) => (
                <ellipse key={k} cx={l.x - 40 + k * 40} cy="148" rx="13" ry="19" fill={l.c} opacity={0.55 + k * 0.2} />
              ))}
            </g>
          ) : null}
          {i === 1 ? (
            <g>
              <circle cx={l.x - 34} cy="146" r="21" fill={l.c} opacity="0.85" />
              <circle cx={l.x + 34} cy="152" r="16" fill={l.c} opacity="0.55" />
            </g>
          ) : null}
          {i === 2 ? (
            <g>
              <path d={`M ${l.x - 48} 170 Q ${l.x - 24} 138 ${l.x} 168 Q ${l.x + 26} 138 ${l.x + 48} 170 Z`} fill={l.c} opacity="0.8" />
            </g>
          ) : null}
          {label(l.x, 204, l.ex, MUTE, 9)}
        </g>
      ))}

      {label(260, 250, 'makin luas tingkatnya, makin besar perbedaan cirinya', MUTE, 10)}
      {label(260, 270, 'semua tingkat penting untuk menjaga keseimbangan ekosistem', MUTE, 9)}
    </>
  );
}

// ------------------------------------------------------------------ variabel penelitian
export function VariabelPenelitian({ motion }) {
  const vars = [
    { t: 'Variabel Bebas', d: 'yang sengaja diubah', ex: 'dosis pupuk', c: RED },
    { t: 'Variabel Terikat', d: 'yang diamati/diukur', ex: 'tinggi tanaman', c: BLUE },
    { t: 'Variabel Terkendali', d: 'yang dijaga tetap', ex: 'jenis tanah, air', c: GREEN },
  ];
  return (
    <>
      {label(260, 28, 'VARIABEL DALAM PENELITIAN', MUTE, 12)}
      {vars.map((v, i) => {
        const y = 56 + i * 70;
        return (
          <g key={v.t} {...anim(motion, 'ix-bob', { duration: 2.4 + i * 0.3, origin: `260px ${y + 30}px` })}>
            <rect x="26" y={y} width="468" height="60" rx="10" fill="#1e293b" opacity="0.75" stroke={v.c} strokeWidth="2" />
            {label(44, y + 26, v.t, v.c, 12, 'start')}
            {label(44, y + 46, v.d, MUTE, 10, 'start')}
            <rect x="300" y={y + 14} width="176" height="32" rx="8" fill={v.c} opacity="0.16" />
            {label(388, y + 35, v.ex, v.c, 10)}
          </g>
        );
      })}
      {label(260, 282, 'percobaan adil (fair test): hanya variabel bebas yang dibedakan', INK, 10)}
    </>
  );
}

// ------------------------------------------------------------------ alat pengukuran
export function AlatPengukuran({ motion }) {
  const tools = [
    { t: 'Panjang', u: 'meteran, penggaris', c: BLUE, i: 0 },
    { t: 'Massa', u: 'timbangan, neraca', c: PURPLE, i: 1 },
    { t: 'Waktu', u: 'stopwatch', c: AMBER, i: 2 },
    { t: 'Suhu', u: 'termometer', c: RED, i: 3 },
  ];
  return (
    <>
      {label(260, 30, 'ALAT PENGUKURAN & SATUANNYA', MUTE, 12)}
      {tools.map((tl, i) => {
        const x = 76 + i * 122;
        return (
          <g key={tl.t} {...anim(motion, 'ix-bob', { duration: 2.4 + i * 0.3, origin: `${x}px 130px` })}>
            <circle cx={x} cy="130" r="40" fill="#0f172a" stroke={tl.c} strokeWidth="3" />
            {tl.i === 0 ? (
              <g>
                <rect x={x - 30} y="124" width="60" height="12" rx="3" fill={tl.c} />
                {[0, 1, 2, 3, 4, 5].map((k) => (
                  <line key={k} x1={x - 24 + k * 10} y1="124" x2={x - 24 + k * 10} y2={k % 2 ? 130 : 136} stroke="#0f172a" strokeWidth="1.5" />
                ))}
              </g>
            ) : null}
            {tl.i === 1 ? (
              <g>
                <path d={`M ${x - 26} 138 L ${x + 26} 138`} stroke={tl.c} strokeWidth="4" />
                <path d={`M ${x} 138 L ${x} 116`} stroke={tl.c} strokeWidth="3" />
                <path d={`M ${x - 18} 116 L ${x + 18} 116 Q ${x + 24} 126 ${x + 18} 136 L ${x - 18} 136 Q ${x - 24} 126 ${x - 18} 116 Z`} fill={tl.c} opacity="0.8" />
              </g>
            ) : null}
            {tl.i === 2 ? (
              <g>
                <circle cx={x} cy="130" r="17" fill="none" stroke={tl.c} strokeWidth="3.5" />
                <line x1={x} y1="130" x2={x + 11} y2="120" stroke={tl.c} strokeWidth="3" />
                <rect x={x - 4} y="106" width="8" height="9" fill={tl.c} />
              </g>
            ) : null}
            {tl.i === 3 ? (
              <g>
                <path d={`M ${x - 7} 152 L ${x - 7} 108`} stroke={tl.c} strokeWidth="5" strokeLinecap="round" />
                <circle cx={x - 7} cy="160" r="13" fill={tl.c} />
                <circle cx={x - 7} cy="104" r="7" fill={tl.c} />
              </g>
            ) : null}
            {label(x, 190, tl.t, tl.c, 12)}
            {label(x, 208, tl.u, MUTE, 9)}
          </g>
        );
      })}
      {label(260, 248, 'mikroskop untuk melihat sel yang sangat kecil', PURPLE, 10)}
      {label(260, 270, 'pilih alat yang sesuai agar hasil pengukuran tepat', MUTE, 9)}
    </>
  );
}

// ------------------------------------------------------------------ metode ilmiah
export function MetodeIlmiah({ motion }) {
  const steps = ['Observasi', 'Hipotesis', 'Percobaan', 'Kesimpulan'];
  return (
    <>
      {label(260, 28, 'LANGKAH PENELITIAN', MUTE, 12)}
      {steps.map((s, i) => {
        const x = 80 + i * 120;
        return (
          <g key={s}>
            <g {...anim(motion, 'ix-pulse', { duration: 2.2 + i * 0.3 })}>
              <circle cx={x} cy="110" r="34" fill="#0f172a" stroke={[BLUE, AMBER, GREEN, PURPLE][i]} strokeWidth="3" />
            </g>
            {label(x, 117, String(i + 1), [BLUE, AMBER, GREEN, PURPLE][i], 20)}
            {label(x, 166, s, [BLUE, AMBER, GREEN, PURPLE][i], 11)}
            {i < steps.length - 1 ? (
              <g {...anim(motion, 'ix-flow', { duration: 1.6 })}>
                <line x1={x + 38} y1="110" x2={x + 78} y2="110" stroke={INK} strokeWidth="3" strokeDasharray="7 5" />
                <polygon points={`${x + 82},110 ${x + 70},104 ${x + 70},116`} fill={INK} />
              </g>
            ) : null}
          </g>
        );
      })}
      {label(260, 216, 'dari pengamatan dibuat dugaan sementara (hipotesis), lalu diuji dengan percobaan', MUTE, 10)}
      {label(260, 238, 'percobaan yang baik harus diulang, dikendalikan, dan dicatat apa adanya', MUTE, 9)}
      {label(260, 258, 'kesimpulan tidak boleh lebih besar dari data yang ditemukan', MUTE, 9)}
    </>
  );
}