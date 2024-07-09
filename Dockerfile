# Use an official node image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build


# Expose port 80 to the outside world
EXPOSE 3000

# Start nginx server
CMD ["npm", "start"]
