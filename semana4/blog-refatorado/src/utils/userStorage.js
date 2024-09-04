class UserStorage {
  constructor() {
    if (!UserStorage.instance) {
      this.users = []
      UserStorage.instance = this
    }
    return UserStorage.instance
  }

  add(user) {
    this.users.push(user)
  }

  getAll() {
    return this.users
  }

}

module.exports = new UserStorage()

//CRUD: 
//CREATE -> POST
//READ -> GET
//UPDATE -> PUT ou PATCH
//DELETE -> DELETE
