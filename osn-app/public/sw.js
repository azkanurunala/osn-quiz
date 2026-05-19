/* OSN-SD Prep — minimal service worker
 * Strategy: cache-first for app shell ("/") and built assets ("/assets/*").
 * Cache name is versioned; bump the version to invalidate old caches.
 */
const CACHE_NAME = 'osn-sd-v1';
const PRECACHE_URLS = ['/', '/manifest.webmanifest', '/icon-192.svg', '/icon-512.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

function isCacheable(request) {
  if (request.method !== 'GET') return false;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return false;
  if (url.pathname.startsWith('/assets/')) return true;
  if (url.pathname === '/' || url.pathname === '/index.html') return true;
  if (url.pathname === '/manifest.webmanifest') return true;
  if (url.pathname === '/icon-192.svg' || url.pathname === '/icon-512.svg') return true;
  return false;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (!isCacheable(request)) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          if (!response || !response.ok || response.type === 'opaque') return response;
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
          return response;
        })
        .catch(() => {
          // Navigation fallback: serve cached shell when offline
          if (request.mode === 'navigate') {
            return caches.match('/');
          }
          return Response.error();
        });
    })
  );
});
