const CACHE = 'erics-cache-5.8.0';

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
                // DevTools opening will trigger these o-i-c requests, which this SW can't handle.
                // There's probaly more going on here, but I'd rather just ignore this problem. :)
                if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
                
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
