import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/UserSlice';


function Header() {
  const Navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user)
  

  const checkSignout=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
      Navigate("/")
      
    }).catch((error) => {
  // An error happened.
    Navigate("/error")
    });
  }

  useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName,photoURL} = user;
    dispatch(
      addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL,
      }))
    Navigate("/browser")
    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser())
    Navigate("/")
  }})
return ()=>unsubscribe()
},[]);

  
  return (
      <div className=' absolute w-screen px-8 py-2 bg-gradient-to-b from-gray-900 z-10 flex  justify-between '>
        <img className='w-44  mx-auto md:mx-0' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix_logo" />
      {user && (
      <div className='flex p-2 justify-between'>
        <h1   className='text-white font-extrabold pr-5 self-center text-2xl'>Welcome -  {user?.displayName} </h1>
        
      <>
      <img className="hidden md:block w-10 h-10 self-center" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="Account-logo" />
      <button onClick={checkSignout} className="font-bold text-sm align-middle text-white bg-green-300 h-7 self-center px-3 py-0 rounded ml-1 ">Sign Out</button>
      </>
      </div>
      )}
      </div>
      
      

  )
}

export default Header