FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port (Railway will override with $PORT)
EXPOSE 8080

# Start application
CMD ["npm", "start"]
