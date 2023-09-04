import { Loader } from 'components/Loader';
import React from 'react'
import { useState } from 'react'
import {  Link } from 'react-router-dom';
import { fetchSearchMovies } from 'services/fetchAPI';
import Form from '../components/Form'

const Movies = () => {

  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);


    const searchMovies = queryMovie => {
      setLoading(true);

      fetchSearchMovies(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults.results);
        setNoMoviesText(searchResults.length ===0);
      })
        .catch(error => {
          console.log(error);
        })
        .finally(()=> {
          setLoading(false);
        })
      
  };


  




  return (
    <main>
      <Form searchMovies={searchMovies}/>
      {loading && <Loader />}
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <ul>
        {searchFilms.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} >{film.title}</Link>
          </li>
        ))}
      </ul> }
    </main>
  )
}

export default Movies
