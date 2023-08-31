const API_KEY = 'dfe97c9693096be016a960b4c69a6096';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchApi = () => {
  return fetch(`${BASE_URL}?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      } else return Promise.reject(new Error(`not found `));
    }
  );
};

export default fetchApi;
