import { DiagramFrame } from './DiagramFrame';

// Grafik batang dari data soal itu sendiri (lihat textChart.js). Berbeda dari ilustrasi statis di
// families/: angka, label, dan judulnya harus persis sama dengan soal, karena siswa membaca nilainya
// dari grafik ini. Semua batang satu warna — menyorot satu batang sama saja membocorkan jawaban.

const W = 640;
const H = 360;
const PAD = { left: 64, right: 24, top: 74, bottom: 70 };
const INK = '#e2e8f0';
const MUTE = '#94a3b8';
const GRID = '#1e293b';
const SERIES_COLORS = ['#60a5fa', '#fbbf24', '#4ade80', '#f472b6'];

// Ukuran untuk frame rekaman 1920x1080: lebih besar dari ilustrasi biasa karena angkanya harus terbaca.
const BOX = {
  question: { split: 230, full: 380 },
  explanation: { split: 260, full: 380 },
};

/** Skala sumbu yang "bulat": langkah 1/2/5 × 10^n, kira-kira 5 garis bantu. */
export function niceScale(max) {
  if (!(max > 0)) return { top: 1, step: 1 };
  const raw = max / 5;
  const pow = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * pow).find((s) => s >= raw) ?? 10 * pow;
  return { top: Math.ceil(max / step) * step, step };
}

const fmt = (v) => (Number.isInteger(v) ? String(v) : String(v).replace('.', ','));

function Text({ x, y, children, size = 14, fill = INK, anchor = 'middle', weight = 800 }) {
  return (
    <text x={x} y={y} fill={fill} fontSize={size} fontWeight={weight} textAnchor={anchor}
      fontFamily="'IBM Plex Sans',system-ui,sans-serif">{children}</text>
  );
}

// Label kategori panjang ("Pisang Goreng") dipecah jadi dua baris supaya tidak bertabrakan.
function CategoryLabel({ x, y, label, size }) {
  const words = label.split(' ');
  if (label.length <= 9 || words.length < 2) return <Text x={x} y={y} size={size}>{label}</Text>;
  const half = Math.ceil(words.length / 2);
  return (
    <>
      <Text x={x} y={y} size={size}>{words.slice(0, half).join(' ')}</Text>
      <Text x={x} y={y + size + 2} size={size}>{words.slice(half).join(' ')}</Text>
    </>
  );
}

function BarChartSvg({ chart }) {
  const { rows, series, unit } = chart;
  const grouped = Array.isArray(series) && series.length > 1;
  const values = grouped ? rows.flatMap((r) => r.values) : rows.map((r) => r.value);
  const { top, step } = niceScale(Math.max(...values));
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;
  const base = PAD.top + plotH;
  const y = (v) => base - (v / top) * plotH;
  const slot = plotW / rows.length;
  const nSeries = grouped ? series.length : 1;
  const barW = Math.min(64, (slot * 0.7) / nSeries);
  const catSize = rows.length > 6 ? 12 : 15;
  const valSize = nSeries > 1 || rows.length > 6 ? 13 : 16;

  const ticks = [];
  for (let v = 0; v <= top + 1e-9; v += step) ticks.push(Number(v.toFixed(6)));

  // Judul ditulis di dalam grafik (besar), bukan hanya di header frame yang kecil dan bisa terpotong.
  const title = chart.title.charAt(0).toUpperCase() + chart.title.slice(1);
  return (
    <>
      <Text x={W / 2} y={28} size={title.length > 48 ? 15 : 18}>{title.length > 64 ? title.slice(0, 62) + '…' : title}</Text>
      {ticks.map((v) => (
        <g key={v}>
          <line x1={PAD.left} y1={y(v)} x2={W - PAD.right} y2={y(v)} stroke={GRID} strokeWidth="1" />
          <Text x={PAD.left - 8} y={y(v) + 5} size={13} fill={MUTE} anchor="end" weight={700}>{fmt(v)}</Text>
        </g>
      ))}
      <line x1={PAD.left} y1={PAD.top - 6} x2={PAD.left} y2={base} stroke={INK} strokeWidth="2.5" />
      <line x1={PAD.left} y1={base} x2={W - PAD.right} y2={base} stroke={INK} strokeWidth="2.5" />
      {unit ? (
        <Text x={PAD.left - 4} y={PAD.top - 14} size={12} fill={MUTE} anchor="start" weight={700}>{`(${unit})`}</Text>
      ) : null}

      {rows.map((r, i) => {
        const cx = PAD.left + slot * (i + 0.5);
        const vals = grouped ? r.values : [r.value];
        return (
          <g key={r.label}>
            {vals.map((v, k) => {
              const x = cx - (barW * nSeries) / 2 + k * barW;
              const color = SERIES_COLORS[grouped ? k % SERIES_COLORS.length : 0];
              return (
                <g key={k}>
                  <rect x={x + 2} y={y(v)} width={barW - 4} height={base - y(v)} rx="4" fill={color} opacity="0.92" />
                  <Text x={x + barW / 2} y={y(v) - 7} size={valSize}>{fmt(v)}</Text>
                </g>
              );
            })}
            <CategoryLabel x={cx} y={base + 22} label={r.label} size={catSize} />
            {r.note ? <Text x={cx} y={base + 40 + (r.label.length > 9 ? catSize : 0)} size={11} fill={MUTE} weight={600}>{r.note}</Text> : null}
          </g>
        );
      })}

      {grouped ? (
        <g>
          {series.map((s, k) => {
            const lx = W - PAD.right - (series.length - k) * 96;
            return (
              <g key={s}>
                <rect x={lx} y={42} width="16" height="12" rx="2" fill={SERIES_COLORS[k % SERIES_COLORS.length]} />
                <Text x={lx + 22} y={53} size={13} anchor="start">{s}</Text>
              </g>
            );
          })}
        </g>
      ) : null}
    </>
  );
}

/**
 * Grafik dari data soal. `phase`: 'question' (10 detik, diam) atau 'explanation' (pembahasan).
 */
export function DataChartFigure({ chart, phase = 'question', isSplitActive = false }) {
  if (!chart) return null;
  const boxHeight = BOX[phase][isSplitActive ? 'split' : 'full'];
  return (
    <div className={`flex justify-center ${isSplitActive ? 'mb-1' : 'mb-3'}`}>
      <DiagramFrame
        title="Diagram batang"
        caption={null}
        mode={phase === 'question' ? 'still' : 'motion'}
        width={W}
        height={H}
        boxHeight={boxHeight}
        badge="Data soal"
      >
        {() => <BarChartSvg chart={chart} />}
      </DiagramFrame>
    </div>
  );
}
