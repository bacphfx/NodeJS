const Hotel = require("../models/Hotel");

exports.createHotel = (req, res, next) => {
  const newHotel = new Hotel(req.body);
  newHotel
    .save()
    .then(() => {
      res.status(200).json(newHotel);
    })
    .catch((err) => res.status(500).json(err));
};

exports.updateHotel = (req, res, next) => {
  Hotel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  )
    .then((updateHotel) => {
      res.status(200).json(updateHotel);
    })
    .catch((err) => console.log(err));
};

exports.deleteHotel = (req, res, next) => {
  Hotel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json("Hotel has been deleted!");
    })
    .catch((err) => console.log(err));
};

exports.getHotel = (req, res, next) => {
  Hotel.findById(req.params.id)
    .then((hotel) => {
      res.status(200).json(hotel);
    })
    .catch((err) => console.log(err));
};

exports.getHotels = (req, res, next) => {
  Hotel.find().then((hotels) => {
    return res.status(200).json(hotels);
  });
};
