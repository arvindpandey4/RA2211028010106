const axios = require('axios');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDc2MjAyLCJpYXQiOjE3NDI0NzU5MDIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk0MTg1MDM4LWRmODgtNDAyNi05NjM2LTM3YjY3NTU2MTgxMSIsInN1YiI6ImFwNjgwMkBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkbWVkIiwiY2xpZW50SUQiOiI5NDE4NTAzOC1kZjg4LTQwMjYtOTYzNi0zN2I2NzU1NjE4MTEiLCJjbGllbnRTZWNyZXQiOiJuSUN1dVNhTEhoQ0NZQmpPIiwib3duZXJOYW1lIjoiQXJ2aW5kIFBhbmRleSIsIm93bmVyRW1haWwiOiJhcDY4MDJAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IlJBMjIxMTAyODAxMDEwNiJ9.n13atr4rtnfJzylgGTYuKkTOuhiobvLAsWqw_56gn-o";

const apiClient = axios.create({
  baseURL: 'http://20.244.56.144/test',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

const fetchAllUsers = async () => {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

const fetchUserPosts = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}/posts`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch posts for user ${userId}`);
  }
};

const fetchAllPosts = async () => {
  try {
    const response = await apiClient.get('/posts');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};

const fetchPostComments = async (postId) => {
  try {
    const response = await apiClient.get(`/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch comments for post ${postId}`);
  }
};

const processData = (data, sortBy, order = 'desc') => {
  if (!Array.isArray(data)) return [];
  
  return [...data].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    
    if (typeof aValue === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(aValue)) {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }
    
    return order === 'desc' ? 
      (aValue < bValue ? 1 : -1) : 
      (aValue > bValue ? 1 : -1);
  });
};

module.exports = {
  fetchAllUsers,
  fetchUserPosts,
  fetchAllPosts,
  fetchPostComments,
  processData
}; 