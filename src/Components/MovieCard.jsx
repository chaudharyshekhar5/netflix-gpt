import React from 'react'

function MovieCard({movies}) {
    
  return (
    <div className='w-28 pr-2 md:block md:w-48 md:pr-4'>
    <img className='rounded-lg' src={"https://image.tmdb.org/t/p/w500/" + movies} alt="logo"/>
    </div>
  )
}

export default MovieCard
