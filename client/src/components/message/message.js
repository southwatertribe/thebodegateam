import React from "react";
import Style from "./message.module.css"


export default function Message() {
    return(
        <div className={Style.mdiv}>
            <p>
                Welcome to Bodega! 
                A hub where local cottage-food operators can bridge the gap of
                business between their customers and products! We created this site with the goal of 
                helping these small businesses escape the shadow of the corporate giants!
            </p>
        </div>
    )
}