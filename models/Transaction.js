const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  user: {
    type: String,
    require: true,
  },
  hotel: {
    type: String,
    require: true,
  },
  room: [String],
  dateStart: {
    type: Date,
    require: true,
  },
  dateEnd: {
    type: Date,
    require: true,
  },
  payment: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    default: "Booked",
  },
});

module.exports = mongoose.model("transaction", transactionSchema);
