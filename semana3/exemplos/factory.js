// Editor

class User {
  constructor(name, role) {
    this.name = name
    this.role = role
  }

  getPermissions() {
    return `${this.name} tem as permissões ${this.role.permissions.join(', ')}`
  }
}

class Editor {
  constructor(name) {
    this.user = new User(name, { permissions: ['editar', 'visualizar' ] }) 
  }

  getPermissions() {
    return this.user.getPermissions();
  }
}

class Admin {
  constructor(name) {
    this.user = new User(name, { permissions: ['editar', 'visualizar', 'deletar', 'criar' ] }) 
  }

  getPermissions() {
    return this.user.getPermissions();
  }
}

class Viwer {
  constructor(name) {
    this.user = new User(name, { permissions: ['visualizar'] }) 
  }

  getPermissions() {
    return this.user.getPermissions();
  }
}

class UserFactory {
  static createUser(type, name) {
    switch(type) {
      case 'admin': 
        return new Admin(name)
      case 'editor':
        return new Editor(name)
      case 'viewer':
        return new Viwer(name)
      default:
        throw new Error('Tipo de usuária inválida')
    }
  }
}

module.exports = UserFactory
