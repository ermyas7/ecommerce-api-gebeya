const express = require('express')

const restRouter = express.Router()

restRouter.get('/', (req, res) => {
    res.json({api: 'main endpoint'})
})

restRouter.use('/item', require('./resources/item'))
restRouter.use('/cart', require('./resources/cart'))
restRouter.use('/user', require('./resources/user'))
module.exports = restRouter