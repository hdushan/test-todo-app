const DB_HOST = process.env.DB_HOST || "localhost:27017";
const DB_NAME = process.env.DB_NAME || "todos";
const APP_PORT = parseInt(process.env.APP_PORT) || 4000;
const FRONTEND_HOST =
  process.env.FRONTEND_HOST || `http://localhost:${APP_PORT}`;

module.exports = {
  DB_HOST,
  DB_NAME,
  APP_PORT,
  FRONTEND_HOST
};
