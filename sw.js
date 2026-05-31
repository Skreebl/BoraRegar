const CACHE_NAME = 'regas-cache-v1';
const urlsToCache = [
  './',
  './index.html', // Якщо твій головний файл називається інакше (напр. polivka.html), то впиши тутка його назву
  './manifest.json',
  './sw.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
