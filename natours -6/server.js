// ----------------------------------- Core Modules -----------------------------
const fs = require("fs");
const express = require("express");
// ----------------------------------- 3rd Party Libraries ----------------------
const morgan = require("morgan");
// ----------------------------------- Varaibles --------------------------------
const PORT = 8000;
// ----------------------------------- Datas ------------------------------------
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
// ----------------------------------- App --------------------------------------
const app = express();
app.use(morgan("dev"));
app.use(express.json());
// ------------------------------------ Tours Functions -------------------------
const getAllTours = (req, res) => {
    res.status(200).json({
        status: "success",
        results: tours.length,
        date: new Date().toString(),
        data: {
            tours: tours,
        },
    });
};
const getTour = (req, res) => {
    const tour = tours.find((el) => el.id === +req.params.id);

    res.status(200).json({
        status: "success",
        date: new Date().toString(),
        data: {
            tour,
        },
    });
};
const postTour = (req, res) => {
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
const updateTour = (req, res) => {
    res.status(200).json({
        status: "success",
        date: new Date().toString(),
        data: {
            tour: "Update your tour here !!!",
        },
    });
};
const deleteTour = (req, res) => {
    res.status(204).json({
        status: "success",
        date: new Date().toString(),
        data: {
            tour: null,
        },
    });
};
// ----------------------------------- User Functions ------------------------------
const getAllUsers = (req, res) => {
    res.status(500).json({
        status: "Server Error",
        date: new Date().toString(),
        message: "This route has not implemented !!!",
    });
};
const postUser = (req, res) => {
    res.status(500).json({
        status: "Server Error",
        date: new Date().toString(),
        message: "This route has not implemented !!!",
    });
};
const getUser = (req, res) => {
    res.status(500).json({
        status: "Server Error",
        date: new Date().toString(),
        message: "This route has not implemented !!!",
    });
};
const updateUser = (req, res) => {
    res.status(500).json({
        status: "Server Error",
        date: new Date().toString(),
        message: "This route has not implemented !!!",
    });
};
const deleteUser = (req, res) => {
    res.status(500).json({
        status: "Server Error",
        date: new Date().toString(),
        message: "This route has not implemented !!!",
    });
};
// routing
const tourRouter = express.Router();
const userRouter = express.Router();
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

tourRouter.route("/").get(getAllTours).post(postTour);
tourRouter.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route("/").get(getAllUsers).post(postUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

// listen on that
app.listen(PORT, () => {
    console.log("Server is running ...");
});
