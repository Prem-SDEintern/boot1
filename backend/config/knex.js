// db/knex.js
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];  // load config from knexfile.js

const knex = require('knex')(config); // initialize knex with config

module.exports = knex;  // export initialized knex instance

