/*
 * i18n — Lightweight locale context for OSN-SD Prep.
 *
 * Wiring:
 *   // main.jsx or App.jsx top-level:
 *   import { I18nProvider } from './i18n';
 *   <I18nProvider>
 *     <App />
 *   </I18nProvider>
 *
 * Hook usage inside any component:
 *   import { useT } from '../i18n';
 *   const t = useT();
 *   <button>{t('cek_jawaban', 'Cek Jawaban')}</button>
 *
 * Locale toggle button (drop in header):
 *   import { LanguageToggle } from './i18n';
 *   <LanguageToggle />
 *
 * Adding keys: edit the `id` and `en` dicts below. Keep ID as the canonical
 * fallback — components should always pass the original Bahasa Indonesia
 * string as the second arg to t() so missing translations degrade gracefully.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Globe } from 'lucide-react';

const STORAGE_KEY = 'osn-locale';
const DEFAULT_LOCALE = 'id';
const SUPPORTED = ['id', 'en'];

/* ------------------------------------------------------------------ *
 * Dictionaries
 * ------------------------------------------------------------------ */

// Indonesian — left blank/echoes since the UI is authored in ID.
// Any key omitted here falls back to the `fallback` arg passed to t().
const id = {
  roadmap_belajar: 'Roadmap Belajar',
  tryout_mandiri: 'Tryout Mandiri',
  analitik_belajar: 'Analitik Belajar',
  daily_streak: 'Streak Harian',
  xp_belajar: 'XP Belajar',
  cek_jawaban: 'Cek Jawaban',
  soal_selanjutnya: 'Soal Selanjutnya',
  kembali_ke_roadmap: 'Kembali ke Roadmap',
  halo_calon_medali_emas: 'Halo, calon medali emas!',
  mulai_belajar: 'Mulai Belajar',
  lanjutkan: 'Lanjutkan',
  kumpulkan_jawaban: 'Kumpulkan Jawaban',
  hasil_tryout_simulasi: 'Hasil Tryout Simulasi',
  koleksi_medali: 'Koleksi Medali',
  mulai_streak: 'Mulai Streak',
  level: 'Level',
  ksatria_sains: 'Ksatria Sains',
  tujuan_berikutnya: 'Tujuan Berikutnya',
  bahasa: 'Bahasa',
  pembahasan: 'Pembahasan',
  jawaban_benar: 'Jawaban Benar',
  jawaban_salah: 'Jawaban Salah',
  selesai: 'Selesai',
  reset_progress: 'Reset Progres',
  syarat_ketentuan: 'Syarat & Ketentuan',
  kebijakan_privasi: 'Kebijakan Privasi',
  bantuan_belajar: 'Bantuan Belajar',
  adaptive_learning: 'Adaptive Learning',
  hari: 'Hari',
};

const en = {
  roadmap_belajar: 'Learning Roadmap',
  tryout_mandiri: 'Practice Tryout',
  analitik_belajar: 'Learning Analytics',
  daily_streak: 'Daily Streak',
  xp_belajar: 'Learning XP',
  cek_jawaban: 'Check Answer',
  soal_selanjutnya: 'Next Question',
  kembali_ke_roadmap: 'Back to Roadmap',
  halo_calon_medali_emas: 'Hello, future gold medalist!',
  mulai_belajar: 'Start Learning',
  lanjutkan: 'Continue',
  kumpulkan_jawaban: 'Submit Answers',
  hasil_tryout_simulasi: 'Tryout Simulation Results',
  koleksi_medali: 'Medal Collection',
  mulai_streak: 'Start Streak',
  level: 'Level',
  ksatria_sains: 'Science Knight',
  tujuan_berikutnya: 'Next Goal',
  bahasa: 'Language',
  pembahasan: 'Explanation',
  jawaban_benar: 'Correct Answer',
  jawaban_salah: 'Wrong Answer',
  selesai: 'Finish',
  reset_progress: 'Reset Progress',
  syarat_ketentuan: 'Terms & Conditions',
  kebijakan_privasi: 'Privacy Policy',
  bantuan_belajar: 'Learning Help',
  adaptive_learning: 'Adaptive Learning',
  hari: 'Days',
};

const DICTS = { id, en };

/* ------------------------------------------------------------------ *
 * Context
 * ------------------------------------------------------------------ */

const I18nContext = createContext(null);

function readInitialLocale() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && SUPPORTED.includes(raw)) return raw;
  } catch {
    // localStorage unavailable — fall through to default
  }
  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(readInitialLocale);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore quota / unavailable
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLocaleState(next);
  }, []);

  const t = useCallback((key, fallback) => {
    const dict = DICTS[locale] || DICTS[DEFAULT_LOCALE];
    if (dict && Object.prototype.hasOwnProperty.call(dict, key)) {
      return dict[key];
    }
    if (typeof fallback === 'string') return fallback;
    return key;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Permissive fallback so components don't crash if used outside provider.
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: (_k, fallback) => (typeof fallback === 'string' ? fallback : _k),
    };
  }
  return ctx;
}

export function useT() {
  return useI18n().t;
}

/* ------------------------------------------------------------------ *
 * LanguageToggle — ID|EN pill switch
 * ------------------------------------------------------------------ */

export function LanguageToggle({ className = '' }) {
  const { locale, setLocale } = useI18n();
  const isId = locale === 'id';

  const handleToggle = () => setLocale(isId ? 'en' : 'id');

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isId ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
      title={isId ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
      className={`glass-card glass-card-hover inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-extrabold tracking-wide select-none cursor-pointer ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" />
      <span className={isId ? 'text-brand-primary' : 'text-gray-400'}>ID</span>
      <span className="text-gray-300" aria-hidden="true">|</span>
      <span className={!isId ? 'text-brand-primary' : 'text-gray-400'}>EN</span>
    </button>
  );
}

export default I18nProvider;
