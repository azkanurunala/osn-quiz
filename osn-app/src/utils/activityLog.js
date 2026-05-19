// Catatan aktivitas latihan harian.
// Penggunaan:
//   import { logActivity, useActivity } from '../utils/activityLog';
//   logActivity(1);              // catat 1 soal terjawab hari ini
//   const map = useActivity();   // { '2026-05-19': 12, ... }

import { useEffect, useState } from 'react';
import { todayKey } from './streak';

const STORAGE_KEY = 'osn-activity';
const EVENT_NAME = 'osn-activity-change';

function readMap() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function writeMap(map) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // quota / unavailable — abaikan
  }
}

export function logActivity(count = 1) {
  const inc = Number.isFinite(count) && count > 0 ? Math.floor(count) : 1;
  const key = todayKey();
  const map = readMap();
  map[key] = (map[key] || 0) + inc;
  writeMap(map);
  try {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: map }));
  } catch {
    // SSR / non-browser — abaikan
  }
  return map;
}

export function useActivity() {
  const [map, setMap] = useState(() => readMap());

  useEffect(() => {
    const refresh = () => setMap(readMap());
    const onCustom = (e) => setMap(e?.detail || readMap());
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) refresh();
    };
    window.addEventListener(EVENT_NAME, onCustom);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener(EVENT_NAME, onCustom);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return map;
}
