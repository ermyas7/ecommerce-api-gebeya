const config = require('../../config')
const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['x-auth']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.status(401).json({error: 'Token not found'})
  jwt.verify(token, config.secret, (err, user) => {
      console.log('from auth ',user)
      if(err) res.status(403).json({error: 'you are not authorized'})
      req.user = user
      next()
  })
}

module.exports = authenticateToken