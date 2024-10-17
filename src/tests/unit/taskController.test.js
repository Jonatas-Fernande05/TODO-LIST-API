const { createTask } = require('../../src/controllers/taskController');

test('should create a task successfully', async () => {
  const req = { body: { title: 'Test Task', description: 'Description' } };
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  await createTask(req, res);
  expect(res.status).toHaveBeenCalledWith(201);
});
