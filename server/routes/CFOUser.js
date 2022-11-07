
const connection = require('../database');
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    
    const CFO_firstname = req.body.CFO_firstname;
    const CFO_lastname = req.body.CFO_lastname;
    
    const sqlInsert = "INSERT INTO BodegaDB.CFO (CFO_firstname, CFO_lastname) VALUES (?, ?);";
    connection.query(sqlInsert, [CFO_firstname, CFO_lastname], (err, result) => {
      if (err){
        console.log(err);
      } else{
        res.send("SQL Query Completed!")
      }
    });
  });


module.exports = router;