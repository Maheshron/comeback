import React,{useState,useEffect} from 'react'
import "./Nav.css";

function Nav() {

        const [show,handleShow] = useState(false);

        const transitionNavBar =  () =>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        }
        useEffect(() =>{
            window.addEventListener("scroll",transitionNavBar);

            return () => window.removeEventListener("scroll",transitionNavBar)

        },[])


  return (
    <div className={`nav ${ show && "nav-black" }`}>
            <div className='nav-content'>
                <img 
                className='nav-logo'
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt=""
                />

                <img
                className='nav-avatar'
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt=""
                />
            </div>
    </div>
  )
}

export default Nav