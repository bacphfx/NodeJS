const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  maxPeople: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
});

module.exports = mongoose.model("room", roomSchema);
