import { SolarSystemScene } from '../features/solar-system';
import { useT } from '../i18n';

export default function SolarSystemViewer() {
  const t = useT();
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
      <div className="glass-card rounded-2xl p-4">
        <h2 className="text-base font-black font-heading text-gray-800">{t('tata_surya_3d_title', 'Jelajah Tata Surya 3D')}</h2>
        <p className="text-xs text-gray-500 mt-1">{t('tata_surya_3d_desc', 'Putar & perbesar dengan drag mouse. Klik sebuah planet untuk melihat faktanya.')}</p>
      </div>
      <SolarSystemScene interactive size="full" />
    </div>
  );
}
