import React from 'react'
import { useState } from 'react'

const Form = ({onSubmit, onChange}) => {
  
  return (
    <form  onSubmit={onSubmit}>
      <input type="text" 
     
      onChange={onChange}
      />
      <button type='submit' >
    Search
      </button>
    </form>
  )
}

export default Form
