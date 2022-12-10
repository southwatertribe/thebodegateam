import React, { useState } from "react";
import "./pages.css";
import Axios from "axios";

function CreateCustomer() {
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerMiddleName, setCustomerMiddleName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerAddress1, setCustomerAddress1] = useState("");
  const [customerAddress2, setCustomerAddress2] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [customerZipcode, setCustomerZipcode] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerList, setCustomerlist2] = useState([]);

  //Axios alert message not working properly, alert message not beeing displayed
  const submitCustomer = () => {
    Axios.post("http://localhost:3001/CreateCustomer/InsertCustomer", {
      customerFirstName: customerFirstName,
      customerMiddleName: customerMiddleName,
      customerLastName: customerLastName,
      customerAddress1: customerAddress1,
      customerAddress2: customerAddress2,
      customerCity: customerCity,
      customerState: customerState,
      customerZipcode: customerZipcode,
      customerPhoneNumber: customerPhoneNumber,
      customerEmail: customerEmail,
    }).then(() => {
      alert("Successfully added Customer");
    });
  };

  const getCustomerdata = () => {
    Axios.get("http://localhost:3001/CreateCustomer/GetCustomer").then(
      (response) => {
        console.log(response, "response only");
        console.log(response.data, "response.data only");
        console.log(response.customerFirstName, "response.firstname only");
        setCustomerlist2(response.data);
      }
    );
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

      <label>Phone Number</label>
      <input
        type="tel"
        id="customerPhoneNumber"
        name="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="123-456-6789"
        onChange={(e) => {
          setCustomerPhoneNumber(e.target.value);
        }}
      />
      <label>Email</label>
      <input
        type="email"
        id="customerEmail"
        placeholder="Email address"
        onChange={(e) => {
          setCustomerEmail(e.target.value);
        }}
      />
      <label htmlFor=""> Address</label>
      <input
        type="address1"
        id="customerAddress1"
        placeholder="address1"
        onChange={(e) => {
          setCustomerAddress1(e.target.value);
        }}
      />
      <input
        type="address2"
        id="customerAddress2"
        placeholder="address2"
        onChange={(e) => {
          setCustomerAddress2(e.target.value);
        }}
      />
      <input
        type="city"
        id="customerCity"
        placeholder="City"
        onChange={(e) => {
          setCustomerCity(e.target.value);
        }}
      />
      <input
        type="state"
        id="customerState"
        placeholder="State"
        onChange={(e) => {
          setCustomerState(e.target.value);
        }}
      />
      <input
        type="zip"
        className="form-control"
        id="customerZipcode"
        placeholder="Zip"
        onChange={(e) => {
          setCustomerZipcode(e.target.value);
        }}
      />

      <button onClick={submitCustomer}>Submit</button>

      <button type="reset">Reset</button>

      <div className="Browse Customer 2">
        <h2>View Customer Information</h2>
        <button onClick={getCustomerdata}>Show Customer Data</button>
        {customerList.map((val, key) => {
          return (
            <div className="customer">
              <div>
                <h3>customerFirstName: {val.customer_firstname}</h3>
                <h3>customerMiddleName: {val.customer_midlename}</h3>
                <h3>customerLastName: {val.customer_lastname}</h3>
                <h3>customerAddress1: {val.address1}</h3>
                <h3>customerAddress2: {val.address2}</h3>
                <h3>customerState: {val.state}</h3>
                <h3>customerCity: {val.city}</h3>
                <h3>customerZipcode: {val.zipcode}</h3>
                <h3>customerPhoneNumber: {val.phone_number}</h3>
                <h3>customerEmail: {val.email_address}</h3>
              </div>
            </div>
          ); //end inner return
        })}
      </div>
    </div>
  ); //end return
}

export default CreateCustomer;
