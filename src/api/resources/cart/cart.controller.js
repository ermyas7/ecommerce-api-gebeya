const Cart = require('./cart.model')
const _ = require('lodash')

const createOne = async (req, res) => {
    const body = _.pick(req.body, 
        ['items'])
        
    try{
        const items = await Cart.create({user: req.user._id,...body})
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

const getAll = async (req, res) => {
        
    try{
        const items = await Cart.find({user: req.user._id}).populate('items.data').populate('items.data.vendor').exec()
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

const removeItem = async (req, res) => {
    let {id, item_id} = req.params
        
    try{
        const cart = await Cart.findById(id)
        if(!cart){
            res.status(404).json({error: 'Item not found'})
        }
        
        if(cart.user != req.user._id){
            res.status(401).json({error: 'You are not authorized!'})
        }

        let newCartItem = cart.items.map((item) => {
            let newItem = item
            if(item.data == item_id){
                newItem.quantity = newItem.quantity > 0 ?  --newItem.quantity : newItem.quantity
            }
            return newItem
        })
        newCartItem = newCartItem.filter((item) => item.quantity > 0)
        if(newCartItem && newCartItem.length === 0){
            await Cart.findByIdAndRemove(id)
            res.status(200).json({
            success: true
        })
        }
        cart.items = newCartItem
        await cart.save()
        console.log(newCartItem, item_id)
        res.status(200).json({
            success: true
        })
    }catch(err){
        res.status(404).json({
            error: 'Could not remove items'
        })
    }    
}

module.exports = {
    createOne,
    getAll,
    removeItem
}