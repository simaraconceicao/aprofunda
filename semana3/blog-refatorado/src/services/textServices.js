const TextFactory = require('./textFactory')
const TextStorage = require('../utils/textStorage')

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
  }
}