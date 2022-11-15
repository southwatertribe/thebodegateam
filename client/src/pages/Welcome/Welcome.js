import React from 'react'
import Message from '../../components/message/message'
import Img1 from '../Welcome/Pictures for Home/Image1.jpg';

export default function Welcome() {
  return (
    //MAIN WELCOME PAGE
    <div>
      <Message/>
      <img 
      src= {Img1}
      alt="Honey"
      width="100" />

    </div>
  )
}
