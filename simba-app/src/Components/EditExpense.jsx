import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getExpenseById, updateExpense } from '../apiService'; // Adjust the import path as needed
import { TextField, Button, Typography, Box, CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const EditExpense = () => {
  const { id } = useParams(); // Get the id from the URL
  const [expense, setExpense] = useState({
    expenseName: '',
    expenseDescription: '',
    expenseAmount: '',
    dateOfExpense: '',
  });
  const [error, setError] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const data = await getExpenseById(id);
        setExpense({
          expenseName: data.expenseName || '',
          expenseDescription: data.expenseDescription || '',
          expenseAmount: data.expenseAmount || '',
          dateOfExpense: data.dateOfExpense ? new Date(data.dateOfExpense).toISOString().split('T')[0] : '',
        });
      } catch (error) {
        console.error('Error fetching expense:', error);
        setError('Failed to fetch expense');
      }
    };

    fetchExpense();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateExpense(id, expense);
      setDialogMessage('Expense updated successfully!');
      setOpenDialog(true);
    } catch (error) {
      console.error('Error updating expense:', error);
      setDialogMessage('Failed to update expense');
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate('/view-expenses'); // Redirect after closing the dialog
  };

  return (
    <Box 
      sx={{ 
        // minHeight: '100vh', 
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
          maxWidth: 500, 
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
          Edit Expense
        </Typography>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            id="expenseName"
            name="expenseName"
            label="Expense Name"
            value={expense.expenseName}
            onChange={handleChange}
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
            id="expenseDescription"
            name="expenseDescription"
            label="Expense Description"
            value={expense.expenseDescription}
            onChange={handleChange}
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
            id="expenseAmount"
            name="expenseAmount"
            label="Expense Amount (in rupees)"
            type="number"
            value={expense.expenseAmount}
            onChange={handleChange}
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
      id="dateOfExpense"
      name="dateOfExpense"
      label="Date of Expense"
      type="date"
      value={expense.dateOfExpense}
      onChange={handleChange}
      InputLabelProps={{ shrink: true }} // Keeps the label visible when not focused
      inputProps={{ placeholder: "" }} // Attempt to set placeholder (may not be visible)
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
          '&:before': { borderBottom: 'none' }, // Removes default underline
          '&:hover:before': { borderBottom: 'none' }, // Removes underline on hover
          '&.Mui-focused:after': {
            borderBottom: `2px solid #ff6f61` // Custom border color on focus
          },
          '&.Mui-focused .MuiInputLabel-root': {
            color: '#ff6f61' // Custom label color on focus
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
            Update Expense
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

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ color: 'black' }}>{dialogMessage}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditExpense;
