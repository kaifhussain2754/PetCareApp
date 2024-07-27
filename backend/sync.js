const sequelize = require('./config/db');
const User = require('./models/user');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Use `{ force: true }` to drop the table if it exists and recreate it
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

syncDatabase();
