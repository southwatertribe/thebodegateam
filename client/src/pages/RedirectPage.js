import React, { useState } from "react";
import "./pages.css";
import "./About/About.css"
import Axios from "axios";  
import "./CreateCFOShop.js";

export default function Redirect() {
    return(
        <div className="redirect">
            <h3 class="box-1">
                <p>
                    Congratulations! You have created your CFO Shop.
                </p>
            </h3>
        </div>
    );
}