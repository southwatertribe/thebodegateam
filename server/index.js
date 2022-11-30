const config = require("./config/index.js");
const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");

const startServer = async () => {
  const app = express();
  console.log(`NODE_ENV=${config.NODE_ENV}`);

  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(fileUpload());

  const CFOuserRoute = require("./routes/CFOUser");
  app.use("/browser", CFOuserRoute);

  const createCFOProfileRoute = require("./routes/CreateCFOShopRoute");
  app.use("/CreateCFOShop/", createCFOProfileRoute);

  const createCustomerProfileRoute = require("./routes/CreateCustomerRoute");
  app.use("/CreateCustomer/", createCustomerProfileRoute);

  const loginRoute = require("./routes/login");
  app.use("/login", loginRoute);

  app.listen(3001, () => {
    console.log(`Spun up on ${3001}`);
  });
};

startServer();
