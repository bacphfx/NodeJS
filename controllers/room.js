const Hotel = require("../models/Hotel");
const Room = require("../models/Room");

exports.createRoom = (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  newRoom
    .save()
    .then((savedRoom) => {
      Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } })
        .then(() => {
          res.status(200).json(savedRoom);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.updateRoom = (req, res, next) => {
  Room.findByIdAndUpdate(
    req.params.roomId,
    {
      $set: req.body,
    },
    { new: true }
  )
    .then((updateRoom) => {
      res.status(200).json(updateRoom);
    })
    .catch((err) => console.log(err));
};

exports.updateRoomAvailable = (req, res, next) => {
  Room.updateOne(
    { "roomNumbers._id": req.params.id },
    {
      $push: {
        "roomNumbers.$.unavailableDates": req.body.dates,
      },
    }
  )
    .then(() => {
      res.status(200).json("Room status has been updated");
    })
    .catch((err) => console.log(err));
};

exports.deleteRoom = (req, res, next) => {
  const hotelId = req.params.hotelId;
  Room.findByIdAndDelete(req.params.roomId)
    .then(() => {
      Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.roomId } })
        .then(() => {
          res.status(200).json("Room has been deleted!");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.getRoom = (req, res, next) => {
  Room.findById(req.params.roomId)
    .then((room) => {
      res.status(200).json(room);
    })
    .catch((err) => console.log(err));
};

exports.getRooms = (req, res, next) => {
  Room.find().then((rooms) => {
    return res.status(200).json(rooms);
  });
};
