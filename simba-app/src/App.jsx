import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
import Header from './Components/Header'; // Adjust the import path as needed

import Dashboard from './Components/Dashboard';
import ExpenseCalculator from './Components/ExpenseCalculator';
import SimbaCare from './Components/SimbaCare';
import SimbaReminder from './Components/SimbaReminder';
import AddExpenseForm from './Components/Forms/ExpenseForm';
import EditExpense from './Components/EditExpense';

function App() {
  return (
    <Router>
      <Header /> {/* Add the Header component here */}
      <div style={{ paddingTop: '70px' }}> {/* Adjust padding to accommodate Header height */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expensecalculator" element={<ExpenseCalculator />} />
          <Route path="/care" element={<SimbaCare />} />
          <Route path="/reminders" element={<SimbaReminder />} />
          <Route path="/expenseform" element={<AddExpenseForm />} />
          <Route path="/edit-expense/:id" element={<EditExpense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
