//Import models here 
const CfoShopDbServices = require("../utils/CFOShopDbServices");

//URL: shop/create
exports.shops_create = function (req, res) {
    const db = CfoShopDbServices.getCFOShopDbInstance();
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
  db.insertNewCFOShop(insertVariables);
  res.send("Successfully inserted");
}

//URL: /shop/:id
exports.get_shop_id = function (req,res,next) {
    res.send({
        
    })
}