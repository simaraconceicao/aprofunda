const express = require('express') //importando o express - lib pra permitir criar servidor com o node
const router = express.Router() //importando a funcionalidade de rota 
const nomes = require('./dados.json') //importando os dados do arquivo de nomes
const cors = require('cors') //importando o cors - lib pra permitir que o front-end consuma nossa api

const app = express() //criando uma instancia do express
app.use(express.json()) //permitindo trafegar json
app.use(cors()) //criando a instancia de cors

const ola = router.get('/ola', (req, res) => { //rota de ola mundo
  res.send('Olá, aprofunda pretalab!')
})

//Quero criar uma rota para enviar os dados das alunas como resposta da requisição
const alunas = router.get('/nomes', (req, res) => {
  res.json(nomes)
})

app.use(ola) //usando a rota 
app.use(alunas)
app.listen(3333, console.log('Servidor rodando com sucesso')) //ouvindo em qual porta o servidor pode rodar