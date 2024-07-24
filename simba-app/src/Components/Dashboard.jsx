// Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleMouseEnter = (event) => {
    event.currentTarget.style.boxShadow = '0px 0px 20px #ff6f61';
    event.currentTarget.style.transform = 'scale(1.05) rotate(1deg)';
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.boxShadow = 'none';
    event.currentTarget.style.transform = 'none';
  };

  return (
    <div className="container" style={{ paddingTop: '20px' }}>
      <h1>Simba's Dashboard</h1>
      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-4">
          <div
            className="card"
            style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
            onClick={() => navigate('/expensecalculator')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body">
              <h5 className="card-title">Expense Calculator</h5>
              <p className="card-text">Track all expenses related to Simba's care and well-being.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card"
            style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
            onClick={() => navigate('/care')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body">
              <h5 className="card-title">Simba’s Care</h5>
              <p className="card-text">Keep a detailed log of Simba's health and care routines.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card"
            style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
            onClick={() => navigate('/reminders')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body">
              <h5 className="card-title">Simba’s Reminder</h5>
              <p className="card-text">Set reminders for important tasks and appointments for Simba.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button
          style={{
            backgroundColor: '#ff6f61',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          }}
          onClick={() => navigate('/expenseform')}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0px 0px 20px #ff6f61')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)')}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
