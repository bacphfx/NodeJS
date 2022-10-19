const express = require("express");
const route = express.Router();

const movieController = require("../controllers/movie");

// Get movie trending
route.get("/api/movies/trending/:page", movieController.getTrendingMovies);

module.exports = route;
