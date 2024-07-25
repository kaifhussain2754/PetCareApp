const cron = require('node-cron');
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a connection pool with the promise-based API
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to get user email and reminder details
const getUserAndReminderDetails = async () => {
  try {
    // Query to fetch reminder details and user emails
    const [rows] = await pool.query(`
      SELECT r.reminder_name, r.reminder_date_time, u.email
      FROM reminders r
      JOIN users u ON r.user_id = u.id
      WHERE r.reminder_date_time <= NOW() + INTERVAL 1 HOUR
    `);
    return rows;
  } catch (error) {
    console.error('Error fetching reminders and user details:', error);
    return [];
  }
};

// Function to send reminder emails
const sendReminderEmails = async () => {
  const reminders = await getUserAndReminderDetails();
  
  for (const reminder of reminders) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: reminder.email,
      subject: `Reminder: ${reminder.reminder_name}`,
      text: `This is a reminder for: ${reminder.reminder_name}. Scheduled at: ${reminder.reminder_date_time}`
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Reminder sent to ${reminder.email}`);
    } catch (error) {
      console.error(`Error sending reminder to ${reminder.email}:`, error);
    }
  }
};

// Export the function for testing
module.exports = { sendReminderEmails };
