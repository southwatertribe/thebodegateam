import React, { useState, useEffect } from "react";
import "./pages.css";
import Axios from "axios";
function CreateCFOProfile() {
  const [cfoFirstName, setCfoFirstName] = useState("");
  const [cfoMiddleName, setCfoMiddleName] = useState("");
  const [cfoLastName, setCfoLastName] = useState("");

  const submitCFOProfile = () => {
    Axios.post("http://localhost:3001/api/insert", {
      cfoFirstName: cfoFirstName,
      cfoMiddleName: cfoMiddleName,
      cfoLastName: cfoLastName,
    }).then(() => {
      alert("Successfully added profile");
    });
  };
  return (
    //CREATE CFO PROFILE PAGE
    <div className="CFOProfileForm">
      <h2>Create CFO Profile</h2>
      <label>Full Name</label>

      <input
        type="text"
        id="cfoFirstName"
        placeholder="First name"
        onChange={(e) => {
          setCfoFirstName(e.target.value);
        }}
      />

      <input
        type="text"
        id="cfoMiddleName"
        placeholder="Middle name"
        onChange={(e) => {
          setCfoMiddleName(e.target.value);
        }}
      />

      <input
        type="text"
        id="cfoLastName"
        placeholder="Last name"
        onChange={(e) => {
          setCfoLastName(e.target.value);
        }}
      />
      <button onClick={submitCFOProfile}>Submit</button>

      <label>Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="123-45-678"
      />
      <label>Email Address</label>
      <input type="email" id="email" placeholder="Email address" />
      <label htmlFor="foodTag">Food Tag</label>
      <input type="text" id="foodTag" name="FoodTag" />
      <label htmlFor="Menu">Website</label>
      <input type="url" id="foodTag" name="website" placeholder="link" />
      <label htmlFor=""> Address</label>
      <input type="street" id="autocomplete" placeholder="Street" />
      <input type="city" id="inputCity" placeholder="City" />
      <input type="state" id="inputState" placeholder="State" />
      <input
        type="zip"
        className="form-control"
        id="inputZip"
        placeholder="Zip"
      />
      <input type="county" id="inputCounty" placeholder="County" />
      <input type="country" id="inputCountry" placeholder="Country" />
      <label htmlFor="Menu">Upload Menu</label>
      <input type="file" id="Menu" name="File Name" accept="application/pdf" />

      <button type="reset" value="Reset">
        Reset
      </button>
    </div>
  );
}

export default CreateCFOProfile;
