const express = require('express')
const router = express.Router()
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//rotas
const users = [] //aplicação stateful x stateless

//GET => Fornecer dados para o front-end
const getUsers = router.get('/users', (req, res) => {
  res.status(200).json(users)
})

//POST => criar um dado, quando informações forem fornecidas pelo front

const createUser = router.post('/users', (req, res) => {
  const user  = {
    id: req.body.id,
    name: req.body.name
  }

  users.push(user)

  res.status(201).json({ message: `User ${user.name} criada com sucesso!`})
})

app.use(createUser)
app.use(getUsers)

app.listen(3333, console.log('Servidor rodando com sucesso!'))