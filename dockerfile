FROM node:20-alpine

WORKDIR /app

COPY ./package*.json /app

RUN npm install

COPY . .

CMD [ "npm", "run", "dev", "--" , "--host" , "0.0.0.0"]