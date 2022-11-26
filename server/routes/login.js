const express = require('express');
const { default: jwtDecode } = require('jwt-decode');
const router = express.Router();
const jwt = require('jwt-decode');
const connection = require("../database/database_connection");

router.post("/",  async (req, res) => {
    const userData = jwtDecode(req.body.data['credential']);
    const CFO_firstname = userData['given_name'];
    
    const CFO_lastname = userData['family_name'];

    const insertVariables = [
        CFO_firstname,
        CFO_lastname,
      ];
  
    const sqlInsert = 
    `INSERT INTO BodegaDB.Customer (customer_firstname, customer_last_name)
     VALUES (??);`;
    try {
        const response = await new Promise((resolve, reject) => {
            connection.query(sqlInsert, insertVariables, (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })   
        })
        return response;   
    } catch (error) {
        console.log(error)
    }
    console.log(jwtDecode(req.body.data['credential']))
    console.log("a request just got sent here!")
})

module.exports = router;