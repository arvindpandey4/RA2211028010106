# Social Media Analytics Microservice

A microservice for fetching and analyzing social media data with caching.

## Features

- Bearer token authentication
- Time-based caching (60s TTL)
- REST API for social media data
- Dynamic user and post ID routing

## Endpoints

- `GET /users` - Get all users
- `GET /users/:userId/posts` - Get posts by user
- `GET /posts?type=latest` - Get latest posts
- `GET /posts?type=popular` - Get popular posts
- `GET /posts/:postId/comments` - Get comments by post

## Setup

```bash
npm install
npm start
``` 