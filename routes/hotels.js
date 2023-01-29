const express = require("express");
const { createHotel, getHotels } = require("../controllers/hotel");
const router = express.Router();

// CREATE
router.post("/", createHotel);
// UPDATE
// DELETE
// GET
// GET ALL
router.get("/", getHotels);

module.exports = router;
