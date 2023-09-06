import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/fetchAPI';

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

  const { poster_path, vote_average, overview, genres, title, release_date } = movieDetails;
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300/';
  const actuallyDate = new Date(release_date);
  

  return (
    <div>
      <Link to={backLinkLocationRef.current}> Go back</Link>
      <div>
        <img src= {`${imgBaseUrl}${poster_path}`}  alt={title} />
      </div>
      {/* <h2>{title} ({release_date.slice(0, 4)})</h2> */}
      <h2>{title} ({actuallyDate.getFullYear()})</h2>
      <p>User Score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
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
    </div>
  );
};

export default MovieDetails;
