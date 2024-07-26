const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the sequelize instance

const Expense = sequelize.define('Expense', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  expenseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expenseDescription: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  expenseAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dateOfExpense: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'expenses',
  timestamps: false, // Set to true if you want Sequelize to manage `createdAt` and `updatedAt` fields
});

module.exports = Expense;
