const Carts = require("../models/Carts");
const Products = require("../models/Products");

exports.addToCart = async (req, res, next) => {
  const userId = req.query.userId;
  const productId = req.query.productId;
  const count = req.query.count;

  const product = await Products.findOne({ _id: productId });

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

    Carts.insertMany(dataInsert);

    res.send("Thanh Cong!");
  } else {
    carts.count += parseInt(count);

    carts.save();

    res.send("Thanh Cong!");
  }
};

//Hàm tìm những sản phẩm mà user đã thêm
exports.getCart = async (req, res) => {
  //Lấy idUser từ query
  const userId = req.query.userId;

  //Tìm những sản phẩm mà user đã thêm
  const carts = await Carts.find({ userId: userId });

  res.json(carts);
};

exports.deleteToCart = async (req, res) => {
  //Lấy idUSer của user cần xóa
  const userId = req.query.userId;

  //Lấy idProduct của user cần xóa
  const productId = req.query.productId;

  //Tìm đúng cái sản phẩm mà User đã thêm vào giỏ hàng
  var cart = await Carts.deleteOne({ userId: userId, productId: productId });

  res.send("Thanh Cong!");
};
