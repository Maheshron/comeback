import React, { useContext, useState } from 'react'
import pizzaimg from '../images/peproni.png';
import pizzalogo from '../images/logo.png'
import Footer from './Footer'
import Navbar from './Navbar'
import Pizzaui from './Pizzaui'
import { productsArray } from '../productStore';
import { CartContext } from "../CartContext";


function Products() {

    const cart = useContext(CartContext);
    const [toggle,setToggle] =  useState(false);

    
    const addToCart = (id) =>{
        cart.addOneToCart(id);
        setToggle(!toggle);
    }
    
  return (
    <>
          
            <section className="section3">
            <div className="title">
                <p>
                PIZZAS
            </p>
        </div>
            <div className="menu">
                {
                    productsArray.map((product,idx) =>(
                       
                        <div className="cards">
                        <div className="card">
                            <div className="image">
                                <img src={pizzaimg} alt=""/>
                            </div>
                            <div className="name">
                                <p>{product.title}</p>
                            </div>
                            <div className="type">
                                <p>{product.type}</p>
                            </div>
                            <div className="last">
                                <div className="price">Rs - {product.price}</div>
                                <div>
                                     
                                    <button className={toggle ? "added":" "} onClick={() => addToCart(product.id)} >{toggle ? "Added": "Add"}</button>

                                  

                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
               


              
                
              
              

                


                
            </div>
            </section>
         
    </>
  )
}

export default Products