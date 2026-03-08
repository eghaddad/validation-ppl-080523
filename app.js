const express = require('express');
const app = express();

// Use Railway's PORT environment variable or default to 8080
const PORT = process.env.PORT || 8080;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    pipeline_id: 'PPL-20260308-080523',
    timestamp: new Date().toISOString(),
    service: 'validation-app',
    version: '1.0.0'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'BUILD Pipeline Validation Service',
    pipeline_id: 'PPL-20260308-080523',
    endpoints: {
      health: '/health'
    }
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Validation app running on port ${PORT}`);
  console.log(`Pipeline ID: PPL-20260308-080523`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
