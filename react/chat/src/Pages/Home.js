import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from "../components/Chat"


function Home() {
  return (
     <div className='home1'>
            <div className='home-container'>
              <Sidebar />
              <Chat />  
            </div>
     </div> 
  )
}

export default Home