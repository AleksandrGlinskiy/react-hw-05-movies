
import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const MovieDetails = () => {
  const {movieId} = useParams();
  console.log(movieId);
  return (
    <div>
      <ul>
        <li>
          <Link to="cast">Cast </Link>
        </li>
        <li>
        <Link to="reviews">Reviews </Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default MovieDetails
