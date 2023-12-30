import React from 'react'
import GptSearch from './GptSearch'
import GptResult from './GptResult'
import { Bg_photo } from '../Utils/Constant'


function MovieGpt() {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen w-screen" src={Bg_photo} alt="logo" />
      </div>
      <div className="">
        <GptSearch/>
        <GptResult/>
      </div>
    </>
  )
}

export default MovieGpt
