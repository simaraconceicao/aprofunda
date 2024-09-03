
const TextService = require('../services/textServices');

const createPost = (req, res) => {
  const { title, content, status, author } = req.body
  const newText = TextService.createText({ title, content, status, author})
  res.status(201).json({ message: `Texto ${newText.title} criado com sucesso` })
}

const listPosts = (req, res) => {
  const texts = TextService.getAllTexts()
  res.json(texts)
}

const listPost = (req, res) => {
  const { id } = req.query

  const text = TextService.getTextById(id)

  if (!text) {
    res.status(404).json({ message: `Text com ID ${id} não encontrado`})
  }

  res.json(text)
}

const updatePost = (req, res) => {
  const textId = req.params.id
  const updates = req.body;


  const updatedText = TextService.updateTextById(textId, updates);

  if (!updatedText) {
    return res.status(404).json({ message: `Texto com o ID ${textId} não encontrado.` });
  }

  res.status(200).json(updatedText)
}

//delete
const deletePost = (req, res) => {
  const textId = req.params.id

  const result = TextService.deleteTextById(textId)

  if (result === null) {
    return res.status(404).json({ message: `Texto com o ID ${textId} não encontrado.` })
  }

  res.status(200).json({ message: `Texto com o ID ${textId} deletado com sucesso.` })
}
module.exports = {
  createPost,
  listPosts,
  listPost,
  updatePost,
  deletePost
}