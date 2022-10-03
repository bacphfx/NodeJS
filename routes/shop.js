const path = require("path");
const express = require("express");

const rootDir = require("../ulti/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const product = adminData.products;
  res.render("shop", { prods: product, pageTitle: "Shop", path: "/" });
});

module.exports = router;
