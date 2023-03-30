import React from 'react'
import {Link} from "react-router-dom";
function Success() {
  return (
    <div>
        <h1>Your Transaction completed Successfully</h1>
        <a><Link to="/products">Buy More Pizzas</Link></a>
    </div>
  )
}

export default Success