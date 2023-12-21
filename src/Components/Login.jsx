import React, { useState } from 'react'
import Header from './Header'

function Login() {
  const [isSignIn,setIsSignIn]=useState(true)
  const toggleSignIn=()=>{
   setIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"></img>
      </div>
      <form className=' absolute bg-black w-3/12 mx-auto my-36 right-0 left-0 rounded-lg bg-opacity-80'>
        <h1 className='mx-16 mt-7 mb-4 text-white font-bold text-2xl'>{isSignIn?"Sign in": "Sign up"}</h1>
        {!isSignIn && <input type='text' placeholder='Username' className='p-2 mx-16 mt-3 w-8/12 rounded bg-gray-700 text-white'/>}
        <input type='text' placeholder='Email address' className='p-2 mx-16 mt-3 w-8/12 rounded bg-gray-700 text-white'/>
        <input type='text' placeholder='Password' className='p-2 mx-16 mt-4 w-8/12 rounded bg-gray-700 text-white'/>
        <button className='mx-16 mt-5 border border-red-600 w-8/12 py-2 bg-red-500 text-white font-normal rounded '>{isSignIn?"Sign in": "Sign up"}</button>
        <p className='mx-20 cursor-pointer text-yellow-100 mt-8 mb-10' onClick={toggleSignIn}>{isSignIn?"New to Netflix?": "Already Registered"} <span className='text-white'>{isSignIn?"Sign up Now": "Sign in now"}</span></p>
      </form>
      
    </div>
  )
}

export default Login
