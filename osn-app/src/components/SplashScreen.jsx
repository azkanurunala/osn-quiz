/**
 * SplashScreen — branded loading overlay for OSN-SD Prep.
 *
 * Props:
 *   durationMs?: number   // auto-dismiss delay in ms (default 1500)
 *   done?:       boolean  // when true, hides immediately
 *   onDismiss?:  () => void // fired right after the fade-out completes
 *
 * Wiring example (place at top of App return tree):
 *   <SplashScreen durationMs={1800} />
 *   // or, gated by an "app-ready" flag:
 *   <SplashScreen done={appReady} onDismiss={() => console.log('splash gone')} />
 */
import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';

const FADE_MS = 450;

export default function SplashScreen({ durationMs = 1500, done = false, onDismiss }) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  // Auto-dismiss after durationMs (or immediately when `done` flips true).
  useEffect(() => {
    if (done) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => setVisible(false), Math.max(0, durationMs));
    return () => clearTimeout(t);
  }, [durationMs, done]);

  // Unmount after the fade transition finishes.
  useEffect(() => {
    if (visible) return;
    const t = setTimeout(() => {
      setMounted(false);
      if (typeof onDismiss === 'function') onDismiss();
    }, FADE_MS);
    return () => clearTimeout(t);
  }, [visible, onDismiss]);

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Memuat materi olimpiade"
      className={`fixed inset-0 z-50 bg-mesh flex items-center justify-center transition-opacity ease-out ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      {/* Soft red/blue radial blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-60 animate-pulse-slow"
        style={{ background: 'radial-gradient(closest-side, rgba(229,57,53,0.35), transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-60 animate-pulse-slow"
        style={{ background: 'radial-gradient(closest-side, rgba(37,99,235,0.32), transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(closest-side, rgba(229,57,53,0.18), transparent 70%)' }}
      />

      <div className="relative flex flex-col items-center gap-7 px-6 text-center">
        {/* Animated logo: spinning ring around a rounded-square Trophy badge */}
        <div className="relative h-28 w-28 flex items-center justify-center">
          {/* Outer spinning conic ring */}
          <div
            className="absolute inset-0 rounded-[2rem] animate-spin-slow"
            style={{
              background:
                'conic-gradient(from 0deg, #e53935 0deg, #2563eb 140deg, transparent 220deg, #e53935 360deg)',
              padding: '3px',
              WebkitMask:
                'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          {/* Inner badge */}
          <div
            className="relative h-24 w-24 rounded-[1.65rem] flex items-center justify-center animate-pulse-slow shadow-xl"
            style={{
              background:
                'linear-gradient(135deg, #e53935 0%, #c62828 55%, #2563eb 140%)',
              boxShadow:
                '0 18px 40px -10px rgba(229,57,53,0.45), 0 8px 20px -8px rgba(37,99,235,0.35)',
            }}
          >
            <Trophy className="h-12 w-12 text-white drop-shadow" strokeWidth={2.25} />
          </div>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-heading font-black tracking-tight text-4xl sm:text-5xl text-gray-900">
            OSN-SD{' '}
            <span style={{ color: 'var(--color-brand-primary, #e53935)' }}>Prep</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600">Memuat materi olimpiade…</p>
        </div>

        {/* 3-dot bounce loader */}
        <div className="flex items-center gap-2" aria-hidden="true">
          <span
            className="h-2.5 w-2.5 rounded-full animate-bounce"
            style={{ backgroundColor: '#e53935', animationDelay: '0ms' }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full animate-bounce"
            style={{ backgroundColor: '#2563eb', animationDelay: '150ms' }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full animate-bounce"
            style={{ backgroundColor: '#e53935', animationDelay: '300ms' }}
          />
        </div>
      </div>
    </div>
  );
}
