import React, { useState, useEffect } from 'react'
import "./pages.css";
import Axios from 'axios'


function Browser() {

  const[CFO_firstname, setCFOfirstname] = useState('')
  const[CFO_lastname, setCFOlastname] = useState('')
  const[CFO_list, setCFOlist] = useState([]);
  const [cfoList, setCFOlist2] = useState([]);

 /* useEffect(()=> {
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      console.log(response.data);
      setCFOlist(response.data);
    })
  }, [])
  */

  const submitCFO = () => {
    //Axios.post("http://localhost:3001/api/get",
    Axios.post("http://localhost:3001/browser", 
    {CFO_firstname: CFO_firstname, 
    CFO_lastname: CFO_lastname,
    }).then(() => {
      alert("successful insert");
    });
  }


  const getCFOdata = () => {
    Axios.get("http://localhost:3001/browser").then((response) => {
      setCFOlist2(response.data);
    });
  };


  return (
    //TODO MAKE BROWSER
    <div className="Browse CFO">
      <h2>Browser</h2>
      <label>CFO Result 1</label>
      <input type="text" id="CFO_id" placeholder="CFO Number" />
      <input type="text" id="CFO_firstname" placeholder="First name" onChange={(e)=>{
        setCFOfirstname(e.target.value)
      }}/>
      <input type="text" id="CFO_lastName" placeholder="Last name" onChange={(e)=>{
        setCFOlastname(e.target.value)
      }}/>
      <label>Address</label>
      <input type="address1" id="address_var" placeholder="Address" />
      <input type="state" id="state_var" placeholder="State" />
      <label>Food Tag</label>
      <input type="text" id="foodTag" placeholder="FoodTag" />
      <button onClick={submitCFO} type="submit" value="Submit">
        Submit
      </button> 
       {CFO_list.map((val) => {
        return <h1>CFO Name: {val.CFO_firstname}</h1>
      })} 
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

  )//end return

}//end Browser Page


export default Browser