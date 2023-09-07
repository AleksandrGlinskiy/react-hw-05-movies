import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/fetchAPI';
import Form from '../components/Form/Form';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    getMovieByName(query)
      .then(searchResults => {
        setMovies(searchResults.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <main>
      <Form onSubmit={handleSubmit} onChange={handleChange} />

      {
        <ul>
          {movies.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      }
    </main>
  );
};

export default Movies;
