// ----------------------------------- Core Modules -----------------------------
const fs = require("fs");
const express = require("express");
// ----------------------------------- Varaibles --------------------------------
const PORT = 8000;
// ----------------------------------- Datas ------------------------------------
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
// ----------------------------------- App --------------------------------------
const app = express();
// routing
app.get("/api/v1/tours", (req, res) => {
    res.status(200).json({
        status: "success",
        results: tours.length,
        date: new Date().toString(),
        data: {
            tours: tours,
        },
    });
});
// listen on that
app.listen(PORT, () => {
    console.log("Server is running ...");
});
