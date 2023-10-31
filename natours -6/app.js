// ----------------------------------- Core Modules -----------------------------
const express = require("express");
// ----------------------------------  Own Modules -----------------------------
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");
// ----------------------------------- 3rd Party Libraries ----------------------
const morgan = require("morgan");
// ----------------------------------- App --------------------------------------
const app = express();
app.use(morgan("dev"));
app.use(express.json());
// routing
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
