const request = require('supertest');
const app = require('../../src/index');

describe('Task API Integration Tests', () => {
  it('should create a new task', async () => {
    const response = await request(app)
      .post('/api/task')
      .send({ title: 'Test Task', description: 'Test Description' });
    expect(response.statusCode).toBe(201);
  });
});
