// controllers/reminderController.js
const Reminder = require('../models/reminderModel');

const getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.findAll();
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReminderById = async (req, res) => {
  try {
    const reminder = await Reminder.findByPk(req.params.id);
    if (reminder) {
      res.json(reminder);
    } else {
      res.status(404).json({ message: 'Reminder not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createReminder = async (req, res) => {
  try {
    const { reminder_name, reminder_date_time } = req.body;
    if (!reminder_name || !reminder_date_time) {
      return res.status(400).json({ message: 'Invalid input' });
    }
    const newReminder = await Reminder.create({ reminder_name, reminder_date_time });
    res.status(201).json(newReminder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findByPk(req.params.id);
    if (reminder) {
      const { reminder_name, reminder_date_time } = req.body;
      await reminder.update({ reminder_name, reminder_date_time });
      res.json(reminder);
    } else {
      res.status(404).json({ message: 'Reminder not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Reminder.destroy({ where: { id } });
    
    if (result === 0) {
      return res.status(404).json({ message: 'Reminder not found' });
    }

    res.status(204).send(); // Successfully deleted
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getReminders,
  getReminderById,
  createReminder,
  updateReminder,
  deleteReminder,
};
