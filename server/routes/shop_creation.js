const express = require('express')
const router = express.Router()
//Models
    //Shop
    //Adress
    //Cfo


//Controller require
var shop_creation_controller = require('../controllers/shop_creation_controller.js')

//Post to create shop
router.post("create", shop_creation_controller.shop_create)


module.exports = router;