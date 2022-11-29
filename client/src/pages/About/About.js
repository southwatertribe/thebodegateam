import React from "react";
import "./About.css";
import Aboutmessage from "./AboutMessage";

import ShopCard from "../../components/shopcard/ShopCard";
function About() {
  return (
    //Make an about page
    
    <div>
          <div class="box-1">
            <h2 className="h2About">Learn about us!</h2>
            </div> 
            <a href="mailto: abc@example.com">Contact the Devs </a>
            <Aboutmessage/>
    </div>   
        

  );
}

export default About;
