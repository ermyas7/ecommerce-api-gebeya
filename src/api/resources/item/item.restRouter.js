const express = require('express')
const itemController = require('./item.controller')

const itemRouter = express.Router()



/*
// @params none
// method get
//auth private
//get all  items
*/

itemRouter.get('/',itemController.getAll)

itemRouter.post('/', itemController.createOne)

module.exports = itemRouter