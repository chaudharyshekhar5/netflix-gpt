import React from 'react'
import MovieCard from './MovieCard'



function MovieList({title,movies}) {
  
  return (<div className=' px-3 md:px-6'>
      <h1 className='text-xl py-2 font-bold md:block md:text-3xl md:py-4 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll scrollbar-hide'>
    <div className='flex  md:flex'>
      {movies?.map((res)=>{return(<MovieCard key={res.id} id={res.id} movies={res.poster_path} data={res}/>)})}
    </div>
    </div>
    </div>
  )
}

export default MovieList
