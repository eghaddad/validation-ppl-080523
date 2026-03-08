# Validation App - Pipeline PPL-20260308-080523

Minimal Node.js Express validation service for BUILD pipeline testing.

## Endpoints

- `GET /` - Service information
- `GET /health` - Health check endpoint

## Deployment

- **Platform**: Railway
- **Project ID**: 4dacd0b5-4239-4fb6-89c4-b47103e5d512
- **Domain**: pipeline-ppl-080523.agentifai.io

## Local Development

```bash
npm install
npm start
```

## Testing

```bash
npm test
curl http://localhost:8080/health
```

## Pipeline Context

- **Ticket**: AGE-867
- **Pipeline ID**: PPL-20260308-080523
- **Created**: 2026-03-08
- **Purpose**: Validate BUILD pipeline infrastructure deployment
