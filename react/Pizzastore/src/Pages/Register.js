import React , {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate,Link  } from "react-router-dom";
import {auth } from "../firebase";
 


function Register() {

  const [err,setErr] = useState(false);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const email = e.target[0].value;
      const password = e.target[1].value;

      try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        navigate("/");
      }
      catch(err){
        setErr(true)
      }
    }

  return (
    <>
         <div className="container1">
            <div className="register">
                <h2>Pizza Shop</h2>
                <div className="formbox">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input type="submit" value="Register" />
                </form>
                <p>You do have an account ? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register