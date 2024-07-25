const db = require('../config/db');

const createReminder = (req, res) => {
  const { reminder_name, reminder_date_time } = req.body;
  const sql = 'INSERT INTO reminders (reminder_name, reminder_date_time) VALUES (?, ?)';
  db.query(sql, [reminder_name, reminder_date_time], (err, result) => {
    if (err) {
      console.error('Error inserting reminder:', err);
      return res.status(500).json({ error: 'Failed to add reminder' });
    }
    res.status(201).json({ id: result.insertId, reminder_name, reminder_date_time });
  });
};

const getReminders = (req, res) => {
  const sql = 'SELECT * FROM reminders';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching reminders:', err);
      return res.status(500).json({ error: 'Failed to fetch reminders' });
    }
    res.status(200).json(results);
  });
};

module.exports = {
  createReminder,
  getReminders,
};
