import React, { useEffect } from 'react'
import { options } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/MoviesSlice';

const useNowPlayingMovies=()=>{
  const dispatch=useDispatch()
  const getNowPlayingMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
  const json=await data.json()
  
  dispatch(
    addNowPlayingMovies(
      json.results
    ))
}
useEffect(()=>{
  getNowPlayingMovies();
},[])
}
export default useNowPlayingMovies