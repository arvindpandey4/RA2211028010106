const express = require('express');
const router = express.Router();
const { fetchAllPosts, fetchPostComments, processData } = require('../services/dataFetcher');
const { cache } = require('../services/cache');

// Get all posts (latest or popular)
router.get('/', async (req, res) => {
  try {
    const type = req.query.type || 'latest';
    const cacheKey = `posts_${type}`;
    
    if (!cache[cacheKey] || Date.now() - cache.lastUpdated > 60000) {
      const posts = await fetchAllPosts();
      const processedPosts = processData(posts, type === 'latest' ? 'date' : 'likes', 'desc');
      cache[cacheKey] = processedPosts;
      cache.lastUpdated = Date.now();
    }
    res.json(cache[cacheKey]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get comments for a specific post
router.get('/:postId/comments', async (req, res) => {
  try {
    const comments = await fetchPostComments(req.params.postId);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 