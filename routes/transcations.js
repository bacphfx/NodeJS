const express = require("express");

const { verifyAdmin } = require("../middleware/auth");
const {
  createTransaction,
  getUserTransactions,
  getAllTransactions,
} = require("../controllers/transaction");
const router = express.Router();

// CREATE
router.post("/:userId", createTransaction);

// UPDATE
// router.put("/:roomId", verifyAdmin, updateRoom);
// router.put("/available/:id", updateRoomAvailable);

// DELETE
// router.delete("/:roomId/:hotelId", verifyAdmin, deleteRoom);

// GET USER TRANSCATIONS
router.get("/:userId", getUserTransactions);

// GET ALL TRANSACTION
router.get("/", getAllTransactions);

module.exports = router;
