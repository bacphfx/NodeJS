const User = require("../models/User");

exports.register = (req, res, next) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(() => {
      res.status(200).send("User has been created!");
    })
    .catch((err) => console.log(err));
};

exports.login = (req, res, next) => {
  User.find({ username: req.body.username })
    .then((user) => {
      console.log(user);
      if (user.length === 0) {
        return res.status(404).send("User not found!");
      }

      if (user.password == req.body.password) {
        return res.status(200).send(user);
      } else {
        return res.status(404).send("Wrong password or username!");
      }
    })
    .catch((err) => console.log(err));
};
