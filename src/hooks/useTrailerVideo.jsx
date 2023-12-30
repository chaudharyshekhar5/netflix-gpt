import React, { useEffect } from 'react'
import { options } from '../Utils/Constant'
import { addTrailerVideo } from '../Utils/MoviesSlice'
import { useDispatch, useSelector } from 'react-redux'


const useTrailerVideo=(movieId)=> {
  const dispatch=useDispatch()
  const trailerId=useSelector(state=>state?.movies?.trailerVideo)
  const getMovieVideos=async()=>{
    const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
    const json=await data.json()
    const trailers=json?.results?.filter(res=> res?.type==="Trailer");
    const trailer=trailers?.length ? trailers[0]: json?.results[0];
    dispatch(addTrailerVideo
      (trailer))
  }
  useEffect(()=>{
    getMovieVideos()
  },[])
}

export default useTrailerVideo;
