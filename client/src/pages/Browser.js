import React, { useState, useEffect } from 'react'
import "./pages.css";
import Axios from 'axios'


function Browser() {

  const[CFO_firstname, setCFOfirstname] = useState('')
  const[CFO_lastname, setCFOlastname] = useState('')
  const[CFO_list, setCFOlist] = useState([]);

 /* useEffect(()=> {
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      console.log(response.data);
      setCFOlist(response.data);
    })
  }, [])
  */

  const submitCFO = () => {
    Axios.post("http://localhost:3001/api/insert", 
    {CFO_firstname: CFO_firstname, 
    CFO_lastname: CFO_lastname,
    }).then(() => {
      alert("successful insert");
    });
  }

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
    </div>

  )
}

export default Browser