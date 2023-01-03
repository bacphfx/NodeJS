const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.price,
    req.body.description
  );

  product.save();

  res.redirect("/");
};
