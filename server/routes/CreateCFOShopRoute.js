//Create CFO Shop Rounting file
const express = require("express");
//const app = require("../config/app");
const CfoShopDbServices = require("../database/CFOShopDbServices");
const router = express.Router();

router.post("/InsertCFOShop", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  const cfoFirstName = req.body.cfoFirstName;
  const cfoMidleName = req.body.cfoMiddleName;
  const cfoLastName = req.body.cfoLastName;
  const cfoShopName = "Robin's Pasta";
  const food_tag = "Burger";
  const website_link = "www.facebook.com";
  const review_score = 1;
  const address1 = "5312 Jira Ave";
  const address2 = "I love Jira";
  const state = "JR";
  const city = "Confluence";
  const zipcode = "91387";
  const phone_number = "818-123-1234";
  const emai_address = "ghita@gmail.com";

  const insertVariables = [
    cfoShopName,
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

  const Adrress = [address1, address2, state, city, zipcode];

  //console.log(cfoLastName);
  const result = db.createNewCFOShop(insertVariables);
  //const result = db.updateCFOLastName(cfoLastName, 99);
  //const result = db.updateCFOAddress(Adrress, 99);
  result.then(res.send("Successfully inserted"));
  result.catch((err) => console.log(err));
});

///Function purpose to get CFO shop information by ID
router.get("/GetCFOShopName/:CFO_id", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  const fetchCFOId = req.params.id;

  const result = db.readCFOShopName(fetchCFOId);
  result.then((CFOShopName) => res.json({ CFOShopName: CFOShopName }));
  result.catch((err) => console.log(err));
});

// ----------------- WORKING -----------------
///Function purpose to get CFO shop information by ID
router.get("/GetCFOShop/:CFO_id", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  //const fetchCFOId = req.params.id;
  const fetchCFOId = 99;

  const result = db.readCFOShop(fetchCFOId);
  result.then((CFOShop) => res.send(CFOShop));
  result.catch((err) => console.log(err));
});

module.exports = router;
