var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  userId: String,
  productId: String,
  nameProduct: String,
  priceProduct: String,
  count: Number,
  img: String,
});

var Carts = mongoose.model("Carts", schema, "carts");

module.exports = Carts;
