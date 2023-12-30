import React from 'react'
import { Bg_photo } from '../Utils/Constant'

function GptSearch() {
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12 ' onClick={(e)=>e.preventDefault()}>
        <input type="text" placeholder='What would you like to watch today?' className='p-4 m-4 col-span-9' />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>Search</button>
      </form>
    </div>
  )
}

export default GptSearch
