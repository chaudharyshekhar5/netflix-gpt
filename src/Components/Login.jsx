import React, { useRef, useState } from 'react'
import Header from './Header'
import {validation} from "../Utils/Validate"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { addUser } from '../Utils/UserSlice';
import { useDispatch } from 'react-redux';
import { Bg_photo } from '../Utils/Constant';
function Login() {
  const dispatch=useDispatch()
  const [isSignIn,setIsSignIn]=useState(true);
  const [errorMessages,setErrorMessages]=useState(null)
  const name=useRef(null)
  const email=useRef(null);
  const password = useRef(null);

  const toggleSignIn=()=>{
   setIsSignIn(!isSignIn)
   setErrorMessages("")
   email.current.value=null
   password.current.value=null
  }

   const validationCheck=()=>{
    
    const message=validation(email.current.value,password.current.value);
    setErrorMessages(message)
    
   
   if(message){
    return
   }

   if(!isSignIn){
createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name?.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL}=auth.currentUser;
      dispatch(addUser({
        uid:uid,email:email,displayName:displayName,photoURL:photoURL,
      }))
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessages(error.message)
    });
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessages(errorCode + "-" + errorMessage)
    });
   }

   else{
    
signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name?.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL}=auth.currentUser;
      dispatch(addUser({
        uid:uid,email:email,displayName:displayName,photoURL:photoURL,
      }))
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessages(error.message)
    });

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessages(errorCode + "-" + errorMessage)
  });
   }}
  
  return (
    <div  className='bg-black'>
      <Header/>
      <div className='absolute'>
        <img className=' 
        hidden md:block
        md:h-screen md:w-screen' src={Bg_photo}alt="logo"></img>
        <img className=" w-screen h-screen md:hidden" src='https://w0.peakpx.com/wallpaper/410/412/HD-wallpaper-plain-black-black.jpg'></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} 
      // className='w-full md:w-3/12 absolute p-8 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      className='absolute w-screen  mt-[40%] bg-black  sm:h-block sm:mt-[50%]
      md:absolute md:bg-black md:mx-auto md:right-0 md:left-0 md:opacity-80  md:rounded-lg md:w-4/12 md:mt-[13%]'
      >
        <h1 className='hidden md:block md:font-bold md:text-white md:text-4xl md:py-3 md:text-center md:my-[4%]'>{isSignIn?"Sign in": "Sign up"}</h1>
        {!isSignIn && <input  required type='text' ref={name}  placeholder='Username' className='w-[90%] mx-[5%] mb-[4%] placeholder-white  font-medium text-white text-center text-xl py-4 rounded-lg hover:bg-[#5F635F] bg-[#424342]  outline-none  md:block
        md:text-white md:p-3 md:min-w-[85%] md:mx-[7.5%] md:text-lg md:text-center  md:bg-gray-900 md:mb-[4%] md:rounded-md'/>}
        <input  required type='text' ref={email} placeholder='Email Address' className='w-[90%] mx-[5%] mb-[4%] placeholder-white font-medium text-white text-center text-xl py-4 rounded-lg hover:bg-[#5F635F] bg-[#424342] outline-none md:block
        md:text-white md:p-3 md:min-w-[85%] md:mx-[7.5%] md:text-lg md:text-center  md:bg-gray-900 md:mb-[4%] md:rounded-md'/>
        <input  required type='password' ref={password} placeholder='Password' className='w-[90%] mx-[5%] mb-[4%] placeholder-white font-medium  text-center text-white text-xl py-4 rounded-lg hover:bg-[#5F635F] bg-[#424342] outline-none  md:block
        md:text-white md:p-3 md:min-w-[85%] md:mx-[7.5%] md:text-lg md:text-center  md:bg-gray-900 md:mb-[4%] md:rounded-md'/>
        <p className='w-[90%] mx-[5%]  text-red-700 font-medium  text-center text-lg  rounded-lg md:block
        '>{errorMessages}</p>
        <button onClick={validationCheck}  className='w-[90%] mx-[5%] mb-[4%] font-medium  text-center text-2xl py-4 rounded-lg bg-black text-white border-solid border-white border-2  md:block
        md:py-2  md:text-white md:bold md:text-lg md:bg-red-700 md:min-w-[85%] md:mx-[7.5%] md:rounded-lg  
        md:px-4  '>{isSignIn?"Sign in": "Sign up"}</button>
        <p className=' text-center text-xl md:mx-[10%] my-3  mb-6 cursor-pointer text-white' onClick={toggleSignIn}>{isSignIn?"New to Netflix?": "Already Registered?"} <span className='text-yellow-200'>{isSignIn?"Sign up now.": "Sign in now."}</span></p>
        <p className='text-white mt-[10%] w-[80%] mx-[10%] text-sm text-center'>Sign-in is protexted by Google reCAPTCHA to ensure you're not a bot.</p>
      </form>
      
    </div>
  )
}

export default Login
