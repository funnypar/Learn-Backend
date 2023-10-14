// --------------------------------- core modules -----------------------------------
const fs = require("fs");
const http = require("http");
const url = require("url");
// --------------------------------- own modules ------------------------------------
const templateRep = require("./modules/templateRep");

// ---------------------------------- Datas -----------------------------------------
const apiData = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const apiJs = JSON.parse(apiData);
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
    const { query, pathname } = url.parse(`${req.url}`, true);
    // root
    if (pathname == "/") {
        res.end("Hi from server");
        // api
    } else if (pathname == "/api") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(apiData);
        // overview
    } else if (pathname == "/overview") {
        // Write a head
        res.writeHead(200, { "Content-type": "text/html" });
        // Create cards
        let cards = apiJs.map((item) => templateRep(cardData, item)).join("");
        // Put cards in overview
        let overview = overviewData.replace(/{%PRODUCT_CARD%}/g, cards);
        // Show them to the user
        res.end(overview);
        // not found
    } else if (pathname == "/product") {
        res.writeHead(200, { "Content-type": "text/html" });
        // replace product data
        let product = templateRep(productData, apiJs[query.id]);
        // send response
        res.end(product);
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>Page Not Found !!!</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("server is running ...");
});
