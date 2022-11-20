const connection = require("../database/database_connection");
const express = require("express");
const router = express.Router();

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// -------------------------------------  POST STATEMENTS ----------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

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

  const sqlInsert =
    "Insert into BodegaDB.CFO (CFO_firstname, CFO_midlename, CFO_lastname, food_tag, website_link, review_score) values (?, ?, ?, ?, ?, ?);\
      Set @tempid_cfo := LAST_INSERT_ID();\
      INSERT INTO BodegaDB.Address (address1, address2, state, city, zipcode) values (?, ?, ?, ?, ?);\
      Set @tempid_address := LAST_INSERT_ID();\
      INSERT INTO BodegaDB.Contact (phone_number, emai_address) values (?, ?);\
      Set @tempid_contact := LAST_INSERT_ID();\
      update BodegaDB.CFO set address_id = @tempid_address, contact_id = @tempid_contact where CFO_id = @tempid_cfo;";

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
    emai_address,
  ];

  connection.query(sqlInsert, sqlvariables, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("SQL Query Completed!");
    }
  });
}); //end of Post statement

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// -------------------------------------  GET STATEMENTS ----------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
router.get("/", (req, res) => {
  const sqlSelect =
    "Select CFO_firstname, CFO_midlename, CFO_lastname, phone_number,\
                  emai_address, address1, address2, state, city, zipcode, food_tag, website_link, review_score\
                  from BodegaDB.CFO\
                  left join BodegaDB.Address\
                  on CFO_id = BodegaDB.Address.address_id\
                  left join BodegaDB.Contact\
                  on CFO_id = BodegaDB.Contact.contact_id\
                  where CFO_id = 25;";

  connection.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
}); //end of Get statement

module.exports = router;
