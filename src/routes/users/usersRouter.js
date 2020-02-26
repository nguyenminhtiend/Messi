const express = require('express');
const { asyncRoute } = require('../../utils');
const UsersController = require('./UsersController');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', asyncRoute(UsersController.index));

  app.use('/users', router);
};
