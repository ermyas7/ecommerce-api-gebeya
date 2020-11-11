const express = require('express')
const itemController = require('./item.controller')

const itemRouter = express.Router()



/*
// @params none
// method get
//auth private
//get all  items
*/

itemRouter.get('/', (req, res) => {
    res.json({work: 'this is from item'})
})

itemRouter.post('/', itemController.createOne)

module.exports = itemRouter