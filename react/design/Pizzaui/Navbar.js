import React from "react";


function Navbar(){

    return (
        <>
              <section class="section1">
            <header>
                <div class="logo">
                    <img  src="./images/logo.png"/>
                </div>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Products</a></li>
                        <li class="cart"><a href="">0</a><img src="./images/cart.png" alt="" /></li>
                    </ul>
                </nav>
            </header>
        </section>
        </>
    )

}

export default Navbar