module.exports = {
  DB_HOST: process.env.DB_HOST || 'localhost:27017',
  DB_NAME: process.env.DB_NAME || 'todos',
  APP_PORT: parseInt(process.env.APP_PORT) || 4000
}
