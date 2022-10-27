import React, { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


    try{

    
    const res = await createUserWithEmailAndPassword(auth, email, password)

    const date = new Date().getTime();
    const storageRef = ref(storage,`${displayName + date}`);
    
    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
          //Update profile
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });
          //create user on firestore
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });

          //create empty user chats on firestore
          await setDoc(doc(db, "userChats", res.user.uid), {});
          navigate("/");
        } catch (err) {
          console.log(err);
          setErr(true);
          setLoading(false);
        }
      });
    });
    
    }
    catch(err){
        setErr(true);
        setLoading(false);
    }
  }


  return (
    <div className='form-container'>
        <div className='form-wrapper'>
                <span className='logo'>Mahe Chat</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Display Name' />
                    <input type="email" placeholder='enter email'/>
                    <input type="password" placeholder='enter password' />
                    <input  style={{display:"none"}}  type="file"  id='file'/>
                    <label htmlFor='file' >
                        <img style={{width:"25px",height:"25px"}} src='https://media.istockphoto.com/photos/plus-sign-icon-picture-id1345301535' />
                        Add Image</label>
                    <button className='register'>sign up</button>
                    {loading && <span>Uploading and compressing the image please wait...</span>}
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register