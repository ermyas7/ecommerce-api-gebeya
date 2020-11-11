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
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
        }
}

const cartSchema = new mongoose.Schema(schema)

module.exports = mongoose.model('cart', cartSchema)
