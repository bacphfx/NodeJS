var express = require("express");

var router = express.Router();

const historyController = require("../controllers/history");

//Get Find Carts For User
router.get("/user", historyController.index);

// Get All History
router.get("/all", historyController.history);

//Get Detail History
router.get("/:id", historyController.detail);

module.exports = router;
