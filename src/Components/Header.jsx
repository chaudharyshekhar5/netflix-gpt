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
  console.log(user)

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

  
  return (<>
      <div className=' flex flex-wrap justify-between absolute z-10 w-screen  bg-gradient-to-b from-black'>
        <img className='w-48 h-24 ml-8 mt-1 px-2  from-black' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix_logo" />
      {user && (
      <div className='flex flex-wrap justify-evenly z-10 items-center pr-6'>
        <h1   className='text-white font-extrabold pr-5 text-2xl'>Welcome -  {user?.displayName} </h1>
        {console.log("hello " + user?.displayName)}
      <>
      <img className="  h-10" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="Account-logo" />
      <button onClick={checkSignout} className='text-white px-2 rounded ml-2 bg-green-400'>Sign Out</button>
      </>
      </div>
      )}
      </div>
      </>
      

  )
}

export default Header