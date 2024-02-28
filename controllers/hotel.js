const Hotel = require("../models/Hotel");
const Room = require("../models/Room");
const Transaction = require("../models/Transaction");

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
  Transaction.findOne({ hotel: req.params.id })
    .then((transaction) => {
      if (transaction) {
        res
          .status(400)
          .json("Hotel is now in a transaction, cannot be deleted!");
      } else {
        Hotel.findByIdAndDelete(req.params.id).then(() => {
          res.status(200).json("Hotel has been deleted!");
        });
      }
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
  const { min, max, ...other } = req.query;
  Hotel.find({ ...other, cheapestPrice: { $gt: min | 1, $lt: max || 999 } })
    .limit(req.query.limit)
    .then((hotels) => {
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

exports.countByType = async (req, res, next) => {
  try {
    const hotelQuantity = await Hotel.countDocuments({ type: "hotel" });
    const apartmentQuantity = await Hotel.countDocuments({ type: "apartment" });
    const resortQuantity = await Hotel.countDocuments({ type: "resort" });
    const villaQuantity = await Hotel.countDocuments({ type: "villa" });
    const cabinQuantity = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "Hotels", quantity: hotelQuantity },
      { type: "Apartments", quantity: apartmentQuantity },
      { type: "Resorts", quantity: resortQuantity },
      { type: "Villas", quantity: villaQuantity },
      { type: "Cabins", quantity: cabinQuantity },
    ]);
  } catch (error) {
    res.send(error);
  }
};

exports.sortByRating = async (req, res, next) => {
  try {
    const results = await Hotel.find().sort({ rating: -1 }).limit(3);
    res.status(200).json(results);
  } catch (error) {
    res.send(error);
  }
};

exports.getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (error) {
    res.send(error);
  }
};
