const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const indexRoute = require("./routes/index");
const usersRoute = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(indexRoute);
app.use(usersRoute);

app.listen(5000);
