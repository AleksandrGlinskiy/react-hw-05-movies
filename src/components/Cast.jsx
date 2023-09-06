import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../services/fetchAPI';
import { Loader } from './Loader';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    setLoading(true);

    fetchMovieCredits(movieId)
      .then(searchResults => {
        setActors(searchResults.cast);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  if (!actors) {
    return;
  }

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {actors.map(({ profile_path, id, name, character }) => (
          <li key={id}>
            <img width="100" src={`${imgBaseUrl}${profile_path}`} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
