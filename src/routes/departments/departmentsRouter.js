const express = require('express');
const { asyncRoute } = require('../../utils');
const departmentsController = require('./departmentsController');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', asyncRoute(departmentsController.getDepartments));
  router.get('/:id', asyncRoute(departmentsController.getDepartmentById));
  router.post('/', asyncRoute(departmentsController.createDepartment));

  app.use('/departments', router);
};
