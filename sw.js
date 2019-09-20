var CACHE_NAME = 'v6';
var urlsToCache = [
  '/test/',
  '/test/index.html',
  '/test/index.js',
  '/test/style.css',
  '/test/company-directory.html',
  '/test/company-directory-it.html',
  '/test/information-technology.html',
  '/test/helpdesk-request.html',
  '/test/images/flower-512.png',
  '/test/images/flower-192.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then( cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {

        }).map(function(cacheName) {
          return caches.delete(cacheName)
        })
      );
    })
  );
});





self.addEventListener('fetch', event => {
  event.respondWith(

    fetch(event.request).catch(() => {

      return caches.match(event.request);
    })
  );
});

