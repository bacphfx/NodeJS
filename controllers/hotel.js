const Hotel = require("../models/Hotel");

exports.getHotels = (req, res, next) => {
  Hotel.find()
    // .toArray()
    .then((hotels) => {
      return res.status(200).json(hotels);
    });
};

exports.createHotel = (req, res, next) => {
  const newHotel = new Hotel(req.body);
  newHotel
    .save()
    .then(() => {
      res.status(200).json(newHotel);
      console.log("Hotel created");
    })
    .catch((err) => res.status(500).json(err));
};
