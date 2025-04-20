# Stage 1: Build Angular app
FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Nginx to serve Angular app
FROM nginx:alpine

# Copy Angular dist
COPY --from=builder /app/dist/swisspine-app/browser /usr/share/nginx/html

# Replace default Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
