const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');
const sequelize = require('./config/db'); // Ensure this is the correct path
const expenseRoutes = require('./routes/expenseRoutes');
const careRoutes = require('./routes/careRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const todoRoutes = require('./routes/todoRoutes');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/expenses', expenseRoutes);
app.use('/api/care-records', careRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/todos', todoRoutes); // Make sure this matches the route used in fetch

// OpenAI API Route
app.post('/api/openai', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions',
      {
        prompt: req.body.prompt,
        max_tokens: 50,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).send('Error communicating with OpenAI');
  }
});

// Sync DB and start server
sequelize.sync().then(() => {
  console.log('Database & tables created!');
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
