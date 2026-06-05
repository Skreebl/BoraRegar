// Змінили назву на унікальну, щоб браузер зрозумів, що це нове
const CACHE_NAME = 'boraregar v1'; 
const urlsToCache = [
  '/BoraRegar/',
  '/BoraRegar/index.html',
  '/BoraRegar/manifest.json',
  '/BoraRegar/sw.js'
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
