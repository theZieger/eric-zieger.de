const CACHE = 'erics-cache-1.0.4';

self.addEventListener('install', function(event) {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE).then(function(cache) {
            return cache.addAll([
                'index.html',
                'eric-zieger.jpg',
                'favicon.ico',
                'site.webmanifest'
            ]);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fromCache(event.request).then(
            function(response) {
                return response;
            },
            function() {
                return fetch(event.request).then(function(response) {
                    event.waitUntil(
                        updateCache(event.request, response.clone())
                    );

                    return response;
                });
            }
        )
    );
});

function fromCache(request) {
    return caches.open(CACHE).then(function(cache) {
        return cache.match(request).then(function(matching) {
            if (!matching || matching.status === 404) {
                return Promise.reject('no-match');
            }

            return matching;
        });
    });
}

function updateCache(request, response) {
    return caches.open(CACHE).then(function(cache) {
        return cache.put(request, response);
    });
}
