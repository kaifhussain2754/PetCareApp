const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
require('dotenv').config();

// MySQL connection
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

// Function to convert ISO date string to MySQL DATETIME format
const convertToMySQLDateTime = (isoDateString) => {
  const date = new Date(isoDateString);
  return date.toISOString().slice(0, 19).replace('T', ' ');
};

// POST endpoint to add care records
router.post('/', (req, res) => {
  let { name, location, notes, timestamp } = req.body; // Include timestamp

  // Convert timestamp if it's provided
  if (timestamp) {
    timestamp = convertToMySQLDateTime(timestamp);
  } else {
    // Set timestamp to the current time if not provided
    timestamp = convertToMySQLDateTime(new Date().toISOString());
  }

  const query = 'INSERT INTO care_records (name, location, notes, timestamp) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, location, notes, timestamp], (err, results) => {
    if (err) {
      console.error('Error inserting care record:', err);
      res.status(500).json({ message: 'Error adding care record' });
      return;
    }
    res.status(201).json({ message: 'Care record added successfully!' });
  });
});

// GET endpoint to fetch all care records
router.get('/', (req, res) => {
  const query = 'SELECT * FROM care_records';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching care records:', err);
      res.status(500).json({ message: 'Error fetching care records' });
      return;
    }
    res.status(200).json(results);
  });
});

// Export the router
module.exports = router;
