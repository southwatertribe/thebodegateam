import React, { useState } from "react";
import "./pages.css";
import Axios from "axios";
import CreateCFOProfile from "./CreateCFOProfile";

export default function Redirect() {
    return(
        <div className="redirect">
            <h3>
                <p>
                    Congratulations! You have created your CFO Shop.
                </p>
            </h3>
        </div>
    );
}