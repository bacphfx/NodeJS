var express = require("express");
const isAuth = require("../middleware/is-auth");

var checkoutController = require("../controllers/checkout");

var router = express.Router();

router.post("/", isAuth, checkoutController.checkout);

module.exports = router;
