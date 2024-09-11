import request from 'supertest';
import { app } from './index';

describe('Testando a API de Blog', () => {
  it('Deve criar um novo texto', async () => {
    const response = await request(app)
      .post('/texts')
      .send({
        title: 'Meu Primeiro Texto',
        content: 'Conteúdo do texto',
        status: 'ativo',
        author: 'Simara',
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Texto Meu Primeiro Texto criado com sucesso');
  });

  it('Deve listar todos os textos', async () => {
    const response = await request(app).get('/texts');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });

  it('Deve listar um texto específico por ID', async () => {
    const invalidId = '12345678-1234-1234-1234-1234567890ab'; // ID inválido para testar 404
    const response = await request(app).get('/text').query({ id: invalidId });
    expect(response.status).toBe(404);
    expect(response.body.message).toBe(`Texto com id ${invalidId} não encontrado`);
  });
});
