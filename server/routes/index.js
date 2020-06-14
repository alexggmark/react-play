const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Working')
})

router.get('/test', (req, res) => {
  res.send('Ding')
})

module.exports = router