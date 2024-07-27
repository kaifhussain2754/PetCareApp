import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contect/AuthContext';
import { Box, TextField, Button, Typography, Container, Paper, CircularProgress } from '@mui/material';
import logo from '/simba.png'; // Import the PNG file directly

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Added success state
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(''); // Clear success message

    try {
      await login(username, password);
      setSuccess('Login successful! Redirecting to dashboard...'); // Set success message
      setTimeout(() => navigate('/dashboard'), 2000); // Redirect after 2 seconds
    } catch (err) {
      if (err.response && err.response.status === 401) {
        // Unauthorized error
        setError('Invalid credentials. Please check your username and password.');
      } else {
        setError('Login failed. Please try again later.');
      }
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = () => {
    navigate('/signup'); // Navigate to the signup page
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
          Login
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
                'Login'
              )}
            </Button>
          </Box>
          <Box mb={3}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleSignup}
              sx={{ py: 1.5, color: 'white' }}
            >
              Sign Up
            </Button>
          </Box>
          {success && <Typography color="success.main" mt={2}>{success}</Typography>}
          {error && <Typography color="error" mt={2}>{error}</Typography>}
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
