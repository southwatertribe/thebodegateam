//        ****************** Robins Test Cases CFOShop DB Serveice DB ******************
const assert = require("chai").assert;
const CfoShopDbServices = require("../CFOShopDbServices");

//Values Used for testing the CFOShop DB Serveice
const cfoShopName = "Robin's pasta";
const cfoFirstName = "Robin";
const cfoMiddleName = "";
const cfoLastName = "Rosculete";
const food_tag = "Pasta";
const website_link = "www.Robin'sPasta.com";
const review_score = 5;
const address1 = "5123 Jellico Ave";
const address2 = "";
const state = "CA";
const city = "Los Angeles";
const zipcode = "91362";
const phone_number = "818-211-3990";
const emai_address = "Robin'sPasta@gmail.com";

//Inserting all the variables into array
const CFOInsertData = [
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

describe("Testing  CFOShopDBService Functions", function () {
  //Test Case 1
  it("1. Creating a new CFOShop Into the Database", function () {
    const db = CfoShopDbServices.getCFOShopDbInstance();
    db.createNewCFOShop(CFOInsertData);
    const result = db.readCFOShop(130);
    //console.log(result);
    result.then((CFOShop) => console.log(CFOShop));
    //assert.equal(result, "pizza");
  }); //End It for Test Case 1
}); // Description
