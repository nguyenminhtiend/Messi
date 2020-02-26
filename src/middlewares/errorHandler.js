const { AppError, logger } = require('../utils');

module.exports = (err, req, res, next) => {
  logger.error(err.stack);
  if (err instanceof AppError) {
    res.status(err.code).json({ message: err.message, errors: err.errors });
  } else {
    res.status(500).json({ message: err.message });
  }
  next();
};
