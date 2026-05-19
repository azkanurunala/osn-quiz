// Utility untuk validasi & penerapan impor progres OSN.
// Contoh pemakaian:
//   import { validateImport, applyImport } from '../utils/importProgress';
//   const parsed = JSON.parse(text);
//   const v = validateImport(parsed);
//   if (v.ok) applyImport(parsed);

const KEYS = {
  stats: 'osn-stats',
  progress: 'osn-progress',
  bookmarks: 'osn-bookmarks',
  activity: 'osn-activity',
};

export function validateImport(parsed) {
  if (!parsed || typeof parsed !== 'object') {
    return { ok: false, error: 'File tidak valid: bukan objek JSON yang dikenali.' };
  }
  if (parsed.version !== 1) {
    return { ok: false, error: 'Versi file tidak didukung. Gunakan file ekspor versi 1.' };
  }
  const data = parsed.data;
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return { ok: false, error: 'Field "data" tidak ditemukan atau formatnya salah.' };
  }
  const { stats, progress } = data;
  if (!stats || typeof stats !== 'object' || Array.isArray(stats)) {
    return { ok: false, error: 'Bagian "stats" tidak ditemukan pada file impor.' };
  }
  const xpOk = typeof stats.xp === 'number';
  const streakOk = typeof stats.streak === 'number';
  const medalsOk = stats.medals && typeof stats.medals === 'object' && !Array.isArray(stats.medals);
  if (!xpOk || !streakOk || !medalsOk) {
    return { ok: false, error: 'Struktur "stats" tidak lengkap (butuh xp, streak, medals).' };
  }
  if (!progress || typeof progress !== 'object' || Array.isArray(progress)) {
    return { ok: false, error: 'Bagian "progress" harus berupa objek.' };
  }
  return { ok: true };
}

export function applyImport(parsed) {
  try {
    const data = parsed.data;
    if ('stats' in data) localStorage.setItem(KEYS.stats, JSON.stringify(data.stats));
    if ('progress' in data) localStorage.setItem(KEYS.progress, JSON.stringify(data.progress));
    if ('bookmarks' in data) localStorage.setItem(KEYS.bookmarks, JSON.stringify(data.bookmarks));
    if ('activity' in data) localStorage.setItem(KEYS.activity, JSON.stringify(data.activity));
    return true;
  } catch {
    return false;
  }
}
