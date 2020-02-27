const fs = require('fs');
const path = require('path');

const paths = fs.readdirSync(__dirname);
const models = {};

paths
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file)); //eslint-disable-line
    models[model.modelName] = model;
  });

module.exports = models;
