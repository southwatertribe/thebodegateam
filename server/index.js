const express = require("express");
require('dotenv').config();
//The config file has our global port var
const { PORT } = require('./config/index.js');

const startServer = async() => {

  const app = express();


  app.get("/api", (req, res) => {
    res.json({ message: "Hey baby" });
  });


  app.listen(PORT, () => {
    console.log(`Spun up on ${PORT}`);
  });


}

startServer();
  