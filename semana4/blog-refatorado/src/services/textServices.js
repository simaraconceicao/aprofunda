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
  },

  updateText: (id, data) => {
    const text = TextStorage.getById(id)

    if (!text) {
      return null
    }

    if (data.title != null) {
      text.title = data.title
    }
    
    if (data.content != null) {
      text.content = data.content
    }

    if (data.status != null) {
      text.status = data.status
    }
    
    if (data.author != null) {
      text.author = data.author
    }

    return text
  },

  deleteTextById: (id) => {
    return TextStorage.deleteText(id)
  }
}