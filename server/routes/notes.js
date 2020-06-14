const express = require('express')
const router = express.Router()
const Notes = require('../models/notes')

router.get('/notesGet', async (req, res) => {
  try {
    const result = await Notes.find().exec()
    res.send(result)
  } catch (err) {
    console.error(err)
  }
})

router.post('/notesPost', async (req, res) => {
  try {
    const note = new Notes(req.body)
    const result = await note.save()
    res.send(result)
  } catch (err) {
    console.error(err)
  }
})

router.put('/notesUpdate/:id', async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id).exec()
    note.set(req.body)
    const result = await note.save()
    res.send(result)
  } catch (err) {
    console.error(err)
  }
})

router.delete('/notesDelete/:id', async (req, res) => {
  try {
    const result = await Notes.deleteOne({ _id: req.params.id }).exec()
    res.send(result)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router