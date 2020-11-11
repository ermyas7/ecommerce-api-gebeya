const mongoose =  require('mongoose')

const schema = {
   name: {
    type: String,
    required: true
   }, 
   username: {
     type: String,
     unique: true,
     required: true
   },
   passwordHash: {
     type: String,
     required: true
   }
}

const userSchema = new mongoose.Schema(schema)

module.exports = mongoose.model('user', userSchema)
