import React , {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate,Link  } from "react-router-dom";
import {auth } from "../firebase";
 


function Register() {

  const [err,setErr] = useState(false);
  const [loading,setLoading] = useState(false);
  const [pass,setPass] = useState("");
  const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const email = e.target[0].value;
      const password = e.target[1].value;
      if(password.length < 6){
        setPass("Password should be atleast 6 characters");
      }

      try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        navigate("/");
      }
      catch(err){
        setErr(true)
        console.log(err.message);
        setPass(err.message);
      }
    }

  return (
    <>
         <div className="container1">
            <div className="register">
                <h2>Pizza Shop</h2>
                <div className="formbox">
                <form onSubmit={handleSubmit}>
                    <input type="email" required placeholder="email" />
                    <input type="password" required placeholder="password" />
                    <input type="submit" value="Register" />
                </form>
                <p>You do have an account ? <Link to="/login">Login</Link></p>
                { err &&    <p> {pass}</p>}
                {/* {pass && <p>password sould be atleast 6 characters</p>} */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Register