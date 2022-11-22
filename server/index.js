const config = require("./config/index.js");
const express = require("express");
//const mysql = require("mysql2");
//const connection = require('./database');
const bodyParser = require("body-parser");
const cors = require("cors");

const startServer = async () => {
  const app = express();
  console.log(`NODE_ENV=${config.NODE_ENV}`);

  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const CFOuserRoute = require("./routes/CFOUser");
  app.use("/browser", CFOuserRoute);

  const createCFOProfileRoute = require("./routes/CreateCFOShopRoute");
  app.use("/CreateCFOShop/", createCFOProfileRoute);

  const loginRoute = require("./routes/login")
  app.use("/login", loginRoute)

  /*
  app.get("/api/get", (req, res) => {
    
    const CFO_firstname = req.body.CFO_firstname;
    const CFO_lastname = req.body.CFO_lastname;
    
    //res.json({ message: "Hey baby" });
    //const sqlSelect = "INSERT INTO BodegaDB.CFO (CFO_firstname, CFO_lastname) VALUES (?, ?);";
    const sqlSelect = "Select (CFO_firstname, CFO_lastname) from BodegaDB.CFO";
    connection.query(sqlSelect, (err, result) => {
      if (err){
        console.log(err);
      } else{
        res.send(result)
      }
    });
  });

  app.post("/api/insert", (req, res) => {
    
    const CFO_firstname = req.body.CFO_firstname;
    const CFO_lastname = req.body.CFO_lastname;
    
    //res.json({ message: "Hey baby" });
    const sqlInsert = "INSERT INTO BodegaDB.CFO (CFO_firstname, CFO_lastname) VALUES (?, ?);";
    //const sqlInsert = "Select (CFO_firstname, CFO_lastname) from BodegaDB.CFO where CFO_id = 1";
    connection.query(sqlInsert, [CFO_firstname, CFO_lastname], (err, result) => {
      if (err){
        console.log(err);
      } else{
        res.send("SQL Query Completed!")
      }
    });
  });

  */

  app.listen(3001, () => {
    console.log(`Spun up on ${3001}`);
  });
};

startServer();
