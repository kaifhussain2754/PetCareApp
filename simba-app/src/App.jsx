import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included

import Header from './Components/Header'; // Adjust the import path as needed
import Footer from './Components/Footer'; // Adjust the import path as needed

import Dashboard from './Components/Dashboard';
import ExpenseCalculator from './Components/ExpenseCalculator';
import SimbaCare from './Components/SimbaCare';
import AddExpenseForm from './Components/Forms/ExpenseForm';
import EditExpense from './Components/EditExpense';
import AddCareRecord from './Components/Forms/AddCareRecord';
import CareRecordsTable from './Components/CareRecordsTable';
import ReminderForm from './Components/Forms/ReminderForm';
import UpcomingReminders from './Components/UpcomingReminder';
import Reminders from './Components/Reminders';
import ExpensesPage from './Components/ExpensesPage';
import MissedReminders from './Components/MissedReminders';
import ToDoList from './Components/ToDoList';
import OpenAIChat from './OpenAIChat';

function App() {
  useEffect(() => {
    // Check if notifications are supported
    if ("Notification" in window) {
      // Request permission
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.log("Notification permission denied.");
        }
      });
    } else {
      console.log("Notifications are not supported by this browser.");
    }
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header /> {/* Add the Header component here */}
        <div style={{ flex: 1, paddingTop: '70px' }}> {/* Adjust padding to accommodate Header height */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/view-expenses" element={<ExpenseCalculator />} />
            <Route path="/care" element={<SimbaCare />} />
            <Route path="/expenseform" element={<AddExpenseForm />} />
            <Route path="/chatbot" element={<OpenAIChat />} />
            <Route path="/add-care-record" element={<AddCareRecord />} />
            <Route path="/all-care-records" element={<CareRecordsTable />} />
            <Route path="/set-reminder" element={<ReminderForm />} />
            <Route path="/missed-reminders" element={<MissedReminders />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/todo-list" element={<ToDoList />} />
            <Route path="/upcoming-reminders" element={<UpcomingReminders />} />
            <Route path="/edit-expense/:id" element={<EditExpense />} />
          </Routes>
        </div>
        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
}

export default App;
