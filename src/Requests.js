const key = "7ab20e62f45d109b2e746a9b332d0a53";
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
};

export default requests;
