
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { Link, useNavigate } from 'react-router-dom'
import useMovies from '../hooks/useMovies'
import { addurlVideo } from '../Utils/MoviesSlice'

function VideoTitle() {
  const dispatch=useDispatch()
  const Navigate=useNavigate()
  const videoId=useSelector(state=>state?.movies?.videoInfo)
  const Id=useSelector(state=>state?.movies?.videos)
  const trailerI=useSelector(state=>state?.movies?.urlVideo)
  useMovies(Id)
  
  return (
  <div className='bg-black h-screen' >
    <div className='w-screen  '>
      {trailerI?<iframe className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+trailerI+"?&autoplay=1&mute=0&rel=0&showinfo=0&controls=0&autohide=1&cc_lang_pref=fr&cc_load_policy=1"} 
      title="YouTube video player"
      frameborder="0" 
       allow="accelerometer 
       autoplay; clipboard-write; 
       encrypted-media; gyroscope;
        picture-in-picture; web-share"
        ></iframe>:
        <h1 className='text-white w-screen  aspect-video pt-[20%] px-[10%] md:px-[25%]'>Trailer Coming Soon... Sorry For The Inconvience You Face🥺🥺</h1>}
      </div>
      <div className='bg-black'>
        <h1 className='text-white text-2xl p-[3%] pb-[0%] font-extrabold'>{videoId?.original_title ? videoId?.original_title: videoId?.name }</h1>
        <p className='text-white text-sm p-[3%] pt-[0%] font-normal'> {videoId?.release_date}</p>
        <Link to="/browser">
        <button  onClick={()=>dispatch(addurlVideo(null))} className='w-[90%] bg-red-700 text-white py-[2%] rounded mx-[5%] my-[2%] md:w-[30%] md:mx-[35%] md:my-[0%]'>⬅️Previous Page</button>
        </Link >
        <button className='w-[90%]  bg-white text-black py-[2%] rounded mx-[5%] my-[2%] md:hidden '>▶️ Resume</button>
        <button className='w-[90%] bg-gray-700 text-white py-[2%] rounded mx-[5%] my-[2%] md:hidden'>⬇️ Download</button>
        <h3 className='text-white w-[90%] mx-[5%] mt-[4%] md:pb-[7%] md:mt-[2%]'>{videoId?.overview}</h3>
      </div>
      <div className='bg-black py-[5%] md:hidden'>
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

