import React, { useState } from "react";
import "./pages.css";
import Axios from "axios";
import valTest from "./Validation.js"
import requirejs from "requirejs";
import Redirect from "./RedirectPage";
function CreateCFOProfile() {
  const [cfoFirstName, setCfoFirstName] = useState("");
  const [cfoMiddleName, setCfoMiddleName] = useState("");
  const [cfoLastName, setCfoLastName] = useState("");
  const [cfoPhoneNumber, setCfoPhoneNumber] = useState("");
  const [cfoEmail, setCfoEmail] = useState("");
  const [cfoFoodTag, setCfoFoodTag] = useState("");
  const [cfoWebsite, setCfoWebsite] = useState("");
  const [cfoStreet, setCfoStreet] = useState("");
  const [cfoCity, setCfoCity] = useState("");
  const [cfoState, setCfoState] = useState("");
  const [cfoZip, setCfoZip] = useState("");
  const [cfoCounty, setCfoCounty] = useState("");
  const [cfoCountry, setCfoCountry] = useState("");

  const submitCFOProfile = () => {
    Axios.post("http://localhost:3001/CreateCFOShop", {
      cfoFirstName: cfoFirstName,
      cfoMiddleName: cfoMiddleName,
      cfoLastName: cfoLastName,
      cfoPhoneNumber: cfoPhoneNumber,
      cfoEmail: cfoEmail,
      cfoFoodTag: cfoFoodTag,
      cfoWebsite: cfoWebsite,
      cfoStreet: cfoStreet,
      cfoCity: cfoCity,
      cfoState: cfoState,
      cfoZip: cfoZip,
      cfoCounty: cfoCounty,
      cfoCountry: cfoCountry,
    }).then(() => {
      alert("Successfully added CFO profile");
    });
  };
  return (
    //CREATE CFO PROFILE PAGE
    <div className="CFOProfileForm">
      <h2>Create CFO Shop</h2>
      <label>Full Name</label>

      <form>
      <input 
        type="text"
        id="cfoFirstName"
        placeholder="First name" 
        pattern="/^[A-Za-z]+&/"
        required="true"
        title="Letters only!"
        onChange={(e) => {
          setCfoFirstName(e.target.value);
        }}
      />
      </form>
      {/* <script>{
        function test(){
          const fName = document.getElementById('cfoFirstName');
          const nameRegex = new RegExp(/^[A-Za-z]+&/);
          fName.addEventListener('input', function (event){
          if(!nameRegex.test(fName.value)){
            alert("Name should only contain letters");
            return false;
          } else return true;
        })}};
      </script> */}

      <form >
      <input
        type="text"
        id="cfoMiddleName"
        placeholder="Middle name"
        onChange={(e) => {
          setCfoMiddleName(e.target.value);
        }}
      />
      </form>

      <form >
      <input
        type="text"
        id="cfoLastName"
        placeholder="Last name"
        onChange={(e) => {
          setCfoLastName(e.target.value);
        }}
      />
      </form>
      <button onClick={submitCFOProfile} id="myButton" class="submit-button" >Submit</button>

      <script>{
      document.getElementById("myButton").onclick = function () {
      window.location.href = <Redirect/>
      }}
      </script>

      <label>Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="123-45-678"
        onChange={(e) => {
          setCfoPhoneNumber(e.target.value);
        }}
      />
      <label>Email Address</label>
      <input type="email" id="email" placeholder="Email address" onChange={(e) => {
          setCfoEmail(e.target.value);
        }} />
      <label htmlFor="foodTag" >Food Tag</label>
      <input type="text" id="foodTag" name="FoodTag" onChange={(e) => {
          setCfoFoodTag(e.target.value);
        }} />
      <label htmlFor="Menu">Website</label>
      <input type="url" id="foodTag" name="website" placeholder="link" onChange={(e) => {
          setCfoWebsite(e.target.value);
        }} />
      <label htmlFor=""> Address</label>
      <input type="street" id="autocomplete" placeholder="Street" onChange={(e) => {
          setCfoStreet(e.target.value);
        }}/>
      <input type="city" id="inputCity" placeholder="City" onChange={(e) => {
          setCfoCity(e.target.value);
        }}/>
      <input type="state" id="inputState" placeholder="State" onChange={(e) => {
          setCfoState(e.target.value);
        }} />
      <input
        type="zip"
        className="form-control"
        id="inputZip"
        placeholder="Zip"
        onChange={(e) => {
          setCfoZip(e.target.value);
        }}
      />
      <input type="county" id="inputCounty" placeholder="County" onChange={(e) => {
          setCfoCounty(e.target.value);
        }} />
      <input type="country" id="inputCountry" placeholder="Country" onChange={(e) => {
          setCfoCountry(e.target.value);
        }} />
      <label htmlFor="Menu">Upload Menu</label>
      <input type="file" id="Menu" name="File Name" accept="application/pdf" />

      <button type="reset" value="Reset">
        Reset
      </button>
    </div>
  );
}

export default CreateCFOProfile;