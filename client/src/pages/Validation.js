import React, { useState } from "react";
import "./pages.css";
import "./CreateCFOProfile.js"
import Axios from "axios";

/*var input = document.getElementById("cfoFirstName");
input.oninvalid = function(event){event.target.setCustomValidity('Names should only contain letters!')}
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
});*/
function VDate(){
var isValid = true;
try {
    const nameRule = new RegExp("[^[A-Za-z]+$]");
    nameRule.test(document.getElementById('cfoFirstName').value);
} catch(e) {
    isValid = false;
}

if(!isValid) alert("Invalid regular expression");
}
//export default VDate;

function validate(){
    const fName = document.getElementById('cfoFirstName');
    const nameRegex = RegExp(/^[A-Za-z]+&/);
    if(!nameRegex.test(fName.value)){
        alert("Name should contain only letters!");
        return false;
    } else return true;
}
//export default validate;

function valTest(){
    const name = document.getElementById("cfoFirstName");

name.addEventListener('submit', function (event) {
  if (name.validity.patternMismatch) {
    //event.preventDefault();
    name.setCustomValidity("Name should only contain letters");
    name.reportValidity();
  } else {
    name.setCustomValidity("");
  }
})
}
export default valTest;