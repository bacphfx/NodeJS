var express = require("express");
const { verifyUser, verifyAdmin } = require("../middleware/is-auth");

var checkoutController = require("../controllers/checkout");

var router = express.Router();

router.post("/", verifyUser, checkoutController.checkout);

module.exports = router;
