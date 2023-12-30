import React, { useEffect } from 'react'
import Header from './Header'
import { options } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/MoviesSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from "../hooks/usePopular"
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
function Browse() {
  useNowPlayingMovies();
  usePopular();
  useTopRatedMovies();
  useUpComingMovies();
  
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
