const express = require('express');
const router = express.Router();
const { createReminder, getAllReminders } = require('../models/reminderModel');

// POST endpoint to add a reminder
router.post('/', (req, res) => {
  const { reminder_name, reminder_date_time } = req.body;
  createReminder({ reminder_name, reminder_date_time }, (err, results) => {
    if (err) {
      console.error('Error adding reminder:', err);
      res.status(500).json({ message: 'Error adding reminder' });
      return;
    }
    res.status(201).json({ message: 'Reminder added successfully!' });
  });
});

// GET endpoint to fetch all reminders
router.get('/', (req, res) => {
  getAllReminders((err, results) => {
    if (err) {
      console.error('Error fetching reminders:', err);
      res.status(500).json({ message: 'Error fetching reminders' });
      return;
    }
    res.status(200).json(results);
  });
});

module.exports = router;
