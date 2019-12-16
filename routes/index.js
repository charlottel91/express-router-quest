const express = require('express');
const posts = require('./Post');

const router = express.Router();

router.use('/posts', posts);

module.exports = router