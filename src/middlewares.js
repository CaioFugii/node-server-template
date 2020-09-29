const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
const requestIp = require('request-ip');

const { HttpError } = require('./utils/http-error');
// const { verifyToken } = require('./utils/jwt');

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔍🧐 - Not Found - ${req.originalUrl}`);
  next(error);
}


const getRequestIp = function(req, res, next) {
  // on localhost you'll see 127.0.0.1 if you're using IPv4 
  // or ::1, ::ffff:127.0.0.1 if you're using IPv6
  req.reqIp = requestIp.getClientIp(req); 
  next();
};

const authToken = function(req, res, next) {
  const auth = req.headers.authorization

  if(!auth){
   return res.status(401).json({ message: 'Unauthorized: Missing \'Authorization\' header. 🔐' })
  }

  // const { decoded, valid } = verifyToken(auth);

  // if (!valid) {
  //   return res.status(401).json({ message: 'Unauthorized: Invalid or expired token.' });
  // }

  // req.reqUser = {
  //   userData: decoded.user,
  // };

  next()
};


function errorHandler(err, req, res, next) {
  const {code, message, stack} = err;
    if (err instanceof HttpError) {
        res.status(code).json({ 
          message,
          stack: process.env.NODE_ENV === 'production' ? '🥞' : stack
        });
    } else {
        res.status(500).json({
            body: { 
              message: err.message,
              stack: process.env.NODE_ENV === 'production' ? '🥞' : stack
             },
        });
    }
}

const limiter = rateLimit({
  windowMs: 30 * 1000,
  max: 5
})

const speedLimiter = slowDown({
  windowMs: 30 * 1000,
  delayAfter: 2,
  delayMs: 500
})


module.exports = {
  limiter,
  authToken,
  getRequestIp,
  speedLimiter,
  notFound,
  errorHandler
};
