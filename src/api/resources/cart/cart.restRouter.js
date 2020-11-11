const express = require('express')
const cartController = require('./cart.controller')

const cartRouter = express.Router()

/*
// @params none
// method get
//auth private
//get all  items
*/

cartRouter.get('/',cartController.getAll)

/*
// @params none
// method post
//auth private
//All many  items
*/

cartRouter.post('/', cartController.createOne)

/*
// @params none
// method post
//auth private
//All many  items
*/

cartRouter.delete('/:id/:item_id', cartController.removeItem)


module.exports = cartRouter