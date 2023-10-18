const fs = require("fs");
const server = require("http").createServer();
// -------------------------------------- Server ------------------------------------
server.on("request", (req, res) => {
    // Without streams
    fs.readFile("./text.txt", "utf-8", (err, data) => {
        if (err) console.log("Error in file !!!");
        res.end(data);
    });
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening...");
});
