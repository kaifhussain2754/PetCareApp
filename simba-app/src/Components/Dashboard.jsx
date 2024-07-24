// Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ paddingTop: '20px' }}>
      <h1>Simba's Dashboard</h1>
      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-4">
          <div className="card" style={{ cursor: 'pointer' }} onClick={() => navigate('/expensecalculator')}>
            <div className="card-body">
              <h5 className="card-title">Expense Calculator</h5>
              <p className="card-text">Track all expenses related to Simba's care and well-being.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ cursor: 'pointer' }} onClick={() => navigate('/care')}>
            <div className="card-body">
              <h5 className="card-title">Simba’s Care</h5>
              <p className="card-text">Keep a detailed log of Simba's health and care routines.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ cursor: 'pointer' }} onClick={() => navigate('/reminders')}>
            <div className="card-body">
              <h5 className="card-title">Simba’s Reminder</h5>
              <p className="card-text">Set reminders for important tasks and appointments for Simba.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
