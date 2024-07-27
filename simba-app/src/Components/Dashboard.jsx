import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faStethoscope, faBell, faCalendarPlus, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { getReminders } from '../services/apiService'; // Import the API function
import { colors } from '@mui/material';

function Dashboard() {
  const navigate = useNavigate();
  const [remindersCount, setRemindersCount] = useState(0);

  useEffect(() => {
    const fetchRemindersCount = async () => {
      try {
        const response = await getReminders();
        console.log('Fetched reminders response:', response); // Log response for debugging

        const count = response.count || response.total || response.length || 0;

        setRemindersCount(count);
      } catch (error) {
        console.error('Error fetching reminders count:', error);
      }
    };

    fetchRemindersCount();
  }, []);

  const cards = [
    {
      id: 1,
      icon: faCalculator,
      title: 'Expense Calculator',
      description: "Track all expenses related to Simba's care and well-being.",
      link: '/expenses'
    },
    {
      id: 2,
      icon: faStethoscope,
      title: "Simba’s Care",
      description: "Keep a detailed log of Simba's health and care routines.",
      link: '/care'
    },
    {
      id: 3,
      icon: faBell,
      title: "Upcoming Reminders",
      description: "Set reminders for important tasks and appointments for Simba.",
      link: '/reminders'
    },
    {
      id: 4,
      icon: faClipboardList,
      title: "To-Do List",
      description: "Manage your daily tasks for Simba.",
      link: '/todo-list'
    }
  ];

  const handleMouseEnter = (event) => {
    event.currentTarget.style.boxShadow = '0px 0px 20px #ff6f61';
    event.currentTarget.style.transform = 'scale(1.05) rotate(1deg)';
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.boxShadow = 'none';
    event.currentTarget.style.transform = 'none';
  };

  const buttonStyle = {
    backgroundColor: '#ff6f61',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    margin: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  };

  const badgeStyle = {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    backgroundColor: 'red', // Red color
    borderRadius: '50%',
    width: '10px',
    height: '10px',
    animation: 'pulse 1.5s infinite',
    color: 'white'
  };

  return (
    <div className="container" style={{ paddingTop: '20px', textAlign: 'center' }}>
      <h1>Welcome to Pet Care!</h1>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            style={buttonStyle}
            onClick={() => navigate('/expenseform')}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0px 0px 20px #ff6f61')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)')}
          >
            <FontAwesomeIcon icon={faCalculator} style={{ marginRight: '8px' }} />
            Add Expense
          </button>
          <button
            style={buttonStyle}
            onClick={() => navigate('/add-care-record')}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0px 0px 20px #ff6f61')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)')}
          >
            <FontAwesomeIcon icon={faCalendarPlus} style={{ marginRight: '8px' }} />
            Add Care Record
          </button>
          <button
            style={buttonStyle}
            onClick={() => navigate('/all-care-records')}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0px 0px 20px #ff6f61')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)')}
          >
            <FontAwesomeIcon icon={faStethoscope} style={{ marginRight: '8px' }} />
            All Care Records
          </button>
          <button
            style={buttonStyle}
            onClick={() => navigate('/upcoming-reminders')}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0px 0px 20px #ff6f61')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)')}
          >
            <FontAwesomeIcon icon={faBell} style={{ marginRight: '8px' }} />
            Upcoming Reminders
            {remindersCount > 0 && (
              <div style={badgeStyle} />
            )}
          </button>
          <button
            style={buttonStyle}
            onClick={() => navigate('/set-reminder')}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0px 0px 20px #ff6f61')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)')}
          >
            <FontAwesomeIcon icon={faCalendarPlus} style={{ marginRight: '8px' }} />
            Set a Reminder
          </button>
        </div>
      </div>
      <div className="row" style={{ marginTop: '20px' }}>
        {cards.map((card) => (
          <div className="col-md-4" key={card.id} style={{ padding: '10px' }}>
            <div
              className="card"
              style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
              onClick={() => navigate(card.link)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-body">
                <FontAwesomeIcon icon={card.icon} size="3x" style={{ color: '#ff6f61', marginBottom: '10px' }} />
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.4);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Dashboard;
