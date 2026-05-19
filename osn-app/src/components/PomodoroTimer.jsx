/**
 * PomodoroTimer — Floating focus-timer widget (Bahasa Indonesia).
 *
 * Props (all optional):
 *   focusMinutes    {number}  default 25  — durasi mode Fokus
 *   breakMinutes    {number}  default 5   — durasi mode Istirahat
 *   storageKey      {string}  default 'osn-pomodoro' — key localStorage
 *   onSessionEnd    {fn}      callback(mode) saat satu sesi selesai
 *
 * Wiring example — taruh di root <App/> agar persisten lintas route:
 *
 *   import PomodoroTimer from './components/PomodoroTimer';
 *   // ...
 *   return (
 *     <>
 *       <Dashboard />
 *       <PomodoroTimer focusMinutes={25} breakMinutes={5} />
 *     </>
 *   );
 *
 * Catatan: state disimpan ke localStorage('osn-pomodoro'), jadi timer tetap
 * lanjut secara visual setelah reload (timeLeft di-restore, bukan dihitung
 * dari wall-clock — sesuai spesifikasi sederhana).
 */

import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Play, Pause, RotateCcw, Minus, Plus, Coffee, Brain } from 'lucide-react';

const STORAGE_KEY_DEFAULT = 'osn-pomodoro';

// Tiny embedded chime (very short sine blip wav, base64). Keeps file self-contained.
// 0.18s ~ 880Hz sine fade-out. Fallback to visual flash if Audio fails.
const CHIME_DATA_URI =
  'data:audio/wav;base64,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';

function fmt(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function loadInitial(storageKey, focusMinutes, breakMinutes) {
  if (typeof window === 'undefined') {
    return { mode: 'focus', timeLeft: focusMinutes * 60, isRunning: false, sessionCount: 0, collapsed: false };
  }
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        mode: parsed.mode === 'break' ? 'break' : 'focus',
        timeLeft: Number.isFinite(parsed.timeLeft)
          ? parsed.timeLeft
          : (parsed.mode === 'break' ? breakMinutes : focusMinutes) * 60,
        isRunning: false, // never auto-resume running on reload
        sessionCount: Number.isFinite(parsed.sessionCount) ? parsed.sessionCount : 0,
        collapsed: !!parsed.collapsed,
      };
    }
  } catch {
    /* ignore corrupt storage */
  }
  return { mode: 'focus', timeLeft: focusMinutes * 60, isRunning: false, sessionCount: 0, collapsed: false };
}

