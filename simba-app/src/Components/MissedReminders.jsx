// src/components/MissedReminders.jsx
import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Card, CardContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTrashAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import NotificationPopup from './NotificationPopUp'; // Ensure this component is created
import { getReminders, deleteReminder } from '../services/apiService'; // Update the path if needed

function MissedReminders() {
  const [reminders, setReminders] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: '', message: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const displayPopup = (title, message) => {
      setPopupContent({ title, message });
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000); // Auto-close after 5 seconds
    };

    const fetchReminders = async () => {
      try {
        const data = await getReminders();
        // Filter out future reminders and sort the past reminders by date and time in descending order
        const missedReminders = data.filter(reminder => new Date(reminder.reminder_date_time) <= new Date());
        missedReminders.sort((a, b) => new Date(b.reminder_date_time) - new Date(a.reminder_date_time));
        setReminders(missedReminders);
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    };

    fetchReminders();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteReminder(id);
      setReminders(reminders.filter(reminder => reminder.id !== id));
    } catch (error) {
      console.error('Error deleting reminder:', error);
    }
  };

  const glassmorphismStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  };

  return (
    <div className="container" style={{ paddingTop: '20px' }}>
      <Typography variant="h4" align="center">Missed Reminders</Typography>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: 'darkblue',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} />
          Back
        </Button>
      </div>
      
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {reminders.length > 0 ? (
          reminders.map(reminder => (
            <Grid item xs={12} md={4} key={reminder.id}>
              <Card
                style={glassmorphismStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
                }}
              >
                <CardContent style={{ textAlign: 'center' }}>
                  <FontAwesomeIcon icon={faCalendarAlt} size="3x" style={{ color: '#ff6f61', marginBottom: '10px' }} />
                  <Typography variant="h6">{reminder.reminder_name}</Typography>
                  <Typography variant="body1">{reminder.reminder_description}</Typography>
                  <Typography variant="body2" color={"#fff"}>
                    <strong>Date:</strong> {new Date(reminder.reminder_date_time).toLocaleDateString()}
                    <br />
                    <strong>Time:</strong> {new Date(reminder.reminder_date_time).toLocaleTimeString()}
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    style={{
                      marginTop: '10px',
                      backgroundColor: '#ff6f61',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    }}
                    onClick={() => handleDelete(reminder.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} /> Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12} textAlign="center">
            <Typography>No missed reminders.</Typography>
          </Grid>
        )}
      </Grid>

      {showPopup && (
        <NotificationPopup
          title={popupContent.title}
          message={popupContent.message}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default MissedReminders;
