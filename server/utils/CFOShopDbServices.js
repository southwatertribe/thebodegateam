//This File is for a database class That will mange the CRUD operations of the DB
let instance = null;
const connection = require("../database/database_connection");
class CFOShopDbServices {
  static getCFOShopDbInstance() {
    return instance ? instance : new CFOShopDbServices();
  }

  async insertNewCFOShop(CFOInsertData) {
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
}

module.exports = CFOShopDbServices;
