const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const sequelize = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');
const careRoutes = require('./routes/careRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const todoRoutes = require('./routes/todoRoutes');
const { OpenAI } = require('openai'); // Import OpenAI

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/expenses', expenseRoutes);
app.use('/api/care-records', careRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/todos', todoRoutes);

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",  // Use the model you prefer
      prompt: req.body.prompt,
      max_tokens: 100,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).send('Error communicating with OpenAI');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

sequelize.sync().then(() => {
  console.log('Database & tables created!');
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
