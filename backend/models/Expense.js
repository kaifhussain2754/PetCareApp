// backend/models/Expense.js
const db = require('../config/db');

const Expense = {
  getAll: (callback) => {
    db.query('SELECT * FROM expenses', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM expenses WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO expenses SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE expenses SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM expenses WHERE id = ?', [id], callback);
  },
};

module.exports = Expense;
