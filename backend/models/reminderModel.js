const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'simba-app'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database');
});

const createReminder = (reminderData, callback) => {
  const { reminder_name, reminder_date_time } = reminderData;
  const query = 'INSERT INTO reminders (reminder_name, reminder_date_time) VALUES (?, ?)';
  connection.query(query, [reminder_name, reminder_date_time], callback);
};

const getAllReminders = (callback) => {
  const query = 'SELECT * FROM reminders';
  connection.query(query, callback);
};

module.exports = {
  createReminder,
  getAllReminders
};
