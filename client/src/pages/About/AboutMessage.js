import React from "react";
import Style from './about.module.css';

export default function AboutMessage(){
    return(
        <div class={Style.aboutdiv}>
            <p>
            Bodega is a startup group of university students
            who want to help out the CFO's of the world. What is
            a CFO? CFO stands for "Cottage Food Operators" and 
            these guys are the self-made chefs at home who want to
            make a business preparing, cooking, and selling food
            right outside their homes. But how would people be able
            to find out about them, let alone trust them? That's what
            Bodega's for.
        </p>
        </div>
    )
}