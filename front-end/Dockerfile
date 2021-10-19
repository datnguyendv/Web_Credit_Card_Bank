FROM node:14.17.5-alpine

WORKDIR /var/www/frontend

COPY packkage.json /var/www/frontend

RUN npm install 

COPY . /var/www/frontend

EXPOSE 3000