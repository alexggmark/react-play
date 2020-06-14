const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: String,
  userString: String,
  userPassword: String
})

module.exports = mongoose.model('Users', userSchema)