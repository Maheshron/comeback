import React, {useState } from 'react';
import {useNavigate,Link} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

function Login() {

  const [err,setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/");
    }

    catch(err){
      setErr(true);
    }

  }

  return (
    <>
        <div className="container">
    <div className="register">
        <h2>Pizza Shop</h2>
        <div className="formbox">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="submit" value="Login" />
        </form>
        <p>You dont have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login