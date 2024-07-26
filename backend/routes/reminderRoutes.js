const express = require('express');
const router = express.Router();
const {
  getReminders,
  getReminderById,
  createReminder,
  updateReminder,
  deleteReminder,
} = require('../controllers/remindersController');

// Define routes using controller functions
router.get('/', getReminders);
router.get('/:id', getReminderById);
router.post('/', createReminder);
router.put('/:id', updateReminder);
router.delete('/:id', deleteReminder);

module.exports = router;
