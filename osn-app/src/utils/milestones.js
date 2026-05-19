/**
 * Milestone confetti effects for OSN-SD practice and tryout flows.
 *
 * Uses canvas-confetti loaded via dynamic import so SSR and build-time
 * evaluation remain safe (each helper no-ops when `window` is undefined).
 * Every function returns a Promise that resolves after its animation ends.
 *
 * Usage:
 *   import { fireMilestone, fireLevelUp, fireStreakSave, fireMedalUnlock } from '@/utils/milestones';
 *
 *   await fireMilestone(25);            // small brand-color burst
 *   await fireMilestone(50);            // dual side bursts (left + right)
 *   await fireMilestone(75);            // 1.5s rainbow rain
 *   await fireMilestone(100);           // 3s stadium-style finale + center shower
 *   await fireLevelUp();                // gold/yellow star burst
 *   await fireStreakSave();             // orange flame burst from bottom
 *   await fireMedalUnlock('gold');      // medal-tinted slow-gravity burst ('gold'|'silver'|'bronze')
 */

const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined';

const loadConfetti = async () => {
  if (!isBrowser()) return null;
  try {
    const mod = await import('canvas-confetti');
    return mod.default || mod;
  } catch {
    return null;
  }
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const BRAND_COLORS = ['#e53935', '#2563eb', '#eab308', '#10b981'];
const RAINBOW_COLORS = [
  '#ef4444',
  '#f97316',
  '#eab308',
  '#22c55e',
  '#06b6d4',
  '#3b82f6',
  '#8b5cf6',
  '#ec4899',
];
const MEDAL_PALETTES = {
  gold: ['#fde047', '#facc15', '#eab308', '#ca8a04'],
  silver: ['#f3f4f6', '#e5e7eb', '#9ca3af', '#6b7280'],
  bronze: ['#fcd9b6', '#d97706', '#b45309', '#92400e'],
};

const fire25 = async (confetti) => {
  confetti({
    particleCount: 50,
    spread: 60,
    startVelocity: 35,
    origin: { x: 0.5, y: 0.7 },
    colors: BRAND_COLORS,
  });
  await wait(800);
};

const fire50 = async (confetti) => {
  confetti({
    particleCount: 100,
    angle: 60,
    spread: 55,
    startVelocity: 50,
    origin: { x: 0, y: 0.7 },
    colors: BRAND_COLORS,
  });
  confetti({
    particleCount: 100,
    angle: 120,
    spread: 55,
    startVelocity: 50,
    origin: { x: 1, y: 0.7 },
    colors: BRAND_COLORS,
  });
  await wait(1200);
};

const fire75 = async (confetti) => {
  const durationMs = 1500;
  const end = Date.now() + durationMs;
  await new Promise((resolve) => {
    const frame = () => {
      confetti({
        particleCount: 4,
        startVelocity: 0,
        ticks: 200,
        gravity: 0.6,
        spread: 360,
        origin: { x: Math.random(), y: -0.05 },
        colors: RAINBOW_COLORS,
        scalar: 0.9,
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        setTimeout(resolve, 600);
      }
    };
    frame();
  });
};

const fire100 = async (confetti) => {
  const durationMs = 3000;
  const end = Date.now() + durationMs;
  // Center upward shower
  confetti({
    particleCount: 160,
    spread: 100,
    startVelocity: 55,
    origin: { x: 0.5, y: 0.6 },
    colors: BRAND_COLORS,
    scalar: 1.1,
  });
  await new Promise((resolve) => {
    const frame = () => {
      const now = Date.now();
      const timeLeft = end - now;
      const particleCount = Math.max(20, Math.floor(50 * (timeLeft / durationMs)));
      confetti({
        particleCount,
        angle: 60,
        spread: 70,
        startVelocity: 60,
        origin: { x: 0, y: 0.8 },
        colors: BRAND_COLORS,
      });
      confetti({
        particleCount,
        angle: 120,
        spread: 70,
        startVelocity: 60,
        origin: { x: 1, y: 0.8 },
        colors: BRAND_COLORS,
      });
      confetti({
        particleCount: Math.floor(particleCount / 2),
        spread: 360,
        startVelocity: 30,
        origin: { x: 0.5, y: 0.5 },
        colors: BRAND_COLORS,
        scalar: 0.9,
      });
      if (now < end) {
        requestAnimationFrame(frame);
      } else {
        setTimeout(resolve, 800);
      }
    };
    frame();
  });
};

/**
 * Fire a confetti pattern matched to a completion percentage milestone.
 * Accepts 25, 50, 75, or 100 (other values snap to the nearest tier).
 * @param {number} percent
 * @returns {Promise<void>}
 */
export const fireMilestone = async (percent) => {
  const confetti = await loadConfetti();
  if (!confetti) return;

  const tier = [25, 50, 75, 100].reduce((best, t) =>
    Math.abs(t - percent) < Math.abs(best - percent) ? t : best
  , 25);

  if (tier === 25) await fire25(confetti);
  else if (tier === 50) await fire50(confetti);
  else if (tier === 75) await fire75(confetti);
  else await fire100(confetti);
};

/**
 * Gold/yellow burst with star-shaped particles when supported, else default shapes.
 * @returns {Promise<void>}
 */
export const fireLevelUp = async () => {
  const confetti = await loadConfetti();
  if (!confetti) return;

  const colors = ['#fde047', '#facc15', '#eab308', '#fbbf24', '#fef3c7'];
  let shapes;
  try {
    if (typeof confetti.shapeFromText === 'function') {
      shapes = [confetti.shapeFromText({ text: '⭐', scalar: 2 })];
    }
  } catch {
    shapes = undefined;
  }

  const baseOpts = {
    particleCount: 80,
    spread: 90,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.6 },
    colors,
    scalar: 1.2,
  };
  if (shapes) baseOpts.shapes = shapes;

  confetti(baseOpts);
  confetti({
    particleCount: 40,
    spread: 120,
    startVelocity: 30,
    origin: { x: 0.5, y: 0.5 },
    colors,
    scalar: 1,
  });
  await wait(1200);
};

/**
 * Orange flame-like burst rising from the bottom of the viewport.
 * @returns {Promise<void>}
 */
export const fireStreakSave = async () => {
  const confetti = await loadConfetti();
  if (!confetti) return;

  const flameColors = ['#fef3c7', '#fbbf24', '#f97316', '#ea580c', '#dc2626'];

  confetti({
    particleCount: 80,
    angle: 90,
    spread: 55,
    startVelocity: 70,
    origin: { x: 0.5, y: 1.05 },
    colors: flameColors,
    ticks: 250,
    scalar: 1.1,
    gravity: 0.9,
  });
  confetti({
    particleCount: 40,
    angle: 75,
    spread: 35,
    startVelocity: 60,
    origin: { x: 0.35, y: 1.05 },
    colors: flameColors,
    scalar: 0.9,
  });
  confetti({
    particleCount: 40,
    angle: 105,
    spread: 35,
    startVelocity: 60,
    origin: { x: 0.65, y: 1.05 },
    colors: flameColors,
    scalar: 0.9,
  });
  await wait(1100);
};

/**
 * Medal-tinted burst with slower particle gravity for a hangtime feel.
 * @param {'gold'|'silver'|'bronze'} type
 * @returns {Promise<void>}
 */
export const fireMedalUnlock = async (type = 'gold') => {
  const confetti = await loadConfetti();
  if (!confetti) return;

  const palette = MEDAL_PALETTES[type] || MEDAL_PALETTES.gold;

  confetti({
    particleCount: 120,
    spread: 100,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.6 },
    colors: palette,
    gravity: 0.55,
    ticks: 300,
    scalar: 1.15,
  });
  confetti({
    particleCount: 60,
    angle: 60,
    spread: 60,
    startVelocity: 40,
    origin: { x: 0.2, y: 0.7 },
    colors: palette,
    gravity: 0.5,
    ticks: 300,
  });
  confetti({
    particleCount: 60,
    angle: 120,
    spread: 60,
    startVelocity: 40,
    origin: { x: 0.8, y: 0.7 },
    colors: palette,
    gravity: 0.5,
    ticks: 300,
  });
  await wait(1600);
};
