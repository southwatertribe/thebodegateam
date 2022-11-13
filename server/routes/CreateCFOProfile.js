//Create CFO Profile Rounting file

const db = require("../database");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const cfoFirstName = req.body.cfoFirstName;
  const cfoMidleName = req.body.cfoMiddleName;
  const cfoLastName = req.body.cfoLastName;
  const food_tag = "Burger";
  const website_link = "www.facebook.com";
  const review_score = 1;
  const address1 = "5714 Kelvin Ave";
  const address2 = "-";
  const state = "CA";
  const city = "Los Angeles";
  const zipcode = "91387";
  const phone_number = "818-321-1234";
  const emai_address = "ghita@gmail.com";

  const insertVariables = [
    cfoFirstName,
    cfoMidleName,
    cfoLastName,
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

  //Queery statement to insert CFO profile information into Database
  const sqlInsert = `Insert into BodegaDB.CFO (CFO_firstname, CFO_midlename, CFO_lastname, food_tag, website_link, review_score)
    values (?, ?, ?, ?, ?, ?);
    Select LAST_INSERT_ID() into @tempid_cfo;
    SELECT @tempid_cfo;
    INSERT INTO BodegaDB.Address (address1, address2, state, city, zipcode) values (?, 
      ?, ?, ?, ?);
    Select LAST_INSERT_ID() into @tempid_address;
    SELECT @tempid_address;
    INSERT INTO BodegaDB.Contact (phone_number, emai_address) values (?, ?);
    Select LAST_INSERT_ID() into @tempid_contact;
    SELECT @tempid_contact;
    update BodegaDB.CFO
    set address_id = @tempid_address, contact_id = @tempid_contact where CFO_id = @tempid_cfo;`;

  db.query(sqlInsert, insertVariables, (err, resuslt) => {
    if (err) {
      console.log(err);
    } else {
      res.send("SQL Query Completed!");
    }
  });
});

module.exports = router;
