
import React from 'react'
import useGptResult from '../hooks/useGptResult'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

function GptResult() {
  useGptResult()
  const data=useSelector(state=>state?.gpt?.gptResult)
  return (
    <div className='flex flex-wrap pl-[12%] pt-[2%] bg-black md:bg-transparent'>
      {data?.map((res)=>{return(<MovieCard key={res.id}  id={res.id} movies={res?.poster_path ? res?.poster_path:"/tLdULf1ljacj8yzGp1r9OQzbvGB.jpg" } data={res}/>)})}
    </div>
  )
}

export default GptResult
