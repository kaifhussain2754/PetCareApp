const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db'); // Adjust path as needed

// Signup function
const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    await pool.query(sql, [username, email, hashedPassword]);

    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Login function
const login = async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    // Find user by username or email
    const sql = 'SELECT * FROM users WHERE username = ? OR email = ?';
    const [user] = await pool.query(sql, [usernameOrEmail, usernameOrEmail]);

    if (user.length === 0) {
      return res.status(401).json({ error: 'Invalid username or email' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate token
    const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
};

module.exports = {
  signup,
  login
};
