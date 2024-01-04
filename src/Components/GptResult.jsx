
import React from 'react'
import useGptResult from '../hooks/useGptResult'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

function GptResult() {
  useGptResult()
  const data=useSelector(state=>state?.gpt?.gptResult)
  return (
    <div className='flex flex-wrap pl-[3%] pt-[5%] bg-black'>
      {data?.map((res)=>{return(<MovieCard key={res.id} id={res.id} movies={res?.poster_path ? res?.poster_path:"/o1Kl7k8x4FjNDXYSOvAk5vTXT5B.jpg" } data={res}/>)})}
    </div>
  )
}

export default GptResult
