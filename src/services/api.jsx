import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrandingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?api_key=be62f5641064cac309cf00d464856dbe`
  );
  return response.data;
};

export const searchMovies = async (query, page) => {
  const response = await axios.get(
    `/search/movie?api_key=be62f5641064cac309cf00d464856dbe&query=${query}&page=${page}`
  );
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=be62f5641064cac309cf00d464856dbe`
  );
  return response.data;
};

export const getActorsMovie = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=be62f5641064cac309cf00d464856dbe`
  );
  return response.data;
};

export const getMoviesReviews = async (movieId, page) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=be62f5641064cac309cf00d464856dbe&page=${page}`
  );
  return response.data;
};
