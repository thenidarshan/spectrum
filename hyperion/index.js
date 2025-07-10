// @flow
const express = require('express');
const path = require('path');
const { createServer } = require('http');
const debug = require('debug')('hyperion:index');

const app = express();

// Serve static files from build directory
app.use(express.static(path.join(__dirname, '../build')));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'hyperion' });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const PORT = process.env.PORT || 3006;

const server = createServer(app);

server.listen(PORT, () => {
  debug(`🌟 Hyperion server running on port ${PORT}`);
  console.log(`🌟 Hyperion server running on http://localhost:${PORT}`);
});

module.exports = app;