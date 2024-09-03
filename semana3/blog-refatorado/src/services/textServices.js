const TextFactory = require('./textFactory')
const TextStorage = require('../utils/textStorage')
//const textStorage = require('../utils/textStorage')

module.exports = {
  createText: ({ title, content, status, author }) => {
    const newText = TextFactory.create({ title, content, status, author })
    TextStorage.add(newText)
    return newText
  },

  getAllTexts: () => {
    return TextStorage.getAll()
  },

  getTextById: (id) => {
    return TextStorage.getById(id)
  },
  //PATCH
  updateTextById: (id, updates) => {
    const text = TextStorage.getById(id);
    if (!text) {
      return null; // Texto não encontrado
    }
    Object.assign(text, updates);
    return text;
  },

  deleteTextById: (id) => {
    const result = TextStorage.deleteById(id);
    return result; // Retorna true se deletado, null se não encontrado
  }

  
  
}

