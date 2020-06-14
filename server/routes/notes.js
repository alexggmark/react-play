const express = require('express')
const router = express.Router()

router.get('/notesGet', (req, res) => {
  res.send('Working Notes')
})

router.post('/notesPost', (req, res) => {
  res.send('Ding')
})

module.exports = router