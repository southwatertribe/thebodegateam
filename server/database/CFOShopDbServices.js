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
        VALUES (?, ?, ?,?, ?, ?, ?);
        Select LAST_INSERT_ID() into @tempid_cfo;
        INSERT INTO BodegaDB.Address (address1, address2, state, city, zipcode, CFO_Shop_id)
        VALUES (?, ?, ?, ?, ?, @tempid_cfo); 
        INSERT INTO BodegaDB.Contact (
        phone_number,email_address,CFO_Shop_id)
        VALUES (?, ?,@tempid_cfo);`;

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
  async readCFOShop(CFOId) {
    try {
      //Queery statement to insert CFO profile information into Database
      const response = await new Promise((resolve, reject) => {
        const sqlSelect = `select CFO_Shop_Name, CFO_firstname, CFO_midlename, CFO_lastname, CFO_food_tag, CFO_website_link, CFO_review_score,
        address1, address2, state, city, zipcode, phone_number, email_address
        from BodegaDB.CFO_Shop
        left join BodegaDB.Address 
        on BodegaDB.CFO_Shop.CFO_id = BodegaDB.Address.CFO_Shop_id
        left join BodegaDB.Contact
        on  BodegaDB.CFO_Shop.CFO_id = BodegaDB.Contact.CFO_Shop_id
        where CFO_id = ?;`;

        connection.query(sqlSelect, CFOId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //Function Purpose to pull CFO Adrress information from the database
  async readCFOShopAddress(CFOId) {}

  //Function Purpose to pull CFO shop name from the database
  async readCFOShopName(CFOId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlRead =
          "SELECT CFO_Shop_Name FROM BodegaDB.CFO_Shop WHERE CFO_id = ?";

        connection.query(sqlRead, CFOId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

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

      return response;
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
      return response;
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
  //Function not impleneted properly, still need to manage address and contact information Deletion
  async deleteCFOShop(CFOId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlDelete = "DELETE FROM BodegaDB.CFO_Shop WHERE CFO_id = ?";

        connection.query(sqlDelete, CFOId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });
      return response;
    } catch (error) {}
  }
} //End of Class CFOShopDbServices

module.exports = CFOShopDbServices;
