FROM node:18-alpine

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . .

# RUN yarn install && yarn cache clean
EXPOSE 3000

CMD ["yarn" , "start:dev"]