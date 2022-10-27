import React, { useContext } from 'react'
import Messages from './Messages'
import Input from "./Input"
import {ChatContext} from "../context/ChatContext";

function Chat() {


    const { data } = useContext(ChatContext);


  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName }</span>
        <div className='chatIcons'>
        <img style={{width:"25px",height:"25px"}}  src="https://media.istockphoto.com/photos/pay-exactly-peanuts-picture-id172260106?b=1&k=20&m=172260106&s=612x612&w=0&h=RW42uCG2aFvg3pWD8ix3vdBMKVc3YoflaD-PisiptAs="/>
        <img style={{width:"25px",height:"25px"}}  src="https://media.istockphoto.com/photos/pay-exactly-peanuts-picture-id172260106?b=1&k=20&m=172260106&s=612x612&w=0&h=RW42uCG2aFvg3pWD8ix3vdBMKVc3YoflaD-PisiptAs="/>
        <img style={{width:"25px",height:"25px"}}  src="https://media.istockphoto.com/photos/pay-exactly-peanuts-picture-id172260106?b=1&k=20&m=172260106&s=612x612&w=0&h=RW42uCG2aFvg3pWD8ix3vdBMKVc3YoflaD-PisiptAs="/>

        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat