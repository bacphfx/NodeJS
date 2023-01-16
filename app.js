const cors = require("cors");
const mongoose = require("mongoose");

const express = require("express");

const app = express();

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://bacphfx:BunDau2210@cluster0.krh9huz.mongodb.net/booking?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Backend is running!");
    });
  })
  .catch((err) => console.log(err));
