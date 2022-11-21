const config = require("./config/app.js");
const express = require("express");
const path = require("path");
//Database connect function
const dbconnect = require("./database/database_connection.js");
//routes
const shopsRouter = require("./routes/shops.js");

const connection = require("./database/database_connection.js");
//const { default: dbconnect } = require('./database/database_conn.js');

var isprod = process.env.NODE_ENV === "production";

const startServer = async () => {
  const app = express();
  //Json Middleware
  app.use(express.json());

  //Routes Middle Ware
  app.use("/shops", shopsRouter);


  console.log(`NODE_ENV=${process.env.NODE_ENV}`);

  app.listen(process.env.PORT, () => {
    console.log(`Spun up on ${process.env.PORT}`);
    if (isprod == false) console.log("running in dev mode");
  });
  dbconnect.dbconnect();
};

startServer();
