const mongoose = require('mongoose')

const schema = {
    name: {
        type: String,
        required: [true, 'Name is required!']
    },

    photo:{
            type: String,
            required: [true, 'Photo is required!']
    },
    price:{
        type: Number,
        required: [true, 'Price is required!']
    },
    description: {
        type: String,
        require: [true, 'Description is required!']
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
        }
}

const itemSchema = new mongoose.Schema(schema)

module.exports = mongoose.model('item', itemSchema)
