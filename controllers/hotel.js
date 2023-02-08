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

exports.countByCity = (req, res, next) => {
  const cities = req.query.cities
    .split(",")
    .map((str) => str.replaceAll("_", " "));

  Promise.all(
    cities.map((city) => {
      return Hotel.countDocuments({ city: city });
    })
  )
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((err) => console.log(err));
};

exports.countByType = (req, res, next) => {
  const types = ["hotel", "apartment", "resort", "villa", "cabin"];

  Promise.all(
    types.map((type) => {
      return {
        type: type.charAt(0).toUpperCase() + type.slice(1),
        count: Hotel.countDocuments({ type: type })[0],
      };
    })
  )
    .then((type, count) => {
      res.status(200).json(list);
    })
    .catch((err) => console.log(err));
};
