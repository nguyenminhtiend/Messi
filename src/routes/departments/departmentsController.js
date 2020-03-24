const {
  getDepartments,
  getDepartmentById,
  createDepartment
} = require('./departmentsService');

module.exports = {
  async getDepartments(req, res) {
    const result = await getDepartments();
    res.json(result);
  },

  async getDepartmentById(req, res) {
    const { id } = req.params;
    const result = await getDepartmentById(id);
    res.json(result);
  },

  async createDepartment(req, res) {
    const result = await createDepartment(req.body);
    res.status(201).json(result);
  }
};
