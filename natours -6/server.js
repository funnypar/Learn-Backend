// ----------------------------------- core modules -----------------------------
const express = require("express");
// ----------------------------------- Varaibles --------------------------------
const PORT = 8000;
// ----------------------------------- app --------------------------------------
const app = express();
// routing
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello from the server !",
        app: "natours",
        data: new Date(),
    });
});
// listen on that
app.listen(PORT, () => {
    console.log("Server is running ...");
});
