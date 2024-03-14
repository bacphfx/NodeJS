const express = require("express");
const { body, param, query } = require("express-validator/check");
const User = require("../models/Users");
const userController = require("../controllers/user");

const router = express.Router();

router.post(
  "/signup",
  [
    query("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((val, { req }) => {
        return User.findOne({ email: val }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("Email already exists!");
          }
        });
      })
      .normalizeEmail(),
    query("password").trim().isLength({ min: 5 }),
    query("fullname").trim().not().isEmpty(),
    query("phone").trim().isNumeric(),
  ],
  userController.signup
);

router.post("/login", userController.login);

router.get("/:userId", userController.getUser);

module.exports = router;
