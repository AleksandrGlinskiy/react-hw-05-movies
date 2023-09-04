import React from 'react'
import { useState } from 'react'

const Form = ({searchMovies}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    searchMovies(query.toLowerCase());
  };


  return (
    <form onSubmit={handleSubmit} >
      <input type="text" 
      name='query'
      autoFocus
      value={query}
      onChange={handleInputChange}
      />
      <button type='submit' >
    Search
      </button>
    </form>
  )
}

export default Form
