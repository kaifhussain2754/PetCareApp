import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, MenuItem, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Alert, Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getExpenses, deleteExpense } from '../apiService'; // Adjust the import path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrashAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ExpenseCalculator = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [period, setPeriod] = useState('daily');
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await getExpenses(); // Use the API service function
        let fetchedExpenses = response;

        if (period === 'monthly' && filter) {
          const [year, month] = filter.split('-');
          fetchedExpenses = fetchedExpenses.filter(expense => {
            const expenseDate = new Date(expense.dateOfExpense);
            return (
              expenseDate.getFullYear() === parseInt(year) &&
              expenseDate.getMonth() === parseInt(month) - 1
            );
          });
        } else if (period === 'annually' && filter) {
          fetchedExpenses = fetchedExpenses.filter(expense => {
            const expenseDate = new Date(expense.dateOfExpense);
            return expenseDate.getFullYear() === parseInt(filter);
          });
        } else if (period === 'weekly' && filter) {
          const [year, week] = filter.split('-');
          const startOfYear = new Date(year, 0, 1);
          const startOfWeek = new Date(startOfYear.setDate(startOfYear.getDate() + (week - 1) * 7));
          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(endOfWeek.getDate() + 6);

          fetchedExpenses = fetchedExpenses.filter(expense => {
            const expenseDate = new Date(expense.dateOfExpense);
            return expenseDate >= startOfWeek && expenseDate <= endOfWeek;
          });
        }

        // Filter expenses based on search query
        if (searchQuery) {
          fetchedExpenses = fetchedExpenses.filter(expense =>
            expense.expenseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            expense.expenseDescription.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        setExpenses(fetchedExpenses);
        const sum = fetchedExpenses.reduce((acc, expense) => acc + parseFloat(expense.expenseAmount), 0);
        setTotal(sum);
        setError('');
      } catch (error) {
        console.error('Error fetching expenses:', error);
        setError('Failed to fetch expenses');
      }
    };

    fetchExpenses();
  }, [period, filter, searchQuery]);

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
    setFilter(''); // Clear filter when period changes
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const handleEdit = (id) => {
    navigate(`/edit-expense/${id}`); // Navigate to the edit form with the expense id
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await deleteExpense(id); // Call deleteExpense from the API service
        setExpenses(expenses.filter(expense => expense.id !== id));
        alert('Expense deleted successfully');
      } catch (error) {
        console.error('Error deleting expense:', error);
        alert('Failed to delete expense');
      }
    }
  };

  return (
    <Container maxWidth="lg" style={{
      marginTop: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      backdropFilter: 'blur(10px)',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      color: '#fff',
    }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(-1)} // Go back to the previous page
        style={{ borderRadius: '10px', marginBottom: '20px', backgroundColor: '#ff6f61', color: '#fff' }}
      >
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </Button>
      <Typography variant="h4" gutterBottom style={{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '20px',
        background: '#ff6f61',
        padding: '5px',
        borderRadius: '1rem'
      }}>
        Expense History
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <div style={{ marginBottom: '20px' }}>
        <Typography variant="h6" style={{ color: '#fff' }}>Fetch Expenses</Typography>
        <TextField
          select
          label="Period"
          value={period}
          onChange={handlePeriodChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: '20px', borderRadius: '10px', backgroundColor: '#1c1c1c' }}
          InputProps={{ style: { color: '#fff' } }}
          InputLabelProps={{ style: { color: '#ff6f61' } }}
        >
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="annually">Annually</MenuItem>
        </TextField>
        {(period === 'monthly' || period === 'annually' || period === 'weekly') && (
          <TextField
            type={period === 'monthly' ? 'month' : period === 'weekly' ? 'text' : 'number'}
            label={period === 'monthly' ? 'Month (YYYY-MM)' : period === 'weekly' ? 'Week (YYYY-WW)' : 'Year'}
            value={filter}
            onChange={handleFilterChange}
            variant="outlined"
            fullWidth
            style={{ marginTop: '20px', borderRadius: '10px', backgroundColor: '#1c1c1c' }}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#ff6f61' } }}
          />
        )}
        <TextField
          label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          variant="outlined"
          fullWidth
          style={{ marginTop: '20px', borderRadius: '10px', backgroundColor: '#1c1c1c' }}
          InputProps={{ style: { color: '#fff' } }}
          InputLabelProps={{ style: { color: '#ff6f61' } }}
        />
      </div>
      <TableContainer style={{
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        marginTop: '20px',
      }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: '#fff' }}>SrNo</TableCell>
              <TableCell style={{ color: '#fff' }}>Expense Name</TableCell>
              <TableCell style={{ color: '#fff' }}>Expense Description</TableCell>
              <TableCell style={{ color: '#fff' }}>Expense Amount</TableCell>
              <TableCell style={{ color: '#fff' }}>Date of Expense</TableCell>
              <TableCell style={{ color: '#fff' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.length > 0 ? (
              expenses.map((expense, index) => (
                <TableRow key={expense.id}>
                  <TableCell style={{ color: '#fff' }}>{index + 1}</TableCell>
                  <TableCell style={{ color: '#fff' }}>{expense.expenseName}</TableCell>
                  <TableCell style={{ color: '#fff' }}>{expense.expenseDescription}</TableCell>
                  <TableCell style={{ color: '#fff' }}>{expense.expenseAmount}</TableCell>
                  <TableCell style={{ color: '#fff' }}>{formatDate(expense.dateOfExpense)}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => handleEdit(expense.id)}
                      style={{ marginRight: '10px', borderRadius: '10px' }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(expense.id)}
                      style={{ borderRadius: '10px' }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} style={{ textAlign: 'center', color: '#fff' }}>
                  No expenses found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" style={{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '20px'
      }}>
        Total Expenses: ₹{total.toFixed(2)}
      </Typography>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/expenseform">
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: '10px', backgroundColor: '#ff6f61', color: '#fff' }}
          >
            Add Expense
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default ExpenseCalculator;
