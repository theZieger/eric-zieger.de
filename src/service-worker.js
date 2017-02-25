var STATIC_CACHE = 'EOZ::STATIC';

// On install, cache some resource.
this.addEventListener('install', function(oEvent) {
  // Ask the service worker to keep installing until the returning promise resolves.
  oEvent.waitUntil(
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

function fetchedFromNetwork(response) {
  var cacheCopy = response.clone();

  caches
    .open(STATIC_CACHE)
    .then(function(cache) {
      cache.put(event.request, cacheCopy);
    });

  return response;
}

function unableToResolve () {
  return new Response('<h1>Service Unavailable</h1>', {
    status: 503,
    statusText: 'Service Unavailable',
    headers: new Headers({
      'Content-Type': 'text/html'
    })
  });
}

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(cached) {
        var networked = fetch(event.request)
          .then(fetchedFromNetwork, unableToResolve)
          .catch(unableToResolve);

        return cached || networked;
      })
  );
});
