export function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function diffDays(aStr, bStr) {
  const a = new Date(aStr + 'T00:00:00');
  const b = new Date(bStr + 'T00:00:00');
  return Math.round((b - a) / 86400000);
}

export function tickStreak(prev) {
  const today = todayKey();
  if (!prev?.lastActiveDate) {
    return { ...prev, lastActiveDate: today, streak: 1 };
  }
  if (prev.lastActiveDate === today) {
    return prev;
  }
  const gap = diffDays(prev.lastActiveDate, today);
  if (gap === 1) {
    return { ...prev, lastActiveDate: today, streak: (prev.streak || 0) + 1 };
  }
  return { ...prev, lastActiveDate: today, streak: 1 };
}
