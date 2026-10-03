import { useId } from 'react';

// Self-contained keyframes: injected once per document instead of touching global CSS, so the
// diagram animations travel with the component (and with the recorded video) as one unit.
const KEYFRAMES = `
@keyframes ix-draw { to { stroke-dashoffset: 0; } }
@keyframes ix-pulse { 0%,100% { opacity: .35; } 50% { opacity: 1; } }
@keyframes ix-flow { to { stroke-dashoffset: -24; } }
@keyframes ix-spin { to { transform: rotate(360deg); } }
@keyframes ix-spin-ccw { to { transform: rotate(-360deg); } }
@keyframes ix-grow { 0% { transform: scaleY(0); } 35%,100% { transform: scaleY(1); } }
@keyframes ix-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
@keyframes ix-rise { 0% { transform: translateY(9px); opacity: 0; } 25%,80% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-9px); opacity: 0; } }
@keyframes ix-swing { 0%,100% { transform: rotate(-13deg); } 50% { transform: rotate(13deg); } }
@keyframes ix-zoom { 0%,100% { transform: scale(1); } 50% { transform: scale(1.055); } }
@keyframes ix-slide { from { transform: translateX(0); } to { transform: translateX(250px); } }
@keyframes ix-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes ix-drip { 0% { transform: translateY(0); opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { transform: translateY(96px); opacity: 0; } }
@keyframes ix-vapor { 0% { transform: translateY(0) scaleY(1); opacity: 0; } 20% { opacity: .75; } 100% { transform: translateY(-70px) scaleY(1.6); opacity: 0; } }
@keyframes ix-glow { 0%,100% { filter: none; } 50% { filter: drop-shadow(0 0 9px currentColor); } }
`;

let injected = false;
function ensureKeyframes() {
  if (injected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-ix-diagrams', '');
  style.textContent = KEYFRAMES;
  document.head.appendChild(style);
  injected = true;
}

/**
 * Shared chrome for every question illustration / explanation animation.
 *
 * `mode="still"`  -> the 10s question phase: figure is calm and readable at a glance.
 * `mode="motion"` -> the 15s explanation phase: loops continuously, motion carries the concept.
 *
 * The `motion` flag is what each family reads to decide whether to animate, so the same diagram
 * component serves both phases without duplicating markup.
 */
export function DiagramFrame({
  title,
  caption,
  mode = 'motion',
  width = 520,
  height = 300,
  boxHeight = null,
  children,
  badge = null,
}) {
  ensureKeyframes();
  const clipId = useId().replace(/:/g, '');

  // Set the width explicitly rather than capping it: as a flex item, a figure with only max-width
  // falls back to its caption's text width and ignores the height budget. maxWidth:100% keeps it
  // responsive on narrow screens. The 1920x1080 recording frame is the hard constraint — a long
  // question stem plus four options already fills most of it, and a figure that pushes option D
  // below the fold is worse than no figure at all.
  const boxWidth = boxHeight ? `${Math.round((boxHeight * width) / height)}px` : null;

  return (
    <figure
      className="mx-auto w-full select-none overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900"
      style={boxWidth ? { width: boxWidth, maxWidth: '100%' } : undefined}
      data-ix-diagram={title}
      data-ix-mode={mode}
    >
      <div className="flex items-center justify-between gap-2 border-b border-slate-700/60 bg-slate-800/70 px-3 py-1.5">
        <figcaption className="truncate text-[11px] font-bold uppercase tracking-wider text-slate-300">
          {title}
        </figcaption>
        <span className="shrink-0 rounded-full bg-slate-700/80 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-slate-300">
          {badge ?? (mode === 'motion' ? 'Animasi' : 'Ilustrasi')}
        </span>
      </div>

      <div className="relative w-full bg-slate-950" style={{ aspectRatio: `${width} / ${height}` }}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-full w-full"
          role="img"
          aria-label={title}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id={clipId}>
              <rect x="0" y="0" width={width} height={height} rx="12" />
            </clipPath>
          </defs>
          <g clipPath={`url(#${clipId})`}>{children({ motion: mode === 'motion', width, height })}</g>
        </svg>
      </div>

      {caption ? (
        <p className="border-t border-slate-700/60 bg-slate-800/50 px-3 py-1.5 text-[11px] leading-snug text-slate-400">
          {caption}
        </p>
      ) : null}
    </figure>
  );
}