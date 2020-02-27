if (process.env.NODE_ENV === 'development') {
  require('dotenv').config(); //eslint-disable-line
}

const app = require('./app');
const database = require('./database');
const { logger } = require('./utils');

const { NODE_ENV, PORT = 3000 } = process.env;

database.connect().then(() => {
  logger.info('Connected to MongoDB');
});

const server = app.listen(PORT, () => {
  logger.info(`Server (env: ${NODE_ENV}) started on ${PORT}`);
});

module.exports = server;
