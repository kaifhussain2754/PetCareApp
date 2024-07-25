const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// POST endpoint for signup
router.post('/signup', signup);

// POST endpoint for login
router.post('/login', login);

module.exports = router;
