
import React from 'react'
import '../App.css';

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Pizzaui from '../components/Pizzaui'


function Home() {
  return (
    <div>
      <div className='container'>
        <Navbar />
        <Pizzaui />
        <Footer />
        </div>
    </div>
  )
}

export default Home