import React, { useState } from "react";
import "./pages.css";
import Axios from "axios";

function CreateCustomer() {
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerMiddleName, setCustomerMiddleName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerList, setCustomerlist2] = useState([]);

  //Axios alert message not working properly, alert message not beeing displayed
  const submitCustomer = () => {
    Axios.post("http://localhost:3001/CreateCustomer/InsertCustomer", {
      customerFirstName: customerFirstName,
      customerMiddleName: customerMiddleName,
      customerLastName: customerLastName,
    }).then(() => {
      alert("Successfully added Customer");
    });
  };


  const getCustomerdata = () => {
    Axios.get("http://localhost:3001/CreateCustomer/GetCustomer/:customer_id").then((response) => {
      setCustomerlist2(response.data);
    });
  };


  return (
    //CREATE Customer PROFILE PAGE
    <div className="CustomerForm">
      <h2>Create Customer</h2>
      <label>Full Name</label>

      <input
        type="text"
        id="customerFirstName"
        placeholder="First name"
        onChange={(e) => {
          setCustomerFirstName(e.target.value);
        }}
      />

      <input
        type="text"
        id="customerMiddleName"
        placeholder="Middle name"
        onChange={(e) => {
          setCustomerMiddleName(e.target.value);
        }}
      />

      <input
        type="text"
        id="customerLastName"
        placeholder="Last name"
        onChange={(e) => {
          setCustomerLastName(e.target.value);
        }}
      />
      <button onClick={submitCustomer}>Submit</button>

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
      <button type="reset" value="Reset">
        Reset
      </button>

      <div className="Browse Customer 2">
      <h2>Browser 2</h2>
      <button onClick={getCustomerdata}>Show Customer Data</button>
      {customerList.map((val, key) => {
        return (
          <div className="customer">
            <div>
              <h3>customer_firstname: {val.customer_firstname}</h3>
              <h3>customer_midlename: {val.customer_midlename}</h3>
              <h3>customer_lastname: {val.customer_lastname}</h3>
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

export default CreateCustomer;