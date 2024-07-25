import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function ExpensesPage() {
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
      <h1 className="text-center">Expense Management</h1>
      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-6 d-flex align-items-stretch">
          <div
            className="card"
            style={{ cursor: 'pointer', transition: 'all 0.3s ease', marginBottom: '20px', width: '100%' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faDollarSign} size="3x" style={{ color: '#ff6f61', marginBottom: '10px' }} />
              <h5 className="card-title">View Expenses</h5>
              <p className="card-text">Review and manage all your recorded expenses.</p>
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
                onClick={() => navigate('/view-expenses')}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0px 0px 20px #ff6f61')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)')}
              >
                View Expenses
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <div
            className="card"
            style={{ cursor: 'pointer', transition: 'all 0.3s ease', marginBottom: '20px', width: '100%' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faPlusCircle} size="3x" style={{ color: '#ff6f61', marginBottom: '10px' }} />
              <h5 className="card-title">Add Expense</h5>
              <p className="card-text">Add a new expense record to keep track of your spending.</p>
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
        </div>
      </div>
    </div>
  );
}

export default ExpensesPage;
