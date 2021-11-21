FROM node:14.17.5-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN npm install

COPY . .

RUN yarn migration:run

EXPOSE 3000

CMD ["yarn", "start"]

