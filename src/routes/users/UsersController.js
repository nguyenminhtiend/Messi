const {
  getUsers,
  createUser,
  getUserById,
  updateUser
} = require('./usersService');

module.exports = class UsersController {
  static async getUsers(req, res) {
    const result = await getUsers();
    res.json(result);
  }

  static async getUserById(req, res) {
    const { id } = req.params;
    const result = await getUserById(id);
    res.json(result);
  }

  static async createUser(req, res) {
    const result = await createUser(req.body);
    res.status(201).json(result);
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const result = await updateUser(id, req.body);
    res.json(result);
  }
};
