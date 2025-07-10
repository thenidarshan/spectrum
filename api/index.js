// @flow
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createServer } = require('http');
const debug = require('debug')('api:index');

// Create Express app
const app = express();

// Basic middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Basic API endpoint
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Spectrum API Server',
    version: '1.0.0',
    status: 'running'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 3001;

const server = createServer(app);

server.listen(PORT, () => {
  debug(`🚀 API Server running on port ${PORT}`);
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
});

module.exports = app;