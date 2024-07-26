const Expense = require('../models/Expense');

// Create a new expense
const createExpense = async (req, res) => {
  try {
    const { expenseName, expenseDescription, expenseAmount, dateOfExpense } = req.body;
    const expense = await Expense.create({
      expenseName,
      expenseDescription,
      expenseAmount,
      dateOfExpense,
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all expenses
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an expense by ID
const getExpenseById = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findByPk(id);
    if (!expense) return res.status(404).json({ error: 'Expense not found' });
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an expense
const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { expenseName, expenseDescription, expenseAmount, dateOfExpense } = req.body;
    const [updated] = await Expense.update({
      expenseName,
      expenseDescription,
      expenseAmount,
      dateOfExpense,
    }, {
      where: { id },
    });
    if (!updated) return res.status(404).json({ error: 'Expense not found' });
    res.status(200).json({ message: 'Expense updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an expense
const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Expense.destroy({
      where: { id },
    });
    if (!deleted) return res.status(404).json({ error: 'Expense not found' });
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
