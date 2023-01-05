const token = "8qlOkxz4wq";

const requests = {
  fetchOriginal: `?token=${token}`,
  fetchTrending: `/trending?token=${token}`,
  fetchTopRated: `/top-rate?token=${token}`,
  fetchActionMovies: `/discover?genre=28&token=${token}`,
  fetchComedyMovies: `/discover?genre=35&token=${token}`,
  fetchHorrorMovies: `/discover?genre=27&token=${token}`,
  fetchRomanceMovies: `/discover?genre=10749&token=${token}`,
  fetchDocumentaries: `/discover?genre=99&token=${token}`,
  fetchSearch: `/search?token=${token}`,
};

export default requests;
