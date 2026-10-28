// Bump CACHE_VERSION whenever the precache list or a caching strategy changes.
// On activation every cache from an older version is deleted.
// v2: precache rewritten (no unused images), per-asset precache, network-first
//     resume, query-insensitive resume lookups, RSC requests bypassed.
const CACHE_VERSION = 'v2';
const PRECACHE = `sibin-p-precache-${CACHE_VERSION}`;
const RUNTIME = `sibin-p-runtime-${CACHE_VERSION}`;
const RUNTIME_MAX_ENTRIES = 150;
const OFFLINE_URL = '/offline';

// Only resources the offline experience actually uses. Page images are
// requested through /_next/image and are cached at runtime instead.
const PRECACHE_ASSETS = [
  '/',
  OFFLINE_URL,
  '/manifest.json',
  '/favicon.ico',
  '/resume/sibin-p-full-stack-developer-resume.pdf',
  '/resume/sibin-p-resume.html',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/apple-touch-icon.png',
  '/icons/favicon-32x32.png',
  '/icons/favicon-16x16.png'
];

// Install: precache each asset independently so one failure cannot empty the cache.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) =>
        Promise.allSettled(
          PRECACHE_ASSETS.map((url) => cache.add(new Request(url, { cache: 'reload' })))
        ).then((results) => {
          results.forEach((result, i) => {
            if (result.status === 'rejected') {
              console.warn('[SW] Precache failed for', PRECACHE_ASSETS[i], result.reason);
            }
          });
        })
      )
      .then(() => self.skipWaiting())
  );
});

// Activate: delete caches from previous versions (including the v1 'sibin-p-portfolio-v1').
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== PRECACHE && key !== RUNTIME).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

async function trimRuntimeCache() {
  const cache = await caches.open(RUNTIME);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - RUNTIME_MAX_ENTRIES; i++) {
    await cache.delete(keys[i]);
  }
}

async function putInRuntime(key, response) {
  if (!response || response.status !== 200 || response.type !== 'basic') return;
  const cache = await caches.open(RUNTIME);
  await cache.put(key, response);
  await trimRuntimeCache();
}

function matchAny(request, options) {
  return caches.match(request, options);
}

// Network first, falling back to the cache (used for pages and the resume).
async function networkFirst(request, cacheKey, matchOptions) {
  try {
    const response = await fetch(request);
    if (response.status === 200) putInRuntime(cacheKey, response.clone());
    return response;
  } catch (error) {
    const cached = await matchAny(cacheKey, matchOptions);
    if (cached) return cached;
    throw error;
  }
}

// Serve from cache immediately and refresh in the background.
async function staleWhileRevalidate(request) {
  const cached = await matchAny(request);
  const network = fetch(request)
    .then((response) => {
      putInRuntime(request, response.clone());
      return response;
    })
    .catch(() => cached || new Response('', { status: 408, statusText: 'Offline Asset Unavailable' }));
  return cached || network;
}

// Hashed build output never changes, so the cache is authoritative.
async function cacheFirst(request) {
  const cached = await matchAny(request);
  if (cached) return cached;
  const response = await fetch(request);
  putInRuntime(request, response.clone());
  return response;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle same-origin GET requests (GitHub, LinkedIn, etc. go straight to the network).
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Next.js React Server Component payloads must always match the deployed build.
  if (request.headers.get('RSC') === '1' || url.searchParams.has('_rsc')) return;

  // 1. Page navigations: network first, then this page from cache, then the offline page.
  if (request.mode === 'navigate') {
    event.respondWith(
      networkFirst(request, request, { ignoreSearch: true }).catch(async () => {
        const offline = await matchAny(OFFLINE_URL);
        return (
          offline ||
          new Response('You are offline. Cached portfolio shell is temporarily unavailable.', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: { 'Content-Type': 'text/plain' }
          })
        );
      })
    );
    return;
  }

  // 2. Resume files: always try for the latest version. Cache lookups ignore the
  //    ?v= cache-buster so versioned links work offline against the precached copy.
  if (url.pathname.startsWith('/resume/')) {
    event.respondWith(
      networkFirst(request, url.pathname, { ignoreSearch: true }).catch(
        () => new Response('', { status: 408, statusText: 'Offline Asset Unavailable' })
      )
    );
    return;
  }

  // 3. Immutable build assets.
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // 4. Everything else (optimised images, icons, manifest): stale-while-revalidate.
  event.respondWith(staleWhileRevalidate(request));
});
