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
  halo_calon_medali_emas: 'Halo, Calon Medali Emas! 👋',
  mulai_belajar: 'Mulai Belajar',
  lanjutkan: 'Lanjutkan',
  kumpulkan_jawaban: 'Kumpulkan Jawaban',
  hasil_tryout_simulasi: 'Hasil Tryout Simulasi',
  koleksi_medali: 'Koleksi Medali OSN Anda',
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
  pelajar_tekun: 'Pelajar Tekun',
  pemula_bersemangat: 'Pemula Bersemangat',
  streak_menyala_params: 'Streak ${streak} hari menyala 🔥 — pertahankan tempomu untuk merebut posisi puncak!',
  mulai_latihan_streak: 'Mulai latihan pertamamu hari ini untuk membuka streak dan koleksi medali.',
  kuis_kilat: 'Kuis Kilat',
  kuis_kilat_desc: '5 soal acak — selesai dalam 2 menit',
  mulai_streak_hari_ini: 'Mulai streak pertamamu hari ini!',
  hari_lagi_chest: '${days} hari lagi untuk Klaim Chest Emas',
  pertahankan_streak: 'Pertahankan streak-mu!',
  xp_lagi_level: '${xp} XP lagi untuk Level ${level}',
  medali_emas: 'Medali Emas',
  medali_perak: 'Medali Perak',
  medali_perunggu: 'Medali Perunggu',
  video_selesai_alert: 'Produksi Video Selesai! 🎉 Seluruh soal kuis telah selesai secara otomatis.',
  data_soal_tidak_ditemukan: 'Data Soal Tidak Ditemukan',
  gagal_memuat_soal: 'Gagal memuat materi kuis atau data kuis kosong.',
  kembali: 'Kembali',
  menyiapkan_rekaman: 'Menyiapkan Mode Perekaman...',
  waktu_menjawab: 'Waktu Menjawab...',
  durasi_pembahasan: 'Durasi Pembahasan...',
  detik: 'Detik',
  topik_utama: 'Topik Utama',
  pembahasan_komprehensif: 'Pembahasan Komprehensif',
  analisis_konsep_desc: 'Analisis konsep & opsi salah untuk mencegah miskonsepsi',
  konsep_kunci: 'Konsep Kunci',
  bongkar_pilihan: 'Bongkar Semua Pilihan (Penting!)',
  pilihan: 'Pilihan',
  langkah_penyelesaian: 'Langkah Penyelesaian',
  tips_olimpiade: 'Tips Olimpiade 💭',
  kabupaten: 'Kabupaten',
  provinsi: 'Provinsi',
  nasional: 'Nasional',
  soal_n_dari_m: 'Soal ${n} dari ${m}',
  n_dari_m_terfilter: '${n} dari ${m} terfilter',
  latihan_soal: 'Latihan Soal',
  pelajari_materi: 'Pelajari Materi',
  mempersiapkan_tryout: 'Mempersiapkan Simulasi Tryout...',
  memilah_soal_tryout: 'Sedang memilah dan mengacak 10 soal standar nasional.',
  tryout_selesai: 'Tryout Selesai! 🎉',
  tryout_selesai_desc: 'Hasil pengerjaan Anda telah dianalisis berdasarkan kunci jawaban OSN SD terbaru.',
  medali_emas_unlocked: 'Medali Emas Unlocked!',
  medali_perak_unlocked: 'Medali Perak Unlocked!',
  medali_perunggu_unlocked: 'Medali Perunggu Unlocked!',
  kemampuan_juara_tingkat: 'Kemampuan Anda setara dengan Juara Tingkat ${level}!',
  tetap_semangat: 'Tetap Semangat!',
  tryout_salah_desc: 'Jangan berkecil hati, pelajari kembali pembahasan materi dan coba lagi.',
  akurasi: 'Akurasi',
  total_soal: 'Total Soal',
  benar: 'Benar',
  soal: 'Soal',
  sisa_waktu: 'Sisa Waktu',
  review_pembahasan: 'Review Jawaban & Pembahasan',
  kembali_ke_beranda: 'Kembali ke Beranda',
  tryout_mandiri_title: 'Simulasi Tryout Mandiri',
  soal_n: 'Soal ${n}',
  kembali_ke_hasil: 'Kembali Ke Hasil',
  analisis_pembahasan: 'Analisis Pembahasan',
  pembahasan_no: 'Pembahasan kunci jawaban no. ${n}',
  bongkar_pilihan_simple: 'Bongkar Semua Pilihan',
  navigasi_soal: 'Navigasi Soal',
  klik_nomor_navigasi: 'Klik nomor untuk melompati soal secara instan',
  tryout_warning_desc: 'Ujian bersifat tertutup. Jawaban dan analisis pembahasan hanya akan dimunculkan setelah Anda menekan tombol kumpul.',
  selesai_ujian_keluar: 'Selesai Ujian & Keluar',
  sangat_baik: 'Sangat Baik',
  cukup: 'Cukup',
  butuh_latihan: 'Butuh Latihan',
  weekly_hours_val: '4.5 Jam',
  strongest_concept_val: 'Mekanika & Optika Datar',
  improvement_needed_val: 'Biologi Reproduksi & Astronomi Dasar',
  analitik_desc: 'Pantau kemajuan pemahaman konsep dan statistik kemajuan OSN SD Anda',
  siswa: 'Siswa',
  orang_tua: 'Orang Tua',
  guru_pembina: 'Guru Pembina',
  tingkat_penguasaan: 'Tingkat Penguasaan Materi IPA',
  tingkat_penguasaan_desc: 'Diukur dari akurasi latihan soal terstandar',
  belum_ada_data: 'Belum Ada Data Latihan',
  belum_ada_data_desc: 'Selesaikan minimal 1 soal di Roadmap untuk membuka analisis penguasaan materimu.',
  parent_title: 'Konsistensi & Jam Belajar Mingguan',
  parent_desc: 'Pantau kehadiran aktif harian dan keterlibatan anak',
  waktu_belajar: 'Waktu Belajar',
  fokus_akurasi: 'Fokus Akurasi',
  konsistensi: 'Konsistensi',
  kalender_aktif: 'Kalender Aktif Minggu Ini',
  teacher_title: 'Statistik Standar Kompetensi Pembinaan',
  teacher_desc: 'Analisis penguasaan konsep kurikulum olimpiade sains nasional tingkat SD',
  nilai_rata_rata: 'Nilai Rata-rata Kelas',
  rata_rata_desc: 'Mengungguli 94% dari seluruh pembinaan sekolah.',
  percentile_kelompok: 'Percentile Kelompok',
  percentile_desc: 'Berada pada zona medali perak/emas kabupaten.',
  rekomendasi_pembina: 'Rekomendasi Pembina Kurikulum',
  terkuat: 'Terkuat',
  perlu_fokus: 'Perlu Fokus',
  rekomendasi_hari_ini: 'Rekomendasi Belajar Hari Ini',
  weakest_recommendation: 'Sub-bab ${subBab} menjadi area terlemah dari latihanmu. Luangkan 15 menit lagi untuk mempertajam pemahaman dan menutup gap miskonsepsi.',
  no_weakest_recommendation: 'Mulai latihan pertamamu dari roadmap untuk membuka analisis penguasaan materi yang dipersonalisasi.',
  ringkasan_aktivitas: 'Ringkasan Aktivitas',
  ringkasan_desc: 'Statistik performa kuis kumulatif',
  xp_terkumpul: 'XP Terkumpul:',
  streak_belajar: 'Streak Belajar:',
  soal_dijawab: 'Soal Dijawab:',
  akurasi_rata_rata: 'Akurasi Rata-rata:',
  jawaban_benar_summary: 'Jawaban Benar:',
  tujuh_hari_terakhir: 'Berdasarkan data 7 hari terakhir',
  pengaturan_data: 'Pengaturan Data',
  progres_lokal: 'Semua progres disimpan lokal di browser-mu.',
  reset_semua_progres: 'Reset Semua Progres',
  reset_warning_params: 'Yakin ingin menghapus ${answers} jawaban, ${xp} XP, dan streak ${streak} hari? Tindakan ini tidak dapat dibatalkan.',
  batal: 'Batal',
  ya_hapus: 'Ya, Hapus',
  loading_roadmap: 'Memuat daftar bab dan sub-bab…',
  search_placeholder: 'Cari sub-bab… (mis. cermin, fpb, pecahan)',
  hasil: 'hasil',
  roadmap_ipa_title: 'Roadmap IPA (Olimpiade Sains)',
  roadmap_ipa_subtitle: 'Taksonomi konsep fisika, biologi, & bumi',
  roadmap_mtk_title: 'Roadmap Matematika',
  roadmap_mtk_subtitle: 'Asah logika, pecahan, hingga geometri',
  no_ipa_matches: 'Tidak ada sub-bab IPA cocok.',
  no_mtk_matches: 'Tidak ada sub-bab Matematika cocok.',
  segera: 'Segera',
  bank_soal_terstandar: 'Bank Soal Terstandar',
  aktif: 'Aktif',
  subbab_praktik: 'Sub-bab Praktik',
  filter: 'Filter',
  semua_chip: 'Semua',
  belum_dijawab_chip: 'Belum Dijawab',
  salah_chip: 'Salah',
  tidak_ada_soal_filter: 'Tidak ada soal dalam filter ini 🎉',
  belum_ada_salah_desc: 'Belum ada jawaban salah — bagus! ',
  semua_soal_dijawab_desc: 'Semua soal sudah dijawab. ',
  reset_filter: 'Reset filter',
  video_producer_studio: '🎬 Video Producer Studio',
  pintasan: 'Pintasan',
  video_loop_desc: 'Menjawab 10s → Pembahasan 15s (Loop)',
  shortcut_select: 'pilih opsi',
  shortcut_check: 'cek / lanjut',
  shortcut_nav: 'navigasi soal',
  shortcut_help: 'toggle bantuan',
  timer_soal_opt: 'Timer Soal (10s)',
  auto_pilot_opt: 'Auto-Pilot',
  in_frame_split_opt: 'In-Frame Split',
  music_loop_opt: 'Music Loop',
  mulai_rekam_btn: 'Mulai Rekam (Layar Bersih)',
  skor_sesi: 'Skor sesi:',
  tekan_key_shortcuts: 'Tekan ${key} untuk pintasan keyboard',
  pilihan_n: 'Pilihan ${n}:',
  materi_teori_empty: 'Materi Teori Belum Tersedia',
  materi_teori_empty_desc: 'Sub-bab ini belum dilengkapi materi teori. Mulai latihan untuk belajar lewat pembahasan tiap soal.',
  materi_pelajaran: 'Materi Pelajaran',
  pelajari_konsep_inti_desc: 'Pelajari konsep inti sebelum mengerjakan soal.',
  mulai_latihan_btn: 'Mulai Latihan',
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
  halo_calon_medali_emas: 'Hello, Future Gold Medalist! 👋',
  mulai_belajar: 'Start Learning',
  lanjutkan: 'Continue',
  kumpulkan_jawaban: 'Submit Answers',
  hasil_tryout_simulasi: 'Tryout Simulation Results',
  koleksi_medali: 'Your OSN Medal Collection',
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
  pelajar_tekun: 'Diligent Student',
  pemula_bersemangat: 'Eager Beginner',
  streak_menyala_params: 'Streak of ${streak} days active 🔥 — keep up your pace to claim the top spot!',
  mulai_latihan_streak: 'Start your first practice today to build streaks and collect medals.',
  kuis_kilat: 'Lightning Quiz',
  kuis_kilat_desc: '5 random questions — finish in 2 minutes',
  mulai_streak_hari_ini: 'Start your first streak today!',
  hari_lagi_chest: '${days} more days to claim Golden Chest',
  pertahankan_streak: 'Keep up your streak!',
  xp_lagi_level: '${xp} more XP for Level ${level}',
  medali_emas: 'Gold Medal',
  medali_perak: 'Silver Medal',
  medali_perunggu: 'Bronze Medal',
  video_selesai_alert: 'Video Production Finished! 🎉 All quiz questions have been automatically completed.',
  data_soal_tidak_ditemukan: 'Question Data Not Found',
  gagal_memuat_soal: 'Failed to load quiz content or the quiz data is empty.',
  kembali: 'Back',
  menyiapkan_rekaman: 'Preparing Recording Mode...',
  waktu_menjawab: 'Answering Time...',
  durasi_pembahasan: 'Explanation Duration...',
  detik: 'Seconds',
  topik_utama: 'Main Topic',
  pembahasan_komprehensif: 'Comprehensive Explanation',
  analisis_konsep_desc: 'Analysis of concepts & incorrect options to prevent misconceptions',
  konsep_kunci: 'Key Concept',
  bongkar_pilihan: 'Deconstruct All Options (Important!)',
  pilihan: 'Option',
  langkah_penyelesaian: 'Solution Steps',
  tips_olimpiade: 'Olympiad Tips 💭',
  kabupaten: 'Regency/City',
  provinsi: 'Province',
  nasional: 'National',
  soal_n_dari_m: 'Question ${n} of ${m}',
  n_dari_m_terfilter: '${n} of ${m} filtered',
  latihan_soal: 'Practice Questions',
  pelajari_materi: 'Study Material',
  mempersiapkan_tryout: 'Preparing Tryout Simulation...',
  memilah_soal_tryout: 'Selecting and shuffling 10 national-standard questions.',
  tryout_selesai: 'Tryout Completed! 🎉',
  tryout_selesai_desc: 'Your work has been analyzed based on the latest OSN SD answer keys.',
  medali_emas_unlocked: 'Gold Medal Unlocked!',
  medali_perak_unlocked: 'Silver Medal Unlocked!',
  medali_perunggu_unlocked: 'Bronze Medal Unlocked!',
  kemampuan_juara_tingkat: 'Your ability is equivalent to the ${level} Level Champion!',
  tetap_semangat: 'Keep It Up!',
  tryout_salah_desc: "Don't be discouraged, study the materials and explanations, then try again.",
  akurasi: 'Accuracy',
  total_soal: 'Total Questions',
  benar: 'Correct',
  soal: 'Questions',
  sisa_waktu: 'Time Left',
  review_pembahasan: 'Review Answers & Explanation',
  kembali_ke_beranda: 'Back to Home',
  tryout_mandiri_title: 'Independent Tryout Simulation',
  soal_n: 'Question ${n}',
  kembali_ke_hasil: 'Back to Results',
  analisis_pembahasan: 'Explanation Analysis',
  pembahasan_no: 'Answer key explanation no. ${n}',
  bongkar_pilihan_simple: 'Deconstruct All Options',
  navigasi_soal: 'Question Navigation',
  klik_nomor_navigasi: 'Click a number to jump to a question instantly',
  tryout_warning_desc: 'The exam is closed-book. Answers and explanations will only be displayed after you submit.',
  selesai_ujian_keluar: 'Finish Exam & Exit',
  sangat_baik: 'Excellent',
  cukup: 'Satisfactory',
  butuh_latihan: 'Needs Practice',
  weekly_hours_val: '4.5 Hours',
  strongest_concept_val: 'Mechanics & Flat Optics',
  improvement_needed_val: 'Reproductive Biology & Basic Astronomy',
  analitik_desc: 'Monitor your concept mastery progress and OSN SD progress statistics',
  siswa: 'Student',
  orang_tua: 'Parent',
  guru_pembina: 'Coach/Teacher',
  tingkat_penguasaan: 'Science Topic Mastery Level',
  tingkat_penguasaan_desc: 'Measured by standardized practice question accuracy',
  belum_ada_data: 'No Practice Data Yet',
  belum_ada_data_desc: 'Solve at least 1 question in the Roadmap to unlock your topic mastery analysis.',
  parent_title: 'Consistency & Weekly Study Hours',
  parent_desc: 'Monitor daily active attendance and child engagement',
  waktu_belajar: 'Study Time',
  fokus_akurasi: 'Accuracy Focus',
  konsistensi: 'Consistency',
  kalender_aktif: 'Active Calendar This Week',
  teacher_title: 'Coaching Competency Standards Statistics',
  teacher_desc: 'Mastery analysis of OSN primary school science concepts',
  nilai_rata_rata: 'Class Average Score',
  rata_rata_desc: 'Outperforming 94% of all school coaching programs.',
  percentile_kelompok: 'Group Percentile',
  percentile_desc: 'Within the regency gold/silver medal range.',
  rekomendasi_pembina: 'Curriculum Coach Recommendations',
  terkuat: 'Strongest',
  perlu_fokus: 'Needs Focus',
  rekomendasi_hari_ini: "Today's Study Recommendation",
  weakest_recommendation: 'Topic ${subBab} is your weakest area. Spend another 15 minutes to sharpen your understanding and close misconception gaps.',
  no_weakest_recommendation: 'Start your first practice from the roadmap to unlock personalized topic mastery analysis.',
  ringkasan_aktivitas: 'Activity Summary',
  ringkasan_desc: 'Cumulative quiz performance stats',
  xp_terkumpul: 'XP Earned:',
  streak_belajar: 'Study Streak:',
  soal_dijawab: 'Questions Answered:',
  akurasi_rata_rata: 'Average Accuracy:',
  jawaban_benar_summary: 'Correct Answers:',
  tujuh_hari_terakhir: 'Based on the last 7 days of data',
  pengaturan_data: 'Data Settings',
  progres_lokal: 'All progress is saved locally in your browser.',
  reset_semua_progres: 'Reset All Progress',
  reset_warning_params: 'Are you sure you want to delete ${answers} answers, ${xp} XP, and a streak of ${streak} days? This action cannot be undone.',
  batal: 'Cancel',
  ya_hapus: 'Yes, Delete',
  loading_roadmap: 'Loading topics and sub-topics...',
  search_placeholder: 'Search sub-topics... (e.g. mirror, gcf, fraction)',
  hasil: 'results',
  roadmap_ipa_title: 'Science Roadmap (Olympiad)',
  roadmap_ipa_subtitle: 'Taxonomy of physics, biology, & earth concepts',
  roadmap_mtk_title: 'Mathematics Roadmap',
  roadmap_mtk_subtitle: 'Sharpen logic, fractions, to geometry',
  no_ipa_matches: 'No matching Science sub-topics.',
  no_mtk_matches: 'No matching Mathematics sub-topics.',
  segera: 'Coming Soon',
  bank_soal_terstandar: 'Standardized Question Bank',
  aktif: 'Active',
  subbab_praktik: 'Practice Sub-topic',
  filter: 'Filter',
  semua_chip: 'All',
  belum_dijawab_chip: 'Unanswered',
  salah_chip: 'Wrong',
  tidak_ada_soal_filter: 'No questions in this filter 🎉',
  belum_ada_salah_desc: 'No wrong answers yet — great! ',
  semua_soal_dijawab_desc: 'All questions have been answered. ',
  reset_filter: 'Reset filter',
  video_producer_studio: '🎬 Video Producer Studio',
  pintasan: 'Shortcuts',
  video_loop_desc: '10s Answering → 15s Explanation (Loop)',
  shortcut_select: 'select option',
  shortcut_check: 'check / continue',
  shortcut_nav: 'navigate questions',
  shortcut_help: 'toggle help',
  timer_soal_opt: 'Question Timer (10s)',
  auto_pilot_opt: 'Auto-Pilot',
  in_frame_split_opt: 'In-Frame Split',
  music_loop_opt: 'Music Loop',
  mulai_rekam_btn: 'Start Recording (Clean Screen)',
  skor_sesi: 'Session score:',
  tekan_key_shortcuts: 'Press ${key} for keyboard shortcuts',
  pilihan_n: 'Choice ${n}:',
  materi_teori_empty: 'Theory Content Not Available Yet',
  materi_teori_empty_desc: 'This sub-topic does not have theory material yet. Start the practice to learn from the explanation of each question.',
  materi_pelajaran: 'Lesson Material',
  pelajari_konsep_inti_desc: 'Learn core concepts before attempting questions.',
  mulai_latihan_btn: 'Start Practice',
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
