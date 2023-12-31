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
    <div >
      <Header/>
      <div className='absolute '>
        <img className=' 
        sssm:h-screen sssm:w-screen 
        ' src={Bg_photo}alt="logo"></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} 
      // className='w-full md:w-3/12 absolute p-8 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      className='absolute bg-black mx-auto right-0 left-0 opacity-80  rounded-lg
      sssm:w-10/12 sssm:mt-[70%] sssm:px-0
      ssm:w-8/12 ssm:mt-[50%] 
      sm:mt-[45%]
      md:w-6/12  md:mt-[30%]
      lg:w-4/12 lg:mt-[20%]
      xl:w-4/12 xl:mt-[10%]'
      >
        <h1 className='font-bold text-white text-4xl py-3 text-center my-[4%]
         ssm:text-xl 
         sm:text-2xl
          md:text-lg'>{isSignIn?"Sign in": "Sign up"}</h1>
        {!isSignIn && <input  required type='text' ref={name}  placeholder='Username' className=' text-white p-3 min-w-[85%] mx-[7.5%] text-lg text-center  bg-gray-900 mb-[4%] rounded-md
        ssm:text-sm ssm:my-[4%] 
        sm:mb-[4%] sm:py-[2%]  
        md:text-lg'/>}
        <input  required type='text' ref={email} placeholder='Email address' className='text-white p-3 min-w-[85%] mx-[7.5%] text-lg text-center  bg-gray-900 mb-[4%] rounded-md
        ssm:text-sm ssm:mb-[2%] 
        sm:mb-[4%] sm:py-[2%]  
        md:text-lg'/>
        <input  required type='password' ref={password} placeholder='Password' className='text-white p-3 min-w-[85%] mx-[7.5%] text-lg text-center  bg-gray-900 mb-[4%] rounded-md
        ssm:text-sm ssm:mb-[2%] 
        sm:mb-[4%] sm:py-[2%]  
        md:text-lg'/>
        <p className=' md:text-red-500 min-w-[85%] mx-[7.5%]  font-bold text-base  px-[4%] 
        ssm:text-sm
        sm:mb-[2%]'>{errorMessages}</p>
        <button onClick={validationCheck}  className='py-2  text-white bold text-lg bg-red-700 min-w-[85%] mx-[7.5%] rounded-lg
        ssm:text-sm ssm:mt-[4%]
        sm:mb-[2%]  
        md:px-4  '>{isSignIn?"Sign in": "Sign up"}</button>
        <p className=' text-center ssm:text-sm md:mx-[10%] my-3  mb-6 cursor-pointer text-white' onClick={toggleSignIn}>{isSignIn?"New to Netflix?": "Already Registered?"} <span className='text-yellow-200'>{isSignIn?"Sign up Now": "Sign in now"}</span></p>
      </form>
      
    </div>
  )
}

export default Login
