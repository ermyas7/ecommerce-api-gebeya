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
        type: String,
        required: [true, 'Price is required!']
    },
    description: {
        type: String
    },
    vendorName: {
        type: String
    }
    
}

const itemSchema = new mongoose.Schema(schema)

module.exports = mongoose.model('item', itemSchema)
