const axios = require('axios');
const { User } = require('../../models');

const { DEPARTMENT_API } = process.env;

const getUsers = async () => {
  const response = await axios.get(`${DEPARTMENT_API}/api/departments`);
  const users = await User.find().populate('department');
  return { users, departments: response.data };
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return { user };
};

const createUser = async (user) => {
  const userCreated = await User.create(user);
  return userCreated;
};

const updateUser = async (id, user) => {
  const updatedUser = await User.updateOne({ _id: id }, { $set: user });
  return updatedUser;
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser
};
