const mongoose = require('mongoose');

const { MONGODB_URL, NODE_ENV } = process.env;

console.log(MONGODB_URL);

const connect = () => {
  mongoose.set('debug', NODE_ENV === 'development');
  return mongoose.connect(MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = { connect };
