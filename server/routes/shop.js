const express = require("express");
const router = express.Router();
//Models
//Shop
//Adress
//Cfo

//Controller require
var shops_controller = require("../controllers/shops_controller.js");

//Everything below has /shop tacked on before the route
//Get create shop
router.post("/create", shops_controller.shops_create);
//Post to create shop (MUST COME BEFORE SHOPS,ID)
router.post("/create", shops_controller.shops_create);

router.get("/:id", shops_controller.shops_create);

module.exports = router;
