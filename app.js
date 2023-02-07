const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();

const MONGO_URI =
  "mongodb+srv://bacphfx:BunDau2210@cluster0.krh9huz.mongodb.net/booking";

const store = new MongoDBStore({
  uri: MONGO_URI,
  collection: "sessions",
});

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const hotelRoute = require("./routes/hotels");
const roomRoute = require("./routes/rooms");
const User = require("./models/User");

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

// app.use((req, res, next) => {
//   if (!req.session.user) {
//     return next();
//   }
//   User.findById(req.session.user._id)
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

app.use((req, res, next) => {
  res.status(404).send({ message: "Route not found" });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log("Backend is running!");
    });
  })
  .catch((err) => console.log(err));
