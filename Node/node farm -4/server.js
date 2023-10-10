const fs = require("fs");
const http = require("http");
const url = require("url");
// ---------------------------------- Datas -----------------------------------------
const apiData = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
// ---------------------------------- server ----------------------------------------
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Hi from server");
    } else if (req.url == "/api") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(apiData);
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("server is running ...");
});
