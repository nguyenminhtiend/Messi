const express = require('express');
const { asyncRoute } = require('../../utils');
const { validator } = require('../../middlewares');
const UsersController = require('./UsersController');
const usersSchema = require('./usersSchema');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', asyncRoute(UsersController.getUsers));
  router.get('/:id', asyncRoute(UsersController.getUserById));
  router.post(
    '/',
    validator(usersSchema.createUser),
    asyncRoute(UsersController.createUser)
  );

  router.put('/:id', asyncRoute(UsersController.updateUser));

  app.use('/users', router);
};
