FROM node:19-alpine3.15

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3060

CMD ["npm", "run", "dev"]