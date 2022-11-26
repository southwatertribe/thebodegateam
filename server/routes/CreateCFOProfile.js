//Create CFO Shop Rounting file
const express = require("express");
const CfoShopDbServices = require("../database/CFOShopDbServices");
const router = express.Router();

router.post("/", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  const cfoFirstName = req.body.cfoFirstName;
  const cfoMidleName = req.body.cfoMiddleName;
  const cfoLastName = req.body.cfoLastName;
  const food_tag = req.body.food_tag;
  const website_link = req.body.website_link;
  const review_score = 1;
  const address1 = req.body.address1;
  const address2 = req.body.address2;
  const state = req.body.state;
  const city = req.body.city;
  const zipcode = req.body.zipcode;
  const phone_number = req.body.phone_number;
  const emai_address = req.body.emai_address;

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
  db.insertNewCFOShop(insertVariables);
});

module.exports = router;
