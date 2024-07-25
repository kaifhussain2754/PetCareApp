// backend/controllers/expenseController.js
const Expense = require('../models/Expense');

exports.getAllExpenses = (req, res) => {
  console.log('Fetching all expenses');
  Expense.getAll((err, results) => {
    if (err) {
      console.error('Error fetching all expenses:', err);
      return res.status(500).send(err);
    }
    console.log('Expenses fetched:', results);
    res.json(results);
  });
};

exports.getExpenseById = (req, res) => {
  const id = req.params.id;
  console.log(`Fetching expense with ID: ${id}`);
  Expense.getById(id, (err, result) => {
    if (err) {
      console.error(`Error fetching expense with ID ${id}:`, err);
      return res.status(500).send(err);
    }
    console.log(`Expense fetched with ID ${id}:`, result);
    res.json(result);
  });
};

exports.createExpense = (req, res) => {
  const data = req.body;
  console.log('Creating new expense with data:', data);
  Expense.create(data, (err, result) => {
    if (err) {
      console.error('Error creating new expense:', err);
      return res.status(500).send(err);
    }
    console.log('New expense created:', result);
    res.json(result);
  });
};

exports.updateExpense = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  console.log(`Updating expense with ID: ${id}, Data:`, data);
  Expense.update(id, data, (err, result) => {
    if (err) {
      console.error(`Error updating expense with ID ${id}:`, err);
      return res.status(500).send(err);
    }
    console.log(`Expense updated with ID ${id}:`, result);
    res.json(result);
  });
};

exports.deleteExpense = (req, res) => {
  const id = req.params.id;
  console.log(`Deleting expense with ID: ${id}`);
  Expense.delete(id, (err, result) => {
    if (err) {
      console.error(`Error deleting expense with ID ${id}:`, err);
      return res.status(500).send(err);
    }
    console.log(`Expense deleted with ID ${id}:`, result);
    res.json(result);
  });
};
