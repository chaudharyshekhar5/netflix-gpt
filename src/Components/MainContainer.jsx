import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'



function MainContainer() {
    const movies=useSelector(store=>store?.movies?.nowPlayingMovies)
    const idm=useSelector(store=>store?.movies?.nowPlayingMovies?.[2])
    if(!movies){
        return
    }
    const mainMovie=movies[0]

    const {original_title,overview}=mainMovie;
  return (<div className=' bg-[#2c6767] pt-[20%]  md:block  md:bg-black md:pt-0'>
    <VideoBackground movieId={idm.id}/>


    
    
  </div>
  )
}

export default MainContainer
