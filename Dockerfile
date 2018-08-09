FROM node:8
WORKDIR /usr/src/app
COPY . ./
RUN npm install
ENV API_HOST $API_HOST
RUN npm run build
CMD npm start
