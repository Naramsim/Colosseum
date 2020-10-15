const apiRe = /https:\/\/pokeapi\.co\/api\/v2\/.+\/\d+/;
const imgRe = /http.*images\/\w+\/[\d\w-]+\.svg/
const fonttRe = /http.*fonts/
const version = 1

self.addEventListener('fetch', function(event) {
    if (event.request.url.match(apiRe) || event.request.url.match(imgRe) || event.request.url.match(fonttRe)) { // HACK: font caching hack: offline-plugin does not allow caching res with '?' in
        event.respondWith(
            caches.match(event.request).then(function(response) {  
                if (response) {
                    return response;
                }

                return fetch(event.request).then(function(response) {
                    if (event.request.url.match(apiRe)) {
                        caches.open(`api-${version}`).then(function(cache) {
                            cache.add(event.request.url);
                        })
                    }
                    if (event.request.url.match(imgRe)) {
                        caches.open(`images-${version}`).then(function(cache) {
                            cache.add(event.request.url);
                        })
                    }
                    if (event.request.url.match(fonttRe)) {
                        caches.open(`font-${version}`).then(function(cache) {
                            cache.add(event.request.url);
                        })
                    }
                    send_message_to_all_clients("ONLINE")
                    return response;
                }).catch(function(error) {
                    console.log("npe")
                    send_message_to_all_clients("OFFLINE")
                });
            })  
        );  
    }
});

function send_message_to_client(client, msg){
    return new Promise(function(resolve, reject){
        var msg_chan = new MessageChannel();

        msg_chan.port1.onmessage = function(event){
            if(event.data.error){
                reject(event.data.error);
            }else{
                resolve(event.data);
            }
        };

        client.postMessage(msg, [msg_chan.port2]);
    });
}

function send_message_to_all_clients(msg){
    clients.matchAll().then(clients => {
        clients.forEach(client => {
            send_message_to_client(client, msg);
        })
    })
}