FROM node:19-alpine3.15

WORKDIR /app

RUN npm install -g npm@9.3.1

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3060

CMD ["npm", "run", "dev"]