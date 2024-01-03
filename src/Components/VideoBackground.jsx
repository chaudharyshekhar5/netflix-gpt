import React from 'react'
import {useSelector } from 'react-redux'
import useTrailerVideo from '../hooks/useTrailerVideo'

function VideoBackground({movieId}) {
  const trailerId=useSelector(state=>state?.movies?.trailerVideo)
  const Mobile_Movie=useSelector(state=>state?.movies?.upComingMovies)
  const mobile_photo=Mobile_Movie!==null ? Mobile_Movie[4]?.poster_path : Mobile_Movie?.poster_path
  return (
    <div className='w-screen '>
      <iframe className='hidden md:block w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+trailerId?.key+"?&autoplay=1&mute=1&rel=0&showinfo=0&controls=0&autohide=1"} 
      title="YouTube video player" 
       allow="accelerometer; 
       autoplay; clipboard-write; 
       encrypted-media; gyroscope;
        picture-in-picture; web-share"
        ></iframe>
        <div > 
        <img className="w-[88%] alignItems mx-[5%] border-4  rounded-xl  md:hidden"  src={"https://image.tmdb.org/t/p/w500/" + mobile_photo} alt="Image not found" />
        <div className=' flex  mt-[-12%] justify-evenly'>
          <button className='text-black bg-white  px-4 text-xl font-bold py-[1%]  mb-[3%] rounded md:block '>▶️Play</button>
          <button className='text-white bg-gray-500 px-4  text-xl font-bold py-[1%] mb-[3%] rounded md:block '>➕My List</button>
        </div>
        </div>
    </div>
  )
}

export default VideoBackground
