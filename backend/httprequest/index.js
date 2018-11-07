var http = require('http'),
	fs = require('fs'),
	js2xmlparser = require("js2xmlparser");

var data = fs.readFileSync('data.json');
var anggit = js2xmlparser.parse("person", data);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(anggit);
}).listen(8080); 

console.log('in port : 8080')