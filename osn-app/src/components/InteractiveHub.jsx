import { useState } from 'react';
import { ExternalLink, MousePointerClick } from 'lucide-react';
import { useT } from '../i18n';

const HUB_URL = '/interaktif/';

/* The interactive pages are standalone documents (their own CSS, fonts and
   scroll). Rather than port them into React, the tab embeds the hub and lets
   the browser do the work. `embedded` is added inside each page when
   document.referrer is same-origin, which trims the padding meant for a
   full-page visit. */
export default function InteractiveHub() {
  const t = useT();
  const [ready, setReady] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-lg font-black font-heading text-gray-800 m-0 leading-tight">
            {t('materi_interaktif', 'Materi Interaktif')}
          </h2>
          <p className="text-xs font-semibold text-gray-400 m-0 mt-1 flex items-center gap-1.5">
            <MousePointerClick className="w-3.5 h-3.5" />
            {t('interaktif_hint', 'Klik titik info pada ilustrasi untuk penjelasan, lalu kerjakan kuisnya')}
          </p>
        </div>
        <a
          href={HUB_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-brand-primary text-xs font-bold transition"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          {t('buka_penuh', 'Buka penuh')}
        </a>
      </div>

      <div
        className="relative rounded-3xl overflow-hidden border border-gray-200 bg-gray-950 shadow-sm h-[68vh] min-h-[460px] md:h-[calc(100vh-13rem)]"
      >
        {!ready && (
          <div className="absolute inset-0 grid place-items-center text-xs font-bold text-gray-500 bg-gray-950">
            {t('memuat_materi', 'Memuat materi interaktif…')}
          </div>
        )}
        <iframe
          src={HUB_URL}
          title={t('materi_interaktif', 'Materi Interaktif')}
          className="h-full w-full border-0 block"
          onLoad={() => setReady(true)}
        />
      </div>
    </div>
  );
}