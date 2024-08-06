// src/Components/Signup.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, TextField, Button, Typography, Container, Paper, CircularProgress } from '@mui/material';
import logo from '/simba.png'; // Import the PNG file directly

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [petName, setPetName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await axios.post('http://localhost:5000/api/auth/signup', { username, password, petName });
      setSuccess('Signup successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
    } catch (err) {
      setError('Signup failed. Please try again later.');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%',
      }}
    >
      <Paper
        elevation={12}
        sx={{
          padding: 4,
          borderRadius: 3,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Box mb={2}>
          <img src={logo} alt="Logo" style={{ width: 100, height: 'auto', marginBottom: 16 }} />
        </Box>
        <Typography variant="h4" component="h2" gutterBottom color="#fff">
          Signup
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Pet Name"
              variant="outlined"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
          </Box>
          <Box mb={3}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              disabled={loading}
              sx={{ py: 1.5 }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: 'white', backgroundColor: '#ff6f61'}} />
              ) : (
                'Signup'
              )}
            </Button>
          </Box>
          <Box mb={3}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={() => navigate('/login')}
              sx={{ py: 1.5, color: 'white' }}
            >
              Login
            </Button>
          </Box>
          {success && <Typography color="success.main" mt={2}>{success}</Typography>}
          {error && <Typography color="error" mt={2}>{error}</Typography>}
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
