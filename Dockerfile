FROM node:8
WORKDIR /usr/src/app
COPY . ./
RUN npm install
ARG API_HOST
RUN API_HOST=$API_HOST npm run build
CMD npm start
