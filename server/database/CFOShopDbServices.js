//This File is for a database File class That will mange the CRUD operations of the DB
let instance = null;
const connection = require("../database/database_connection");
class CFOShopDbServices {
  static getCFOShopDbInstance() {
    return instance ? instance : new CFOShopDbServices();
  }

  //       *********  Create Functionality OF DB for CFO SHOP   ********

  //Function Purpose to insert a new CFO Shop into the database
  async createNewCFOShop(CFOInsertData) {
    try {
      //Queery statement to insert CFO profile information into Database
      const response = await new Promise((resolve, reject) => {
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

        connection.query(sqlInsert, CFOInsertData, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //        *********   Read Functionality OF DB for CFO SHOP   **********

  //Function Purpose to pull alll CFO shop data from the database
  async readCFOShop(CFOId) {}

  //Function Purpose to pull CFO Adrress information from the database
  async readCFOShopAddress(CFOId) {}

  //Function Purpose to pull CFO shop name from the database
  async readCFOShopName(CFOId) {}

  //Function Purpose to pull CFO review information from the database
  async readCFOShopReviewScore(CFOId) {}

  //Fucntion purpose to pull CFO Menu from Database
  async readCFOShopMenu(CFOId) {}

  //Fucntion purpose to pull CFO personal Website link from Database
  async readCFOShopWebsite(CFOId) {}

  //       *********  Update Functionality OF DB for CFO SHOP   ********

  //Function Purpose to update CFO's Name in DB
  async updateCFOName(newCFOName, CFOid) {}

  //Function Purpose to update CFO Adrress
  async updateCFOAddress(newCFOAddress, CFOid) {}

  //Fucntion purpose to update CFO Menu
  async updateCFOMenu(newCFOMenu, CFOid) {}

  //Fucntion purpose to update the CFO review score affter a new CFO Score is added
  async updateCFOReviewScore(newCFOReviewScore, CFOid) {}

  //Fucntion purpose to update the CFO websitelink
  async updateCFOWebsiteLink(newCFOWebsiteLink, CFOid) {}

  //Fucntion purpose to update the CFO Shop name
  async updateCFOShopName(newCFOShopName, CFOid) {}

  // *********  Delte Functionality OF DB for CFO SHOP   ********

  //Function purpose to permanently delete CFO Shop information  From Database
  async deleteCFOShop(CFOid) {}
} //End of Class CFOShopDbServices

module.exports = CFOShopDbServices;
