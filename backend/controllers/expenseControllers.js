// backend/controllers/expenseController.js
const Expense = require('../models/Expense');

exports.getAllExpenses = (req, res) => {
  Expense.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.getExpenseById = (req, res) => {
  const id = req.params.id;
  Expense.getById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.createExpense = (req, res) => {
  const data = req.body;
  Expense.create(data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.updateExpense = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Expense.update(id, data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.deleteExpense = (req, res) => {
  const id = req.params.id;
  Expense.delete(id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};
