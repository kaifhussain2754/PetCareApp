import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Add more icons if needed

const Header = () => {
  return (
    <AppBar position="static" style={{
      background: '#1c1c1c', // Dark background
      padding: '10px 0',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <Toolbar>
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/simba.png" // Replace with your logo path
              alt="Logo"
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
            <Typography variant="h6" style={{
              color: '#fff',
              marginLeft: '10px',
              fontWeight: 'bold'
            }}>
              Simba's Care
            </Typography>
          </div>

          {/* Navigation Menu */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              component={Link}
              to="/"
              variant="text"
              style={{
                color: '#fff',
                marginRight: '15px',
                fontWeight: 'bold'
              }}
            >
              <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
              Home
            </Button>
            <Button
              component={Link}
              to="/settings"
              variant="text"
              style={{
                color: '#fff',
                marginRight: '15px',
                fontWeight: 'bold'
              }}
            >
              <FontAwesomeIcon icon={faCog} style={{ marginRight: '5px' }} />
              Settings
            </Button>
            <Button
              component={Link}
              to="/logout"
              variant="text"
              style={{
                color: '#fff',
                fontWeight: 'bold'
              }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '5px' }} />
              Logout
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
