import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider, Button, Container, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  // Use default breakpoints
  const isSmallScreen = useMediaQuery('(max-width: 960px)'); // md breakpoint is 960px

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <>
      <AppBar position="static" style={{
        background: '#1c1c1c',
        padding: '10px 0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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

            {/* Show Hamburger Menu Icon Only on Small Screens */}
            {isSmallScreen && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                style={{ display: 'flex', alignItems: 'center', color: '#fff' }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Desktop Navigation Menu */}
            {!isSmallScreen && (
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
            )}
          </Container>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            backgroundColor: '#000', // Set background color to black
            color: '#fff' // Set text color to white for better contrast
          }
        }}
      >
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} style={{ width: 250 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
            <IconButton onClick={toggleDrawer(false)} style={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </div>
          <List>
            <ListItem button component={Link} to="/" style={{ color: '#fff' }}>
              <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/logout" style={{ color: '#fff' }}>
              <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '5px' }} />
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
          <Divider style={{ backgroundColor: '#fff' }} />
        </div>
      </Drawer>
    </>
  );
};

export default Header;
