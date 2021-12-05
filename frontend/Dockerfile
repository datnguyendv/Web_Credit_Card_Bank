FROM node:14.17.5-alpine

WORKDIR /app
COPY packkage.json ./

RUN npm install 

COPY . .

EXPOSE 3000