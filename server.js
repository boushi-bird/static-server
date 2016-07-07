const StaticServer = require('node-static').Server;
const http = require('http');

const port = process.env.PORT || 9000;

const file = new StaticServer('./public');

http.createServer((req, res) => {
  req.addListener('end', () => {
    file.serve(req, res);
  }).resume();
}).listen(port);
