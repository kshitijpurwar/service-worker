const cacheName = 'v1';

function log(logItem){
    console.log('[SW]', logItem);
} 

const cacheFiles = [
    './index.html',
    './images/cliff.jpg',
    './images/shoreline.jpg',
    'https://fonts.googleapis.com/css?family=Noto+Sans:400,700'
];

self.addEventListener('install', function(event){
    log("Installed ", event);
    event.waitUntil(
        caches.open(cacheName)
            .then( cache => {
                log('Caching files');
                return cache.addAll(cacheFiles);
            })
    )
});

self.addEventListener('activate', e => {
    log("Activated ", e);
});

self.addEventListener('fetch', e => {
    let url = e.request.url;
    log("Fetching ", url);
    e.respondWith(
        caches.match(e.request)
            .then( response =>{

                if(response){
                    log('Found in cache', url );
                    return response;
                }

                return fetch(url);
            })
    )
});