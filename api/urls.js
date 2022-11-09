const express = require('express');
const path = express.Router();

const userRouter = require('./users/urls')

path.use('/users', userRouter);

module.exports = path;
