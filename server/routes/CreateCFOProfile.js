//Create CFO Shop Rounting file
const express = require("express");
const CfoShopDbServices = require("../database/CFOShopDbServices");
const router = express.Router();

router.post("/", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  const cfoFirstName = req.body.cfoFirstName;
  const cfoMidleName = req.body.cfoMiddleName;
  const cfoLastName = req.body.cfoLastName;
  const food_tag = req.body.cfoFoodTag;
  const website_link = req.body.cfoWebsite;
  const review_score = 1;
  const address1 = req.body.cfoStreet;
  const address2 = "-";
  const state = req.body.cfoState;
  const city = req.body.cfoCity;
  const zipcode = req.body.cfoZip;
  const phone_number = req.body.cfoPhoneNumber;
  const email_address = req.body.cfoEmail;

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
    email_address,
  ];
  db.insertNewCFOShop(insertVariables);
});

module.exports = router;
