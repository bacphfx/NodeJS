const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/admin", adminRouter);
app.use(shopRouter);

app.listen(5000, () => {
  console.log("Backend is running!");
});
