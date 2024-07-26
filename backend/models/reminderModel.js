// models/Reminder.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Reminder = sequelize.define('Reminder', {
  reminder_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reminder_date_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: false, // Disable `createdAt` and `updatedAt` fields
});

module.exports = Reminder;
