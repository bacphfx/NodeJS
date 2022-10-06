const path = require("path");
const express = require("express");
const rootDir = require("../ulti/path");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/users", userController.getUsers);

module.exports = router;
