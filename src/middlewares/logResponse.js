const ms = require('ms');
const logger = require('../utils/logger');

const { DISABLE_LOGGING } = process.env;

module.exports = (app) => {
  if (!DISABLE_LOGGING) {
    app.use((req, res, next) => {
      const { id, method, url, startAt } = req;
      const executeTime = ms(Date.now() - startAt);
      logger.info(
        `END ${method} ${url} ${executeTime} statusCode: ${res.statusCode} ${id}`
      );
      next();
    });
  }
};
