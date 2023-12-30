import React from 'react'
import MovieCard from './MovieCard'



function MovieList({title,movies}) {
  
  return (<div className='px-4 py-2'>
      <h1 className=' font-bold text-xl mb-2 pb-2 pl-2 text-white pt-0 mt-0'>{title}</h1>
    <div className='flex overflow-x-scroll scrollbar-hide'>
    <div className='flex'>
      {movies?.map((res)=>{return(<MovieCard key={res.id} movies={res.poster_path}/>)})}
    </div>
    </div>
    </div>
  )
}

export default MovieList
