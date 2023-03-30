import React from 'react'
import {Link} from "react-router-dom";

import pizzabanner  from '../images/pizza.png';

function Pizzaui() {
  return (
    <>
     <section className="section2">
            <div className="left">
                <div className="content">
                    <p>Are You Hungry?</p>
                    <h1>Dont Wait!</h1>
                    <button><Link to="/cart" style={{textDecoration:"none",color:"black"}}>Order now</Link></button>
                </div>
            </div>
            <div className="right">
                <div className="image">
                <img src={pizzabanner} alt=""  />
            </div>
            </div>
        </section>

     
    </>
  )
}

export default Pizzaui