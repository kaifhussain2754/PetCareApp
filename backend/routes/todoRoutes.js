const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch todos' });
  }
});

// Get todo by ID
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch the todo' });
  }
});

// Create a new todo
router.post('/', async (req, res) => {
  try {
    const { task_description, completed, priority } = req.body;
    const newTodo = await Todo.create({
      task_description,
      completed,
      priority,
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create the todo' });
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const { task_description, completed, priority } = req.body;
    const [updated] = await Todo.update(
      { task_description, completed, priority, updated_at: new Date() },
      { where: { id: req.params.id } }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    const updatedTodo = await Todo.findByPk(req.params.id);
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the todo' });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Todo.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete the todo' });
  }
});

module.exports = router;
