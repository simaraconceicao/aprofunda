class User {
  constructor({ id, name, role, created_at }) {
    this.id = id
    this.name = name
    this.role = role
    this.created_at = created_at
  }
}

module.exports = User