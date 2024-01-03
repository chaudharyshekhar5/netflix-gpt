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

  
  return (<div>
      <div className='absolute bg-black  w-screen md:px-8 md:py-2 md:bg-transparent z-10 flex flex-col md:flex-row justify-between'>
        {!user && (<img className='w-28 mx-0 my-[2%] md:block md:w-44  md:mx-0'
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix_logo" />
        )}</div>   
      {user && (
        <div className='absolute  md:absolute bg-[#2c6767] py-1 md:bg-transparent  w-screen md:w-screen md:px-8  z-10 md:z-10 flex md:flex flex-row md:flex-row justify-between md:justify-between md:py-[0%]'>
        <img className='w-28 mx-0 my-[2%] md:block md:w-44  md:mx-0 md:my-[0%]'
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix_logo" />

      <div className='flex justify-between'>
        <h1   className=' hidden md:block md:self-center md:text-white  md:hover:text-4xl'>Welcome -  {user?.displayName} </h1>
        <button className=' bg-red-700 text-sm text-white md:self-center mr-3 self-center px-3 py-1 rounded  md:block md:py-2 md:px-2 md:mx-4  md:bg-red-700 md:text-white md:rounded-lg' onClick={toggleGpt}>{gpt? "Home Page" :"Movies Search"}</button>
      <div className='flex'>
      <img className=" hidden md:block md:self-center md:w-10 md:h-10 " src="https://www.mobmet.com/wp-content/uploads/2021/12/Netflix-1.jpg" alt="Account-logo" />
      <button onClick={checkSignout} className="bg-red-700 mr-4 text-sm md:self-center text-white self-center px-3 py-1 rounded md:block md:font-bold md:text-white md:bg-none md:ml-2 md:hover:text-lg ">Sign Out</button>
      </div>
      </div>
      </div>
      )}
      </div>
      )}
      


export default Header

