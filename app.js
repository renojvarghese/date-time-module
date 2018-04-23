let http = require("http");
let dateTime = require("./dateTime");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1>\n');
    res.write('\nThe current date and Time is ' + dateTime.getDate());
    res.end();
}).listen(8080);
