const Room = require("../models/Room");
const Transaction = require("../models/Transaction");
const User = require("../models/User");

exports.createTransaction = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    const user = await User.findById(userId);
    user.transactions.push(newTransaction._id);
    await user.save();
    return res.status(200).json(newTransaction);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllTransactions = (req, res, next) => {
  Transaction.find()
    .sort([["_id", -1]])
    .then((transactions) => {
      return res.status(200).json(transactions);
    });
};

exports.getUserTransactions = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    const list = await Promise.all(
      user.transactions.map((transactionId) => {
        return Transaction.findById(transactionId);
      })
    );

    res.status(200).json(list);
  } catch (error) {
    res.send(error);
  }
};
