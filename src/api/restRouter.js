const express = require('express')

const restRouter = express.Router()
const auth = require('./modules/auth')

restRouter.get('/', (req, res) => {
    res.json({api: 'main endpoint'})
})

restRouter.use('/item', auth, require('./resources/item'))
restRouter.use('/cart',auth ,require('./resources/cart'))
restRouter.use('/user', require('./resources/user'))
module.exports = restRouter