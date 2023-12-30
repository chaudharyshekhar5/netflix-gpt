import React from 'react'
import Browse from './Browse'
import Login from './Login'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MovieGpt from './MovieGpt';

function Body() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="browser" element={<Browse/>}></Route>
        <Route path="gpt" element={<MovieGpt/>}></Route>
      </Routes>
    </Router>
  )
}

export default Body
