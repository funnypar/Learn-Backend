// ----------------------------------- Core Modules -----------------------------
const fs = require("fs");
// ----------------------------------- Datas ------------------------------------
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
// ------------------------------------ Handlers -------------------------
exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: "success",
        results: tours.length,
        date: new Date().toString(),
        data: {
            tours: tours,
        },
    });
};
exports.getTour = (req, res) => {
    const tour = tours.find((el) => el.id === +req.params.id);

    res.status(200).json({
        status: "success",
        date: new Date().toString(),
        data: {
            tour,
        },
    });
};
exports.postTour = (req, res) => {
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
};
exports.updateTour = (req, res) => {
    res.status(200).json({
        status: "success",
        date: new Date().toString(),
        data: {
            tour: "Update your tour here !!!",
        },
    });
};
exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: "success",
        date: new Date().toString(),
        data: {
            tour: null,
        },
    });
};
