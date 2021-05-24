const fs = require('fs')
const http = require('http');

const requestHeaders = function(request, response) {
    fs.readFile(filename, "binary", function(err, file) {
        if(err) {
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.write(err + "\n");
            response.end();
            return;
        }

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(file);
        response.end();
    })
}
