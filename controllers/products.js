const Products = require("../models/products");

exports.getProducts = (req, res, next) => {
  Products.fetchAll((products) => {
    res.send(products);
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Products(
    req.body.title,
    req.body.imageUrl,
    req.body.price,
    req.body.description
  );

  product.save();

  res.redirect("/");
};
