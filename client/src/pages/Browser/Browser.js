import React, { useState, useEffect } from "react";
//import { Document, Page } from "@react-pdf/renderer";
import "../pages.css";
import Axios from "axios";

function Browser() {
  const [cfoList, setCFOlist2] = useState([]);
  const getCFOdata = () => {
    Axios.get("http://localhost:3001/CreateCFOShop/GetCFOShop/").then(
      (response) => {
        setCFOlist2(response.data);
      }
    );
  };

  // Return statemnt should retur cards of CFO so the User can browse
  return (
    <div className="Browse CFO 2">
      <h2>Browse For CFO's</h2>
      <button onClick={getCFOdata}>SHOW CFO SHOP</button>
      {cfoList.map((val, key) => {
        return (
          <div className="cfo">
            <div>
              <h3>CFO_Shop_Name: {val.CFO_Shop_Name}</h3>
              <h3>CFO_firstname: {val.CFO_firstname}</h3>
              <h3>CFO_midlename: {val.CFO_midlename}</h3>
              <h3>CFO_lastname: {val.CFO_lastname}</h3>
              <h3>food_tag: {val.CFO_food_tag}</h3>
              <h3>website_link: {val.CFO_website_link}</h3>
              <h3>review_score: {val.CFO_review_score}</h3>
              <h3>address1: {val.address1}</h3>
              <h3>address2: {val.address2}</h3>
              <h3>state: {val.state}</h3>
              <h3>city: {val.city}</h3>
              <h3>zipcode: {val.zipcode}</h3>
              <h3>phone_number: {val.phone_number}</h3>
              <h3>emai_address: {val.email_address}</h3>
            </div>
          </div>
        ); //end inner return
      })}
    </div>
  ); //end
} //end Browser Page

export default Browser;
