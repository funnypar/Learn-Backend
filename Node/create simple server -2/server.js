// require http library
const http = require("http");
// create a server
const server = http.createServer((req, res) => {
    res.end("Hi from server 😉");
});
// start server
server.listen(8000, "127.0.0.1", () => {
    console.log("server listen to port 8000");
});
