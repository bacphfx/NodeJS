const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const productRouter = require("./routes/products");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(productRouter);

app.listen(5000, () => {
  console.log("Backend is running!");
});
