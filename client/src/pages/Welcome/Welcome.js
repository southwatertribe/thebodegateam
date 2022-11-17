import React from 'react'
import Message from '../../components/message/message'
import Img1 from '../Welcome/Image1.jpg';

export default function Welcome() {
  return (
    //MAIN WELCOME PAGE
    <div>
      <img
      src= {Img1} 
      align= "right"
      alt='honey'
      width="300"
      height="200"
      />

    </div>
  )
}
