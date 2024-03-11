const Histories = require("../models/History");

module.exports.index = async (req, res) => {
  const userId = req.query.userId;
  console.log(userId);

  const histories = await Histories.find({ userId: userId });

  res.json(histories);
};

module.exports.detail = async (req, res) => {
  const id = req.params.id;

  const histories = await Histories.findOne({ _id: id });

  res.json(histories);
};

module.exports.history = async (req, res) => {
  const histories = await Histories.find();

  res.json(histories);
};
