import React from 'react'

function Cart() {
  return (
    <>
         <section class="cart">
            <h2>Cart</h2>
            <div class="box">
                <div class="image">
                    <div class="image1">
                        <img src="./images/peproni.png"/>
                    </div>
                    <div class="name">
                        <p>Chicken Premier</p>
                    </div>
                </div>
                <div class="button">
                    <button>-</button>
                    <button class="nobackground">3</button>
                    <button>+</button>
                </div>
                <div class="price">
                    <p>Rs 2788/-</p>
                </div>
                <div class="delete">
                    <button>delete</button>
                </div>
            </div>
            <hr />
            <div class="total">
                    <p>Grand Total Rs/- 4566</p>
                    <button>Order now</button>
            </div>
        </section>
    </>
  )
}

export default Cart