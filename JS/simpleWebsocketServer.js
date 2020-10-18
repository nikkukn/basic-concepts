/*
Create a simple web socket example
*/
// server side
var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function (request, response) {
    // process HTTP request. 
});
server.listen(1337, function () { });

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function (request) {
    var connection = request.accept(null, request.origin);

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function (message) {
        // Process WebSocket message
    });

    connection.on('close', function (connection) {
        // Connection closes
    });
});

//client side

var socket = new WebSocket('ws://websocket.example.com');

// Show a connected message when the WebSocket is opened. Data in web socket is sent in th form of frames
socket.onopen = function (event) {
    console.log('WebSocket is connected.');
};

// Handle messages sent by the server.
socket.onmessage = function (event) {
    var message = event.data;
    console.log(message);
};


// Close if the connection is open.
if (socket.readyState === WebSocket.OPEN) {
    socket.close();
}

//The server has to listen on the close event in order to process it if needed:

connection.on('close', function (reasonCode, description) {
    // The connection is getting closed.
});
/*

------ HEARTBEAT --------
At any point after the handshake, either the client or the server can choose to send a ping to the other party. When the ping is received, the recipient must send back a pong as soon as possible.
That’s a heartbeat. You can use it to make sure that the client is still connected.
 */