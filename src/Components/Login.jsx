import React, { useRef, useState } from 'react'
import Header from './Header'
import {validation} from "../Utils/Validate"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Utils/UserSlice';
import { useDispatch } from 'react-redux';
function Login() {
  const Navigate=useNavigate()
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
    console.log(email.current.value)
    console.log(password.current.value)
    const message=validation(email.current.value,password.current.value);
    setErrorMessages(message)
    console.log(message)
   
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
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=' absolute bg-black w-3/12 mx-auto my-36 right-0 left-0 rounded-lg bg-opacity-80'>
        <h1 className='text-center mt-7 mb-4 text-white font-bold text-2xl'>{isSignIn?"Sign in": "Sign up"}</h1>
        {!isSignIn && <input  required type='text' ref={name}  placeholder='Username' className='p-2 mx-16 mt-3 w-8/12 rounded bg-gray-700 text-white'/>}
        <input  required type='text' ref={email} placeholder='Email address' className='p-2 mx-16 mt-3 w-8/12 rounded bg-gray-700 text-white'/>
        <input  required type='password' ref={password} placeholder='Password' className='p-2 mx-16 mt-4 w-8/12 rounded bg-gray-700 text-white'/>
        <p className='mx-8 bg-white text-red-800 font-semibold rounded mt-3 px-2'>{errorMessages}</p>
        <button onClick={validationCheck}  className='mx-16 mt-5 border border-red-600 w-8/12 py-2 bg-red-500 text-white font-normal rounded '>{isSignIn?"Sign in": "Sign up"}</button>
        <p className='mx-20 cursor-pointer text-yellow-100 mt-8 mb-10' onClick={toggleSignIn}>{isSignIn?"New to Netflix?": "Already Registered"} <span className='text-white'>{isSignIn?"Sign up Now": "Sign in now"}</span></p>
      </form>
      
    </div>
  )
}

export default Login