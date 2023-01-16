const Hotel = require("../models/hotel");

exports.getHotels = (req, res, next) => {
  Hotel.find()
    // .toArray()
    .then((hotels) => {
      return res.json(hotels);
    });
};
