// Ekspor seluruh progres belajar (stats, progress, bookmarks, activity) ke file JSON.
// Usage:
//   import { exportProgressFile } from '@/utils/exportProgress';
//   <button onClick={exportProgressFile}>Ekspor Progres</button>

const STORAGE_KEYS = {
  stats: 'osn-stats',
  progress: 'osn-progress',
  bookmarks: 'osn-bookmarks',
  activity: 'osn-activity',
};

function readJSON(key) {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    if (raw === null || raw === undefined) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return raw;
    }
  } catch {
    return null;
  }
}

function pad2(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

function todayStamp(d = new Date()) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

export function exportProgressFile() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;

  const stats = readJSON(STORAGE_KEYS.stats);
  const progress = readJSON(STORAGE_KEYS.progress);
  const bookmarks = readJSON(STORAGE_KEYS.bookmarks);
  const activity = readJSON(STORAGE_KEYS.activity);

  const isEmpty =
    stats === null && progress === null && bookmarks === null && activity === null;
  if (isEmpty) return false;

  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    data: { stats, progress, bookmarks, activity },
  };

  const json = JSON.stringify(payload, null, 2);
  const filename = `osn-sd-progress-${todayStamp()}.json`;

  try {
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // Lepas URL setelah klik supaya tidak bocor.
    setTimeout(() => URL.revokeObjectURL(url), 0);
    return true;
  } catch {
    return false;
  }
}

export default exportProgressFile;
