import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Dialog, DialogActions, DialogContent, DialogTitle, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { createCareRecord } from '../../apiService'; // Adjust the path as needed

const AddCareRecord = () => {
  const [careData, setCareData] = useState({
    name: '',
    location: '',
    notes: '',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [reminderPrompt, setReminderPrompt] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCareRecord(careData); // Call the API function
      setReminderPrompt(true); // Set flag for reminder prompt
      setOpenDialog(true); // Open dialog to notify user
    } catch (error) {
      setReminderPrompt(false); // No reminder prompt on error
      setOpenDialog(true); // Open dialog to notify user of the error
    }
  };

  const handleDialogClose = (redirectToReminder) => {
    setOpenDialog(false);
    if (redirectToReminder) {
      navigate('/set-reminder'); // Redirect to the reminder page
    } else {
      navigate('/all-care-records'); // Redirect to the care records page
    }
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
          Add Care Record
        </Typography>
        <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            id="name"
            name="name"
            label="Name"
            value={careData.name}
            onChange={handleChange}
            placeholder="Optional"
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
                '&:before': { borderBottom: 'none' },
                '&:hover:before': { borderBottom: 'none' },
                '&.Mui-focused:after': {
                  borderBottom: `2px solid #ff6f61`
                },
                '&.Mui-focused .MuiInputLabel-root': {
                  color: '#ff6f61'
                }
              },
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            id="location"
            name="location"
            label="Location"
            value={careData.location}
            onChange={handleChange}
            placeholder="Optional"
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
                '&:before': { borderBottom: 'none' },
                '&:hover:before': { borderBottom: 'none' },
                '&.Mui-focused:after': {
                  borderBottom: `2px solid #ff6f61`
                },
                '&.Mui-focused .MuiInputLabel-root': {
                  color: '#ff6f61'
                }
              },
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            id="notes"
            name="notes"
            label="Notes"
            value={careData.notes}
            onChange={handleChange}
            placeholder="Optional"
            multiline
            rows={4}
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
                '&:before': { borderBottom: 'none' },
                '&:hover:before': { borderBottom: 'none' },
                '&.Mui-focused:after': {
                  borderBottom: `2px solid #ff6f61`
                },
                '&.Mui-focused .MuiInputLabel-root': {
                  color: '#ff6f61'
                }
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              backgroundColor: '#ff6f61', 
              borderColor: '#ff6f61', 
              mt: 2,
              borderRadius: 2,
              '&:hover': { backgroundColor: '#e65c50' } 
            }}
          >
            Submit
          </Button>
        </form>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => navigate('/care')}
          sx={{ mt: 2, borderRadius: 2, borderColor: '#ff6f61' }}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </Button>

        <Dialog open={openDialog} onClose={() => handleDialogClose(false)}>
          <DialogTitle>Notification</DialogTitle>
          <DialogContent>
            <Typography>
              {reminderPrompt
                ? 'Care record added successfully! Do you want to set a reminder for the next time?'
                : 'Error adding care record. Please try again.'}
            </Typography>
          </DialogContent>
          <DialogActions>
            {reminderPrompt ? (
              <>
                <Button onClick={() => handleDialogClose(true)} color="primary">
                  Yes
                </Button>
                <Button onClick={() => handleDialogClose(false)} color="secondary">
                  No
                </Button>
              </>
            ) : (
              <Button onClick={() => handleDialogClose(false)} color="primary">
                Close
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default AddCareRecord;
