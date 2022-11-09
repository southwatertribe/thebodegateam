const express = require('express')
const router = express.Router()

//Get all shops placeholder
router.get("/", (req,res, next)=> {

    res.send(res.json({
        shopnumber: 1,
        name: 'Frogs Cookies',
        menu: [
            {
                itemName: 'OG cookies',
                price: 3.00,
            },
            {
                itemName: 'Hawaiin',
                price: 2.50
            }
        ]
    }))

})

router.post("/", (req, res, next) => {
    res.send("Posted data")
})

module.exports = router;