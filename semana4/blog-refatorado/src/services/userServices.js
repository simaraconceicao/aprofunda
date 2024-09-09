const UserFactory = require('./userFactory')
const UserStorage = require('../utils/userStorage')

module.exports = {
  createUser: ({ name, role }) => {
    const newUser = UserFactory.create({ name, role })
    UserStorage.add(newUser)
    return newUser
  },
  getAllUsers: () => {
    return UserStorage.getAll()
  },
  deleteUser: (id) => {
    return UserStorage.deleteById(id)
  }
}