const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  userString: String,
  title: String,
  content: String
})

module.exports = mongoose.model('Notes', noteSchema)