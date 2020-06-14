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

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_TOKEN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Success')
  })
  .catch((err) => {
    console.error(err)
  })


app.use('/', userRoutes)
app.use('/', notesRoutes)

const options = {
  key: fs.readFileSync(path.resolve(__dirname, './certs/server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, './certs/server.cert'))
}

https.createServer(options, app).listen(3000)