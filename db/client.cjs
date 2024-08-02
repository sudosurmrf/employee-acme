const { Client } = require('pg');
const { username, passw } = require('./credentials.cjs')
const client = new Client(process.env.DATABASE_URL || `postgres://${username}:${passw}@localhost:5432/acme_employee`);

module.exports = client;