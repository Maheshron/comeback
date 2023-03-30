import React, { useContext, useState } from 'react'
import pizzaimg from '../images/peproni.png';
import pizzalogo from '../images/logo.png'
import Footer from './Footer'
import Navbar from './Navbar'
import Pizzaui from './Pizzaui'
import { productsArray } from '../productStore';
import EachPizza from './EachPizza';


function Products() {

   
    
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
                       
                       <EachPizza  product={product} />
                    ))
                }
               

                
            </div>
            </section>
         
    </>
  )
}

export default Products