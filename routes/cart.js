const express = require("express");
const { body } = require("express-validator/check");
const { verifyUser } = require("../middleware/is-auth");

const cartController = require("../controllers/carts");

const router = express.Router();

router.post("/", verifyUser, cartController.addToCart);

router.get("/", verifyUser, cartController.getCart);

router.delete("/delete", verifyUser, cartController.deleteToCart);

router.put("/update", verifyUser, cartController.updateToCart);

module.exports = router;
