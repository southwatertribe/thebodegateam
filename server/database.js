const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
});

connection.connect(function (err) {
  if (err) {
    console.error("Database connection  failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});


/*
// Script 1 Testing
  var sql1 = "UPDATE BodegaDB.CFO SET CFO_firstname = TRIM(\"    Danny      \"), CFO_midlename = \"K\", CFO_lastname = \"Rob\" WHERE CFO_id = 1;";
  connection.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });

  var sql2 = "Select * from BodegaDB.CFO; ";
  connection.query(sql2, function (err, result) {
    if (err) throw err;
    let test = result
    console.log("Result: " + test);
  });

  */

module.exports = connection;

//connection.end();