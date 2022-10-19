const Movie = require("../models/movieList");

exports.getTrendingMovies = (req, res, next) => {
  Movie.fetchAll((movies) => {
    const pageNum = req.params.page ? req.params.page : 1;
    const allMovies = movies.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    const trendingMovies = allMovies.splice(
      (pageNum - 1) * 20,
      (pageNum - 1) * 20 + 19
    );
    console.log(pageNum);
    res.send(trendingMovies);
  });
};
