import React from 'react'
import Browse from './Browse'
import Login from './Login'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MovieGpt from './MovieGpt';
import VideoTitle from './VideoTitle';
function Body() {
  
  return (
    <Router>
      
      <Routes path="/">
        <Route path="/" element={<Login/>}></Route>
        <Route path="browser" element={<Browse/>}></Route>
        <Route path="gpt" element={<MovieGpt/>}></Route>
        <Route path="videoInfo" element={<VideoTitle/>}></Route>
      </Routes>
    </Router>
  )
}

export default Body
