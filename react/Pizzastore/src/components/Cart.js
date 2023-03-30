import React, { useContext } from 'react'
import pizzaimg from '../images/peproni.png';

import { CartContext } from "../CartContext";
import axios from "axios";

import noimage  from "../images/empty-cart.png";

function Cart() {

    const cart = useContext(CartContext);
    const total = cart.getTotalCost();

    async function displayRazorpay(amount){
        // const res = await loadScript(
        //   "https://checkout.razorpay.com/v1/checkout.js"
        // );
        // if(!res){
        //   alert("Razorpay sdk failed to load.Are you online?")
        //   return;
        // }
        // const result = await axios.post("http://localhost:5000/payment/orders");
        // if(!result){
        //   alert("Server error.Ary you online?");
        //   return;
        // }
        // const {amount,id:order_id,currency} = result.data;

        const { data: { keyId } } = await axios.get("https://pizzashop-backend-maheshron.onrender.com/api/getkey");
        const { data: { order } } = await axios.post("https://pizzashop-backend-maheshron.onrender.com/api/checkout",{amount})

        const options = {
          key:keyId,
          amount:order.amount,
          currency:"INR",
          name:"Mahesh",
          description:"TEST Transaction",
          order_id:order.id,
          callback_url:"https://pizzashop-backend-maheshron.onrender.com/api/paymentverification",
          // handler:async function (response){
          //   const data ={
          //     orderCreationId:order_id,
          //     razorpayPaymentId:response.razorpay_payment_id,
          //     razorpayOrderId:response.razorpay_order_id,
          //     razorpaySignature:response.razorpay_signature,
          //   };
          //   const result = await axios.post("http://localhost:5000/payment/success",data);
          //   alert(result.data.msg);
          // },
          prefill:{
            name:"MAHESH KUMAR",
            email:"mahesh@gmail.com",
            contact:"999999999"
        },
        notes:{
          address:"Mahesh Dey Corporate Office"
        },
        theme:{
          color:"#61dafb",
        }

        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
   

  return (
   <>
     <section class="cart">
            <h2>Cart</h2>

            { cart.items.length === 0 ? <img style={{width:"450px",height:"350px"}} src = {noimage} /> : "" }
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
           
           { total === 0 ? (
                <h1>Please Add Some Pizzas</h1>
           ) : (
            <div class="total">
            <p>Grand Total Rs/- {total}</p>
            <button onClick={() => displayRazorpay(total)}>Order now</button>
    </div>
           ) }
            
        </section>
   </>
    )
}

export default Cart