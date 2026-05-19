// Heatmap aktivitas 12 minggu terakhir (gaya GitHub).
// Penggunaan:
//   import ActivityHeatmap from './components/ActivityHeatmap';
//   <ActivityHeatmap />

import { useMemo } from 'react';
import { useActivity } from '../utils/activityLog';

const WEEKS = 12;
const DAY_LABELS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des',
];

function toKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatTanggal(d) {
  return `${d.getDate()} ${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`;
}

function intensityClass(count) {
  if (!count || count <= 0) return 'bg-gray-100';
  if (count <= 3) return 'bg-brand-accent/20';
  if (count <= 9) return 'bg-brand-accent/50';
  return 'bg-brand-accent';
}

export default function ActivityHeatmap() {
  const activity = useActivity();

  const { columns, monthLabels, totalDays } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Akhiri grid pada minggu yang memuat hari ini (Sabtu sebagai hari terakhir kolom).
    const end = new Date(today);
    end.setDate(end.getDate() + (6 - end.getDay()));

    const start = new Date(end);
    start.setDate(start.getDate() - (WEEKS * 7 - 1));

    const cols = [];
    const months = [];
    let cursor = new Date(start);
    let total = 0;

    for (let w = 0; w < WEEKS; w++) {
      const days = [];
      let monthOfWeek = null;
      for (let d = 0; d < 7; d++) {
        const date = new Date(cursor);
        const key = toKey(date);
        const count = activity[key] || 0;
        const isFuture = date > today;
        if (count > 0) total += 1;
        if (d === 0) monthOfWeek = date.getMonth();
        days.push({ date, key, count, isFuture });
        cursor.setDate(cursor.getDate() + 1);
      }
      cols.push(days);
      months.push(monthOfWeek);
    }

    // Label bulan: tampilkan hanya saat bulan berubah dari kolom sebelumnya.
    const monthLabelRow = months.map((m, i) =>
      i === 0 || m !== months[i - 1] ? MONTH_NAMES[m] : ''
    );

    return { columns: cols, monthLabels: monthLabelRow, totalDays: total };
  }, [activity]);

  const isEmpty = totalDays === 0;

  return (
    <div className="glass-card p-5">
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="font-heading text-lg font-semibold text-gray-900">
          Kalender Latihan 12 Minggu
        </h3>
        {!isEmpty && (
          <span className="text-xs text-gray-500">
            {totalDays} hari aktif
          </span>
        )}
      </div>

      {isEmpty ? (
        <p className="text-sm text-gray-500 py-8 text-center">
          Mulai latihan untuk melihat pola belajarmu di sini.
        </p>
      ) : (
        <>
          <div className="flex gap-2">
            {/* Label hari (kolom kiri) */}
            <div className="flex flex-col gap-[3px] pt-5 pr-1">
              {DAY_LABELS.map((lbl, i) => (
                <span
                  key={lbl}
                  className="text-[10px] leading-[12px] text-gray-400 h-3"
                  style={{ visibility: i % 2 === 1 ? 'visible' : 'hidden' }}
                >
                  {lbl}
                </span>
              ))}
            </div>

            {/* Grid heatmap */}
            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-[3px] mb-1">
                {monthLabels.map((m, i) => (
                  <span
                    key={i}
                    className="text-[10px] text-gray-400 w-3 text-left"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="flex gap-[3px]">
                {columns.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map(({ date, key, count, isFuture }) => (
                      <div
                        key={key}
                        title={
                          isFuture
                            ? formatTanggal(date)
                            : `${formatTanggal(date)} — ${count} soal`
                        }
                        className={`w-3 h-3 rounded-[3px] ${
                          isFuture ? 'bg-transparent' : intensityClass(count)
                        }`}
                        aria-label={
                          isFuture
                            ? formatTanggal(date)
                            : `${formatTanggal(date)}: ${count} soal`
                        }
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legenda */}
          <div className="flex items-center justify-end gap-2 mt-4 text-[10px] text-gray-500">
            <span>Sedikit</span>
            <span className="w-3 h-3 rounded-[3px] bg-gray-100" />
            <span className="w-3 h-3 rounded-[3px] bg-brand-accent/20" />
            <span className="w-3 h-3 rounded-[3px] bg-brand-accent/50" />
            <span className="w-3 h-3 rounded-[3px] bg-brand-accent" />
            <span>Banyak</span>
          </div>
        </>
      )}
    </div>
  );
}
