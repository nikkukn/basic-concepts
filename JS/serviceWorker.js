/*
Sample service worker. If the service worker is supported it will register the 'sw.js' worker

----- INSTALLATION ------

Service worker registered at root accessible to the  whole domain
During installation it's best to load and cache some static assets.

If the servixe worker get installed, the browser will spend extra CPU and memory for 
additional thread.
Once installed for the first time it will handle caching and loading events for subsequent visits.
*/


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
            console.log("service worker registration succcessful")
        }, (err) => {
            console.log("service worker error!")
        })
    })
}


/*
------ ACTIVATION --------
After installation the service worker needs to be activated. The page that registered the service
worker for the first time will won't be controlled until the page is loaded again.

-> It will handle and fetch the message events that occur when the network request is made

-> It will be terminated to save memory.

Those are the steps that need to be taken when the install event is handled:

* Open a cache
* Cache our files
* Confirm whether all of the required assets are cached

*/

var CACHE_NAME = 'my-web-app-cache';

var urlsToCache = [
    '/',
    '/styles/main.css',
    '/scripts/app.js',
    '/scripts/lib.js'
];

self.addEventListener('install', function (event) {
    // event.waitUntil takes a promise to know how
    // long the installation takes, and whether it 
    // succeeded or not.
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});


// return cached assets or perform new request then cache the result.

/*
Here what will happen in this function
Here is what happens in a nutshell:
* The event.respondWith() will determine how we’ll respond to the fetch event. We pass a promise from caches.match() which looks at the request and finds if there are any cached results from any of the caches that have been created.
* If there is a cache, the response is retrieved.
* Otherwise, a fetch will be performed.
* Check if the status is 200. We also check that the response type is basic, which indicates that it’s a request from our origin. Requests to third party assets won’t be cached in this case.
* The response is added to the cache.

*/

self.addEventListener('fetch', (event) => {
    event.respondWith(
        // This method looks at the request and
        // finds any cached results from any of the
        // caches that the Service Worker has created.
        caches.match(event.request)
            .then(function (response) {
                // If a cache is hit, we can return thre response.
                if (response) {
                    return response;
                }

                // Clone the request. A request is a stream and
                // can only be consumed once. Since we are consuming this
                // once by cache and once by the browser for fetch, we need
                // to clone the request.
                var fetchRequest = event.request.clone();

                // A cache hasn't been hit so we need to perform a fetch,
                // which makes a network request and returns the data if
                // anything can be retrieved from the network.

                return fetch(fetchRequest).then(
                    function (response) {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Cloning the response since it's a stream as well.
                        // Because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function (cache) {
                                // Add the request to the cache for future queries.
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                )

            })
    )
})

/*
The new Service Worker will be started and the install event will be fired.
At this point, however, the old Service Worker is still controlling the pages of
your web app which means that the new Service Worker will enter a waiting state.


Once the currently opened pages of your web app are closed,
the old Service Worker will be killed by the browser and the
newly-installed Service Worker will take full control.
This is when its activate event will be fired.
*/


/*
Delete some files from cache that are not whitelisted
*/

self.addEventListener('activate', (event) => {
    const cacheWhiteList = ['page-1', 'page-2']

    event.waitUntil(
        caches.keys().then((cachesNames) => {

            return Promise.all(
                caches.map((cacheName) => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
})


/*
----------- USES ---------------

-> Push Notifications - allow users to opt-in timely updates from web apps

-> Background async - allows you to defer actions until the user has stable connectivity

-> Periodic sync - API that provides functionality for managing periodic background synchronization.

-> Geofencing - you can define parameters, also referred to as geofences which surround the areas of interest.
The web app gets a notification when the device crosses a geofence,
 which allows you to provide useful experience based on the geography of the user.

*/