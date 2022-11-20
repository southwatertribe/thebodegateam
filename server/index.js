const config = require("./config/app.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const startServer = async () => {
  const app = express();
  console.log(`NODE_ENV = ${config.NODE_ENV}`);

  app.use(cors());
  app.use(express.json());
  //Midleware
  app.use(bodyParser.urlencoded({ extended: true }));

  const createCFOProfileRoute = require("./routes/CreateCFOShopRoute");
  app.use("/CreateCFOShop/", createCFOProfileRoute);

  app.listen(config.PORT, () => {
    console.log("Running on port: " + config.PORT);
  });
};

startServer();
