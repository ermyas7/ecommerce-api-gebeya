const config =  require('../../../config')
const User = require('./user.model')
const _ = require('lodash')
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')


const createUser = async (req, res) => {
    let {password, username} = _.pick(req.body, ['username', 'password'])
    try{
      if(password && password.length < 7){
        res.status(400).json({error: 'Min password length should be atleast 7'})
      }

      const saltRound = 10
      const passwordHash = await bcrypt.hash(password, saltRound)
      const user = await User.create({passwordHash, username})
      const userData = _.pick(user, ['_id', 'username'])
      const accessToken = jwt.sign(userData, config.secret)
      console.log(accessToken)
      res.header('x-auth',`Bearer ${accessToken}`).json({success: true, token: `Bearer ${accessToken}`}) 

    }catch(err){
      console.log({error: err})
      res.status(400).json({Error: 'Some error'})
    }
}

module.exports = {
  createUser
}