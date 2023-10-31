// ------------------------------------------ core Modules -------------------------------
const express = require("express");
// ------------------------------------------ Own Modules --------------------------------
const tourController = require("../controllers/toursHandlers");
// ------------------------------------------ Router -------------------------------------
const tourRouter = express.Router();
// -----------------------------------------  Routes -------------------------------------
tourRouter
    .route("/")
    .get(tourController.getAllTours)
    .post(tourController.postTour);
tourRouter
    .route("/:id")
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = tourRouter;
