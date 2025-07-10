# Spectrum Setup Guide

This is a simplified version of the Spectrum codebase to get it running quickly.

## Prerequisites

1. **Node.js** (v12 or higher)
2. **Yarn** package manager
3. **RethinkDB** (optional for basic functionality)
4. **Redis** (optional for background jobs)

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start the development servers:**

   **Terminal 1 - API Server:**
   ```bash
   npm run dev:api
   ```

   **Terminal 2 - Web Client:**
   ```bash
   npm run dev:web
   ```

4. **Access the application:**
   - Web client: http://localhost:3000
   - API server: http://localhost:3001

## Available Scripts

- `npm run dev:web` - Start React development server
- `npm run dev:api` - Start API development server
- `npm run build:web` - Build React app for production
- `npm run build:api` - Build API for production
- `npm run start` - Start production API server
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Project Structure

```
spectrum/
├── api/           # Backend API server
├── src/           # Frontend React application
├── shared/        # Shared utilities and components
├── public/        # Static assets
├── docs/          # Documentation
└── package.json   # Dependencies and scripts
```

## Features Currently Working

- ✅ Basic React frontend
- ✅ Express API server
- ✅ Development environment setup
- ✅ Hot reloading for development
- ✅ Basic routing

## Features To Be Implemented

- ⏳ GraphQL API
- ⏳ Database integration (RethinkDB)
- ⏳ Authentication system
- ⏳ Real-time messaging
- ⏳ Community features
- ⏳ File uploads

## Troubleshooting

1. **Port conflicts:** Make sure ports 3000 and 3001 are available
2. **Module not found:** Run `npm install` to ensure all dependencies are installed
3. **Build errors:** Check that you're using Node.js v12 or higher

## Next Steps

1. Set up RethinkDB for full database functionality
2. Configure OAuth providers for authentication
3. Implement GraphQL schema and resolvers
4. Add real-time features with WebSockets

For more detailed information, see the original documentation in the `docs/` directory.