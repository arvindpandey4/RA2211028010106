# Microservices Project

This repository contains two microservices:
1. **Average Calculator Microservice** - A service that calculates averages of numbers from different sources
2. **Social Media Analytics** - A service that provides analytics for social media data

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Project Structure

```
.
├── avg_calc_microservice/       # Average Calculator Microservice
│   ├── src/                     # Source code
│   ├── tests/                   # Unit tests
│   ├── .env                     # Environment variables
│   ├── package.json             # Dependencies
│   └── server.js                # Entry point
│
└── social_media_analytics/      # Social Media Analytics Microservice
    ├── routes/                  # API routes
    ├── services/                # Business logic and external API calls
    ├── utils/                   # Utility functions
    ├── config.js                # Configuration
    ├── package.json             # Dependencies
    └── index.js                 # Entry point
```

## Setup and Running

### 1. Average Calculator Microservice

#### Setup
```bash
# Navigate to the microservice directory
cd avg_calc_microservice

# Install dependencies
npm install
```

#### Environment Variables
Create or modify the `.env` file with the following variables:
```
PORT=9876
API_BASE_URL=your_api_base_url
API_KEY=your_api_key
WINDOW_SIZE=10
CACHE_TTL=60000
```

#### Running the Service
```bash
# Start the service
npm start

# For development with auto-reload
npm run dev

# Run tests
npm test
```

#### API Endpoints
- `GET /api/numbers` - Get all numbers
- `GET /api/numbers/average` - Get the average of all numbers
- `POST /api/numbers` - Add a new number

### 2. Social Media Analytics Microservice

#### Setup
```bash
# Navigate to the microservice directory
cd social_media_analytics

# Install dependencies
npm install
```

#### Running the Service
```bash
# Start the service
npm start

# For development with auto-reload
npm run dev
```

#### API Endpoints
- `GET /users` - Get all users
- `GET /users/:userId/posts` - Get posts for a specific user
- `GET /posts?type=latest` - Get latest posts
- `GET /posts?type=popular` - Get popular posts
- `GET /posts/:postId/comments` - Get comments for a specific post

## Authentication

The Social Media Analytics microservice requires Bearer token authentication for API calls. The token is pre-configured in the `dataFetcher.js` file.

## Caching Strategy

Both microservices implement caching strategies:
- Average Calculator: Sliding window algorithm for calculating real-time averages
- Social Media Analytics: Time-based caching with a TTL (Time-To-Live) of 60 seconds
