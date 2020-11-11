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


/*
// @params none
// body name, price, photo url, 
// method post
//auth private
//add one  item
*/

itemRouter.post('/', itemController.createOne)

/*
// @params id
// method get
//auth private
//get one item
*/

itemRouter.get('/:id', itemController.getOne)

/*
// @params id
// method delete
//auth private
//delete one item
*/

itemRouter.delete('/:id', itemController.deleteOne)

/*
// @params id
// method patch
//auth private
//update one item
*/

itemRouter.patch('/:id', itemController.updateOne)



module.exports = itemRouter