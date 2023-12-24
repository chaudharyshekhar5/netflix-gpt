import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import { useDispatch } from 'react-redux';

function Body() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="browser" element={<Browse/>}></Route>
      </Routes>
    </Router>
  )
}

export default Body
