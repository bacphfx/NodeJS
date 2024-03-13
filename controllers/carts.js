const Carts = require("../models/Carts");
const Products = require("../models/Products");

exports.addToCart = async (req, res, next) => {
  const userId = req.query.userId;
  const productId = req.query.productId;
  const count = req.query.count;

  try {
    const product = await Products.findOne({ _id: productId });
    if (!product) {
      const error = new Error("Could not find product");
      error.statusCode = 404;
      throw error;
    }

    const carts = await Carts.findOne({ userId: userId, productId: productId });
    if (!carts) {
      const dataInsert = {
        userId: userId,
        productId: productId,
        nameProduct: product.name,
        priceProduct: product.price,
        count: count,
        img: product.img1,
      };

      await Carts.insertMany(dataInsert);
      res.status(200).json({ message: "Add to cart successfully!" });
    } else {
      carts.count += parseInt(count);
      await carts.save();
      res.status(200).json({ message: "Add to cart successfully!" });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//Hàm tìm những sản phẩm mà user đã thêm
exports.getCart = async (req, res) => {
  const userId = req.query.userId;
  try {
    const carts = await Carts.find({ userId: userId });
    if (!carts) {
      const error = new Error("Could not find carts.");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "Fetch carts successfully.", data: carts });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteToCart = async (req, res) => {
  const userId = req.query.userId;
  const productId = req.query.productId;

  try {
    await Carts.deleteOne({ userId: userId, productId: productId });
    res.status(200).json({ message: "Delete successfully!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports.updateToCart = async (req, res) => {
  //Lấy idUSer của user cần sửa
  const userId = req.query.userId;

  //Lấy idProduct của user cần sửa
  const productId = req.query.productId;

  //Lấy count của user cần sửa
  const count = req.query.count;

  //Tìm đúng cái sản phẩm mà User cần sửa
  var cart = await Carts.findOne({ userId: userId, productId: productId });

  cart.count = count;

  cart.save();

  res.send("Update Thanh Cong");
};
