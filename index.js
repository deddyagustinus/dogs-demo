const Express = require('express')
const dog = require('./dog')
const bodyParser = require('body-parser')

require('./database')

let app = new Express()

app.use(bodyParser.json())

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.use('/*', (req, res, next) => {
  if(req.header('Authorization') == 'SecureToken') {
    next()
  } else {
    res.status(401).send()
  }
})

app.use('/dogs', dog)

app.listen(4000)