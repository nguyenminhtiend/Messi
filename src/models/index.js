const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const { MONGODB_URL, NODE_ENV } = process.env;

mongoose.set('debug', NODE_ENV === 'development');
mongoose
  .connect(MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to mongodb'));

const paths = fs.readdirSync(__dirname);
const models = {};

paths
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file)); //eslint-disable-line
    models[model.modelName] = model;
  });

module.exports = models;
