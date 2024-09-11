import express, { Request, Response } from 'express'

//exportar o app pra coseguir usar no teste
export const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Typescript')
})

// so vai ser chamado com npm start, isso nao atrapalha o teste
if (require.main === module) {
  const port = 3333
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
  })
}
