const merge =  require('lodash').merge

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const env = process.env.NODE_ENV

const baseConfig = {
    port: 5000,
    db: {
        url: 'mongodb://mongo:27017/ecommerce-api'
    },
    secret: 'daddfesfsfwefwrtrt45656666565656565656'
}

let envConfig = {}

switch(env){
    case 'development':
    case 'dev':
        envConfig = require('./dev')
        break;
    case 'test':
    case 'testing':
        envConfig = require('./testing')
        break;
    case 'prod':
    case 'production':
        envConfig = require('./prod')
        break;
    default:
        envConfig = require('./dev')             
}

module.exports =  merge(baseConfig, envConfig)