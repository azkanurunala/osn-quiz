// BulkRecorderPanel — modal untuk antri rekam semua/sebagian paket soal.
// Props:
//   open: boolean
//   manifest: { items: [...] }
//   onStart: (subBabIds: string[]) => void
//   onClose: () => void
//
// Usage di Dashboard / App:
//   <BulkRecorderPanel open={open} manifest={manifest} onStart={startBulkQueue} onClose={...} />

import { useMemo, useState } from 'react';
import { X, Video, AlertTriangle, CheckSquare, Square, Filter } from 'lucide-react';
import { isRecordingSupported, estimateFileSize, formatBytes, formatDuration } from '../utils/recorder';

export default function BulkRecorderPanel({ open, manifest, onStart, onClose }) {
  const [tier, setTier] = useState('campur');
  const [subject, setSubject] = useState('all'); // 'all' | 'ipa' | 'mtk'
  const [selectedIds, setSelectedIds] = useState(new Set());
  const supported = isRecordingSupported();

  // Filter manifest items by tier + subject (only subbab type)
  const candidates = useMemo(() => {
    if (!manifest?.items) return [];
    return manifest.items
      .filter((it) => it.type === 'subbab' && it.tier === tier)
      .filter((it) => subject === 'all' || it.subject === subject)
      .sort((a, b) => (a.subBab || '').localeCompare(b.subBab || ''));
  }, [manifest, tier, subject]);

  if (!open) return null;

  const allSelected = candidates.length > 0 && candidates.every((c) => selectedIds.has(c.subBab));
  const noneSelected = selectedIds.size === 0;

  const toggleAll = () => {
    if (allSelected) setSelectedIds(new Set());
    else setSelectedIds(new Set(candidates.map((c) => c.subBab)));
  };
  const toggleOne = (id) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id); else next.add(id);
    setSelectedIds(next);
  };

  const selectedList = candidates.filter((c) => selectedIds.has(c.subBab));
  const estSecPerPaket = 100 * 25; // 100 soal × ~25s
  const totalEstSec = selectedList.length * estSecPerPaket;
  const totalEstSize = estimateFileSize(totalEstSec, 2_000_000);

  const handleStart = () => {
    if (noneSelected) return;
    if (!confirm(`Akan mulai rekam ${selectedList.length} paket secara berurutan. Browser akan minta izin share screen setiap paket. Lanjutkan?`)) return;
    onStart(selectedList.map((c) => c.subBab));
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center p-4 sm:p-8 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl glass-card rounded-3xl p-6 space-y-4 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center shadow-md">
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-red-100 rounded-xl shrink-0">
            <Video className="w-5 h-5 text-brand-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-heading">Rekam Massal Paket Soal</h2>
            <p className="text-xs text-gray-500">Pilih paket-paket yang mau direkam. Antrian akan jalan satu-per-satu.</p>
          </div>
        </div>

        {!supported && (
          <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-xs text-red-700 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Browser tidak mendukung perekaman layar. Coba Chrome atau Edge versi terbaru.</span>
          </div>
        )}

        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <Filter className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-bold text-gray-600">Tier:</span>
          {['campur', 'mudah', 'sedang', 'sulit', 'mudah-sedang', 'sedang-sulit'].map((t) => (
            <button
              key={t}
              onClick={() => { setTier(t); setSelectedIds(new Set()); }}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition ${tier === t ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >{t}</button>
          ))}
        </div>

        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="font-bold text-gray-600 ml-5">Mapel:</span>
          {[{ id: 'all', label: 'Semua' }, { id: 'ipa', label: 'IPA' }, { id: 'mtk', label: 'Matematika' }].map((s) => (
            <button
              key={s.id}
              onClick={() => { setSubject(s.id); setSelectedIds(new Set()); }}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition ${subject === s.id ? 'bg-brand-accent text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >{s.label}</button>
          ))}
        </div>

        {/* List */}
        <div className="border border-gray-100 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-gray-50 rounded-t-2xl">
            <button onClick={toggleAll} className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-brand-primary">
              {allSelected
                ? <CheckSquare className="w-4 h-4 text-brand-primary" />
                : <Square className="w-4 h-4 text-gray-400" />}
              {allSelected ? 'Kosongkan pilihan' : 'Pilih semua'} ({candidates.length})
            </button>
            <span className="text-[10px] font-bold text-gray-400 tabular-nums">{selectedIds.size} terpilih</span>
          </div>
          <div className="max-h-72 overflow-y-auto divide-y divide-gray-50">
            {candidates.length === 0 ? (
              <div className="p-6 text-center text-xs text-gray-400">Tidak ada paket cocok dengan filter. Coba tier/mapel lain.</div>
            ) : (
              candidates.map((c) => {
                const sel = selectedIds.has(c.subBab);
                return (
                  <button
                    key={c.subBab}
                    onClick={() => toggleOne(c.subBab)}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition text-left"
                  >
                    {sel ? <CheckSquare className="w-4 h-4 text-brand-primary shrink-0" /> : <Square className="w-4 h-4 text-gray-300 shrink-0" />}
                    <span className="text-[10px] font-mono text-gray-400 w-16 shrink-0">{c.subBab}</span>
                    <span className="text-xs font-semibold text-gray-700 flex-1 truncate" title={c.title}>{c.title}</span>
                    <span className="text-[10px] font-bold text-gray-400 tabular-nums shrink-0">{c.questionCount} soal</span>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Estimate */}
        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-3 text-[11px] text-yellow-900 leading-relaxed">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-3.5 h-3.5 text-yellow-700" />
            <span className="font-bold">Estimasi (real-time, butuh browser aktif)</span>
          </div>
          <ul className="space-y-0.5 pl-5 list-disc">
            <li>Durasi: <strong>≈ {formatDuration(totalEstSec)}</strong> ({selectedList.length} paket × ~41 menit)</li>
            <li>Storage download: <strong>≈ {formatBytes(totalEstSize)}</strong> ({selectedList.length} file .webm)</li>
            <li>Browser minta izin share screen <strong>setiap paket</strong> (tidak bisa di-skip)</li>
            <li>Tab harus tetap aktif/foreground selama rekaman</li>
          </ul>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
          <button onClick={onClose} className="text-xs font-bold text-gray-600 border border-gray-200 hover:bg-gray-50 px-4 py-2 rounded-xl transition">
            Batal
          </button>
          <button
            disabled={!supported || noneSelected}
            onClick={handleStart}
            className="text-xs font-extrabold text-white bg-brand-primary hover:bg-brand-hover px-4 py-2 rounded-xl transition shadow-md shadow-red-500/10 flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Video className="w-3.5 h-3.5 fill-white" /> Mulai Antrian ({selectedList.length})
          </button>
        </div>
      </div>
    </div>
  );
}
