import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => navigate(-1)}
      aria-label="back"
      style={{ position: 'absolute', top: '20px', left: '20px', color: 'white' }}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

function Reminders() {
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
    <div className="container" style={{ paddingTop: '20px', position: 'relative' }}>
      <BackButton />
      <h1 className="text-center">Reminders</h1>
      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
          <div
            className="card"
            style={{ cursor: 'pointer', transition: 'all 0.3s ease', width: '100%' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faBell} size="3x" style={{ color: '#ff6f61', marginBottom: '10px' }} />
              <h5 className="card-title">Upcoming Reminders</h5>
              <p className="card-text">Check reminders for upcoming vet visits, medication, and other important tasks.</p>
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
                onClick={() => navigate('/upcoming-reminders')}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0px 0px 20px #ff6f61')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)')}
              >
                View Reminders
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
          <div
            className="card"
            style={{ cursor: 'pointer', transition: 'all 0.3s ease', width: '100%' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon icon={faCalendarPlus} size="3x" style={{ color: '#ff6f61', marginBottom: '10px' }} />
              <h5 className="card-title">Set a Reminder</h5>
              <p className="card-text">Schedule a new reminder for Simba’s care activities.</p>
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
                onClick={() => navigate('/set-reminder')}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0px 0px 20px #ff6f61')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)')}
              >
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reminders;
