const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.register = async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const fullname = req.body.fullname;
  const phoneNumber = req.body.phoneNumber;
  const confirmPassword = req.body.confirmPassword;

  try {
    const hash = await bcrypt.hash(password, 12);

    const user = new User({
      username: username,
      email: email,
      password: hash,
      fullname: fullname,
      phoneNumber: phoneNumber,
    });
    await user.save();
    console.log(register);
    res.status(200).json("User has been created!");
  } catch (error) {
    res.send(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log(user);
    if (!user) {
      return res.status(404).send("User not found!");
    }

    const doMatch = await bcrypt.compare(req.body.password, user.password);
    if (!doMatch) {
      return res.status(404).send("Wrong password or username!");
    }
    req.session.isAuth = true;
    req.session.userId = user._id;
    req.session.isAdmin = user.isAdmin;
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};
