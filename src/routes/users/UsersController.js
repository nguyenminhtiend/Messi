module.exports = class UsersController {
  static async index(req, res) {
    res.json({ name: 'Messi' });
  }
};
