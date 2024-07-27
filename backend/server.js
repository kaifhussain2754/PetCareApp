const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const sequelize = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');
const careRoutes = require('./routes/careRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/auth');
const { OpenAI } = require('openai');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Use route files for different resources
app.use('/api/expenses', expenseRoutes);
app.use('/api/care-records', careRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);

// Set up OpenAI API endpoint
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
  try {
    const response = await openai.completions.create({
      model: "gpt-4",
      prompt: req.body.prompt,
      max_tokens: 100,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).send('Error communicating with OpenAI');
  }
});

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log('Database & tables created!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
  process.exit(1); // Exit the process if the database connection fails
});
