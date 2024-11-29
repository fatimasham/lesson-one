const http = require('http'); //import http

const server = http.createServer(function(req, res) {
res.write('Hi world');
res.end(); 
})

server.listen(3000);
console.log('My first server is running at PORT 3000');

