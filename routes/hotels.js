const express = require("express");
const hotelController = require("../controllers/hotel");
const router = express.Router();

// CREATE
router.post("/", hotelController.createHotel);
// UPDATE
// DELETE
// GET
// GET ALL
router.get("/", hotelController.getHotels);

module.exports = router;
