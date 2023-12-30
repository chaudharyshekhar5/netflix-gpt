

import React, { useEffect } from 'react'
import { options } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import {  addTopRatedMovies } from '../Utils/MoviesSlice';

const useTopRatedMovies=()=>{
  const dispatch=useDispatch()
  const getTopRatedMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
  const json=await data.json()
  console.log(json)
  
  dispatch(
    addTopRatedMovies(
      json.results
    ))
}
useEffect(()=>{
  getTopRatedMovies();
},[])
}
export default useTopRatedMovies;
