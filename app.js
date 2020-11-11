const config =  require('./src/config')
const express = require('express')
const db = require('./src/db')
db()
const clearDb = require('./src/api/cleardb')

//clearDb()
const app = express()

app.use(express.json())
const PORT = config.port

app.get('/', (req, res) => {
    res.json({
        message: '🌎🌍🌏'
      })
})


/////////////////////////////////////
/////// api routers ////////////////
////////////////////////////////////
app.use('/api', require('./src/api'))

app.listen(PORT,() => console.log(`Server running on port ${PORT}`))