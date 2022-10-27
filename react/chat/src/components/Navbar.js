import React, { useContext } from 'react'
import {signOut} from "firebase/auth";
import {auth} from "../firebase";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

    const { currentUser } = useContext(AuthContext); 

  return (
    <div className='navbar'>
      <span className='logo1'>Mahe Chat</span>
      <div className='user'>
        <span>{currentUser.displayName}</span>
        <img className='user_image' src={currentUser.photoURL} alt=""/>
        <button className='logout' onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar