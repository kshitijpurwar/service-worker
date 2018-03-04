if( 'serviceWorker' in navigator){
    console.log('Service Worker found');
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(data => {
            console.log('SW registered', data);
        })
        .catch(error => {
            console.log('SW failed to register', error);
        })
}
    