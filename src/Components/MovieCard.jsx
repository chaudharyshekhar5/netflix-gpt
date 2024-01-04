import React from 'react'
import VideoTitle from './VideoTitle'
import { useDispatch } from 'react-redux'
import { addVideoInfo } from '../Utils/MoviesSlice'
import { useNavigate } from 'react-router-dom'
import useTrailerVideo from '../hooks/useTrailerVideo'

function MovieCard({movies,id,data}) {
  const dispatch=useDispatch()
  const Navigate=useNavigate()

  useTrailerVideo(id)
  const cardClick=()=>{
    return(
    dispatch(
      addVideoInfo(data)
    ))
  }
  return (
    <div className='w-28 pr-2 md:block md:w-48 md:pr-2' onClick={cardClick}>
    <img className='rounded-lg' onClick={()=>Navigate("/videoInfo")} src={"https://image.tmdb.org/t/p/w500/" + movies} alt="logo "/>
    </div>
  )
}

export default MovieCard
