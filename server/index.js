const config =  require('./config/index.js');
const express = require("express");

const startServer = async() => {

  const app = express();
  console.log(`NODE_ENV=${3001}`);
  

  app.get("/api", (req, res) => {
    res.json({ message: "Updating foh docker" });
  });


  app.listen(3001, () => {
    console.log(`Spun up on ${3001}`);
  });


}

startServer();
  