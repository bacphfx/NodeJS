const path = require("path");
const express = require("express");
const rootDir = require("../ulti/path");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

router.post("/", userController.postAddUser);

module.exports = router;
