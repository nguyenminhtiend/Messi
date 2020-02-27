const ms = require('ms');
const logger = require('../utils/logger');

const { DISABLE_LOGGING } = process.env;

module.exports = (app) => {
  if (!DISABLE_LOGGING) {
    app.use((req, res, next) => {
      const { id, method, url, startAt, statusCode } = req;
      logger.info(
        `END ${method} ${url} ${ms(
          Date.now() - startAt
        )} statusCode: ${statusCode} ${id}`
      );
      next();
    });
  }
};
