// This file contains important points related to node js implementation

// Preferred method of resolving unhandled expressions in node. Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler for uncaughtException even
process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});

// argument passed in node js handler 
function callback(err, results) {
    // usually we'll check for the error before handling results
    if(err) {
        // handle error somehow and return
    }
    // no error, perform standard callback handling
}

// Making HTTP request
const request = require('request');
const options = {
    url: 'https://nodejs.org/file.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};

request(options, function(err, res, body) {
    let json = JSON.parse(body);
    console.log(json);
});


// node spawning multiple clusters to take advantage of the multi-core systems
const cluster = require('cluster');
const http = require('http');
const { worker } = require('node:cluster');
const numCPUs = require('os').cpus().length;


if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    })
}else {
    // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}