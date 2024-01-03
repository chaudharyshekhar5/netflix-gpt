import { useEffect } from 'react'
import { options } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import {  addUpcomingMovies } from '../Utils/MoviesSlice';

const useUpComingMovies=()=>{
  const dispatch=useDispatch()
  const getUpComingMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options)
  const json=await data.json()
  
  
  dispatch(
    addUpcomingMovies(
      json.results
    ))
}
useEffect(()=>{
  getUpComingMovies();
},[])
}
export default useUpComingMovies;

