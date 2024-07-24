import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Dialog, DialogActions, DialogContent, DialogTitle, CssBaseline } from '@mui/material';
import { createExpense } from '../../apiService'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

const ExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    expenseName: '',
    expenseDescription: '',
    expenseAmount: '',
  });
  const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility
  const [dialogMessage, setDialogMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    const dataWithDate = {
      ...expenseData,
      dateOfExpense: currentDate,
    };
    try {
      const result = await createExpense(dataWithDate);
      setDialogMessage('Expense added successfully!');
    } catch (error) {
      setDialogMessage('Error adding expense. Please try again.');
    }
    setOpenDialog(true); // Open the dialog after submission
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate('/'); // Redirect or handle navigation after closing the dialog
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 2
      }}
    >
      <CssBaseline />
      <Box 
        sx={{ 
          width: '100%', 
          maxWidth: 500, 
          padding: 4, 
          borderRadius: 2, 
          color: '#ffffff', 
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Added shadow for floating effect
          backdropFilter: 'blur(10px)', 
          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
          border: '1px solid rgba(255, 255, 255, 0.3)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Add New Expense
        </Typography>
        <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            id="expenseName"
            name="expenseName"
            label="Expense Name"
            value={expenseData.expenseName}
            onChange={handleChange}
            required
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              color: '#f6e3e4', 
              marginBottom: 2, 
              borderRadius: 2,
              '& .MuiInputBase-input': { color: '#f6e3e4' },
              '& .MuiInputLabel-root': { color: '#f6e3e4' },
              '& .MuiFilledInput-root': {
                borderRadius: 2, // Rounded corners for input fields
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:before': { borderBottom: 'none' }, // Hide the underline
                '&:hover:before': { borderBottom: 'none' }, // Hide the underline on hover
                '&.Mui-focused:after': {
                  borderBottom: `2px solid #ff6f61` // Change underline color on focus
                },
                '&.Mui-focused .MuiInputLabel-root': {
                  color: '#ff6f61' // Change label color on focus
                }
              },
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            id="expenseDescription"
            name="expenseDescription"
            label="Expense Description"
            value={expenseData.expenseDescription}
            onChange={handleChange}
            required
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              color: '#f6e3e4', 
              marginBottom: 2, 
              borderRadius: 2,
              '& .MuiInputBase-input': { color: '#f6e3e4' },
              '& .MuiInputLabel-root': { color: '#f6e3e4' },
              '& .MuiFilledInput-root': {
                borderRadius: 2, // Rounded corners for input fields
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:before': { borderBottom: 'none' }, // Hide the underline
                '&:hover:before': { borderBottom: 'none' }, // Hide the underline on hover
                '&.Mui-focused:after': {
                  borderBottom: `2px solid #ff6f61` // Change underline color on focus
                },
                '&.Mui-focused .MuiInputLabel-root': {
                  color: '#ff6f61' // Change label color on focus
                }
              },
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            id="expenseAmount"
            name="expenseAmount"
            label="Expense Amount (in rupees)"
            type="number"
            value={expenseData.expenseAmount}
            onChange={handleChange}
            required
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              color: '#f6e3e4', 
              marginBottom: 2, 
              borderRadius: 2,
              '& .MuiInputBase-input': { color: '#f6e3e4' },
              '& .MuiInputLabel-root': { color: '#f6e3e4' },
              '& .MuiFilledInput-root': {
                borderRadius: 2, // Rounded corners for input fields
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:before': { borderBottom: 'none' }, // Hide the underline
                '&:hover:before': { borderBottom: 'none' }, // Hide the underline on hover
                '&.Mui-focused:after': {
                  borderBottom: `2px solid #ff6f61` // Change underline color on focus
                },
                '&.Mui-focused .MuiInputLabel-root': {
                  color: '#fff' // Change label color on focus
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
          onClick={() => navigate(-1)}
          sx={{ mt: 2, borderRadius: 2, color: '#ffffff', borderColor: '#ffffff' }}
        >
          Back
        </Button>
      </Box>

      {/* Popup Overlay */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        sx={{ 
          '& .MuiDialog-paper': { 
            background: 'rgba(0, 0, 0, 0.8)', 
            borderRadius: 2, 
            color: '#ffffff' 
          } 
        }}
      >
        <DialogTitle>Submission Status</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{dialogMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ExpenseForm;
