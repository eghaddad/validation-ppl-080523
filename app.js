const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    pipeline_id: 'PPL-20260308-080523',
    timestamp: new Date().toISOString(),
    service: 'validation-app',
    version: '1.0.0'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Validation app for BUILD pipeline',
    pipeline_id: 'PPL-20260308-080523',
    endpoints: ['/health']
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Validation app listening on port ${PORT}`);
  console.log(`Pipeline ID: PPL-20260308-080523`);
});
