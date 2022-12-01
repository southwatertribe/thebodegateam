import React from 'react'
import Message from '../../components/message/message'
import Img1 from '../Welcome/Pictures/Image1.jpg';
import Img2 from '../Welcome/Pictures/Image2.jpg';
import Img3 from '../Welcome/Pictures/Image 3.jpg';
import Img4 from '../Welcome/Pictures/Image 4.jpg';
import AboutMessage from '../About/AboutMessage';
import './welcome.module.css';


export default function Welcome() {
  return (
    //MAIN WELCOME PAGE
    <div class="imagegrid">
      
       <img src= {Img1} align = "right" alt='honey'
        width="220" height="200"/>
      <img src= {Img2} align="right" alt='market'
        width="220" height="200"/>
      <img src= {Img3} align="right" alt='chef'
        width="220" height="200"/>  
      <img src= {Img4} align="right" alt='transaction'
        width="220" height="200"/>  
        <Message/>
        <AboutMessage/>
    </div>
    
  )
}
