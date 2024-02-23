const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user");
const { verifyUser, verifyAdmin } = require("../middleware/auth");

const router = express.Router();

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", getUsers);

module.exports = router;
