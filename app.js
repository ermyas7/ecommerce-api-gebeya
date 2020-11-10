const config =  require('./src/config')
const express = require('express')
const db = require('./src/db')

const app = express()
const PORT = config.port

app.get('/', (req, res) => {
    res.json({
        message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
      })
})

app.listen(PORT,() => console.log(`Server running on port ${PORT}`))