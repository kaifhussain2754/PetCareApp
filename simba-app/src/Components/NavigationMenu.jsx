import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDollarSign, faCalendarAlt, faBullhorn, faList, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const NavigationMenu = ({ onClose }) => {
  const menuItems = [
    { to: '/', label: 'Home', icon: faHome },
    { to: '/view-expenses', label: 'Expenses', icon: faDollarSign },
    { to: '/care', label: 'Care Records', icon: faCalendarAlt },
    { to: '/set-reminder', label: 'Reminders', icon: faBullhorn },
    { to: '/todo-list', label: 'To-Do List', icon: faList },
    { to: '/chatbot', label: 'Chatbot', icon: faCog },
    { to: '/logout', label: 'Logout', icon: faSignOutAlt },
  ];

  return (
    <div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button component={Link} to={item.to} key={index} onClick={onClose} style={{ color: '#fff' }}>
            <FontAwesomeIcon icon={item.icon} style={{ marginRight: '5px' }} />
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider style={{ backgroundColor: '#fff' }} />
    </div>
  );
};

export default NavigationMenu;
