import React ,{useState,useContext} from 'react';
import {Button,Navbar,Modal} from "react-bootstrap";
import { CartContext } from "../CartContext";
import  CartProduct  from "./CartProduct";
import axios from "axios";

function NavbarComponent() {
    const cart = useContext(CartContext);
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function loadScript(src){
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () =>{
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      })
    }

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



    const productsCount = cart.items.reduce((sum,product) => sum + product.quantity,0);
    const totalBill = cart.getTotalCost().toFixed(2);
    console.log(totalBill);

  return (
    <>
    <Navbar expand="sm">
        <Navbar.Brand>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}>Cart {productsCount} items</Button>
        </Navbar.Collapse>
    </Navbar>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title> Shopping cart </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {
            productsCount > 0 ? 
           <>
              <p>Items in your cart:</p>
              
              {
                cart.items.map((currentProduct,idx) =>(
                  <CartProduct  key={idx} id={currentProduct.id} quantity={currentProduct.quantity} ></CartProduct>
                ))}
                <h1>Total :{ cart.getTotalCost().toFixed(2) } </h1>
                {/* <Button variant="success" onClick={displayRazorpay(totalBill)}>
                  Purchase Items
                </Button> */}
                <Button variant="success" onClick={() => displayRazorpay(totalBill)}>Purchase Items</Button>
           </>  
           :
           <h2>There are no items in your cart!</h2>
          }

          </Modal.Body>

         
      </Modal>

    </>
  )
}

export default NavbarComponent