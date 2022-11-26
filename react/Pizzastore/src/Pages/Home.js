
import React from 'react'
import '../App.css';

import Footer from '../components/Footer'
import Pizzaui from '../components/Pizzaui'
import Products from '../components/Products';


function Home() {
  return (
    <div>
     
        
        <Pizzaui />
        <Products />
        <Footer />
        
    </div>
  )
}

export default Home