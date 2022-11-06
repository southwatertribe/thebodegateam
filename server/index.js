const config = require("./config/index.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

var db = require("./database.js");

const startServer = async () => {
  const app = express();
  console.log(`NODE_ENV=${config.NODE_ENV}`);

  app.use(cors());
  app.use(express.json());

  //Midleware
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/insert", (req, res) => {
    const cfoFirstName = req.body.cfoFirstName;
    const cfoMidleName = req.body.cfoMiddleName;
    const cfoLastName = req.body.cfoLastName;

    const sqlInsert =
      "INSERT INTO BodegaDB.CFO (CFO_firstname, CFO_midlename, CFO_lastname) VALUES (?,?,?);";
    db.query(
      sqlInsert,
      [cfoFirstName, cfoMidleName, cfoLastName],
      (err, resuslt) => {
        if (err) {
          console.log(err);
        } else {
          res.send("SQL Query Completed!");
        }
      }
    );
  });

  app.listen(3001, () => {
    console.log("running on port 3001");
  });
};

startServer();
