const router = require('express').Router()
const { notes } = require('../db')

router.post('/notes', (req, res) => {
  notes.push(req.body)
  res.sendStatus(200)
})

router.get('/notes', (req, res) => {
  res.json(notes)
})

module.exports = router
