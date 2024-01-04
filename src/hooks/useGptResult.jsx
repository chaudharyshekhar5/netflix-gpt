
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addGptResult } from '../Utils/GptSlice'
import { options } from '../Utils/Constant'

const useGptResult=()=>{
    const dispatch=useDispatch()
    const result=useSelector(state=>state?.gpt?.gptInputData)
    const data=useSelector(state=>state?.gpt?.GptResult)
    const getCollectionMovies=async()=>{
      // console.log(result)
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+result+"&include_adult=false", options)
    const json=await data.json()
    dispatch(
      addGptResult(
        json.results
      ))
  }  
  useEffect(()=>{
      getCollectionMovies();
  },[result])
}
export default useGptResult;