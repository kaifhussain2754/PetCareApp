import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery, useTheme } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static" style={{ background: '#1c1c1c', padding: '10px 0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <Toolbar>
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/simba.png" // Replace with your logo path
              alt="Logo"
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
            <Typography variant="h6" style={{ color: '#fff', marginLeft: '10px', fontWeight: 'bold' }}>
              Simba's Care
            </Typography>
          </div>

          {/* Responsive Navigation Menu */}
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <List>
                  <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
                    <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button component={Link} to="/logout" onClick={handleDrawerToggle}>
                    <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '5px' }} />
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                component={Link}
                to="/"
                variant="text"
                style={{ color: '#fff', marginRight: '15px', fontWeight: 'bold' }}
              >
                <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
                Home
              </Button>
              <Button
                component={Link}
                to="/logout"
                variant="text"
                style={{ color: '#fff', fontWeight: 'bold' }}
              >
                <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '5px' }} />
                Logout
              </Button>
            </div>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
