import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black '>
      <h1 className='text-3xl  font-bold w-1/4 '>{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm w-1/4">{overview}</p>
      <div className='flex flex-wrap mt-5'>
        <button className='mr-4 border hover:bg-white bg-gray-300 p-1 px-4 b text-blue-900 text-lg font-bold rounded-lg'> ▶️ Play</button>
        <button className='mr-4 border hover:bg-white p-1 px-4 bg-gray-300 text-red-600 text-lg font-bold rounded-lg'>❗More-info</button>
      </div>
    </div>
  )
}

export default VideoTitle
