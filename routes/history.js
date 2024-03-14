var express = require("express");

var router = express.Router();
const { verifyAdmin, verifyUser } = require("../middleware/is-auth");

const historyController = require("../controllers/history");

//Get Find Carts For User
router.get("/user", verifyUser, historyController.getUserHistory);

// Get All History
router.get("/all", verifyAdmin, historyController.getAllHistories);

//Get Detail History
router.get("/:id", verifyUser, historyController.getDetailHistory);

module.exports = router;
