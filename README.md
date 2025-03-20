# Microservices Project

A dual-microservice architecture for number processing and social media analytics.

## Project Components

### 1. Average Calculator Microservice

**Tech Stack**: Node.js, Express.js, Jest
**Port**: 9876

**Core Functions**:
- Calculates real-time averages of numerical data
- Implements sliding window algorithm for calculations
- Provides RESTful API for data retrieval

**Endpoints**:
- `GET /numbers` - Retrieve all numbers
- `GET /numbers/average` - Get current average
- `POST /numbers` - Add new number

**Key Files**:
- `server.js` - Entry point
- `src/app.js` - Express configuration
- `src/services` - Core calculation logic
- `src/utils/slidingWindow.js` - Average calculation algorithm

### 2. Social Media Analytics Microservice

**Tech Stack**: Node.js, Express.js, Axios
**Port**: 3000

**Core Functions**:
- Retrieves and analyzes social media data from external API
- Implements Bearer token authentication
- Features 60-second TTL cache for performance optimization

**Endpoints**:
- `GET /users` - All users
- `GET /users/:userId/posts` - User-specific posts
- `GET /posts?type=latest` - Latest posts
- `GET /posts?type=popular` - Popular posts
- `GET /posts/:postId/comments` - Post comments

**Key Files**:
- `index.js` - Server configuration
- `services/dataFetcher.js` - External API integration
- `services/cache.js` - Caching mechanism
- `routes/` - API routes

## Quick Start

```bash
# Average Calculator
cd avg_calc_microservice
npm install
npm start

# Social Media Analytics
cd social_media_analytics
npm install
npm start
```

## Environment Setup

**Average Calculator**:
```
PORT=9876
API_BASE_URL=your_api_url
API_KEY=your_key
WINDOW_SIZE=10
```

## Authentication

The Social Media Analytics service uses Bearer token authentication. The token is pre-configured in `dataFetcher.js`.
