const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  distance: {
    type: String,
    require: true,
  },
  photos: {
    type: [String],
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
    min: 0,
    max: 5,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("hotel", hotelSchema);
