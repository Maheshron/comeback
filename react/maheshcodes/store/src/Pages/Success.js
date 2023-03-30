import React from 'react'
import {Link} from "react-router-dom";
function Success() {
  return (
    <div>
      <h1>Your Transaction Completed Successfully.</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Success