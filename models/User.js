const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  fullname: {
    type: String,
    // require: true,
  },
  phoneNumber: {
    type: String,
    // require: true,
    // unique: true,
  },
  email: {
    type: String,
    // require: true,
    // unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  transactions: [String],
});

module.exports = mongoose.model("user", userSchema);
