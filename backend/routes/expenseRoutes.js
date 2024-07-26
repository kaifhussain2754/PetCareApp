const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseControllers');

// Define routes for expenses
router.post('/', expenseController.createExpense);
router.get('/', expenseController.getAllExpenses);
router.get('/:id', expenseController.getExpenseById);
router.put('/:id', expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;
