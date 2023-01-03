const Products = require("../models/products");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Products.fetchAll((products) => {
    res.send(products);
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Products.findById(prodId, (product) => {
    res.send(product);
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Products.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
};
