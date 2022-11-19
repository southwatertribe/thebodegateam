//class CFOShopDbServices purpose to manage all CFO Shop Database Services
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
        const sqlInsert = `INSERT INTO BodegaDB.CFO_Shop 
        (CFO_Shop_Name,CFO_firstname, CFO_midlename, CFO_lastname, CFO_food_tag, CFO_website_link, CFO_review_score)
        VALUES ("Robin's pasta","John", "M", "Smith", "Wings", "www.bogusshop.com", 5);
        SELECT LAST_INSERT_ID() INTO @tempid_cfo;
        SELECT @tempid_cfo;
        INSERT INTO BodegaDB.Address (address1, address2, state, city, zipcode) values ("9299 Hart Avenue", 
        "Suite 109", "CA", "Northridge", "98341");
        SELECT LAST_INSERT_ID() INTO @tempid_address;
        SELECT @tempid_address;
        INSERT INTO BodegaDB.Contact (phone_number, emai_address) values ("818-555-1345", "csun@gmail.com");
        SELECT LAST_INSERT_ID() INTO @tempid_contact;
        SELECT @tempid_contact;
        UPDATE BodegaDB.CFO_Shop
        SET address_id = @tempid_address, contact_id = @tempid_contact where CFO_id = @tempid_cfo;`;

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
  async readCFOId(CFOId) {}

  //Function Purpose to pull CFO review information from the database
  async readCFOShopReviewScore(CFOId) {}

  //Fucntion purpose to pull CFO Menu from Database
  async readCFOShopMenu(CFOId) {}

  //Fucntion purpose to pull CFO personal Website link from Database
  async readCFOShopWebsite(CFOId) {}

  //       *********  Update Functionality OF DB for CFO SHOP   ********

  //Fucntion purpose to update the CFO Shop name
  async updateCFOShopName(newCFOShopName, CFOId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.CFO_Shop SET CFO_Shop_Name = ? WHERE CFO_id = ?";

        connection.query(sqlUpdate, newCFOShopName, CFOId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      if (err) reject(new Error(err.message));
      resolve(resuslts);
    } catch (error) {
      console.log(error);
    }
  }

  //Function Purpose to update CFO's Name in DB
  async updateCFOName(newCFOName, CFOId) {}

  //Function Purpose to update CFO Adrress
  async updateCFOAddress(newCFOAddress, CFOId) {}

  //Fucntion purpose to update CFO Menu
  async updateCFOMenu(newCFOMenu, CFOId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.CFO_Shop SET CFO_menu = ? WHERE CFO_id = ?";

        connection.query(sqlUpdate, newCFOMenu, CFOId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      if (err) reject(new Error(err.message));
      resolve(resuslts);
    } catch (error) {
      console.log(error);
    }
  }

  //Fucntion purpose to update the CFO review score affter a new CFO Score is added
  async updateCFOReviewScore(newCFOReviewScore, CFOId) {}

  //Fucntion purpose to update the CFO websitelink
  async updateCFOWebsiteLink(newCFOWebsiteLink, CFOId) {}

  // *********  Delte Functionality OF DB for CFO SHOP   ********

  //Function purpose to permanently delete CFO Shop information  From Database
  //Function nor impleneted properly, still need to manage address and contact information Deletion
  async deleteCFOShop(CFOId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlDelete = "DELETE FROM BodegaDB.CFO_Shop WHERE CFO_id = ?";

        connection.query(sqlDelete, CFOId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      if (err) reject(new Error(err.message));
      resolve(resuslts);
    } catch (error) {}
  }
} //End of Class CFOShopDbServices

module.exports = CFOShopDbServices;
