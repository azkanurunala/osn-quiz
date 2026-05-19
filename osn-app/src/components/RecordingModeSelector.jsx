// RecordingModeSelector — modal pemilihan mode saat user buka sub-bab.
// Props:
//   open: boolean
//   subBabTitle: string
//   questionCount: number (default 100)
//   timerSecPerSoal: number (default 25 — total soal+pembahasan)
//   onSelectMode: (mode: 'manual' | 'auto-record') => void
//   onClose: () => void
//
// Usage di App.jsx:
//   <RecordingModeSelector open={!!pendingId} subBabTitle={...} onSelectMode={...} onClose={...} />

import { Hand, Video, X, Info, AlertTriangle } from 'lucide-react';
import { isRecordingSupported, estimateFileSize, formatBytes, formatDuration } from '../utils/recorder';

export default function RecordingModeSelector({
  open,
  subBabTitle,
  questionCount = 100,
  timerSecPerSoal = 25,
  onSelectMode,
  onClose,
}) {
  if (!open) return null;
  const supported = isRecordingSupported();
  const estSec = questionCount * timerSecPerSoal;
  const estSize = estimateFileSize(estSec, 2_000_000);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg glass-card rounded-3xl p-6 space-y-4 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center shadow-md"
          aria-label="Tutup"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div>
          <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Pilih Mode</span>
          <h2 className="text-lg font-bold font-heading mt-0.5">Mulai Latihan Sub-bab</h2>
          <p className="text-xs text-gray-500 truncate" title={subBabTitle}>{subBabTitle}</p>
        </div>

        <button
          onClick={() => onSelectMode('manual')}
          className="w-full p-4 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition text-left flex items-start gap-3 group"
        >
          <div className="p-2.5 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl shrink-0 transition">
            <Hand className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold text-gray-800">Mode Manual</h3>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              Latihan biasa — kamu pilih jawaban sendiri & navigasi soal manual. Cocok untuk belajar serius.
            </p>
          </div>
        </button>

        <button
          disabled={!supported}
          onClick={() => onSelectMode('auto-record')}
          className="w-full p-4 rounded-2xl border border-gray-200 hover:border-brand-primary/40 hover:bg-red-50/30 transition text-left flex items-start gap-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:bg-transparent"
        >
          <div className="p-2.5 bg-red-100 group-hover:bg-red-200 rounded-xl shrink-0 transition">
            <Video className="w-5 h-5 text-brand-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
              Mode Otomatis + Rekam Video
              <span className="text-[9px] font-extrabold bg-red-500 text-white px-1.5 py-0.5 rounded-full uppercase animate-pulse">REC</span>
            </h3>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              Auto-pilot menjawab 100 soal. Layar direkam jadi video <code className="text-[10px] bg-gray-100 px-1 rounded">.webm</code>. Cocok untuk konten YouTube / arsip.
            </p>
            <div className="mt-2 flex items-center gap-2 text-[10px] font-bold flex-wrap">
              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">≈ {formatDuration(estSec)}</span>
              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">≈ {formatBytes(estSize)}</span>
              <span className="px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-700">Tab harus aktif</span>
            </div>
            {!supported && (
              <p className="text-[10px] text-red-500 mt-1.5 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> Browser tidak mendukung perekaman layar.
              </p>
            )}
          </div>
        </button>

        <div className="text-[11px] text-gray-500 bg-gray-50 rounded-xl p-3 flex gap-2 items-start">
          <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-brand-accent" />
          <p className="leading-relaxed">
            Mode rekam: browser minta izin "share screen". Pilih tab ini (centang "Share audio" untuk include musik), klik Bagikan. Rekaman berhenti otomatis & ter-download saat 100 soal selesai, atau saat kamu hentikan sharing.
          </p>
        </div>
      </div>
    </div>
  );
}
