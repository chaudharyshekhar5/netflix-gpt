
import React from 'react'
import { useSelector } from 'react-redux'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useNavigate } from 'react-router-dom'

function VideoTitle() {
  const Navigate=useNavigate()
  const videoId=useSelector(state=>state?.movies?.videoInfo)
  useTrailerVideo(videoId?.id)
  const trailerId=useSelector(state=>state?.movies?.trailerVideo)
  
  return (
  <div className='bg-black h-screen' >
    <div className='w-screen  '>
      <iframe className='w-screen  aspect-video'
      src={"https://www.youtube.com/embed/"+trailerId+"?&autoplay=1&rel=0&showinfo=1&controls=0&autohide=1"} 
      title="YouTube video player"
       allow="accelerometer; 
       autoplay; clipboard-write; 
       encrypted-media; gyroscope;
        picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className='bg-black'>
        <h1 className='text-white text-2xl p-[3%] pb-[0%] font-extrabold'>{videoId?.original_title ? videoId?.original_title: videoId?.name }</h1>
        <p className='text-white text-sm p-[3%] pt-[0%] font-normal'> {videoId?.release_date}</p>
        <button onClick={()=>Navigate("/browser")} className='w-[90%] bg-red-700 text-white py-[2%] rounded mx-[5%] my-[2%]'>⬅️Previous Page</button>
        <button className='w-[90%]  bg-white text-black py-[2%] rounded mx-[5%] my-[2%]'>▶️ Resume</button>
        <button className='w-[90%] bg-gray-700 text-white py-[2%] rounded mx-[5%] my-[2%]'>⬇️ Download</button>
        <h3 className='text-white w-[90%] mx-[5%] mt-[4%]'>{videoId?.overview}</h3>
      </div>
      <div className='bg-black py-[5%]'>
        <ul className='flex justify-evenly '>
          <li className='text-white'>➕ <span>List</span></li>
          <li className='text-white'>👍 <span>Rate</span></li>
          <li className='text-white'>🛒 <span>Share</span></li>
        </ul>
      </div>

      
  </div>
      
  )
}

export default VideoTitle

