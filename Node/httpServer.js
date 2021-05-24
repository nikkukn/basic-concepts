const http = require('http');
const requestHeaders = function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Welcome Viewers\n');
}

const server = http.createServer(requestHeaders);
server.listen(4200);