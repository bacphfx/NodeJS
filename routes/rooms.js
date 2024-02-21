const express = require("express");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoomAvailable,
} = require("../controllers/room");
const { verifyAdmin } = require("../middleware/auth");
const router = express.Router();

// CREATE
router.post("/:hotelId", verifyAdmin, createRoom);

// UPDATE
router.put("/:roomId", verifyAdmin, updateRoom);
router.put("/available/:id", updateRoomAvailable);

// DELETE
router.delete("/:roomId/:hotelId", verifyAdmin, deleteRoom);

// GET
router.get("/:roomId", getRoom);

// GET ALL
router.get("/", getRooms);

module.exports = router;
