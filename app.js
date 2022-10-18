const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const moviesRoute = require("./routes/movies");

app.use("/", moviesRoute);

app.listen(5000);
