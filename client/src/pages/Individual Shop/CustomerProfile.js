import React, { useState } from "react";
import "../pages.css";
import Axios from "axios";


function CustomerProfile() {
    const [customerList, setCustomerlist2] = useState([]);
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

//Customer
//function IndividualCustomer() {
//  const [cfoList, setCFOlist2] = useState([]);
//  const getCFOdata = () => {
//    Axios.get("http://localhost:3001/CreateCFOShop/GetCFOShop/").then(
//      (response) => {
//        setCFOlist2(response.data);
 //     }
 //   );
 // };

  return (
    <div className="View Customer Information">
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
  ); //end
} //end CustomerProfile

export default CustomerProfile;
