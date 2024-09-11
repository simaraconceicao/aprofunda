import express, { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import slug from 'slug'

export const app = express()
app.use(express.json())

// deve ser capaz de criar um texto
// quais as regras pra criação desse texto? 

interface Text {
  id: string
  title: string
  content: string
  slug: string
  created_at: string
  status: string
  author: string
} 

const textsList: Text[] = []

app.post('/texts', (req: Request, res: Response) => {
  const { title, content, status, author } = req.body

  const newText: Text = {
    id: uuidv4(),
    title: title,
    content: content,
    slug: slug(title),
    status: status,
    author: author,
    created_at: new Date().toLocaleDateString('pt-BR')
  }

  textsList.push(newText)
  res.status(201).json({ message: `Texto ${title} criado com sucesso`})
})

//deve ser capaz de listar os textos

app.get('/texts', (req: Request, res: Response) => {
  res.json(textsList)
})

if (require.main === module) {
  const PORT = 3333
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
  })
}