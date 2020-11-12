FROM node:12 

WORKDIR /app

COPY package.json package.json

RUN npm install  

COPY . . /app/

EXPOSE 5000 

RUN npm install -g nodemon

CMD [ "nodemon", "app.js" ]