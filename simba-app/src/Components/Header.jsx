import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Container,
  useMediaQuery,
  Menu,
  MenuItem,
  MenuList,
  Typography as MuiTypography,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faSignOutAlt, faCalendarDay, faTasks, faComments } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const images = {
  expense: '/expense.png', // Replace with actual image paths
  care: '/care.png',
  reminder: '/reminder.png',
  todo: '/todolist.png',
  chatbot: '/chatbot.png',
};

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // Use default breakpoints
  const isSmallScreen = useMediaQuery('(max-width: 960px)'); // md breakpoint is 960px

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          background: '#1c1c1c',
          padding: '10px 0',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Toolbar>
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/simba.png" // Replace with your logo path
                alt="Logo"
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              />
              <Typography
                variant="h6"
                style={{
                  color: '#fff',
                  marginLeft: '10px',
                  fontWeight: 'bold',
                }}
              >
                Simba's Care
              </Typography>
            </div>

            {/* Show Hamburger Menu Icon Only on Small Screens */}
            {isSmallScreen ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                style={{ display: 'flex', alignItems: 'center', color: '#fff' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center' }}>

                <Button
                  aria-controls="navigate-menu"
                  aria-haspopup="true"
                  onClick={handleMenuClick}
                  variant="text"
                  endIcon={<ArrowDropDownIcon />}
                  style={{
                    color: '#fff',
                    marginRight: '15px',
                    fontWeight: 'bold',
                  }}
                >
                  Navigate
                </Button>
                <Menu
                  id="navigate-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  PaperProps={{
                    style: {
                      backgroundColor: '#1c1c1c',
                      color: '#fff',
                      width: '900px',
                      padding: '20px',
                      borderRadius: '8px',
                    },
                  }}
                >
                  <Grid container spacing={2}>
                    {/* Expense Section */}
                    <Grid item xs={12} sm={4}>
                      <MuiTypography variant="subtitle1" style={{ padding: '8px 16px', color: '#ddd' }}>
                        Expense
                      </MuiTypography>
                      <Divider style={{ backgroundColor: '#444', margin: '8px 0' }} />
                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={8}>
                          <MenuList>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/view-expenses">
                              <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: '10px' }} />
                              View Expenses
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/expenseform">
                              <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: '10px' }} />
                              Add Expense
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/edit-expense/:id">
                              <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: '10px' }} />
                              Edit Expense
                            </MenuItem>
                          </MenuList>
                        </Grid>
                        <Grid item xs={4}>
                          <img src={images.expense} alt="Expense" style={{ width: '100%', borderRadius: '8px' }} />
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* Care Section */}
                    <Grid item xs={12} sm={4}>
                      <MuiTypography variant="subtitle1" style={{ padding: '8px 16px', color: '#ddd' }}>
                        Care
                      </MuiTypography>
                      <Divider style={{ backgroundColor: '#444', margin: '8px 0' }} />
                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={8}>
                          <MenuList>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/care">
                              <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: '10px' }} />
                              Care
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/add-care-record">
                              <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: '10px' }} />
                              Add Care Record
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/all-care-records">
                              <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: '10px' }} />
                              All Care Records
                            </MenuItem>
                          </MenuList>
                        </Grid>
                        <Grid item xs={4}>
                          <img src={images.care} alt="Care" style={{ width: '100%', borderRadius: '8px' }} />
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* Reminder Section */}
                    <Grid item xs={12} sm={4}>
                      <MuiTypography variant="subtitle1" style={{ padding: '8px 16px', color: '#ddd' }}>
                        Reminder
                      </MuiTypography>
                      <Divider style={{ backgroundColor: '#444', margin: '8px 0' }} />
                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={8}>
                          <MenuList>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/set-reminder">
                              <FontAwesomeIcon icon={faCalendarDay} style={{ marginRight: '10px' }} />
                              Set Reminder
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/missed-reminders">
                              <FontAwesomeIcon icon={faCalendarDay} style={{ marginRight: '10px' }} />
                              Missed Reminders
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/reminders">
                              <FontAwesomeIcon icon={faCalendarDay} style={{ marginRight: '10px' }} />
                              Reminders
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/upcoming-reminders">
                              <FontAwesomeIcon icon={faCalendarDay} style={{ marginRight: '10px' }} />
                              Upcoming Reminders
                            </MenuItem>
                          </MenuList>
                        </Grid>
                        <Grid item xs={4}>
                          <img src={images.reminder} alt="Reminder" style={{ width: '100%', borderRadius: '8px' }} />
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* ToDo List Section */}
                    <Grid item xs={12} sm={4}>
                      <MuiTypography variant="subtitle1" style={{ padding: '8px 16px', color: '#ddd' }}>
                        ToDo List
                      </MuiTypography>
                      <Divider style={{ backgroundColor: '#444', margin: '8px 0' }} />
                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={8}>
                          <MenuList>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/todo-list">
                              <FontAwesomeIcon icon={faTasks} style={{ marginRight: '10px' }} />
                              ToDo List
                            </MenuItem>
                          </MenuList>
                        </Grid>
                        <Grid item xs={4}>
                          <img src={images.todo} alt="ToDo List" style={{ width: '100%', borderRadius: '8px' }} />
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* Chatbot Section */}
                    <Grid item xs={12} sm={4}>
                      <MuiTypography variant="subtitle1" style={{ padding: '8px 16px', color: '#ddd' }}>
                        Chatbot
                      </MuiTypography>
                      <Divider style={{ backgroundColor: '#444', margin: '8px 0' }} />
                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={8}>
                          <MenuList>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/chatbot">
                              <FontAwesomeIcon icon={faComments} style={{ marginRight: '10px' }} />
                              Chatbot
                            </MenuItem>
                          </MenuList>
                        </Grid>
                        <Grid item xs={4}>
                          <img src={images.chatbot} alt="Chatbot" style={{ width: '100%', borderRadius: '8px' }} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Menu>
              </div>
            )}

            {/* Mobile Menu */}
            <Drawer
              anchor="left"
              open={openDrawer}
              onClose={toggleDrawer(false)}
              PaperProps={{
                style: {
                  backgroundColor: '#000',
                  color: '#fff',
                },
              }}
            >
              <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                style={{ width: 250 }}
              >
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
                  <ListItem button onClick={handleMenuClick} style={{ color: '#fff' }}>
                    <FontAwesomeIcon icon={faCog} style={{ marginRight: '5px' }} />
                    <ListItemText primary="Navigate" />
                  </ListItem>
                  <Divider style={{ backgroundColor: '#fff' }} />
                  <ListItem button component={Link} to="/logout" style={{ color: '#fff' }}>
                    <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '5px' }} />
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </div>
            </Drawer>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
