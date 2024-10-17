const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.post('/task', taskController.createTask);
router.put('/task/:id', taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);
router.get('/task', taskController.listTasks);
router.patch('/task/:id/complete', taskController.markTaskComplete);

module.exports = router;
