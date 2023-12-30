import React from 'react'
import MovieCard from './MovieCard'



function MovieList({title,movies}) {
  
  return (<div className='px-6'>
      <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll scrollbar-hide'>
    <div className='flex'>
      {movies?.map((res)=>{return(<MovieCard key={res.id} movies={res.poster_path}/>)})}
    </div>
    </div>
    </div>
  )
}

export default MovieList
