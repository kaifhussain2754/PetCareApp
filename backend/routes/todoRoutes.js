const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/todos', todoController.getAllTasks);
router.get('/todos/:id', todoController.getTaskById);
router.post('/todos', todoController.createTask);
router.put('/todos/:id', todoController.updateTask);
router.delete('/todos/:id', todoController.deleteTask);

module.exports = router;
