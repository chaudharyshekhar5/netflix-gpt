import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function SecondaryContainer() {
  const movies=useSelector(state=>state.movies)
  return (
    <div className='bg-gradient-to-b from-[#2c6767]'>
      <div className='mt-0 md:-mt-52  md:pl-12 relative z-20 '>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Up Coming Movies"} movies={movies.upComingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer
