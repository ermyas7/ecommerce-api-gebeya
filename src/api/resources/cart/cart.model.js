const mongoose = require('mongoose')

const schema = {
    items: [{
        data: 
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item'
        },
    quantity: Number
    }],
    created_at: {
        type: Date,
        default: Date.now()
    }
}

const cartSchema = new mongoose.Schema(schema)

module.exports = mongoose.model('cart', cartSchema)
