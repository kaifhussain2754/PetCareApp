import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Dialog, DialogActions, DialogContent, DialogTitle, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createReminder } from '../../services/apiService'; // Adjust path if needed

const ReminderForm = () => {
  const [reminderData, setReminderData] = useState({
    reminder_name: '',  // Adjusted field name
    reminder_date_time: ''  // Adjusted field name
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReminderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReminder({
        reminder_name: reminderData.reminder_name,  // Adjusted field name
        reminder_date_time: reminderData.reminder_date_time,  // Adjusted field name
      }); 
      setDialogMessage('Reminder added successfully!');
      setOpenDialog(true); // Open dialog to notify user
    } catch (error) {
      setDialogMessage('Error adding reminder. Please try again.');
      setOpenDialog(true); // Open dialog to notify user
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate('/upcoming-reminders'); // Redirect to the reminders page
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 2,
      }}
    >
      <CssBaseline />
      <Box 
        sx={{ 
          width: '100%', 
          maxWidth: 600, 
          padding: 4, 
          borderRadius: 2, 
          color: '#ffffff', 
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)', 
          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
          border: '1px solid rgba(255, 255, 255, 0.3)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Add Reminder
        </Typography>
        <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            id="reminder_name"  // Adjusted field id
            name="reminder_name"  // Adjusted field name
            label="Reminder Name"
            value={reminderData.reminder_name}  // Adjusted field name
            onChange={handleChange}
            placeholder="Enter reminder name"
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              color: '#f6e3e4', 
              marginBottom: 2, 
              borderRadius: 2,
              '& .MuiInputBase-input': { color: '#f6e3e4' },
              '& .MuiInputLabel-root': { color: '#f6e3e4' },
              '& .MuiFilledInput-root': {
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          />
          <TextField
      fullWidth
      variant="filled"
      margin="normal"
      id="reminder_date_time"
      name="reminder_date_time"
      label="Reminder Date & Time"
      type="datetime-local"
      value={reminderData.reminder_date_time}
      onChange={handleChange}
      InputLabelProps={{ shrink: true }} // Keeps the label visible
      inputProps={{ placeholder: "Select date and time" }} // Sets custom placeholder
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        color: '#f6e3e4', 
        marginBottom: 2, 
        borderRadius: 2,
        '& .MuiInputBase-input': { color: '#f6e3e4' },
        '& .MuiInputLabel-root': { color: '#f6e3e4' },
        '& .MuiFilledInput-root': {
          borderRadius: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      }}
    />
          <Button 
            type="submit"
            variant="contained"
            sx={{ 
              backgroundColor: '#ff6f61', 
              color: 'white',
              marginTop: 2,
              '&:hover': { 
                backgroundColor: '#e55a50', 
                boxShadow: '0 0 20px rgba(255, 105, 97, 0.5)' 
              } 
            }}
          >
            Submit
          </Button>
        </form>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Reminder Status</DialogTitle>
          <DialogContent>
            <Typography>{dialogMessage}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ReminderForm;
