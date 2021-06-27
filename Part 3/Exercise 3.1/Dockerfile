FROM node:13.12.0-alpine

WORKDIR /app

COPY /timer .

RUN npm install --silent

EXPOSE 3000

CMD ["npm", "start"]
