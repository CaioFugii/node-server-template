const express = require('express');
const middlewares = require('../middlewares');

const users = require('./users');


const router = express.Router();

router.use('/user', middlewares.limiter, middlewares.speedLimiter, middlewares.authToken, users);

module.exports = router;
