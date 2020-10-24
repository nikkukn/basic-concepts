/*
Push is based on service workers. The reason for employing service worker is beacuse they
work in background.
Push notification has two different API.
-> It is invoked when server supplies information to service worker.

-> This is action of a service worker or a script in a web app that shows the information
to the user.

Steps to implement push.
1. adding client side logic to subscribe to push.
2. implementing the API call on your server that triggers push message to users device.
3. handling push message once it arrives in browser.
*/

// conditions to browser support detection.

if (!('serviceWorker' in navigator)) {
    // Service Worker isn't supported on this browser, disable or hide UI. 
    return;
}

if (!('PushManager' in window)) {
    // Push isn't supported on this browser, disable or hide UI. 
    return;
}


//Requesting persmission from user to send him push notification.

function requestPermission() {
    return new Promise((resolve, reject) => {
        const persmissionResult = Notification.requestPermission((resolve, reject) => {
            // Handling deprecated version with callback.
            return resolve(result)
        })


        if (persmissionResult) {
            persmissionResult.then(resolve, reject)
        }
    })
        .then((persmissionResult) => {
            if (persmissionResult !== 'granted')
                throw new Error("Permission not granted!")
        })
}

/*
-------- Subscribing a user with Push Manager -------------
Once the service worker is registered and we've got permission, we can subscribe a user by
calling registration.pushManager.subscribe();

The registration.pushManager.subscribe(options) takes an option object which consist of both required and
optional parameter.

userVisibleOnly: A boolean indicating that the push subscription will only be used for messages
which effect is made available to user.

applicationServerKey: A Base-64-encoded DOMString containing a public key that the push server
will used to authenticate your apllication server.


-> Application server keys are unique to your server. They are combination of private and public keys.

-> Private key is stored at your end and public key is exchanged with the client.

-> The keys allows a push service to know which application server subscribed a user and ensure
that it's same server that triggers the push messages to that particular user.

This happens:
--> Web app is loaded and you call subscribe(), passing your server key.

--> The browser makes a network request to  a push service that will generate endpoint, associate
the endpoint with the key and return the endpoint to the browser.

--> The browser will add the endpoint to the PushSubscription object, which is returned via
subscribe object.

When you want to send message, you'll need to create an Authorization Header which contains information
signed with your application server private key. When the push service recieves a request to
send push message, it will validate the header by looking up the public key that is already
linked to that particular endpoint.
*/

// push listener on client side

self.addEventListener('push', (event) => {
    if (event.data) {
        console.log("The push event has data", event.data.text())
    }
    else {
        console.log("The push event has no data")
    }
})

// service worker to tell that the work is going on untill the promise settles

self.addEventListener('push', (event) => {
    let promise = self.registation.showNotification("Push Notification");

    event.waitUntil(promise);
})
