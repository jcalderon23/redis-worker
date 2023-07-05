FROM node:18.12.1

WORKDIR /app

COPY package*.json ./

RUN npm install --save --legacy-peer-deps

COPY . ./

RUN npm run build

CMD ["npm", "start"]