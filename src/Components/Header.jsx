import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/UserSlice';
import { addToggle } from '../Utils/GptSlice';


function Header() {
  const Navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user)
  const gpt=useSelector(store=>store.gpt.gptToggleButton)
  
  const toggleGpt=()=>{
    dispatch(
      addToggle()
    )
  }

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
      <div className='p-[1%] pb-0 mb-[0%] bg-[#2c6767] outline-none border-none md:block md:absolute  md:w-screen md:px-8 md:py-2 md:bg-gradient-to-b from-black md:z-10 md:flex  md:flex-row md:justify-between'>
        <div className='flex justify-between'>
        <img className='w-28 m-0 p-0 z-10 md:block md:mx-0 md:w-44'
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix_logo" />
         <button className='p-1 px-3 mx-2 my-2 bg-red-700 text-white rounded-lg' onClick={toggleGpt}>{gpt? "Home Page" :"Movies Search"}</button>
        </div>
      {user && (
      <div className=' hidden md:block md:text-sm md:flex md:p-2 md:justify-between
      sm:justify-items-start'>
        <h1   className='text-white self-center hover:text-4xl xl:hover:text-lg'>Welcome -  {user?.displayName} </h1>
        <button className='py-2 px-2 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={toggleGpt}>{gpt? "Home Page" :"Movies Search"}</button>
      <div className='flex'>
      <img className=" w-10 h-10 self-center" src="https://www.mobmet.com/wp-content/uploads/2021/12/Netflix-1.jpg" alt="Account-logo" />
      <button onClick={checkSignout} className="font-bold text-white pl-1 hover:text-lg ">Sign Out</button>
      </div>
      </div>
      )}
      </div>)}
      


export default Header

