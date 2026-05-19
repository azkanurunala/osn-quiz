// PWA service-worker registration helper for OSN-SD Prep.
//
// Wiring (add to src/main.jsx, e.g. just before ReactDOM.createRoot(...) ):
//   import { registerSW } from './pwa'; registerSW();
//
// Add to index.html inside <head>:
//   <link rel="manifest" href="/manifest.webmanifest"> <meta name="theme-color" content="#e53935">
//
// Behavior:
// - Only registers in production builds (import.meta.env.PROD).
// - Defers to the window 'load' event so it does not compete with first paint.
// - No-ops silently when service workers are unsupported (e.g. older browsers,
//   non-secure contexts, or SSR/Node environments).

export function registerSW() {
  try {
    if (typeof window === 'undefined') return;
    if (!import.meta.env || !import.meta.env.PROD) return;
    if (!('serviceWorker' in navigator)) return;

    const onLoad = () => {
      navigator.serviceWorker
        .register('/sw.js')
        .catch((err) => {
          // Keep failures non-fatal — PWA install is an enhancement.
          if (typeof console !== 'undefined' && console.warn) {
            console.warn('[pwa] SW registration failed:', err);
          }
        });
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }
  } catch {
    // Swallow — registration must never break the app.
  }
}

export default registerSW;
