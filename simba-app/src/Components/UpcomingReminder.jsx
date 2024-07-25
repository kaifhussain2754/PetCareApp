import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTrashAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import { getReminders, deleteReminder } from '../apiService';

function UpcomingReminders() {
  const [reminders, setReminders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const notifyReminder = (reminderTitle, reminderMessage) => {
      console.log(`Attempting to send notification: ${reminderTitle}`);
      if (Notification.permission === "granted") {
        new Notification(reminderTitle, {
          body: reminderMessage,
          icon: 'path_to_icon.png'
        });
      } else {
        console.log("Notification permission not granted.");
      }
    };

    const checkReminders = (data) => {
      const now = new Date();
      data.forEach(reminder => {
        const reminderTime = new Date(reminder.reminder_date_time);
        if (reminderTime > now && reminderTime <= new Date(now.getTime() + 24 * 60 * 60 * 1000)) {
          notifyReminder(reminder.reminder_name, reminder.reminder_description);
        }
      });
    };

    const fetchReminders = async () => {
      try {
        const data = await getReminders();
        setReminders(data);
        checkReminders(data);
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    };

    if ("Notification" in window) {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
          fetchReminders();
        } else {
          console.log("Notification permission denied.");
        }
      });
    } else {
      console.log("Notifications are not supported by this browser.");
    }
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
      <Typography variant="h4" align="center">Upcoming Reminders</Typography>
      
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

        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: '#ff6f61',
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
          onClick={() => navigate('/set-reminder')}
        >
          <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '8px' }} />
          Set New Reminder
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
            <Typography>No reminders found.</Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default UpcomingReminders;
