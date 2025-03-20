const processUserData = (users) => {
    // Sort users by post count in descending order
    return users.sort((a, b) => b.posts.length - a.posts.length);
};

const processPostData = (posts, type = 'popular') => {
    if (type === 'popular') {
        // Sort by comment count in descending order
        return posts.sort((a, b) => b.comments.length - a.comments.length);
    } else {
        // Sort by creation date in descending order (latest first)
        return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
};

module.exports = {
    processUserData,
    processPostData
}; 