FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install sqlite3 --save

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start:prod"]