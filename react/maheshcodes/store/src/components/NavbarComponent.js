import React ,{useState,useContext} from 'react';
import {Button,Navbar,Modal} from "react-bootstrap";
import { CartContext } from "../CartContext";
import  CartProduct  from "./CartProduct";

function NavbarComponent() {
    const cart = useContext(CartContext);
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const checkout =  async () => {
    //       await fetch('http://localhost:4000/checkout',{
    //         method:"POST",
    //         headers:{
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({items: cart.items})
    //       }).then((response)=>{
    //         return response.json();
    //       }).then((response) => {
    //         if(response.url){
    //           window.location.assign(response.url)
    //         }
    //       });
    // }

      const loadScript = (src) =>{
          return new Promise((resolve) =>{
            const script = document.createElement('script');
            script.src = src;
            script.onload = () =>{
              resolve(true)
            }
            script.onerror = () =>{
              resolve(false);
            }

            document.body.appendChild(script)
          })
      }


      const displayRazorpay = async (amount1) =>{
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if(!res){
          alert('you are offline failed to load');
          return 
        }

        const options = {
          key:"QnZJstqFV6vwB9DBrwrU7Orl",
          currency:"INR",
          amount:amount1 * 100,
          name:"Mahesh First Payment Gateway",
          description:"Thanks for purchasing",
          image:'https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png',
          handler:function(response){
            alert(response.razorpay_payment_id)
            alert("Payment Successfully")
          },
          prefill:{
            name:"Mahesh First Payment Gateway"
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
                <Button variant="success" onClick={displayRazorpay(totalBill)}>
                  Purchase Items
                </Button>
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