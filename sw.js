 
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/test/',
       '/test/index.html',
       '/test/index.js',
       '/test/style.css',
       '/test/company-directory.html',
       '/test/company-directory-it.html',
       '/test/information-technology.html',
       '/test/helpdesk-request.html',
       '/test/images/app-logo-512.png',
       '/test/images/app-logo-192.png'
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