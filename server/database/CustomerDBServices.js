//Class CustomerDBServices
let instance = null;
const connection = require("../database/database_connection");

class CustomerDbServices {
  static getCustomerDbInstance() {
    return instance ? instance : new CustomerDbServices();
  }
//       *********  Create Functionality OF DB for Customer   ********

  //Function Purpose to insert a new Customer into the database (COMPLETE)
  async createNewCustomer(CustomerInsertData) {
    try {
      //Queery statement to insert Customer profile information into Database
      const response = await new Promise((resolve, reject) => {
        const sqlInsert = `INSERT INTO BodegaDB.Customer 
        (customer_firstname, customer_midlename, customer_lastname)
        VALUES (?, ?, ?);
        Select LAST_INSERT_ID() into @tempid_customer;
        INSERT INTO BodegaDB.Address (address1, address2, state, city, zipcode, Customer_address_id)
        VALUES (?, ?, ?, ?, ?, @tempid_customer); 
        INSERT INTO BodegaDB.Contact (
        phone_number,email_address,Customer_contact_id)
        VALUES (?, ?,@tempid_customer);`;

        connection.query(sqlInsert, CustomerInsertData, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //        *********   Read Functionality OF DB for Customer  **********

  //Function Purpose to pull alll Customer data from the database (COMPLETE)
  async readCustomer(CustomerId) {
    try {
      //Queery statement to insert Customer profile information into Database
      const response = await new Promise((resolve, reject) => {
        const sqlSelect = `select customer_firstname, customer_midlename, customer_lastname,
        address1, address2, state, city, zipcode, phone_number, email_address
        from BodegaDB.Customer
        left join BodegaDB.Address 
        on BodegaDB.Customer.customer_id = BodegaDB.Address.Customer_address_id
        left join BodegaDB.Contact
        on  BodegaDB.Customer.customer_id = BodegaDB.Contact.Customer_contact_id
        where customer_id = ?;`;

        connection.query(sqlSelect, CustomerId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //Function Purpose to pull Customer Address information from the database (COMPLETE)
  async readCustomerAddress(CustomerId) {
    try {
      //Query statement to insert Customer profile information into Database
      const response = await new Promise((resolve, reject) => {
        const sqlSelect = `select address1, address2, state, city, zipcode, phone_number, email_address
        from BodegaDB.Customer
        left join BodegaDB.Address 
        on BodegaDB.Customer.customer_id = BodegaDB.Address.Customer_id
        left join BodegaDB.Contact
        on  BodegaDB.Customer.customer_id = BodegaDB.Contact.Customer_id
        where customer_id = ?;`;

        connection.query(sqlSelect, CustomerId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //Function Purpose to pull Customer name from the database (COMPLETE)
  async readCustomerName(CustomerId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlSelect = `select customer_firstname
        from BodegaDB.Customer
        where customer_id = ?;`;
        connection.query(sqlRead, CustomerId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  } //end readCustomerName method


  //Function Purpose to update Customer's First Name in DB (COMPLETE)
  async updateCustomerFirstName(newCustomerFirstName, CustomerId) {
    try {
      const insertVariables = [newCustomerFirstName, CustomerId];
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.Customer SET customer_firstname = ? WHERE customer_id = ?;";

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

  //Function Purpose to update Customer's Middle Name in DB (COMPLETE)
  async updateCustomerMiddleName(newCustomerMiddleName, CustomerId) {
    try {
      const insertVariables = [newCustomerMiddleName, CustomerId];
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.Customer SET customer_midlename = ? WHERE customer_id = ?;";

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

  //Function Purpose to update Customer's Last Name in DB (COMPLETE)
  async updateCustomerLastName(newCustomerLastName, CustomerId) {
    try {
      const insertVariables = [newCustomerLastName, CustomerId];
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.Customer SET customer_lastname = ? WHERE customer_id = ?;";

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

  //Function Purpose to update Customer Adrress (COMPLETE)
  async updateCustomerAddress(newCustomerAddress, CustomerId) {
    try {
      newCustomerAddress.push(CustomerId);
      const response = await new Promise((resolve, reject) => {
        const sqlUpdate =
          "UPDATE BodegaDB.Address SET address1 = ?, address2 = ?, state= ?, city = ?, zipcode = ? WHERE Customer_address_id = ?;";

        connection.query(sqlUpdate, newCustomerAddress, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  // *********  Delte Functionality OF DB for Customer   ********

  //Function purpose to permanently delete Customer information  From Database (COMPLETE)
  async deleteCustomer(CustomerId) {
    try {
      const response = await new Promise((resolve, reject) => {
        const sqlDelete = "DELETE FROM BodegaDB.Customer WHERE customer_id = ?";

        connection.query(sqlDelete, CustomerId, (err, resuslts) => {
          if (err) reject(new Error(err.message));
          resolve(resuslts);
        });
      });
      return response;
    } catch (error) {}
  }
} //End of Class CustomerDbServices

module.exports = CustomerDbServices;

