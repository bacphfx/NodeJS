const User = require("../models/User");

exports.updateUser = (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  )
    .then((updateUser) => {
      res.status(200).json(updateUser);
    })
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json("User has been deleted!");
    })
    .catch((err) => console.log(err));
};

exports.getUser = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => console.log(err));
};

exports.getUsers = (req, res, next) => {
  User.find().then((users) => {
    return res.status(200).json(users);
  });
};
