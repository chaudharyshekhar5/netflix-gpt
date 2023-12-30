
import { useEffect } from 'react'
import { options } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import {  addpopularMovies } from '../Utils/MoviesSlice';

const usePopular=()=>{
  const dispatch=useDispatch()
  const getPopularMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
  const json=await data.json()
  console.log(json)
  
  dispatch(
    addpopularMovies(
      json.results
    ))
}
useEffect(()=>{
  getPopularMovies();
},[])
}
export default usePopular;