import React,{useRef} from 'react'
import { Bg_photo } from '../Utils/Constant'
import { useDispatch, useSelector } from 'react-redux'
import {addGptInputData} from "../Utils/GptSlice"

function GptSearch() {
  const result=useRef(null);
  const dispatch=useDispatch()
  return (
    <div className='pt-[20%]  flex justify-center md:pt-[10%]'>
      <form className='w-full md:w-1/2 bg-black grid md:bg-transparent ' onSubmit={(e)=>e.preventDefault()} >
        <input type="text" placeholder='What would you like to watch today?' ref={result} className='px-4 py-2 m-[4%] mb-[0%] border placeholder-black  rounded' />
        <button className=' m-[4%] mt-[2%] py-2 px-4 bg-red-700 text-white rounded-lg' onClick={()=>dispatch(addGptInputData(result.current.value))}>Search</button>
      </form>
    </div>
  )
}

export default GptSearch
