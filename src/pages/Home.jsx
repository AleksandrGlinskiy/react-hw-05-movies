import { Loader } from 'components/Loader';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/fetchAPI';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);
      fetchTrendingMovies()
        .then(data => {
          setFilms(data.results);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
      {loading && <Loader />}
    </div>
  );
};

export default Home;
