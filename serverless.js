require('dotenv').config();
const app = require('./app/settings');

const serverless = require('serverless-http');
module.exports.handler = serverless(app);
