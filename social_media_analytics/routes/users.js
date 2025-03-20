const express = require('express');
const router = express.Router();
const { fetchAllUsers, fetchUserPosts, processData } = require('../services/dataFetcher');
const { cache } = require('../services/cache');

// Get all users
router.get('/', async (req, res) => {
  try {
    if (!cache.users || Date.now() - cache.lastUpdated > 60000) {
      const users = await fetchAllUsers();
      const processedUsers = processData(users, 'posts', 'desc');
      cache.users = processedUsers;
      cache.lastUpdated = Date.now();
    }
    res.json(cache.users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get posts for a specific user
router.get('/:userId/posts', async (req, res) => {
  try {
    const posts = await fetchUserPosts(req.params.userId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 