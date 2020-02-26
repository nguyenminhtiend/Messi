const app = require('./app');

const { NODE_ENV, PORT = 3000 } = process.env;

const server = app.listen(PORT, () => {
  console.log(`Server (env: ${NODE_ENV}) started on ${PORT}`); //eslint-disable-line
});

module.exports = server;
