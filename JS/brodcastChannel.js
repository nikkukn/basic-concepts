/*
Sample broadcast channel

Broadcast channel is a more general API for communication.
It lets broadcast messages to all contexts sharing the same origin.
*/

const brodcast = new BroadcastChannel('test_channel')

brodcast.postMessage("This is a simple message");

brodcast.onmessage = function (e) {
    console.log(e.data);
}

brodcast.close();