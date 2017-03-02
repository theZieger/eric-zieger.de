var STATIC_CACHE = 'EOZ::STATIC';

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/src/images/bg.jpg',
        '/src/images/eric-zieger.jpg',
        '/src/images/favicon.ico'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .catch(function() {
        return fetch(event.request);
      })
      .then(function(response) {

        var update = fetch(event.request).then(function(updateResponse) {
          if (updateResponse.ok) {
            caches.open(STATIC_CACHE).then(function(cache) {
              cache.put(event.request.url, updateResponse.clone());
            });
          }
        });

        return response || update;
      })
  );
});
