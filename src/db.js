const config = require('./config')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports =  () => {
  mongoose.connect(config.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
}
