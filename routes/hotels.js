const express = require("express");
const {
  createHotel,
  getHotels,
  updateHotel,
  deleteHotel,
  getHotel,
  countByCity,
  countByType,
  sortByRating,
  getHotelRooms,
} = require("../controllers/hotel");
const { verifyAdmin } = require("../middleware/auth");
const router = express.Router();

// CREATE
router.post("/", createHotel);

// UPDATE
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getHotels);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

router.get("/sortByRating", sortByRating);

router.get("/room/:id", getHotelRooms);

module.exports = router;
