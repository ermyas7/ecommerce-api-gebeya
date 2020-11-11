const express = require('express')
const cartController = require('./cart.controller')

const cartRouter = express.Router()

/*
// @params none
// method get
//auth private
//get all  items
*/

cartRouter.get('/',(req, res) => {
    res.json({
        'cart': 'cart data comes from here'
    })
})

/*
// @params none
// method post
//auth private
//All many  items
*/

cartRouter.post('/', cartController.createOne)



module.exports = cartRouter