import  { useEffect } from 'react'
import { options } from '../Utils/Constant'
import {  addurlVideo } from '../Utils/MoviesSlice'
import { useDispatch, useSelector } from 'react-redux'


const useMovies=(movieId)=> {
  const dispatch=useDispatch()
  const getMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos", options)
    const json=await data.json()
    const trailers=json?.results?.filter((res)=> res?.type==="Trailer");
  if(trailers?.length>0){
    const trailer= trailers[0]?.key?trailers[0]?.key:json[0]?.key;
    dispatch(addurlVideo
      (trailer))
  }
  }
  useEffect(()=>{
    getMovies()
  },[])
}

export default useMovies;
