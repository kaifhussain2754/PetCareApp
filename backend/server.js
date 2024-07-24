// backend/server.js
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const expenseRoutes = require('./routes/expenseRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', expenseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
