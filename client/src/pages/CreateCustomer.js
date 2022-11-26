import React, { useState } from "react";
import "./pages.css";
import Axios from "axios";
import './pages.css';

function CreateCustomer() {
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerMiddleName, setCustomerMiddleName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerStreet, setCustomerStreet] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [customerZipcode, setCustomerZipcode] = useState("");
  const [customerList, setCustomerlist2] = useState([]);

  //Reset to clear form
  const clearForm = () => {
    //clear all input values in the form
    setCustomerFirstName('');
    setCustomerLastName('');
    setCustomerMiddleName('');
    setCustomerPhoneNumber('');
    setCustomerEmail('');
    setCustomerState('');
    setCustomerStreet('');
    setCustomerCity('');
    setCustomerZipcode('');
  };

  //Axios alert message not working properly, alert message not beeing displayed
  const submitCustomer = () => {
    Axios.post("http://localhost:3001/CreateCustomer/InsertCustomer", {
      customerFirstName: customerFirstName,
      customerMiddleName: customerMiddleName,
      customerLastName: customerLastName,
      setCustomerPhoneNumber: customerPhoneNumber,
      setCustomerEmail: customerEmail,
      setCustomerStreet: customerStreet,
      setCustomerCity: customerCity,
      setCustomerState: customerState,
      setCustomerZipcode: customerZipcode,
      
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
      <form onReset={clearForm}>
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
      

      <label>Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="123-45-678"
        onChange={(e) => {
          setCustomerPhoneNumber(e.target.value);
        }}
      />
      <label>Email</label>
        <input type="email" id="email" placeholder="Email address" 
          onChange={(e) => {
            setCustomerEmail(e.target.value);
          }}/>
      <label htmlFor=""> Address</label>
      <input type="street" id="autocomplete" placeholder="Street" 
        onChange={(e) => {
          setCustomerStreet(e.target.value);
        }}/>
      <input type="city" id="inputCity" placeholder="City" 
        onChange={(e) => {
          setCustomerCity(e.target.value);
        }}/>
      <input type="state" id="inputState" placeholder="State" 
        onChange={(e) => {
          setCustomerState(e.target.value);
        }}/>
      <input
        type="zip"
        className="form-control"
        id="inputZip"
        placeholder="Zip"
        onChange={(e) => {
          setCustomerZipcode(e.target.value);
        }}
      />

      <button onClick={submitCustomer}>
        Submit
      </button>
      <button type="reset" onClick={clearForm}>
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



      </form>
    </div>
  );//end return
}

export default CreateCustomer;
