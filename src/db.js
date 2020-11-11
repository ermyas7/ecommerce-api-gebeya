const config = require('./config')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports =  async () => {
  return mongoose.connect(config.db.url, {
    useMongoClient: true
  })
}
