import React from 'react'
import GptSearch from './GptSearch'
import GptResult from './GptResult'
import { Bg_photo } from '../Utils/Constant'


function MovieGpt() {
  return (
    <>
      <div className="">
        <GptSearch/>
        <GptResult/>
      </div>
    </>
  )
}

export default MovieGpt
