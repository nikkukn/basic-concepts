/*
Sample broadcast channel

Broadcast channel is a more general API for communication.
It lets broadcast messages to all contexts sharing the same origin.
*/

const broadcast = new BroadcastChannel('test_channel')

broadcast.postMessage("This is a simple message");

broadcast.onmessage = function (e) {
    console.log(e.data);
}

broadcast.close();