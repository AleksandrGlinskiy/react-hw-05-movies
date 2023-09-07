import React from 'react'
import css from './Form.module.css'

const Form = ({onSubmit, onChange}) => {
  
  return (
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <input type="text" 
     
      onChange={onChange}
      />
      <button className={css.SearchButton} type='submit' >
    Search
      </button>
    </form>
  )
}

export default Form
