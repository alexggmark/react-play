const User = require('../models/users')

const checkIfUserExists = (req, res, next) => {
  User.findOne({
    userName: req.body.userName
  }).exec((err, user) => {
    if (err) {
      console.error(err)
    }
    if (user) {
      console.error('User already exists')
    }
  })
}

const verify = {
  checkIfUserExists
}

module.exports = verify