const config =  require('./config/index.js');
const express = require("express");

const startServer = async() => {

  const app = express();
  console.log(`NODE_ENV=${config.NODE_ENV}`);
  

  app.get("/api", (req, res) => {
    res.json({ message: "Hey baby" });
  });


  app.listen(config.PORT, () => {
    console.log(`Spun up on ${config.PORT}`);
  });


}

startServer();
  