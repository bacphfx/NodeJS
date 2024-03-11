const express = require("express");
const { body } = require("express-validator/check");
const isAuth = require("../middleware/is-auth");

const cartController = require("../controllers/carts");

const router = express.Router();

router.post("/", cartController.addToCart);

router.get("/", cartController.getCart);

router.delete("/delete", cartController.deleteToCart);

module.exports = router;
