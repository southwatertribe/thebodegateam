//class CFOShopDbServices purpose to manage all CFO Shop Database Services
let instance = null;
const connection = require("../database/database_connection");

class CFOShopDbServices {
  static getCFOShopDbInstance() {
    return instance ? instance : new CFOShopDbServices();
  }

  //       *********  Create Functionality OF DB for CFO SHOP   ********

  //Function Purpose to insert a new CFO Shop into the database (COMPLETE)
  async createNewCFOShop(CFOInsertData) {
    try {
      //Queery statement to insert CFO profile information into Database
      const response = await new Promise((resolve, reject) => {
        const sqlInsert = `INSERT INTO BodegaDB.CFO_Shop 
        (CFO_Shop_Name, CFO_firstname, CFO_midlename, CFO_lastname, CFO_food_tag, CFO_website_link)
        VALUES (?, ?, ?, ?, ?, ?);
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
  //Function Purpose to pull all CFO shops from the database (COMPLETE)
  async readAllCFOShops() {
    try {
      //Queery statement to pulls a CFO Shops information into Database
      const response = await new Promise((resolve, reject) => {
        const sqlSelect = `SELECT CFO_Shop_Name, CFO_firstname, CFO_midlename, CFO_lastname, CFO_food_tag, CFO_website_link, 
        address1, address2, state, city, zipcode, phone_number, email_address
        FROM BodegaDB.CFO_Shop 
         INNER JOIN Address ON CFO_Shop.CFO_id = Address.CFO_Shop_Id 
         INNER JOIN Contact ON CFO_Shop.CFO_id = Contact.CFO_Shop_id;`;

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

  //Function Purpose to pull alll CFO shop data from the database (COMPLETE)
  async readCFOShop(CFOId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlSelect = `select CFO_Shop_Name, CFO_firstname, CFO_midlename, CFO_lastname, CFO_food_tag,CFO_menu, CFO_website_link,
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

  //Function Purpose to pull CFO Address information from the database (COMPLETE)
  async readCFOShopAddress(CFOId) {
    try {
      //Query statement to insert CFO profile information into Database
      const response = await new Promise((resolve, reject) => {
        const sqlSelect = `select address1, address2, state, city, zipcode, phone_number, email_address
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

  //Function Purpose to pull CFO shop name from the database (COMPLETE)
  async readCFOShopName(CFOId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlSelect = `select CFO_Shop_Name
        from BodegaDB.CFO_Shop
        where CFO_id = ?;`;
        connection.query(sqlRead, CFOId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  } //end readCFOShopName method

  //Fucntion purpose to pull CFO Menu from Database (COMPLETE)
  async readCFOShopMenu(CFOId) {
    try {
      //Queery statement to insert CFO profile information into Database
      const response = await new Promise((resolve, reject) => {
        const sqlSelect = `select CFO_menu
        from BodegaDB.CFO_Shop
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
  } //end readCFOShopMenu method

  //Fucntion purpose to pull CFO personal Website link from Database (COMPLETE)
  async readCFOShopWebsite(CFOId) {
    try {
      //Queery statement to insert CFO profile information into Database
      const response = await new Promise((resolve, reject) => {
        const sqlSelect = `select CFO_website_link,
        from BodegaDB.CFO_Shop
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

  //       *********  Update Functionality OF DB for CFO SHOP   ********

  //Fucntion purpose to update the CFO Shop name (COMPLETE)
  async updateCFOShopName(newCFOShopName, CFOId) {
    try {
      insertVariables = [newCFOShopName, CFOId];

      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.CFO_Shop SET CFO_Shop_Name = ? WHERE CFO_id = ?";

        connection.query(sqlUpdate, insertVariables, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //Function Purpose to update CFO's First Name in DB (COMPLETE)
  async updateCFOFirstName(newCFOFirstName, CFOId) {
    try {
      const insertVariables = [newCFOFirstName, CFOId];
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.CFO_Shop SET CFO_firstname = ? WHERE CFO_id = ?;";

        connection.query(sqlUpdate, insertVariables, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //Function Purpose to update CFO's Middle Name in DB (COMPLETE)
  async updateCFOMiddleName(newCFOMiddleName, CFOId) {
    try {
      const insertVariables = [newCFOMiddleName, CFOId];
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.CFO_Shop SET CFO_midlename = ? WHERE CFO_id = ?;";

        connection.query(sqlUpdate, insertVariables, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //Function Purpose to update CFO's Last Name in DB (COMPLETE)
  async updateCFOLastName(newCFOLastName, CFOId) {
    try {
      const insertVariables = [newCFOLastName, CFOId];
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.CFO_Shop SET CFO_lastname = ? WHERE CFO_id = ?;";

        connection.query(sqlUpdate, insertVariables, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //Function Purpose to update CFO Adrress (COMPLETE)
  async updateCFOAddress(newCFOAddress, CFOId) {
    try {
      newCFOAddress.push(CFOId);
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.Address SET address1 = ?, address2 = ?, state= ?, city = ?, zipcode = ? WHERE CFO_Shop_id = ?;";

        connection.query(sqlUpdate, newCFOAddress, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //Function Purpose to update CFO Adrress (COMPLETE)
  async updateCFOContactInformation(newCFOContactInformation, CFOId) {
    try {
      newCFOContactInformation.push(CFOId);
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.Contact SET phone_number = ? , email_address = ? WHERE CFO_Shop_id = ?;";

        connection.query(sqlUpdate, newCFOAddress, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
  //Fucntion purpose to update CFO Menu (COMPLETE)
  async updateCFOMenu(newCFOMenu, CFOId) {
    try {
      const insertVariables = [newCFOMenu, CFOId];

      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.CFO_Shop SET CFO_menu = ? WHERE CFO_id = ?";

        connection.query(sqlUpdate, insertVariables, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //Fucntion purpose to update the CFO websitelink (COMPLETE)
  async updateCFOWebsiteLink(newCFOWebsiteLink, CFOId) {
    try {
      const insertVariables = [newCFOWebsiteLink, CFOId];

      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.CFO_Shop SET CFO_website_link = ? WHERE CFO_id = ?";

        connection.query(sqlUpdate, insertVariables, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  // *********  Delte Functionality OF DB for CFO SHOP   ********

  //Function purpose to permanently delete CFO Shop information  From Database (COMPLETE)
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
