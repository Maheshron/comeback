import React from 'react'
import {Link} from "react-router-dom";
import img from '../images/logo.png';
import cart from '../images/cart.png';
function Navbar() {
  return (
    <>
           <section className="section1">
            <header>
                <div className="logo">
                    <img  src={img} alt=""/>
                </div>
                <nav>
                    <ul>
                        <li><a href=""><Link to="/">Home</Link></a></li>
                        <li><a href=""><Link to="/products">Products</Link></a></li>
                        <li><a href=""><Link to="/register">Register</Link></a></li>
                        <li><a href=""><Link to="/login">Login</Link></a></li>
                        <li className="cart"><a href="">0</a><img src={cart} alt="" /></li>
                    </ul>
                </nav>
            </header>
        </section>
    </>
  )
}

export default Navbar