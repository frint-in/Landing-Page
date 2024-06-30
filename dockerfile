FROM node:20-alpine

WORKDIR /app

COPY ./package*.json /app

RUN npm install

COPY . .

RUN npm run build

# RUN rm -rf node_modules/ && rm -rf src/ && rm -rf public/

CMD [ "npm", "run", "preview", "--" , "--host" , "0.0.0.0"]