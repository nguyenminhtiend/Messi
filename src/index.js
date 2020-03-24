require('dotenv').config(); //eslint-disable-line

const app = require('./app');
const { logger } = require('./utils');
const { connect } = require('./database');

const { NODE_ENV, PORT = 3000 } = process.env;

connect();

const server = app.listen(PORT, () => {
  logger.info(`Server (env: ${NODE_ENV}) started on ${PORT}`);
});

module.exports = server;
