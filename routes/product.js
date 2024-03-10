const express = require("express");
const { body } = require("express-validator/check");
const isAuth = require("../middleware/is-auth");

const productController = require("../controllers/products");

const router = express.Router();

// GET /feed/posts
router.get("/", productController.getProducts);

// // POST /feed/post
// router.post(
//   "/post",
//   isAuth,
//   [
//     body("title").trim().isLength({ min: 5 }),
//     body("content").trim().isLength({ min: 5 }),
//   ],
//   feedController.createPost
// );

router.get("/:productId", productController.getProduct);
router.get("/relative/:productId", productController.getRilative);

// router.put(
//   "/post/:postId",
//   isAuth,
//   [
//     body("title").trim().isLength({ min: 5 }),
//     body("content").trim().isLength({ min: 5 }),
//   ],
//   feedController.updatePost
// );

// router.delete("/post/:postId", isAuth, feedController.deletePost);

module.exports = router;
