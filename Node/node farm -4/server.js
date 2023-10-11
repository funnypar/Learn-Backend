const fs = require("fs");
const http = require("http");
const url = require("url");
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
// ---------------------------------- Functions -------------------------------------
const cardRep = (template, card) => {
    let output = template.replace(/{%IMAGE%}/g, card.image);
    output = output.replace(/{%PRODUCTNAME%}/g, card.productName);
    output = output.replace(/{%QUANTITY%}/g, card.quantity);
    output = output.replace(/{%PRICE%}/g, card.price);
    output = output.replace(/{%ID%}/g, card.id);
    if (!card.organic) {
        output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
    }
    return output;
};
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
        // Write a head
        res.writeHead(200, { "Content-type": "text/html" });
        // Create cards
        let cards = apiJs.map((item) => cardRep(cardData, item)).join("");
        // Put cards in overview
        let overview = overviewData.replace(/{%PRODUCT_CARD%}/g, cards);
        // Show them to the user
        res.end(overview);
        // not found
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>Page Not Found !!!</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("server is running ...");
});
