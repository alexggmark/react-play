const jwt = require('jsonwebtoken')
const User = require('../models/users')

const auth = async (req, res, next) => {
  console.log(req)
  const token = req.headers['authorization'].replace('Bearer ', '')
  const data = jwt.verify(token, process.env.JWT_KEY)

  try {
    const user = await User.findOne({ _id: data._id, 'tokens.token': token})
    if (!user) {
      console.error('No user')
    }
    req.user = user
    req.token = token
    next()
  } catch (err) {
    console.error(err)
  }
}

module.exports = auth