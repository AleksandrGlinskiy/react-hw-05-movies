import React from 'react'

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
