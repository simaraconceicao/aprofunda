import request from 'supertest'
import { app } from './index'

describe('Testando API de blog', () => {
  describe('sucesso', () => {
    it('deve ser capaz de criar um novo texto', async () => {
      const response = await request(app).post('/texts').send({
        title: 'Meu Primeiro Texto',
        content: 'Conteúdo do texto',
        status: 'rascunho',
        author: 'Simara',
      })
  
      expect(response.status).toBe(201)
      expect(response.body.message).toBe('Texto Meu Primeiro Texto criado com sucesso')
    })

    it('deve ser capaz de listar os textos', async () => {
      const response = await request(app).get('/texts')
      
      expect(response.status).toBe(200)
      expect(response.body.length).toBeGreaterThanOrEqual(1)
    })
  })
})