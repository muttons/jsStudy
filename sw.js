caches.delete('Version2');
var cacheName = 'Version3';

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(cacheName).then(function(cache) {
     return cache.addAll([
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
       '/test/dog.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});



/* test code */



self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
      '/test/dog.jpg',
      '/test/',
       '/test/index.html',
       '/test/index.js',
       '/test/style.css',
       '/test/company-directory.html',
       '/test/company-directory-it.html',
       '/test/information-technology.html',
       '/test/helpdesk-request.html',
       '/test/images/flower-512.png',
       '/test/images/flower-192.png'
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});


