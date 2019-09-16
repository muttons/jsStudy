 
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       'index.html',
       'index.js',
       'style.css',
       'company-directory.html',
       'company-directory-it.html',
       'information-technology.html',
       'helpdesk-request.html',
       'app-logo-512x512.png'
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