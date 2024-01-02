import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='md:text-xl md:font-extrabold md:underline md:underline-offset-4'>{title}</h1>
      <p className="hidden sm:inline-block py-6 text-sm w-1/4">{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='bg-white  text-black py-1 px-2 text-lg  rounded-lg hover:bg-opacity-80 mr-[2%]'> ▶️ Play</button>
        <button className='bg-white  text-black py-1 px-2 text-lg  rounded-lg hover:bg-opacity-80'>❗More-info</button>
      </div>
    </div>
  )
}

export default VideoTitle
