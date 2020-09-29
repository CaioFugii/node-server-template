const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const cors = require('cors');
// const sslRedirect = require('heroku-ssl-redirect');

const middlewares = require('./middlewares');
const routers = require('./routers');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

// if (process.env.NODE_ENV === 'production') {
//   app.use(sslRedirect());
// }

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.json({
    message: '😀🤠🤯🧐'
  });
});

app.use('/api/', routers);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
