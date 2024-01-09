import React from 'react'
import Header from './Header'
import {  useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from "../hooks/usePopular"
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import MovieGpt from './MovieGpt';
import useTrailerVideo from '../hooks/useTrailerVideo';
import { useNavigate } from 'react-router-dom';

function Browse() {
  
const navigate = useNavigate();

const refreshPage = () => {
    navigate(0);
}
  const gpt=useSelector(state=>state.gpt.gptToggleButton)
  useNowPlayingMovies();
  usePopular();
  useTopRatedMovies();
  useUpComingMovies();
  useTrailerVideo();
  
  return (
    <div>
      <Header/>
      {gpt?
      <MovieGpt/>:
    <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
    }
      
    </div>
  )
}

export default Browse
