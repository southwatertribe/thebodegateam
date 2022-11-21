//Import models here 
const CfoShopDbServices = require("../utils/CFOShopDbServices");

//URL: shop/create
exports.shops_create = function (req, res) {
    const db = CfoShopDbServices.getCFOShopDbInstance();
    const cfoFirstName = req.body.cfoFirstName;
    const cfoMidleName = req.body.cfoMiddleName;
    const cfoLastName = req.body.cfoLastName;
    const website_link = req.body.website_link
    const food_tag =     req.body.food_tag
    const review_score = req.body.review_score
    const address1 =     req.body.address1
    const address2 =     req.body.address2
    const state =        req.body.state
    const city =         req.body.city
    const zipcode =      req.body.zipcode
    const phone_number = req.body.phone_number
    const emai_address = req.body.emai_address

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