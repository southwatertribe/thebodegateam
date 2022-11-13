
const connection = require('../database');
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    
    const CFO_firstname = req.body.CFO_firstname;
    const CFO_midlename = "req.body.CFO_midlename";
    const CFO_lastname = req.body.CFO_lastname;
    const food_tag = "req.body.food_tag";
    const website_link = "req.body.website_link";
    const review_score = 5;
    const address1 = "req.body.address1";
    const address2 = "req.body.address2";
    const state = "req.body.state";
    const city = "req.body.city";
    const zipcode = "req.body.zipcode";
    const phone_number = "req.body.phone_number";
    const emai_address = "req.body.emai_address";

    //const sqlInsert = "INSERT INTO BodegaDB.CFO (CFO_firstname, CFO_lastname) VALUES (?, ?);";

const sqlInsert = "Insert into BodegaDB.CFO (CFO_firstname, CFO_midlename, CFO_lastname, food_tag, website_link, review_score) values (?, ?, ?, ?, ?, ?);\
      Set @tempid_cfo := LAST_INSERT_ID();\
      INSERT INTO BodegaDB.Address (address1, address2, state, city, zipcode) values (?, ?, ?, ?, ?);\
      Set @tempid_address := LAST_INSERT_ID();\
      INSERT INTO BodegaDB.Contact (phone_number, emai_address) values (?, ?);\
      Set @tempid_contact := LAST_INSERT_ID();\
      update BodegaDB.CFO set address_id = @tempid_address, contact_id = @tempid_contact where CFO_id = @tempid_cfo;"

const sqlvariables = [
  CFO_firstname, 
  CFO_midlename,
  CFO_lastname,
  food_tag,
  website_link,
  review_score,
  address1,
  address2,
  state,
  city,
  zipcode,
  phone_number,
  emai_address
]

    connection.query(sqlInsert, sqlvariables, (err, result) => {
      if (err){
        console.log(err);
      } else{
        res.send("SQL Query Completed!")
      }
    });


  });


module.exports = router;