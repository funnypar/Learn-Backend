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
app.use(express.json());
// routing-get
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
// routing-post
app.post("/api/v1/tours", (req, res) => {
    // create new id
    const newId = tours[tours.length - 1].id + 1;
    // create new tour
    const newTour = Object.assign({ id: newId }, req.body);

    // push newTour in tours
    tours.push(newTour);
    // write that on tours
    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        (err, data) => {
            if (err) {
                res.status(501).json({
                    status: "not implemented",
                    message: "There is an error !!!",
                });
            }
            res.status(201).json({
                status: "created",
                date: new Date().toString(),
                newTour: tours[tours.length - 1],
            });
        }
    );
});
// listen on that
app.listen(PORT, () => {
    console.log("Server is running ...");
});
