const jwt = require('jsonwebtoken')
const User = require('../models/users')

const checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"]

  if (!token) {
    console.error('No tokeen')
  }

  jwt.verify(token, 'mysecretstring', (err, decoded) => {
    if (err) {
      console.error(err)
    }

    req.userId = decoded.id
    next()
  })
}