self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Pass through all requests to fetch the live Google Apps Script data
  e.respondWith(fetch(e.request).catch(() => console.log('Network request failed')));
});
