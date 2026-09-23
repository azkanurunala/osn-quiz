import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { SCENE_REGISTRY } from '../features/astronomy/registry';
import { useT } from '../i18n';

export default function AstronomyViewer() {
  const t = useT();
  const [selectedId, setSelectedId] = useState(null);
  const entries = Object.entries(SCENE_REGISTRY);

  if (selectedId) {
    const { component: Scene, label } = SCENE_REGISTRY[selectedId];
    return (
      <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
        <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
          <button
            onClick={() => setSelectedId(null)}
            className="flex items-center gap-1.5 text-gray-500 hover:text-brand-primary font-bold text-sm transition"
          >
            <ChevronLeft className="w-5 h-5" /> {t('kembali_daftar_3d', 'Kembali ke Daftar')}
          </button>
          <h2 className="text-base font-black font-heading text-gray-800">{label}</h2>
        </div>
        <Scene interactive size="full" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
      <div className="glass-card rounded-2xl p-4">
        <h2 className="text-base font-black font-heading text-gray-800">{t('jelajah_3d_title', 'Jelajah 3D')}</h2>
        <p className="text-xs text-gray-500 mt-1">{t('jelajah_3d_desc', 'Pilih topik untuk melihat visualisasi 3D interaktifnya.')}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {entries.map(([id, { label }]) => (
          <button
            key={id}
            onClick={() => setSelectedId(id)}
            className="glass-card rounded-2xl p-5 text-left hover:shadow-lg transition space-y-1"
          >
            <span className="text-sm font-black font-heading text-gray-800">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
