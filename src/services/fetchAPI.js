const API_KEY = 'dfe97c9693096be016a960b4c69a6096';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchApi = (url = '') => {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    } else return Promise.reject(new Error(`not found `));
  });
};

export const fetchTrendingMovies = () => {
  return fetchApi(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
};

export const fetchSearchMovies = (searchMovie) => {
  return fetchApi(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchMovie}`
  );
};

export const fetchMovieDetails = movieId => {
  return fetchApi(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
};

export const fetchMovieCredits = movieId => {
  return fetchApi(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
};

export const fetchMovieReviews = movieId => {
  return fetchApi(`${BASE_URL}/${movieId}reviews/?api_key=${API_KEY}`);
};
