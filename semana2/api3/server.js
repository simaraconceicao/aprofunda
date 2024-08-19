// DELETE -> apaga uma informação de acordo com um identificador
// PUT -> edita uma informação de acordo com um identificador, precisa enviar todos os campos
// PATCH ->  edita uma ou mais propriedades em informação de acordo com um identificador
// GET -> busca/pega informação (disponibiliza para o front)
// POST -> cria uma informação

//queryParams
//routeParams

const express = require('express')
const routerDisciplinas = express.Router()
const cors = require('cors')
const PORT = 3333
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(express.json())
app.use(cors())

const list = []
//métodos de array (map, filter, find, reducer, some)
// push, length, split, 

//GET 
routerDisciplinas.get('/disciplinas', (req, res) => {
  res.json(list)
})

//POST
routerDisciplinas.post('/disciplinas', (req, res) => {
  const novaDisciplina = {
    id: uuidv4(),
    titulo: req.body.titulo,
    modulo: req.body.modulo
  }

  const verificaSeExiste = list.find(item => item.titulo === req.body.titulo)

  if (verificaSeExiste) {
    return res.status(403).json({ message: `Disciplina ${req.body.titulo} já existe na lista` })
  }

  list.push(novaDisciplina)
  res.status(201).json({ message: `disciplina ${req.body.titulo} criada com sucesso!`})
})

//DELETE
routerDisciplinas.delete('/disciplina/:id', (req, res) => {
  const listaAtualizada = list.filter(item => item.id !== req.params.id)
  res.json(listaAtualizada)
})

app.use(routerDisciplinas)
app.listen(PORT, console.log(`servidor rodando na porta ${PORT}`))