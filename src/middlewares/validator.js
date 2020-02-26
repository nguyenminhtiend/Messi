const { AjvValidator } = require('../utils');

class Validator {
  static validator(schema) {
    return (req, res, next) => {
      Object.keys(schema).forEach((key) => {
        AjvValidator.validate(schema[key], req[key]);
      });
      next();
    };
  }
}

module.exports = Validator;
