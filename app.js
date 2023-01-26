const mongoose = require("mongoose");
const cors = require("cors");

const express = require("express");

const app = express();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const hotelRoute = require("./routes/hotels");
const roomRoute = require("./routes/rooms");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

app.use((req, res, next) => {
  res.status(404).send({ message: "Route not found" });
});

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
