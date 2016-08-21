const apiRe = /https:\/\/cdn\.rawgit\.com\/Naramsim\/ninjask\/master\/data\/api\/v2\/.+\/\d+\/index\.json/;
const imgRe = /images\/\w+\/[\d\w]+\.svg/
const fonttRe = /fonts/

self.addEventListener('fetch', function(event) {
    if (event.request.url.match(apiRe) || event.request.url.match(imgRe) || event.request.url.match(fonttRe)) { // HACK: font caching hack: offline-plugin does not allow caching res with '?' in
        event.respondWith(
            caches.match(event.request).then(function(response) {  
                if (response) {
                    return response;
                }

                return fetch(event.request).then(function(response) {
                    if (event.request.url.match(apiRe)) {
                        caches.open('api').then(function(cache) {
                            cache.add(event.request.url);
                        })
                    }
                    if (event.request.url.match(imgRe)) {
                        caches.open('images').then(function(cache) {
                            cache.add(event.request.url);
                        })
                    }
                    if (event.request.url.match(fonttRe)) {
                        caches.open('font').then(function(cache) {
                            cache.add(event.request.url);
                        })
                    }
                    return response;
                }).catch(function(error) {
                    throw error;
                });
            })  
        );  
    }
});