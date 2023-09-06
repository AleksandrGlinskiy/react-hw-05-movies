import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchAPI';
import { Loader } from './Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchMovieReviews(movieId)
      .then(searchResults => {
        setReviews(searchResults.results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      {loading && <Loader />}
      {reviews.length === 0 && (
        <p>Sorry, we don't have any reviews on this movie</p>
      )}

      <ul>
        {reviews.map(({ id, content, author }) => (
          <li key={id}>
            <h3>Author : {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
