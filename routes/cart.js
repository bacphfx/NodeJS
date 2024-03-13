const express = require("express");
const { body } = require("express-validator/check");
const isAuth = require("../middleware/is-auth");

const cartController = require("../controllers/carts");

const router = express.Router();

router.post("/", isAuth, cartController.addToCart);

router.get("/", isAuth, cartController.getCart);

router.delete("/delete", isAuth, cartController.deleteToCart);

router.put("/update", isAuth, cartController.updateToCart);

module.exports = router;
