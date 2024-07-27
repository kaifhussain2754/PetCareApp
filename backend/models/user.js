const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Ensure correct path

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  petName: { // New field for pet name
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;
