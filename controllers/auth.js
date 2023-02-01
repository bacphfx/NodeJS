const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.register = async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  // bcrypt
  //   .hash(password, 12)
  //   .then((hashedPass) => {
  //     const user = new User({
  //       username: username,
  //       email: email,
  //       password: hashedPass,
  //     });
  //     return user.save();
  //   })
  //   .then(() => {
  //     res.status(200).send("User has been created!");
  //     return res.redirect("/login");
  //   });

  try {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);

    const user = new User({ username: username, email: email, password: hash });
    await user.save();
    res.status(200).send("User has been created!");
  } catch (error) {
    res.send(error);
  }

  // User.findOne({ username: username })
  //   .then((userDoc) => {
  //     if (userDoc) {
  //       return res.send("Username has been existed");
  //     }
  //     return bcrypt
  //       .hash(password, 12)
  //       .then((hashedPass) => {
  //         const user = new User({
  //           username: username,
  //           email: email,
  //           password: hashedPass,
  //         });
  //         return user.save();
  //       })
  //       .then(() => {
  //         res.send("User has been created!");
  //         return res.redirect("/login");
  //       });
  //   })
  //   .catch((err) => console.log(err));
};

exports.login = (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found!");
      }

      return bcrypt
        .compare(req.body.password, user.password)
        .then((doMatch) => {
          if (doMatch) {
            res.status(200).send(user);
          }
          res.status(404).send("Wrong password or username!");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
