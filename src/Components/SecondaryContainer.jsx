import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function SecondaryContainer() {
  const movies=useSelector(state=>state.movies)
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20 '>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Up Coming Movies"} movies={movies.upComingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer
