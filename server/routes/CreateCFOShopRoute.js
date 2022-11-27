//Create CFO Shop Rounting file
const express = require("express");
//const app = require("../config/app");
const CfoShopDbServices = require("../database/CFOShopDbServices");
const router = express.Router();

router.post("/InsertCFOShop", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  const cfoShopName = req.body.cfoShopName;
  const cfoFirstName = req.body.cfoFirstName;
  const cfoMiddleName = req.body.cfoMiddleName;
  const cfoLastName = req.body.cfoLastName;
  const food_tag = req.body.cfoFoodTag;
  const website_link = req.body.cfoWebsite;
  const review_score = 1;
  const address1 = req.body.cfoAddress1;
  const address2 = req.body.cfoAddress1;
  const state = req.body.cfoState;
  const city = req.body.cfoCity;
  const zipcode = req.body.cfoZip;
  const phone_number = req.body.cfoPhoneNumber;
  const emai_address = req.body.cfoEmail;

  const insertVariables = [
    cfoShopName,
    cfoFirstName,
    cfoMiddleName,
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

  //const Adrress = [address1, address2, state, city, zipcode];

  console.log(insertVariables);
  const result = db.createNewCFOShop(insertVariables);
  //const result = db.updateCFOLastName(cfoLastName, 99);

  //const result = db.updateCFOAddress(Adrress, 99);
  result.then(res.send("Successfully inserted"));
  result.catch((err) => console.log(err));
});

///Function purpose to get CFO shop information by ID
router.get("/GetCFOShopName", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  const fetchCFOId = req.params.id;

  const result = db.readCFOShopName(fetchCFOId);
  result.then((CFOShopName) => res.json({ CFOShopName: CFOShopName }));
  result.catch((err) => console.log(err));
});

// ----------------- WORKING -----------------
///Function purpose to get CFO shop information by ID
router.get("/GetCFOShop", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  //const fetchCFOId = req.params.id;
  const fetchCFOId = 128;

  const result = db.readCFOShop(fetchCFOId);
  //result.then((val) => console.log(val));
  result.then((CFOShop) => res.send(CFOShop));
  result.catch((err) => console.log(err));
});

module.exports = router;
