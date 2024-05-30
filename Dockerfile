FROM node:18.16

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]