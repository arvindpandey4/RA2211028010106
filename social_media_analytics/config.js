module.exports = {
    baseUrl: 'http://20.244.56.144/test',
    cacheTTL: {
        users: 60000, // 1 minute
        posts: 30000  // 30 seconds
    },
    PORT: 3000,
    CACHE_KEYS: {
        USERS: 'users',
        POSTS: 'posts'
    }
}; 