const express = require('express');
const path = express.Router();

const homeRouter = require('./home/urls')

path.use('/', homeRouter);

module.exports = path;
