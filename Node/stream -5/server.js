const fs = require("fs");
const server = require("http").createServer();
// -------------------------------------- Server ------------------------------------
server.on("request", (req, res) => {
    // ------------------------------ Without streams -------------------------------
    // fs.readFile("./text.txt", "utf-8", (err, data) => {
    //     if (err) console.log("Error in file !!!");
    //     res.end(data);
    // });
    // ------------------------------ with Stream ----------------------------------
    // const readble = fs.createReadStream("./text.txt");
    // readble.on("data", (piece) => {
    //     res.write(piece);
    // });
    // readble.on("error", (err) => {
    //     res.writeHeader(500, { "Content-type": "text/html" });
    //     res.end("<h1>File not found !</h1>");
    // });
    // readble.on("end", () => {
    //     res.end();
    // });
    // ----------------------------- Best Practice ---------------------------------
    const readble = fs.createReadStream("./text.txt");
    readble.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening...");
});
