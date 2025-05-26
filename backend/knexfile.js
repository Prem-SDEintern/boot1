// knexfile.js
const knex = require('knex');
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'premkumar',      // replace with your Postgres username
      password: '1234', // replace with your Postgres password
      database: 'ecommerce'
    },
    migrations: {
      directory: './migrations'
    }
  },
  debug: true,

};