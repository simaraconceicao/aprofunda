const UserServices = require('../services/userServices');

//try -> tentar
//catch -> pegar

const createUser = (req, res) => {
  try {
    const { name, role } = req.body
    const newUser = UserServices.createUser({ name, role })
    return res.status(201).json({ message: `User ${newUser.name} criado com sucesso` })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: `Tente novamente, revise os campos.` })
  }
}

const listUsers = (req, res) => {
  const users = UserServices.getAllUsers()
  res.json(users)
}

const deleteUser = (req, res) => {
  const { id } = req.params
  const listFiltered = UserServices.deleteUser(id)
  res.json(
    { 
      message: `User com id: ${id} excluído`, 
      listFiltered
    }
  )
}

module.exports = {
  createUser,
  listUsers,
  deleteUser
}