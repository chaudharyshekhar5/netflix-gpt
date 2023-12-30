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
        <img className='h-screen object-cover w-screen' src={Bg_photo}alt="logo"></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} 
      className='w-full md:w-3/12 absolute p-8 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-2xl py-3'>{isSignIn?"Sign in": "Sign up"}</h1>
        {!isSignIn && <input  required type='text' ref={name}  placeholder='Username' className='p-4 my-2 w-full bg-gray-700'/>}
        <input  required type='text' ref={email} placeholder='Email address' className='p-4 my-4 w-full bg-gray-700'/>
        <input  required type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessages}</p>
        <button onClick={validationCheck}  className='px-4 py-2 my-6 bg-red-700 w-full rounded-lg '>{isSignIn?"Sign in": "Sign up"}</button>
        <p className='py-3 cursor-pointer' onClick={toggleSignIn}>{isSignIn?"New to Netflix?": "Already Registered"} <span className='text-white'>{isSignIn?"Sign up Now": "Sign in now"}</span></p>
      </form>
      
    </div>
  )
}

export default Login