export default function PomodoroTimer({
  focusMinutes = 25,
  breakMinutes = 5,
  storageKey = STORAGE_KEY_DEFAULT,
  onSessionEnd,
}) {
  const initial = useMemo(
    () => loadInitial(storageKey, focusMinutes, breakMinutes),
    [storageKey, focusMinutes, breakMinutes]
  );

  const [mode, setMode] = useState(initial.mode);
  const [timeLeft, setTimeLeft] = useState(initial.timeLeft);
  const [isRunning, setIsRunning] = useState(initial.isRunning);
  const [sessionCount, setSessionCount] = useState(initial.sessionCount);
  const [collapsed, setCollapsed] = useState(initial.collapsed);
  const [flash, setFlash] = useState(false);
  const [announce, setAnnounce] = useState('');

  const intervalRef = useRef(null);
  const audioRef = useRef(null);
  const lastMinuteAnnouncedRef = useRef(null);

  const totalSeconds = (mode === 'focus' ? focusMinutes : breakMinutes) * 60;

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ mode, timeLeft, isRunning, sessionCount, collapsed })
      );
    } catch {
      /* quota / disabled storage — silently ignore */
    }
  }, [storageKey, mode, timeLeft, isRunning, sessionCount, collapsed]);

  // Init audio once
  useEffect(() => {
    try {
      audioRef.current = new Audio(CHIME_DATA_URI);
      audioRef.current.volume = 0.45;
    } catch {
      audioRef.current = null;
    }
  }, []);

  const playChime = useCallback(() => {
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        const p = audioRef.current.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      }
    } catch {
      /* ignore */
    }
    setFlash(true);
    setTimeout(() => setFlash(false), 900);
  }, []);

  const handleSessionEnd = useCallback(() => {
    playChime();
    const finishedMode = mode;
    if (typeof onSessionEnd === 'function') {
      try { onSessionEnd(finishedMode); } catch { /* ignore consumer error */ }
    }
    if (finishedMode === 'focus') {
      setSessionCount((c) => c + 1);
      setMode('break');
      setTimeLeft(breakMinutes * 60);
      setAnnounce('Sesi fokus selesai. Saatnya istirahat.');
    } else {
      setMode('focus');
      setTimeLeft(focusMinutes * 60);
      setAnnounce('Istirahat selesai. Yuk lanjut fokus!');
    }
    setIsRunning(true); // auto-continue into next mode
  }, [mode, breakMinutes, focusMinutes, onSessionEnd, playChime]);

  // Tick
  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          // schedule transition after state flush
          queueMicrotask(handleSessionEnd);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, handleSessionEnd]);

  // Minute-mark aria-live announcements
  useEffect(() => {
    if (!isRunning) return;
    if (timeLeft <= 0) return;
    if (timeLeft % 60 === 0) {
      const minutesLeft = timeLeft / 60;
      if (lastMinuteAnnouncedRef.current !== minutesLeft) {
        lastMinuteAnnouncedRef.current = minutesLeft;
        const label = mode === 'focus' ? 'fokus' : 'istirahat';
        setAnnounce(`${minutesLeft} menit ${label} tersisa.`);
      }
    }
  }, [timeLeft, isRunning, mode]);

  // Toggle
  const toggleRun = useCallback(() => {
    setIsRunning((r) => !r);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft((mode === 'focus' ? focusMinutes : breakMinutes) * 60);
    lastMinuteAnnouncedRef.current = null;
    setAnnounce('Timer direset.');
  }, [mode, focusMinutes, breakMinutes]);

  const switchMode = useCallback((nextMode) => {
    setMode(nextMode);
    setIsRunning(false);
    setTimeLeft((nextMode === 'focus' ? focusMinutes : breakMinutes) * 60);
    lastMinuteAnnouncedRef.current = null;
  }, [focusMinutes, breakMinutes]);

  // Progress ring math
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(1, 1 - timeLeft / totalSeconds));
  const dashOffset = circumference * (1 - progress);

  const ringColor = mode === 'focus' ? '#e53935' : '#2563eb';
  const tintBg =
    mode === 'focus'
      ? 'rgba(229, 57, 53, 0.06)'
      : 'rgba(37, 99, 235, 0.06)';

  // Collapsed pill
  if (collapsed) {
    return (
      <div
        className="fixed bottom-20 md:bottom-5 right-5 z-30"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          aria-label={`Buka timer Pomodoro. ${mode === 'focus' ? 'Mode fokus' : 'Mode istirahat'}, ${fmt(timeLeft)} tersisa.`}
          className={`glass-card relative flex items-center gap-2 rounded-full pl-3 pr-4 py-2 shadow-lg transition-all hover:scale-105 ${
            flash ? 'ring-4 ring-offset-2' : ''
          }`}
          style={{
            background: tintBg,
            border: `1.5px solid ${ringColor}33`,
            color: ringColor,
            ['--tw-ring-color']: ringColor,
          }}
        >
          <span
            className={`inline-flex h-2.5 w-2.5 rounded-full ${isRunning ? 'animate-pulse' : ''}`}
            style={{ background: ringColor }}
            aria-hidden="true"
          />
          {mode === 'focus' ? (
            <Brain size={16} aria-hidden="true" />
          ) : (
            <Coffee size={16} aria-hidden="true" />
          )}
          <span
            className="font-heading text-base font-bold tabular-nums"
            style={{ letterSpacing: '0.02em' }}
          >
            {fmt(timeLeft)}
          </span>
        </button>
        <span className="sr-only" role="status" aria-live="polite">{announce}</span>
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-20 md:bottom-5 right-5 z-30 animate-slide-in"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div
        className={`glass-card rounded-2xl p-4 shadow-xl transition-all w-[230px] ${
          flash ? 'ring-4 ring-offset-2' : ''
        }`}
        style={{
          background: `linear-gradient(180deg, ${tintBg}, rgba(255,255,255,0.75))`,
          borderColor: `${ringColor}33`,
          ['--tw-ring-color']: ringColor,
        }}
        role="region"
        aria-label="Pomodoro Timer"
      >
        {/* Header: mode switch + collapse */}
        <div className="flex items-center justify-between mb-3">
          <div
            className="inline-flex rounded-full p-0.5 text-xs"
            style={{ background: 'rgba(0,0,0,0.04)' }}
            role="tablist"
            aria-label="Mode timer"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'focus'}
              onClick={() => switchMode('focus')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full font-heading font-bold transition-all ${
                mode === 'focus' ? 'shadow' : 'opacity-60 hover:opacity-90'
              }`}
              style={{
                background: mode === 'focus' ? '#e53935' : 'transparent',
                color: mode === 'focus' ? '#fff' : '#374151',
              }}
            >
              <Brain size={12} aria-hidden="true" />
              Fokus
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'break'}
              onClick={() => switchMode('break')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full font-heading font-bold transition-all ${
                mode === 'break' ? 'shadow' : 'opacity-60 hover:opacity-90'
              }`}
              style={{
                background: mode === 'break' ? '#2563eb' : 'transparent',
                color: mode === 'break' ? '#fff' : '#374151',
              }}
            >
              <Coffee size={12} aria-hidden="true" />
              Istirahat
            </button>
          </div>
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            aria-label="Minimalkan timer"
            className="rounded-full p-1 text-gray-500 hover:text-gray-800 hover:bg-black/5 transition-colors"
          >
            <Minus size={14} aria-hidden="true" />
          </button>
        </div>

        {/* Circular progress + time */}
        <div className="relative flex items-center justify-center mb-3">
          <svg width="140" height="140" viewBox="0 0 140 140" aria-hidden="true">
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="8"
            />
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke={ringColor}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              transform="rotate(-90 70 70)"
              style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="font-heading font-bold tabular-nums"
              style={{
                fontSize: '1.9rem',
                lineHeight: 1,
                color: ringColor,
                letterSpacing: '0.01em',
              }}
            >
              {fmt(timeLeft)}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 font-heading font-bold">
              {mode === 'focus' ? 'Fokus' : 'Istirahat'}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={toggleRun}
            aria-label={isRunning ? 'Jeda timer' : 'Mulai timer'}
            className="flex items-center justify-center rounded-full h-10 w-10 text-white shadow-md transition-transform hover:scale-105 active:scale-95"
            style={{ background: ringColor }}
          >
            {isRunning ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={reset}
            aria-label="Reset timer"
            className="flex items-center justify-center rounded-full h-9 w-9 text-gray-600 hover:text-gray-900 bg-white/70 border border-gray-200 hover:bg-white transition-colors"
          >
            <RotateCcw size={15} aria-hidden="true" />
          </button>
        </div>

        {/* Session counter */}
        <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
          <Plus size={10} aria-hidden="true" className="opacity-60" />
          <span>
            <span className="font-heading font-bold text-gray-700">{sessionCount}</span>{' '}
            sesi fokus selesai
          </span>
        </div>
      </div>

      <span className="sr-only" role="status" aria-live="polite">
        {announce}
      </span>
    </div>
  );
}
