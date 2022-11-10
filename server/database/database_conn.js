const mysql = require('mysql2')
const config =  require('./config/app.js');
require("dotenv").config();

const dbconnect = () => {
  console.log("Youve connected to the database")      
}
module.exports = dbconnect


//^ Robin Rosculete