const express = require('express')
const router = express.Router()
const posts = require('./Post')
const fakeTags = require('../data/tags.json')

// Get a list of tags
router.get('/', (req, res) => {
    res.json(fakeTags)
  });

  // Get a single tag
router.get('/:tagId', (req, res) => {
    // Find the post in the array that has the id given by req.params.id
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const tagId = Number(req.params.id);
    const foundTag = fakeTags.find((tag) => tag.id === tagId);
    if (!foundTag) {
      return res.status(404).json({
          error: 'Tag not found',
      });
    }
    return res.json(foundTag);
  })

router.use('/:tagId/posts', posts);


module.exports = router