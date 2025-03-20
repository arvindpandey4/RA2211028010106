// In-memory cache
const cache = {
  users: {
    data: [],
    lastUpdated: 0
  },
  posts: {
    latest: {
      data: [],
      lastUpdated: 0
    },
    popular: {
      data: [],
      lastUpdated: 0
    }
  }
};

// Users cache functions
const getUsersCache = () => cache.users;

const updateUsersCache = (data, timestamp) => {
  cache.users.data = data;
  cache.users.lastUpdated = timestamp;
};

// Posts cache functions
const getPostsCache = (type) => cache.posts[type];

const updatePostsCache = (type, data, timestamp) => {
  cache.posts[type].data = data;
  cache.posts[type].lastUpdated = timestamp;
};

module.exports = {
  getUsersCache,
  updateUsersCache,
  getPostsCache,
  updatePostsCache
}; 