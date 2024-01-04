import React from 'react'
import VideoTitle from './VideoTitle'
import { useDispatch } from 'react-redux'
import { addVideoInfo } from '../Utils/MoviesSlice'
import { useNavigate } from 'react-router-dom'

function MovieCard({movies,id,data}) {
  const dispatch=useDispatch()
  const Navigate=useNavigate()
  return (
    <div className='w-28 pr-2 md:block md:w-48 md:pr-2' onClick={()=>{
    return(
      dispatch(
        addVideoInfo(data)
      )
      
  )}}>
    <img className='rounded-lg' onClick={()=>Navigate("/videoInfo")} src={"https://image.tmdb.org/t/p/w500/" + movies} alt="logo "/>
    </div>
  )
}

export default MovieCard
