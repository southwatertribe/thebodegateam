//Create Customer Rounting file
const express = require("express");
//const app = require("../config/app");
const CustomerDbServices = require("../database/CustomerDbServices");
const router = express.Router();

router.post("/InsertCustomer", (req, res) => {
  const db = CustomerDbServices.getCustomerDbInstance();
  const customerFirstName = req.body.customerFirstName;
  const customerMidleName = req.body.customerMiddleName;
  const customerLastName = req.body.customerLastName;
  const address1 = "5312 Jira Ave";
  const address2 = "I love Jira";
  const state = "JR";
  const city = "Confluence";
  const zipcode = "91387";
  const phone_number = "818-123-1234";
  const emai_address = "ghita@gmail.com";

  const insertVariables = [
    customerFirstName,
    customerMidleName,
    customerLastName,
    address1,
    address2,
    state,
    city,
    zipcode,
    phone_number,
    emai_address,
  ];

  //const Adrress = [address1, address2, state, city, zipcode];

  console.log(customerFirstName);
  const result = db.createNewCustomer(insertVariables);
  //const result = db.updateCustomerLastName(customerLastName, 99);

  //const result = db.updateCustomerAddress(Adrress, 99);
  result.then(res.send("Successfully inserted"));
  result.catch((err) => console.log(err));
});

///Function purpose to get Customer information by ID
router.get("/GetCustomerName/:customer_id", (req, res) => {
  const db = CustomerDbServices.getCustomerDbInstance();
  const fetchCustomerId = req.params.id;

  const result = db.readCustomerName(fetchCustomerId);
  result.then((CustomerName) => res.json({ CustomerName: CustomerName }));
  result.catch((err) => console.log(err));
});

// ----------------- WORKING -----------------
///Function purpose to get Customer information by ID
router.get("/GetCustomer/:customer_id", (req, res) => {
  const db = CustomerDbServices.getCustomerDbInstance();
  //const fetchCustomerId = req.params.id;
  const fetchCustomerId = 99;

  const result = db.readCustomer(fetchCustomerId);
  result.then((Customer) => res.send(Customer));
  result.catch((err) => console.log(err));
});

module.exports = router;
