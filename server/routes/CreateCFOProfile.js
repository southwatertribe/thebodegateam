//Create CFO Profile Rounting file

const db = require("../database");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
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

module.exports = router;
