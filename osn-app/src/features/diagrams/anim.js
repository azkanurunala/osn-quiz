// Single source of truth for "animate or hold", so a family never has to merge a style prop by
// hand (an explicit `style={...}` after this spread would silently override the animation).
//
//   <g {...anim(motion, 'ix-spin', { origin: '200px 72px' })}>
//
// Lives apart from DiagramFrame.jsx so that file only exports components (fast-refresh rule).

/**
 * @param {boolean} motion  false in the 10s question phase -> returns style with no animation
 * @param {string} name     keyframe name injected by DiagramFrame
 * @param {{origin?:string,duration?:number,extra?:object}} options
 */
export function anim(motion, name, { origin = 'center', duration = 2.4, extra = {} } = {}) {
  const style = { transformOrigin: origin, ...extra };
  if (motion) style.animation = `${name} ${duration}s ease-in-out infinite`;
  return { style };
}