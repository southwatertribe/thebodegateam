import React, { useState } from "react";
import "./pages.css";
import Axios from "axios";
import clearForm from "./CreateCustomer.js";
import './pages.css';

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
  const [cfoList, setCFOlist2] = useState([]);

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
  };


  const getCFOdata = () => {
    Axios.get("http://localhost:3001/CreateCFOShop/GetCFOShop/:CFO_id").then((response) => {
      setCFOlist2(response.data);
    });
  };


  return (
    //CREATE CFO PROFILE PAGE
    <div className="CFOShopForm">
      <form onReset={clearForm}>
      <h2>Create CFO Shop</h2>
      <label>Full Name</label>

      <form>
        <input
          type="text"
          id="cfoShopName"
          placeholder="CFO Shop Name"
          pattern="^[A-Za-z]&"
          required="true"
          title="Letters only!"
          onChange={(e) => {
            setCfoShopName(e.target.value);
          }}
        />
      </form>

      <form>
        <input
          type="text"
          id="cfoFirstName"
          placeholder="First name"
          pattern="^[A-Za-z]&"
          required="true"
          title="Letters only!"
          onChange={(e) => {
            setCfoFirstName(e.target.value);
          }}
        />
      </form>

      <form>
        <input
          type="text"
          id="cfoMiddleName"
          placeholder="Middle name"
          onChange={(e) => {
            setCfoMiddleName(e.target.value);
          }}
        />
      </form>

      <form>
        <input
          type="text"
          id="cfoLastName"
          placeholder="Last name"
          onChange={(e) => {
            setCfoLastName(e.target.value);
          }}
        />
      </form>



      <label>Phone Number</label>
      
      <form>
      <input
        type="tel"
        id="cfoPhoneNumber"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
        placeholder="123-45-6789"
        onChange={(e) => {
          setCfoPhoneNumber(e.target.value);
        }}
      />
      </form>
      <label>Email Address</label>
      <input type="email" id="cfoEmail" placeholder="Email address" 
              onChange={(e) => {
                setCfoEmail(e.target.value);
              }}
      />
      <label htmlFor="foodTag">Food Tag</label>
      <input type="text" id="cfoFoodTag" name="FoodTag" 
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
        placeholder="address1"
        onChange={(e) => {
          setCfoAddress1(e.target.value);
        }}
      />
      <label htmlFor=""> Address 2</label>
      <input
        type="address2"
        id="cfoAddress2"
        placeholder="address2"
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
      <input type="file" id="Menu" name="File Name" accept="application/pdf" />
      <button onClick={submitCFOShop}>Submit</button>

      <button onClick={submitCFOShop}>
        Submit
      </button>  
      <button type="reset" value="Reset">
        Reset
      </button>

      <div className="Browse CFO 2">
      <h2>Browser 2</h2>
      <button onClick={getCFOdata}>Show CFO Data</button>
      {cfoList.map((val, key) => {
        return (
          <div className="cfo">
            <div>
              <h3>CFO_firstname: {val.CFO_firstname}</h3>
              <h3>CFO_midlename: {val.CFO_midlename}</h3>
              <h3>CFO_lastname: {val.CFO_lastname}</h3>
              <h3>food_tag: {val.food_tag}</h3>
              <h3>website_link: {val.website_link}</h3>
              <h3>review_score: {val.review_score}</h3>
              <h3>address1: {val.address1}</h3>
              <h3>address2: {val.address2}</h3>
              <h3>state: {val.state}</h3>
              <h3>city: {val.city}</h3>
              <h3>zipcode: {val.zipcode}</h3>
              <h3>phone_number: {val.phone_number}</h3>
              <h3>emai_address: {val.emai_address}</h3>
            </div>
          </div>
        ); //end inner return
      })}
      </div>

    </div>
  );//end return
}

export default CreateCFOShop;
