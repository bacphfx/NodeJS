const express = require("express");
const { body } = require("express-validator/check");

const productController = require("../controllers/products");

const router = express.Router();

// GET /feed/posts
router.get("/", productController.getProducts);

router.get("/:productId", productController.getProduct);

router.get("/relative/:productId", productController.getRelative);

module.exports = router;
