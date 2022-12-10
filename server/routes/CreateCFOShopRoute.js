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
  const address1 = req.body.cfoAddress1;
  const address2 = req.body.cfoAddress2;
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

  //const result = db.updateCFOLastName(cfoLastName, 99);

  const result = db.createNewCFOShop(insertVariables);
  //const result = db.updateCFOAddress(Adrress, 99);
  result.then(res.send("Successfully inserted"));

  result.catch((err) => console.log(err));
});

///Function purpose to get CFO shop information by ID
router.get("/GetCFOShopName", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  const fetchCFOId = req.params.id;
  const result = db.readCresult.then((CFOShop) => res.send(CFOShop));
  FOShopName(fetchCFOId);
  result.then((CFOShopName) => res.json({ CFOShopName: CFOShopName }));
  result.catch((err) => console.log(err));
});

// ----------------- WORKING -----------------
///Function purpose to get CFO shop information by ID
router.get("/GetCFOShop/", (req, res) => {
  const db = CfoShopDbServices.getCFOShopDbInstance();
  const getID = db.readLatestCFOShopID();

  //Geting the most recent CFO Shop added to the table
  getID.then((CFOId) => {
    const latestCFOId = CFOId[0]["MAX(CFO_id)"];
    console.log(latestCFOId);

    //Pull Data From Frontend
    const result = db.readCFOShop(latestCFOId);
    result.then((CFOShop) => res.send(CFOShop));
    result.catch((err) => console.log(err));
  });

  //UPDATE BY ID
  // db.updateCFOFirstName("John", CFO_ID);
  // db.updateCFOMiddleName("Rob", CFO_ID);
  // db.updateCFOLastName("Iordache", CFO_ID);
  // db.updateCFOAddress(
  //   ["5123 Jellico Ave", "Suite 4", "AL", "LA", "12345"],
  //   CFO_ID
  // );
  // db.updateCFOContactInformation(
  //   ["123-345-3213", "RobinsPasta@gamil.com"],
  //   CFO_ID
  // );

  //Delete CFO SHOP
  //db.deleteCFOShop(CFO_ID);
});

module.exports = router;
