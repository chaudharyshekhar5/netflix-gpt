// import React from 'react'

// function VideoTitle({title,overview}) {
//   return (
//     <div className='hidden md:block
//     md:w-screen md:aspect-video md:pt-[10%]  md:px-10 md:absolute md:text-white md:bg-gradient-to-r from-black'>
//       <h1 className='hidden md:block
//       md:text-xl md:font-extrabold md:underline md:underline-offset-4'>{title}</h1>
//       <p className="hidden md:block inline-block py-6 md:text-sm md:w-5/12">{overview.substring(0,400)}</p>
//       <div className='my-4 md:m-0'>
//         <button className='bg-white  text-black py-1 px-2 text-lg  rounded-lg hover:bg-opacity-80 mr-[2%]'> ▶️ Play</button>
//         <button className='bg-white  text-black py-1 px-2 text-lg  rounded-lg hover:bg-opacity-80'>❗More-info</button>
//       </div>
//     </div>
//   )
// }

// export default VideoTitle
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
      src={"https://www.youtube.com/embed/"+trailerId+"?&autoplay=1&mute=1&rel=0&showinfo=1&controls=0&autohide=1"} 
      title="YouTube video player"
       allow="accelerometer; 
       autoplay; clipboard-write; 
       encrypted-media; gyroscope;
        picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className='bg-black'>
        <h1 className='text-white text-2xl p-[3%] pb-[0%] font-extrabold'>{videoId?.original_title}</h1>
        <p className='text-white text-sm p-[3%] pt-[0%] font-normal'>Release Date:  {videoId?.release_date}</p>
        <button onClick={()=>Navigate("/browser")} className='w-[90%] bg-red-700 text-white py-[2%] rounded mx-[5%] my-[2%]'>⬅️Previous Page</button>
        <button className='w-[90%] bg-white text-black py-[2%] rounded mx-[5%] my-[2%]'>▶️ Resume</button>
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

