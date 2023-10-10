const fs = require("fs");
const http = require("http");
const url = require("url");
// ---------------------------------- Datas -----------------------------------------
const apiData = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const overviewData = fs.readFileSync(
    `${__dirname}/templates/overview.html`,
    "utf-8"
);
const productData = fs.readFileSync(
    `${__dirname}/templates/product.html`,
    "utf-8"
);
const cardData = fs.readFileSync(`${__dirname}/templates/card.html`, "utf-8");
// ---------------------------------- server ----------------------------------------
const server = http.createServer((req, res) => {
    // root
    if (req.url == "/") {
        res.end("Hi from server");
        // api
    } else if (req.url == "/api") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(apiData);
        // overview
    } else if (req.url == "/overview") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(overviewData);
        // not found
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>Page Not Found !!!</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("server is running ...");
});
