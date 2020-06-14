const express = require('express')
const router = express.Router()
const users = require('../models/users')

router.get('/usersGet', async (req, res) => {
  try {
    const result = await users.find().exec()
    res.send(result)
  } catch (err) {
    console.error(err)
  }
})

router.post('/usersPost', async (req, res) => {
  try {
    const user = new users(req.body)
    const result = await user.save()
    res.send(result)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router