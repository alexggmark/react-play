const express = require('express')
const fs = require('fs')
const https = require('https')
const path = require('path')

const app = express()

const options = {
  key: fs.readFileSync(path.resolve(__dirname, './certs/server.key')),
  cert: fs.readFileSync(path.resolve(__dirname, './certs/server.cert'))
}

app.get('/', (req, res) => {
  res.send('Hi there')
})

// app.listen(3000, () => {
//   console.log('Server running')
// })

https.createServer(options, app).listen(3000)