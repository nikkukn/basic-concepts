/*
Implement demo web worker
*/


// main.js
const worker = new worker('task.js');

// The browser will spawn a new thread which donwloads files asynchronously. Right after the download is completed
//it will be executed and the worker will begin.

/*
Sample example to implement a web worker that can communicate back and forth with it, by passing
JSON object as a more complicated example.
*/

// main.js
function startComputation() {
    worker.postMessage({ 'cmd': 'average', 'data': [1, 2, 3] })
}

worker.addEventListener('message', (event) => {
    console.log(event.data)
}, false);


// task.js

self.addEventListener('message', (event) => {
    let data = event.data;
    switch (data.cmd) {
        case 'average':
            let result = calculateAverage(data);
            self.postMessage(result);
            break;
        default:
            self.postMessage("unknown command");
    }
})


/*
------Execution Steps-------

-> When the button is clicked postMessage will be called from main page which will pass the params to worker.

-> When message arrives computation handled without blocking event loop. When the result is
   calculated it is passed to the event loop.

-> You can stop the worker using worker.terminate() or self.close()
*/