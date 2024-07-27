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
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faSignOutAlt, faCalendarDay, faTasks, faComments, faDollarSign, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../contect/AuthContext'; // Adjust the path as needed

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
  const { authToken, logout } = useAuth(); // Access authToken to check login status
  const navigate = useNavigate();

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

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to login page or home page after logout
  };

  return (
    <>
      <AppBar
        position="sticky"
        style={{
          background: '#1c1c1c',
          padding: '10px 0',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          top: 0,
          zIndex: 1200,
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
                src="/simba.png"
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
                Pet Care
              </Typography>
            </div>

            {authToken ? (
              <>
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
                      component={Link}
                      to="/dashboard"
                      variant="text"
                      style={{
                        color: '#fff',
                        marginRight: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
                      Home
                    </Button>
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
                    <Button
                      onClick={handleLogout}
                      variant="text"
                      style={{
                        color: '#fff',
                        marginRight: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '10px' }} />
                      Logout
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
                          width: '1200px',
                          padding: '20px',
                          borderRadius: '8px',
                        },
                      }}
                    >
                      <Grid container spacing={2}>
                        {/* Expense Section */}
                        <Grid item xs={12} sm={4}>
                          <MuiTypography
                            variant="subtitle1"
                            component={Link}
                            to="/expenses"
                            style={{ padding: '8px 16px', color: '#ddd', textDecoration: 'none' }}
                          >
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
                              </MenuList>
                            </Grid>
                            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                              <img src={images.expense} alt="Expense" style={{ width: '180px', borderRadius: '8px' }} />
                            </Grid>
                          </Grid>
                        </Grid>
                        {/* Care Section */}
                        <Grid item xs={12} sm={4}>
                          <MuiTypography
                            variant="subtitle1"
                            component={Link}
                            to="/care"
                            style={{ padding: '8px 16px', color: '#ddd', textDecoration: 'none' }}
                          >
                            Care
                          </MuiTypography>
                          <Divider style={{ backgroundColor: '#444', margin: '8px 0' }} />
                          <Grid container spacing={1} alignItems="center">
                            <Grid item xs={8}>
                              <MenuList>
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
                            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                              <img src={images.care} alt="Care" style={{ width: '180px', borderRadius: '8px' }} />
                            </Grid>
                          </Grid>
                        </Grid>
                        {/* Reminder Section */}
                        <Grid item xs={12} sm={4}>
                          <MuiTypography
                            variant="subtitle1"
                            component={Link}
                            to="/reminders"
                            style={{ padding: '8px 16px', color: '#ddd', textDecoration: 'none' }}
                          >
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
                                <MenuItem onClick={handleMenuClose} component={Link} to="/upcoming-reminders">
                                  <FontAwesomeIcon icon={faCalendarDay} style={{ marginRight: '10px' }} />
                                  Upcoming Reminders
                                </MenuItem>
                              </MenuList>
                            </Grid>
                            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                              <img src={images.reminder} alt="Reminder" style={{ width: '180px', borderRadius: '8px' }} />
                            </Grid>
                          </Grid>
                        </Grid>
                        {/* ToDo List Section */}
                        <Grid item xs={12} sm={4}>
                          <MuiTypography
                            variant="subtitle1"
                            component={Link}
                            to="/todo-list"
                            style={{ padding: '8px 16px', color: '#ddd', textDecoration: 'none' }}
                          >
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
                            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                              <img src={images.todo} alt="ToDo List" style={{ width: '180px', borderRadius: '8px' }} />
                            </Grid>
                          </Grid>
                        </Grid>
                        {/* Chatbot Section */}
                        <Grid item xs={12} sm={4}>
                          <MuiTypography
                            variant="subtitle1"
                            component={Link}
                            to="/chatbot"
                            style={{ padding: '8px 16px', color: '#ddd', textDecoration: 'none' }}
                          >
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
                            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                              <img src={images.chatbot} alt="Chatbot" style={{ width: '180px', borderRadius: '8px' }} />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Menu>
                  </div>
                )}
              </>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  component={Link}
                  to="/"
                  variant="text"
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  variant="text"
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                  }}
                >
                  Signup
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            {isSmallScreen && (
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
                    {authToken && (
                      <>
                        <ListItem button onClick={handleMenuClick} style={{ color: '#fff' }}>
                          <FontAwesomeIcon icon={faCog} style={{ marginRight: '5px' }} />
                          <ListItemText primary="Navigate" />
                        </ListItem>
                        <Divider style={{ backgroundColor: '#fff' }} />
                        <ListItem button onClick={handleLogout} style={{ color: '#fff' }}>
                          <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '5px' }} />
                          <ListItemText primary="Logout" />
                        </ListItem>
                      </>
                    )}
                  </List>
                </div>
              </Drawer>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
