# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the Vite development server port
EXPOSE 5173

# Run Vite dev server
CMD ["npm", "run", "dev"]