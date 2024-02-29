const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.register = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user)
      return res.status(404).json({ message: "username already exists" });
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();

    res.status(200).json("User has been created!");
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const doMatch = await bcrypt.compare(req.body.password, user.password);
    if (!doMatch) {
      return res.status(404).json({ message: "Wrong password or username!" });
    }
    req.session.isAuth = true;
    req.session.userId = user._id;
    req.session.isAdmin = user.isAdmin;
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};
