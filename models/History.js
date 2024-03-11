var mongoose = require("mongoose");

var historySchema = new mongoose.Schema({
  userId: String,
  phone: String,
  address: String,
  cart: Array,
  fullname: String,
  total: String,
  status: Boolean,
  delivery: Boolean,
});

var Histories = mongoose.model("Histories", historySchema);

module.exports = Histories;
