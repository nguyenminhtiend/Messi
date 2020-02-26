const { v4 } = require('uuid');
const moment = require('moment');
const logger = require('../utils/logger');

const { DISABLE_LOGGING } = process.env;

module.exports = (app) => {
  if (!DISABLE_LOGGING) {
    app.use((req, res, next) => {
      req.id = v4();
      req.startAt = new Date();
      logger.info(`START ${req.method} ${req.url} ${moment().format()} ${req.id}`);
      next();
    });
  }
};
