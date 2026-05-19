import { useEffect, useState } from 'react';
import { X, Sparkles, Map, Timer, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * OnboardingTour
 *
 * Props:
 *   - forceOpen?: boolean   // when true, re-opens the tour regardless of the
 *                            localStorage 'osn-onboarding-done' flag (useful for
 *                            a "Lihat tur lagi" entry point).
 *   - onClose?: () => void  // optional callback when the modal closes (skip / finish).
 *
 * Wiring (add at the root of src/App.jsx, inside the outermost <div>):
 *   import OnboardingTour from './components/OnboardingTour';
 *   ...
 *   <OnboardingTour />
 *
 * Behavior:
 *   - Auto-shows on mount only if localStorage['osn-onboarding-done'] is falsy.
 *   - 4-step tour with prev / next / skip + dot indicators.
 *   - Final step CTA "Mulai!" sets the flag to 'true' and closes.
 *   - X (top-right) and "Lewati" both close without re-prompting on next mount
 *     (flag is set on any close path to avoid nagging users).
 */

const STEPS = [
  {
    icon: Sparkles,
    iconBg: 'bg-red-100',
    iconColor: 'text-brand-primary',
    emoji: '🏆',
    title: 'Halo, Calon Juara Olimpiade!',
    body: 'Selamat datang di OSN-SD Prep — teman belajarmu menuju medali emas Olimpiade Sains & Matematika tingkat SD. Di sini kamu akan berlatih dengan ribuan soal pilihan, lengkap dengan pembahasan ramah anak.',
  },
  {
    icon: Map,
    iconBg: 'bg-blue-100',
    iconColor: 'text-brand-accent',
    emoji: '🗺️',
    title: 'Roadmap Belajar',
    body: 'Materi disusun bertahap per sub-bab: dari konsep dasar, dilatih dengan soal kabupaten, lalu naik ke provinsi dan nasional. Ikuti urutannya supaya pemahamanmu menumpuk rapi, sub-bab demi sub-bab.',
  },
  {
    icon: Timer,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    emoji: '🎯',
    title: 'Latihan + Tryout',
    body: 'Mode Latihan bebas tanpa batas waktu — kamu bisa baca pembahasan setiap soal saat itu juga. Mode Tryout meniru suasana lomba: durasi terukur, pembahasan baru muncul setelah selesai, dan hasilnya berhak medali!',
  },
  {
    icon: Trophy,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    emoji: '🔥',
    title: 'Streak & Medali',
    body: 'Setiap latihan menambah XP dan menjaga streak harianmu tetap menyala. Kumpulkan medali Emas, Perak, Perunggu dari tryout, lalu naik level dari Pemula Bersemangat sampai Ksatria Sains. Konsisten = juara!',
  },
];

const STORAGE_KEY = 'osn-onboarding-done';

export default function OnboardingTour({ forceOpen = false, onClose }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (forceOpen) {
      setStep(0);
      setOpen(true);
      return;
    }
    let done = false;
    try {
      done = localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      done = false;
    }
    if (!done) {
      setStep(0);
      setOpen(true);
    }
  }, [forceOpen]);

  const finishAndClose = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch { /* ignore quota / privacy errors */ }
    setOpen(false);
    if (typeof onClose === 'function') onClose();
  };

  if (!open) return null;

  const total = STEPS.length;
  const current = STEPS[step];
  const Icon = current.icon;
  const isLast = step === total - 1;
  const isFirst = step === 0;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
    >
      <div className="glass-card rounded-3xl p-7 sm:p-8 w-full max-w-md relative animate-scale-in shadow-2xl shadow-red-500/10">
        <button
          onClick={finishAndClose}
          aria-label="Tutup tur"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/70 hover:bg-white text-gray-500 hover:text-gray-800 flex items-center justify-center transition shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className={`relative w-20 h-20 rounded-3xl ${current.iconBg} flex items-center justify-center mb-5`}>
            <Icon className={`w-9 h-9 ${current.iconColor}`} />
            <span className="absolute -bottom-2 -right-2 text-3xl drop-shadow-sm" aria-hidden="true">
              {current.emoji}
            </span>
          </div>

          <span className="text-[10px] font-extrabold tracking-widest uppercase text-brand-primary mb-2">
            Langkah {step + 1} dari {total}
          </span>

          <h2 id="onboarding-title" className="text-2xl font-bold font-heading text-gray-800 mb-3 leading-tight">
            {current.title}
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {current.body}
          </p>

          <div className="flex items-center justify-center gap-2 mb-6" role="tablist" aria-label="Progress tur">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                role="tab"
                aria-selected={i === step}
                aria-label={`Ke langkah ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === step
                    ? 'w-8 bg-brand-primary'
                    : i < step
                      ? 'w-2 bg-brand-primary/40'
                      : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between w-full gap-3">
            {isFirst ? (
              <button
                onClick={finishAndClose}
                className="text-xs font-bold text-gray-400 hover:text-gray-700 transition px-3 py-2"
              >
                Lewati
              </button>
            ) : (
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-gray-800 transition px-3 py-2 rounded-xl"
              >
                <ChevronLeft className="w-4 h-4" /> Kembali
              </button>
            )}

            {isLast ? (
              <button
                onClick={finishAndClose}
                className="bg-brand-primary hover:bg-brand-hover text-white px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition flex items-center gap-1.5 shadow-md shadow-red-500/20"
              >
                Mulai! <Sparkles className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setStep((s) => Math.min(total - 1, s + 1))}
                className="bg-brand-primary hover:bg-brand-hover text-white px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition flex items-center gap-1.5 shadow-md shadow-red-500/20"
              >
                Lanjut <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
