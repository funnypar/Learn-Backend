// require http library
const http = require("http");
const url = require("url");
// create a server
const server = http.createServer((req, res) => {
    // Simple Routing
    if (req.url == "/") {
        res.end("Hi from server !");
    } else if (req.url == "/parsam") {
        res.end("Hi parsam !");
    } else if (req.url == "/mopano") {
        res.end("Hi mopano !");
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
        });
        res.end("<h1>Page not found !<h1>");
    }
});
// start server
server.listen(8000, "127.0.0.1", () => {
    console.log("server listen to port 8000");
});
