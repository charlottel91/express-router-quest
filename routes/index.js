const express = require('express')
const posts = require('./Post')
const tags = require('./Tags')

const router = express.Router()

router.use('/posts', posts)
router.use('/tags', tags)


module.exports = router