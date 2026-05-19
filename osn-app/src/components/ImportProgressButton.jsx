// Tombol glass-card untuk mengimpor progres dari file JSON hasil ekspor.
// Contoh pemakaian:
//   import ImportProgressButton from './components/ImportProgressButton';
//   <ImportProgressButton />

import { useRef } from 'react';
import { Upload } from 'lucide-react';
import { validateImport, applyImport } from '../utils/importProgress';

export default function ImportProgressButton() {
  const inputRef = useRef(null);

  const openPicker = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.click();
    }
  };

  const handleFile = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch {
        alert('Gagal mengimpor: file bukan JSON yang valid.');
        return;
      }
      const v = validateImport(parsed);
      if (!v.ok) {
        alert(`Gagal mengimpor: ${v.error}`);
        return;
      }
      const yes = window.confirm('Ini akan menimpa progres lokal. Lanjutkan?');
      if (!yes) return;
      const ok = applyImport(parsed);
      if (!ok) {
        alert('Gagal menyimpan progres ke penyimpanan lokal. Coba lagi.');
        return;
      }
      alert('Berhasil! Progres telah diimpor. Halaman akan dimuat ulang.');
      window.location.reload();
    } catch {
      alert('Terjadi kesalahan saat membaca file.');
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openPicker}
        className="glass-card glass-card-hover rounded-2xl px-4 py-2.5 flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-brand-primary transition"
        aria-label="Impor Progres dari file JSON"
      >
        <Upload className="w-4 h-4" />
        <span>Impor Progres</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="application/json,.json"
        onChange={handleFile}
        className="hidden"
        aria-hidden="true"
      />
    </>
  );
}
