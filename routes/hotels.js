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
} = require("../controllers/hotel");
const { verifyAdmin } = require("../middleware/auth");
const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/delete/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getHotels);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

router.get("/sortByRating", sortByRating);

module.exports = router;
