var express = require("express");

var router = express.Router();
const isAuth = require("../middleware/is-auth");

const historyController = require("../controllers/history");

//Get Find Carts For User
router.get("/user", isAuth, historyController.getUserHistory);

// Get All History
router.get("/all", isAuth, historyController.getAllHistories);

//Get Detail History
router.get("/:id", isAuth, historyController.getDetailHistory);

module.exports = router;
