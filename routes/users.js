const express = require('express')
const router = express.Router()
const users = require('./models/users')
const auth = require('./middleware/auth')

/**
 * TEST ROUTE FIXME:
 */
router.get('/getAllUsers', async (req, res) => {
  try {
    const result = await users.find().exec()
    res.send(result)
  } catch (err) {
    console.error(err)
  }
})

router.get('/usersGet', auth, async (req, res) => {
  try {
    const result = await req.user
    res.send(result)
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
      res.end()
      return
    }

    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (err) {
    console.error(err)
  }
})

module.exports = router