# Validation App - PPL-20260308-080523

Minimal Node.js Express application for BUILD pipeline validation.

## Endpoints

- `GET /` - Service information
- `GET /health` - Health check endpoint

## Deployment

- **Railway Project ID**: 4dacd0b5-4239-4fb6-89c4-b47103e5d512
- **Custom Domain**: pipeline-ppl-080523.agentifai.io
- **Pipeline**: PPL-20260308-080523
- **Ticket**: AGE-867

## Local Development

```bash
npm install
npm start
```

## Testing

```bash
npm test
```

Health check: `curl http://localhost:8080/health`
