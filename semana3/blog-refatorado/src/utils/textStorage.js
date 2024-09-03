
class TextStorage {
  constructor() {
    if (!TextStorage.instance) {
      this.texts = []
      TextStorage.instance = this
    }
    return TextStorage.instance
  }

  add(text) {
    this.texts.push(text)
  }

  getAll() {
    return this.texts
  }
  //LISTAR
  getById(id) {
    return this.texts.find(text => text.id === id)
  }
  //ATUALIZAR
  updateById(id, updates) {
    const text = this.getById(id)
    if (!text) {
      return null;
    }
    Object.assign(text, updates)
    return text
  }

  deleteById(id) {
    const index = this.texts.findIndex(text => text.id === id);
    if (index === -1) {
      return null
    }
    this.texts.splice(index, 1)
    return true
  }
}

module.exports = new TextStorage()