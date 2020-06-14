const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  },
  userPassword: {
    type: String,
    required: true,
    minLength: 4
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
})

userSchema.pre('save', async function (next) {
  if (this.isModified('userPassword')) {
    this.userPassword = await bcrypt.hash(this.userPassword, 8)
  }

  next()
})

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY)
  this.tokens = this.tokens.concat({ token })
  await this.save()
  return token
}

userSchema.statics.findByCredentials = async function (userName, password) {
  const user = await this.findOne({ userName })

  if (!user) {
    console.error('Invalid login credentials')
  }

  const passwordMatch = await bcrypt.compare(password, user.userPassword)
  if (!passwordMatch) {
    console.error('Password didn\'t match')
  }

  console.log('Login success')
  console.log(`Password match: ${passwordMatch}`)

  return user
}

module.exports = mongoose.model('Users', userSchema)