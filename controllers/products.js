const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator/check");
const Product = require("../models/Products");
const User = require("../models/Users");

exports.getProducts = (req, res, next) => {
  // const currentPage = req.query.page || 1;
  // const perPage = 2;
  let totalItems;
  Product.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return Product.find();
      // .skip((currentPage - 1) * perPage)
      // .limit(perPage);
    })
    .then((products) => {
      return res.status(200).json({
        message: "Fetched products successfully.",
        products: products,
        totalItems: totalItems,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then((product) => {
      if (!product) {
        const error = new Error("Could not find product");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({
        message: "Product fetched.",
        product: product,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getRelative = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then((product) => {
      if (!product) {
        const error = new Error("Could not find product");
        error.statusCode = 404;
        throw error;
      }
      Product.find({ category: product.category }).then((products) => {
        res.status(200).json({
          message: "Relative fetched.",
          products: products,
        });
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// exports.updatePost = (req, res, next) => {
//   const postId = req.params.postId;
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     const error = new Error("Validation failed, entered data is incorrect.");
//     error.statusCode = 422;
//     throw error;
//   }
//   const title = req.body.title;
//   const content = req.body.content;
//   let imageUrl = req.body.image;
//   if (req.file) {
//     imageUrl = req.file.path.replace("\\", "/");
//   }
//   if (!imageUrl) {
//     const error = new Error("No file picked.");
//     error.statusCode = 422;
//     throw error;
//   }
//   Post.findById(postId)
//     .then((post) => {
//       if (!post) {
//         const error = new Error("Could not find posts");
//         error.statusCode = 404;
//         throw error;
//       }
//       if (post.creator.toString() != req.userId) {
//         const error = new Error("Not authorization.");
//         error.statusCode = 403;
//         throw error;
//       }
//       if (imageUrl !== post.imageUrl) {
//         clearImage(post.imageUrl);
//       }
//       post.title = title;
//       post.imageUrl = imageUrl;
//       post.content = content;
//       return post.save();
//     })
//     .then((result) => {
//       res.status(200).json({
//         message: "Post updated!",
//         post: result,
//       });
//     })
//     .catch((err) => {
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err);
//     });
// };

// exports.deletePost = (req, res, next) => {
//   const postId = req.params.postId;
//   Post.findById(postId)
//     .then((post) => {
//       if (!post) {
//         const error = new Error("Could not find posts");
//         error.statusCode = 404;
//         throw error;
//       }
//       if (post.creator.toString() != req.userId) {
//         const error = new Error("Not authorization.");
//         error.statusCode = 403;
//         throw error;
//       }
//       clearImage(post.imageUrl);
//       return Post.findByIdAndDelete(postId);
//     })
//     .then((result) => {
//       return User.findById(req.userId);
//     })
//     .then((user) => {
//       user.post.pull(postId);
//       return user.save();
//     })
//     .then((result) => {
//       res.status(200).json({
//         message: "Deleted post.",
//       });
//     })
//     .catch((err) => {
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err);
//     });
// };

// const clearImage = (filePath) => {
//   filePath = path.join(__dirname, "..", filePath);
//   fs.unlink(filePath, (err) => console.log(err));
// };
