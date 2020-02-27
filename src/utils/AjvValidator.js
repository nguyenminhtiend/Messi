const Ajv = require('ajv');
const AppError = require('./AppError');

const ajvOptionCore = { allErrors: true, $data: true };

const ajv = new Ajv(ajvOptionCore);
const ajvCoerceTypes = new Ajv({ ...ajvOptionCore, coerceTypes: true });
require('ajv-keywords')(ajv);
require('ajv-keywords')(ajvCoerceTypes);

module.exports = class AjvValidator {
  static validate(schema, data) {
    const _ajv = schema.coerceTypes ? ajvCoerceTypes : ajv;
    const validate = _ajv.compile({
      ...schema,
      additionalProperties: schema.additionalProperties || false
    });
    const valid = validate(data);
    if (!valid) {
      const errors = this._parseError(validate.errors);
      throw new AppError('One or more input are invalid!', 400, errors);
    }
  }

  static _parseError(errors) {
    return errors.map((e) => ({
      [`${e.keyword} ${e.dataPath}`]: `${e.message} ${this._getDetailParams(
        e.params
      )}`
    }));
  }

  static _getDetailParams(params) {
    return Object.entries(params).map(([key, value]) => `${key} ${value}`);
  }
};
