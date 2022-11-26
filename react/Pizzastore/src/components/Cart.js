import React, { useContext } from 'react'
import pizzaimg from '../images/peproni.png';

import { CartContext } from "../CartContext";

function Cart() {

    const cart = useContext(CartContext);
    const total = cart.getTotalCost();

  return (
   <>
     <section class="cart">
            <h2>Cart</h2>
            {
                
             cart.items.map((currentProduct,idx) => (
                
                 <div class="box">
                 <div class="image">
                     <div class="image1">
                         <img src={pizzaimg}/>
                     </div>
                     <div class="name">
                         <p>{ currentProduct.title}</p>
                     </div>
                 </div>
                 <div class="button">
                     <button onClick={() => cart.removeOneFromCart(currentProduct.id)}>-</button>
                     <button class="nobackground">{currentProduct.quantity}</button>
                     <button onClick={() => cart.addOneToCart(currentProduct.id)}>+</button>
                 </div>
                 <div class="price">
                     <p>Rs {currentProduct.price}/-</p>
                 </div>
                 <div class="delete">
                     <button onClick={() => cart.deleteFromCart(currentProduct.id)}>delete</button>
                 </div>
                <hr />
             </div>
             
            )) 
           
            }
           
            <div class="total">
                    <p>Grand Total Rs/- {total}</p>
                    <button>Order now</button>
            </div>
        </section>
   </>
    )
}

export default Cart