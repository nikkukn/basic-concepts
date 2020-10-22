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