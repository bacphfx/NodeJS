const Histories = require("../models/History");

exports.getUserHistory = async (req, res, next) => {
  const userId = req.query.userId;
  try {
    const histories = await Histories.find({ userId: userId });
    if (!histories) {
      const error = new Error("Could not find user histories");
      error.statusCode = 404;
      throw error;
    }
    res
      .status(200)
      .json({ message: "Fetch histories successfully", data: histories });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getDetailHistory = async (req, res, next) => {
  const id = req.params.id;

  try {
    const history = await Histories.findOne({ _id: id });
    if (!history) {
      const error = new Error("Could not find user histories");
      error.statusCode = 404;
      throw error;
    }
    res
      .status(200)
      .json({ message: "Fetch histories successfully", data: history });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getAllHistories = async (req, res, next) => {
  const histories = await Histories.find();
  res
    .status(200)
    .json({ message: "Fetch histories successfully", data: histories });
};
