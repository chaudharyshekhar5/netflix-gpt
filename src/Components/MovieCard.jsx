import React from 'react'

function MovieCard({movies}) {
    
  return (
    <div className='w-36 md:w-48 pr-4'>
    <img  src={"https://image.tmdb.org/t/p/w500/" + movies} alt="logo"/>
    </div>
  )
}

export default MovieCard
