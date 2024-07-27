import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included

import Header from './Components/Header';
import Footer from './Components/Footer';
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
import PrivateRoute from './PrivateRoutes'; // Ensure correct path
import { AuthProvider } from './contect/AuthContext'; // Ensure correct path

// Import the Login and Signup components
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  useEffect(() => {
    if ("Notification" in window) {
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
    <AuthProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <div style={{ flex: 1, paddingTop: '70px' }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
              <Route path="/view-expenses" element={<PrivateRoute element={<ExpenseCalculator />} />} />
              <Route path="/care" element={<PrivateRoute element={<SimbaCare />} />} />
              <Route path="/expenseform" element={<PrivateRoute element={<AddExpenseForm />} />} />
              <Route path="/chatbot" element={<PrivateRoute element={<OpenAIChat />} />} />
              <Route path="/add-care-record" element={<PrivateRoute element={<AddCareRecord />} />} />
              <Route path="/all-care-records" element={<PrivateRoute element={<CareRecordsTable />} />} />
              <Route path="/set-reminder" element={<PrivateRoute element={<ReminderForm />} />} />
              <Route path="/missed-reminders" element={<PrivateRoute element={<MissedReminders />} />} />
              <Route path="/reminders" element={<PrivateRoute element={<Reminders />} />} />
              <Route path="/expenses" element={<PrivateRoute element={<ExpensesPage />} />} />
              <Route path="/todo-list" element={<PrivateRoute element={<ToDoList />} />} />
              <Route path="/upcoming-reminders" element={<PrivateRoute element={<UpcomingReminders />} />} />
              <Route path="/edit-expense/:id" element={<PrivateRoute element={<EditExpense />} />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
