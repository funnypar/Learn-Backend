// libraries
const fs = require("fs");
const http = require("http");
const url = require("url");
// ------------------------------------- Datas ----------------------------------------
const data = fs.readFileSync("../dev-data/data.json", "utf-8");
// ------------------------------------- Server ---------------------------------------
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Hi from server");
    } else if (req.url === "/api") {
        res.writeHead(200, {
            "Content-type": "application/json",
        });
        res.end(data);
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
        });
        res.end("<h1>Hi from server<h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("server is running ...");
});
