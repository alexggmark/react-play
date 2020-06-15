const express = require('express')
const router = express.Router()
const users = require('../models/users')
const auth = require('../middleware/auth')

router.get('/usersGet', auth, async (req, res) => {
  try {
    const result = await req.user
    res.send(result)
    console.log(req.user)
  } catch (err) {
    console.error(err)
  }
})

router.post('/createUser', async (req, res) => {
  try {
    const user = new users(req.body)
    await user.save()
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (err) {
    console.error(err)
  }
})

router.post('/login', async (req, res) => {
  try {
    const { userName, userPassword } = req.body
    const user = await users.findByCredentials(userName, userPassword)

    if (!user) {
      console.error('Not user')
      return
    }

    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (err) {
    console.error(err)
  }
})

module.exports = router