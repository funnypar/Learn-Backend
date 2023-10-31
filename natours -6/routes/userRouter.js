// ------------------------------------------ core Modules -------------------------------
const express = require("express");
// ------------------------------------------ Own Modules --------------------------------
const userController = require("../controllers/usersHandlers");
// ------------------------------------------ Router -------------------------------------
const userRouter = express.Router();
// -----------------------------------------  Routes -------------------------------------
userRouter
    .route("/")
    .get(userController.getAllUsers)
    .post(userController.postUser);
userRouter
    .route("/:id")
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = userRouter;
