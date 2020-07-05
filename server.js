const express = require('express')
const fs = require('fs')
const https = require('https')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const userRoutes = require('./routes/users')
const notesRoutes = require('./routes/notes')
const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_TOKEN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Success')
  })
  .catch((err) => {
    console.error(err)
  })


app.use('/', userRoutes)
app.use('/', notesRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

const options = {
  key: fs.readFileSync(path.resolve(__dirname, './certs/server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, './certs/server.cert'))
}

https.createServer(options, app).listen(PORT)