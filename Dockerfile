# Stage 1: Build the app
FROM node:18 AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Remove default nginx config and use custom one
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


~                                