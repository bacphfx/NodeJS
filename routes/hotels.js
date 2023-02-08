const express = require("express");
const {
  createHotel,
  getHotels,
  updateHotel,
  deleteHotel,
  getHotel,
} = require("../controllers/hotel");
const { verifyAdmin } = require("../middleware/auth");
const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);

module.exports = router;
