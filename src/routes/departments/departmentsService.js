const { Department } = require('../../models');

const getDepartments = async () => {
  const departments = await Department.find();
  return { departments };
};

const getDepartmentById = async (id) => {
  const department = await Department.findById(id);
  return { department };
};

const createDepartment = async (department) => {
  const departmentCreated = await Department.create(department);
  return departmentCreated;
};

module.exports = {
  getDepartments,
  getDepartmentById,
  createDepartment
};
