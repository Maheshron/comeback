import React,{useState,useContext} from 'react'
import  { signOut } from "firebase/auth";
import {  auth } from "../firebase";
import {Link} from "react-router-dom";
import img from '../images/logo.png';
import cart from '../images/cart.png';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from "../CartContext"


function Navbar() {

    const { currentUser } = useContext(AuthContext);

        const cartOne = useContext(CartContext);

            const productsCount = cartOne.items.reduce((sum,product) => sum + product.quantity,0);

  return (
    <>
           <section className="section1">
            <header>
                <div className="logo">
                    <img  src={img} alt=""/>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li> 
                       
                        {
                        currentUser ? 
                        <>
                        <li><Link to="/products">Pizzas</Link></li>
                        <li onClick={()=>signOut(auth)}><Link to="/login">Sign Out</Link></li>
                        <li className="cart"><Link to="/cart">{ productsCount }</Link><img src={cart} alt="" /></li>

                        </>
                        :
                        <>
                          <li><Link to="/register">Register</Link></li>  
                        <li><Link to="/login">Login</Link></li>
                        </>
                    }
                        
                        
                    </ul>
                </nav>
            </header>
        </section>
    </>
  )
}

export default Navbar