const users = [];

exports.postAddUser = (req, res, next) => {
  users.push({ user: req.body.user });
  res.redirect("/users");
  console.log(users);
};

exports.getUsers = (req, res, next) => {
  res.send(users);
};
