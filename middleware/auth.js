const User = require("../models/User");

exports.verifyLogin = (req, res, next) => {
  if (!req.session.isAuth) {
    return res.status(401).send("You are not authenticated!");
  }
  User.findById(req.session.userId).then((user) => {
    if (!user) {
      return res.status(401).send("You are not authenticated!");
    }
    req.user = user;
    next();
  });
};

exports.verifyUser = (req, res, next) => {
  this.verifyLogin(req, res, () => {
    if (
      req.user._id.toString() === req.params.id.toString() ||
      req.user.isAdmin
    ) {
      next();
    } else {
      return res.status(403).send("You are not authorized!");
    }
  });
};

exports.verifyAdmin = (req, res, next) => {
  this.verifyLogin(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).send("You are not authorized!");
    }
  });
};
