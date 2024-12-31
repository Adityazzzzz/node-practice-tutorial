const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')


app.use([logger, authorize])


app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})


app.listen(5000)