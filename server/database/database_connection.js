//This JS file handles the Connection to the Database Stored in AWS RDS
const mysql = require("mysql2");

require("dotenv").config();

exports.dbconnect = function () {

  const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    multipleStatements: true /* turn on multiple statements */,
  });
  
  
  connection.connect(function (err) {
    try {
      console.log("Connected to database")
    } catch (error) {
      console.error("Database connection  failed: " + err.stack);
       return;
    }
  })
}


