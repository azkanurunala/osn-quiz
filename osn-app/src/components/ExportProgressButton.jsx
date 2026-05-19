// Tombol "Ekspor Progres" — glass-card kecil dengan ikon Lucide Download + toast 2 detik.
// Usage:
//   import ExportProgressButton from './components/ExportProgressButton';
//   <ExportProgressButton />
//   // Atau dengan className tambahan:
//   <ExportProgressButton className="w-full" />

import { useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { exportProgressFile } from '../utils/exportProgress';

export default function ExportProgressButton({ className = '' }) {
  const [toast, setToast] = useState(null); // 'success' | 'empty' | null
  const timerRef = useRef(null);

  function showToast(kind) {
    setToast(kind);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToast(null), 2000);
  }

  function handleClick() {
    const ok = exportProgressFile();
    showToast(ok ? 'success' : 'empty');
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={handleClick}
        className="glass-card glass-card-hover rounded-2xl px-4 py-2.5 flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-brand-primary transition"
      >
        <Download className="w-4 h-4" />
        <span>Ekspor Progres</span>
      </button>

      {toast && (
        <div
          role="status"
          className="absolute right-0 top-full mt-2 z-50 glass-card rounded-xl px-3 py-2 text-xs font-semibold whitespace-nowrap animate-slide-in shadow-md"
          style={{
            color: toast === 'success' ? '#047857' : '#b45309',
          }}
        >
          {toast === 'success' ? 'Berhasil! 📥' : 'Belum ada progres untuk diekspor.'}
        </div>
      )}
    </div>
  );
}
