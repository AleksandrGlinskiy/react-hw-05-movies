import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/fetchAPI';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  const backLinkLocationRef = useRef(location.state?.from || '/movies');

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(searchResults => {
        setMovieDetails(searchResults);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const { poster_path, vote_average, overview, genres, title, release_date } =
    movieDetails;
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const actuallyDate = new Date(release_date);

  return (
    <>
      <Link className={css.BackLink} to={backLinkLocationRef.current}>
        ← Go back
      </Link>
    <div className={css.Container}>

      <img width="250px" src={`${imgBaseUrl}${poster_path}`} alt={title} />

      <div>
        <h1>
          {title} ({actuallyDate.getFullYear()})
        </h1>
        <p>User Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className={css.List}>
          {genres.map(genre => (
            <li className={css.ListItem} key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
</div>

      <div className={css.ListInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkLocationRef }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkLocationRef }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div></>
    
  );
};

export default MovieDetails;
