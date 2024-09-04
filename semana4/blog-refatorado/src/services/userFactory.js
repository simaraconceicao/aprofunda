const { v4: uuidv4 } = require('uuid')
const User = require('../models/User')

module.exports = {
  create: ({ name, role }) => {
    return new User({
      id: uuidv4(), 
      name: name,
      role: role,
      created_at: new Date().toLocaleDateString('pt-BR'),
    })
  }
}