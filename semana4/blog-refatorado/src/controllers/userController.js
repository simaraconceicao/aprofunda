const UserServices = require('../services/userServices');

const createUser = (req, res) => {
  const { name, role } = req.body
  const newUser = UserServices.createUser({ name, role })
  res.status(201).json({ message: `User ${newUser.name} criado com sucesso` })
}

const listUsers = (req, res) => {
  const users = UserServices.getAllUsers()
  res.json(users)
}

module.exports = {
  createUser,
  listUsers
}