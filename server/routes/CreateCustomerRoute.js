//Create Customer Rounting file
const express = require("express");
const CustomerDbServices = require("../database/CustomerDbServices");
const router = express.Router();

router.post("/InsertCustomer", (req, res) => {
  const db = CustomerDbServices.getCustomerDbInstance();
  const customerFirstName = req.body.customerFirstName;
  const customerMiddleName = req.body.customerMiddleName;
  const customerLastName = req.body.customerLastName;
  const customerAddress1 = req.body.customerAddress1;
  const customerAddress2 = req.body.customerAddress2;
  const customerCity = req.body.customerCity;
  const customerState = req.body.customerState;
  const customerZipcode = req.body.customerZipcode;
  const customerPhoneNumber = req.body.customerPhoneNumber;
  const customerEmail = req.body.customerEmail;

  const insertVariables = [
    customerFirstName,
    customerMiddleName,
    customerLastName,
    customerAddress1,
    customerAddress2,
    customerState,
    customerCity,
    customerZipcode,
    customerPhoneNumber,
    customerEmail,
  ];

  const result = db.createNewCustomer(insertVariables);
  //const result = db.updateCustomerLastName(customerLastName, 99);

  //const result = db.updateCustomerAddress(Adrress, 99);
  result.then(res.send("Successfully inserted"));
  result.catch((err) => console.log(err));
});

///Function purpose to get Customer information by ID
router.get("/GetCustomerName", (req, res) => {
  const db = CustomerDbServices.getCustomerDbInstance();
  const fetchCustomerId = req.params.id;

  const result = db.readCustomerName(fetchCustomerId);
  result.then((CustomerName) => res.json({ CustomerName: CustomerName }));
  result.catch((err) => console.log(err));
});

// ----------------- WORKING -----------------
///Function purpose to get Customer information by ID
router.get("/GetCustomer", (req, res) => {
  const db = CustomerDbServices.getCustomerDbInstance();
  const GetMostRecentCustomer = db.readLatestCustomerShopID();

  //Geting the most recent Customer Shop added to the table
  GetMostRecentCustomer.then((CustomerId) => {
    const latestCustomerId = CustomerId[0]["MAX(customer_id)"];
    const result = db.readCustomer(latestCustomerId);

    //Sending Data To Frontend
    result.then((Customer) => res.send(Customer));
    result.catch((err) => console.log(err));
  });
});

module.exports = router;
