const Cart = require('./cart.model')
const _ = require('lodash')

const createOne = async (req, res) => {
    const body = _.pick(req.body, 
        ['items'])
        
    try{
        const items = await Cart.create(body)
        res.status(200).json({
            success: true,
            data: items
        })
    }catch(err){
        res.status(404).json({
            error: 'Could not add items'
        })
    }    
}

module.exports = {
    createOne
}