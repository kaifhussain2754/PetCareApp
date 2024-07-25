// careRecordModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed

const CareRecord = sequelize.define('CareRecord', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'care_records'
});

module.exports = CareRecord;
