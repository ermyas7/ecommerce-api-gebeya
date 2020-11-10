const config = require('./config')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports =  () => {
  return mongoose.connect(config.db.url, {
    useMongoClient: true
  })
}
