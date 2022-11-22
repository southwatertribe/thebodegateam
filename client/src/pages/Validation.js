import React, { useState } from "react";
import "./pages.css";
import "./CreateCFOProfile.js"
import Axios from "axios";

var input = document.getElementById("cfoFirstName");
/*input.oninvalid = function(event){
    event.target.setCustomValidity('Names should only contain letters!')
}*/
input.addEventListener('invalid', function(event){
    event.preventDefault();
    if ( ! event.target.validity.valid ) {
        elem.textContent   = 'Name should only contain letters!';
        elem.className     = 'error';
        elem.style.display = 'block';
 
        input.className    = 'invalid animated shake';
    }
});
input.addEventListener('input', function(event){
    if ( 'block' === elem.style.display ) {
        input.className = '';
        elem.style.display = 'none';
    }
});

var isValid = true;
try {
    new RegExp("[^[A-Za-z]+$]");
} catch(e) {
    isValid = false;
}

if(!isValid) alert("Invalid regular expression");