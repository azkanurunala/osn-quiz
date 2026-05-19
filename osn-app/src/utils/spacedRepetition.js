// spacedRepetition.js — penjadwal review ala SM-2, ringan, localStorage-only.
// Kunci penyimpanan: 'osn-srs' = { [`${subBabId}:${qIndex}`]: { ease, interval, dueAt, reps } }
// Usage:
//   import { recordReview, getDueQueue, getStats } from '../utils/spacedRepetition';
//   recordReview('mtk-02', 17, true);            // dipanggil sehabis "Cek Jawaban"
//   const dueIdx = getDueQueue('mtk-02', soal);  // antrean soal jatuh tempo
//   const { totalTracked, dueNow, retentionPct } = getStats();

const STORAGE_KEY = 'osn-srs';
const DAY_MS = 86400000;

function readAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeAll(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* quota / SSR — abaikan */
  }
}

function makeKey(subBabId, qIndex) {
  return `${subBabId}:${qIndex}`;
}

export function recordReview(subBabId, qIndex, wasCorrect) {
  if (!subBabId || qIndex == null) return null;
  const all = readAll();
  const key = makeKey(subBabId, qIndex);
  const prev = all[key] || { ease: 2.5, interval: 1, dueAt: 0, reps: 0 };
  const now = Date.now();

  let next;
  if (wasCorrect) {
    const ease = Math.min(prev.ease + 0.1, 3.2);
    const interval = Math.max(1, Math.round(prev.interval * ease));
    next = {
      ease,
      interval,
      dueAt: now + interval * DAY_MS,
      reps: prev.reps + 1,
    };
  } else {
    next = {
      ease: Math.max(prev.ease - 0.2, 1.3),
      interval: 1,
      dueAt: now + DAY_MS,
      reps: 0,
    };
  }

  all[key] = next;
  writeAll(all);
  return next;
}

export function getDueQueue(subBabId, questions, max = 10) {
  const all = readAll();
  const now = Date.now();
  const total = Array.isArray(questions) ? questions.length : Number(questions) || 0;
  if (!subBabId || total <= 0) return [];

  const neverSeen = [];
  const dueSeen = [];

  for (let i = 0; i < total; i += 1) {
    const rec = all[makeKey(subBabId, i)];
    if (!rec) {
      neverSeen.push(i);
    } else if (rec.dueAt <= now) {
      dueSeen.push({ idx: i, dueAt: rec.dueAt });
    }
  }

  dueSeen.sort((a, b) => a.dueAt - b.dueAt);
  return [...neverSeen, ...dueSeen.map((d) => d.idx)].slice(0, max);
}

export function getStats() {
  const all = readAll();
  const now = Date.now();
  const entries = Object.values(all);
  const totalTracked = entries.length;
  const dueNow = entries.filter((e) => (e.dueAt || 0) <= now).length;
  const mature = entries.filter((e) => (e.ease || 0) > 2.0).length;
  const retentionPct = totalTracked === 0 ? 0 : Math.round((mature / totalTracked) * 100);
  return { totalTracked, dueNow, retentionPct };
}
