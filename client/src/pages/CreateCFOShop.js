import React, { useState } from "react";
import "./pages.css";
import Axios from "axios";
import "./RedirectPage";
import "./Individual Shop/IndividualShop.js";

function CreateCFOShop() {
  const [cfoShopName, setCfoShopName] = useState("");
  const [cfoFirstName, setCfoFirstName] = useState("");
  const [cfoMiddleName, setCfoMiddleName] = useState("");
  const [cfoLastName, setCfoLastName] = useState("");
  const [cfoPhoneNumber, setCfoPhoneNumber] = useState("");
  const [cfoEmail, setCfoEmail] = useState("");
  const [cfoFoodTag, setCfoFoodTag] = useState("");
  const [cfoWebsite, setCfoWebsite] = useState("");
  const [cfoAddress1, setCfoAddress1] = useState("");
  const [cfoAddress2, setCfoAddress2] = useState("");
  const [cfoCity, setCfoCity] = useState("");
  const [cfoState, setCfoState] = useState("");
  const [cfoZip, setCfoZip] = useState("");

  //Axios alert message not working properly, alert message not beeing displayed
  const submitCFOShop = () => {
    Axios.post("http://localhost:3001/CreateCFOShop/InsertCFOShop", {
      cfoShopName: cfoShopName,
      cfoFirstName: cfoFirstName,
      cfoMiddleName: cfoMiddleName,
      cfoLastName: cfoLastName,
      cfoPhoneNumber: cfoPhoneNumber,
      cfoEmail: cfoEmail,
      cfoFoodTag: cfoFoodTag,
      cfoWebsite: cfoWebsite,
      cfoAddress1: cfoAddress1,
      cfoAddress2: cfoAddress2,
      cfoCity: cfoCity,
      cfoState: cfoState,
      cfoZip: cfoZip,
    }).then(() => {
      alert("Successfully added CFO Shop");
    });
    window.location.href = "http://localhost:3000/yourshop";
  };

  return (
    //CREATE CFO PROFILE PAGE
    //encType='multipart/form-data'

    <div className="CFOShopForm">
      <h2>Create CFO Shop</h2>
      <label>CFO Shop Name</label>
      <input
        type="text"
        id="cfoShopName"
        placeholder="CFO Shop Name"
        required="true"
        title="Letters only!"
        onChange={(e) => {
          setCfoShopName(e.target.value);
        }}
      />
      <input
        type="text"
        id="cfoFirstName"
        placeholder="First name"
        pattern="^[a-zA-Z]+$"
        required="true"
        title="Letters only!"
        onChange={(e) => {
          setCfoFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        id="cfoMiddleName"
        pattern="^[a-zA-Z]+$"
        title="Letters only!"
        placeholder="Middle name"
        onChange={(e) => {
          setCfoMiddleName(e.target.value);
        }}
      />
      <input
        type="text"
        id="cfoLastName"
        pattern="^[a-zA-Z]+$"
        required="true"
        title="Letters only!"
        placeholder="Last name"
        onChange={(e) => {
          setCfoLastName(e.target.value);
        }}
      />
      <label>Phone Number</label>
      <input
        type="tel"
        id="cfoPhoneNumber"
        placeholder="123-45-6789"
        onChange={(e) => {
          setCfoPhoneNumber(e.target.value);
        }}
      />
      <label>Email Address</label>
      <input
        type="email"
        id="cfoEmail"
        placeholder="Email address"
        onChange={(e) => {
          setCfoEmail(e.target.value);
        }}
      />
      <label htmlFor="foodTag">Food Tag</label>
      <input
        type="text"
        id="cfoFoodTag"
        name="FoodTag"
        placeholder="Food Tags"
        onChange={(e) => {
          setCfoFoodTag(e.target.value);
        }}
      />
      <label htmlFor="Website">Website</label>
      <input
        type="url"
        id="setCfoWebsite"
        name="website"
        placeholder="link"
        onChange={(e) => {
          setCfoWebsite(e.target.value);
        }}
      />
      <label htmlFor=""> Address 1</label>
      <input
        type="address1"
        id="cfoAddress1"
        placeholder="First Address"
        onChange={(e) => {
          setCfoAddress1(e.target.value);
        }}
      />
      <label htmlFor=""> Address 2</label>
      <input
        type="address2"
        id="cfoAddress2"
        placeholder="Second Address"
        onChange={(e) => {
          setCfoAddress2(e.target.value);
        }}
      />

      <input
        type="city"
        id="cfoCity"
        placeholder="City"
        onChange={(e) => {
          setCfoCity(e.target.value);
        }}
      />

      <input
        type="state"
        id="cfoState"
        placeholder="State"
        onChange={(e) => {
          setCfoState(e.target.value);
        }}
      />

      <input
        type="zip"
        className="form-control"
        id="cfoZip"
        placeholder="Zip"
        onChange={(e) => {
          setCfoZip(e.target.value);
        }}
      />

      <label htmlFor="Menu">Upload Menu</label>
      <input
        type="file"
        id="cfoMenu"
        name="cfoMenu"
        accept="application/pdf"
        onChange={(e) => {
          console.log("cfoMenu: ", e.target.files[0]);
          // setCfoMenu(e.target.files[0]);
          //const fileObject = e.target.files[0]
          //console.log(e.target.files[0], "Testing")
        }}
      />

      <button onClick={submitCFOShop}>Submit</button>

      <button type="reset" value="Reset">
        Reset
      </button>
    </div>
  ); //end
}

export default CreateCFOShop;
