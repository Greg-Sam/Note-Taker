const router = require('express').Router()
const { notes } = require('../db')

router.post('/notes', (req, res) => {
  notes.push(req.body)
  res.sendStatus(200)
})

router.get('/notes', (req, res) => {
  res.json(notes)
})

router.delete('/notes/:id', (req, res) => {
  let id = req.params
  res.json(notes)
  console.log(notes)
  let objectIndex = notes.findIndex(value => value.id === parseInt(id.id))
  console.log(objectIndex)
  notes.forEach((item, i) => {
    if (i === objectIndex){
      notes.splice(i, 1)
    } else {
      console.log('did not work')
    }
    
  })
  console.log(notes)
  

})

module.exports = router