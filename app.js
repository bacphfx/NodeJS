const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  res.send("<p>The Middleware that handles just /users</p>");
});

app.use("/", (req, res, next) => {
  res.send("<p>The Middleware that handles just /</p>");
  // next()
});

app.listen(3000);
