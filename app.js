const path = require("path");
const express = require("express");

const app = express();

const indexRoute = require("./routes/index");
const usersRoute = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));

app.use(indexRoute);
app.use(usersRoute);

app.listen(3000);
