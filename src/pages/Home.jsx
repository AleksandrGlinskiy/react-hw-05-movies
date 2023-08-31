import fetchApi from 'fetchAPI'
import React from 'react'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Home
