const Todo = require('../models/ToDo');

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Todo.findAll();
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a single task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Todo.findByPk(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        console.error('Error fetching todo:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { task_description, completed, priority } = req.body;
        const newTask = await Todo.create({ task_description, completed, priority });
        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update an existing task
exports.updateTask = async (req, res) => {
    try {
        const { task_description, completed, priority } = req.body;
        const [updated] = await Todo.update(
            { task_description, completed, priority },
            { where: { id: req.params.id } }
        );
        if (updated) {
            const updatedTask = await Todo.findByPk(req.params.id);
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const deleted = await Todo.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json({ message: 'Task deleted' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
