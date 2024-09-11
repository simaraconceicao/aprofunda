import express, { Request, Response } from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';

interface Text {
  id: string;
  title: string;
  content: string;
  slug: string;
  created_at: string;
  status: string;
  author: string;
}

export const app = express();
app.use(express.json());
app.use(cors());

const textsList: Text[] = [];

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

// Criar um novo texto
app.post('/texts', (req: Request, res: Response) => {
  const { title, content, status, author } = req.body;

  const newText: Text = {
    id: uuidv4(),
    title,
    content,
    slug: slugify(title),
    created_at: new Date().toLocaleDateString('pt-BR'),
    status,
    author,
  };

  textsList.push(newText);
  res.status(201).json({ message: `Texto ${title} criado com sucesso` });
});

// Listar todos os textos
app.get('/texts', (req: Request, res: Response) => {
  res.json(textsList);
});

// Listar um texto específico por ID
app.get('/text', (req: Request, res: Response) => {
  const id = req.query.id as string;
  const textFound = textsList.find((text) => text.id === id);

  if (!textFound) {
    return res.status(404).json({ message: `Texto com id ${id} não encontrado` });
  }

  res.json(textFound);
});


// Rodar o servidor apenas se o arquivo não for importado (para testes)
if (require.main === module) {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}