  // backend/server.js
  const express = require('express');
  const app = express();
  const cors = require('cors');
  const bodyParser = require("body-parser"); 
  require('dotenv').config();
  const expenseRoutes = require('./routes/expenseRoutes');
  const careRoutes = require('./routes/careRoutes');
  const reminderRoutes = require('./routes/reminderRoutes');
  require('./utils/schedular'); 
  const authRoutes = require('./routes/authRoutes');

  app.use(cors());
  app.use(bodyParser.json());

  app.use('/api/expenses', expenseRoutes);
  app.use('/api/care-records', careRoutes);
  app.use('/api/reminders', reminderRoutes);
  app.use('/api/auth', authRoutes);


  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
