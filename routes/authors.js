const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// All authors route
router.get('/', (req,res) => {
    res.render('authors/index')
}) 

// new authors route
router.get('/new', (req,res) => {
    res.render('authors/new', {author: new Author()})
}) 

// create author routes
router.post('/', (req, res) => {
    res.send(req.body.name)
})


module.exports = router