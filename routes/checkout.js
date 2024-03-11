var express = require("express");

var checkoutController = require("../controllers/checkout");

var router = express.Router();

router.post("/", checkoutController.checkout);

module.exports = router;
