const express = require('express');
const { asyncRoute } = require('../../utils');
const departmentsController = require('./departmentsController');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', asyncRoute(departmentsController.getDepartments));

  app.use('/departments', router);
};
