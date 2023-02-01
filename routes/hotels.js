const express = require("express");
const {
  createHotel,
  getHotels,
  updateHotel,
  deleteHotel,
  getHotel,
} = require("../controllers/hotel");
const router = express.Router();

// CREATE
router.post("/", createHotel);

// UPDATE
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);

module.exports = router;
