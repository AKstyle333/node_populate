const express = require("express");
const connectDB = require("./db/dbConnection");
const router = require("./routes/v1");
const app = express();
const port = 3333;
app.listen(port, () => {
    console.log("Server is running at", port);
});

app.use(express.json());
app.use("/v1", router);
connectDB();
