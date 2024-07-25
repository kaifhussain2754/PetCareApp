import React, { useState, useEffect } from 'react';
import { CardContent, Typography, IconButton, Box, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '/simba.png'; // Replace with the path to your logo image

const NotificationPopup = ({ title, message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000); // Hide after 10 seconds

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, []);

  if (!visible) {
    return null; // Render nothing if not visible
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: { xs: '90%', sm: '400px' },
        maxWidth: '100%',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'auto',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
          backdropFilter: 'blur(10px)', // Glassmorphism effect
          borderRadius: '15px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          p: 2,
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <img src={Logo} alt="Logo" style={{ width: '40px', height: 'auto', marginRight: '10px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
              {title}
            </Typography>
            <IconButton onClick={() => { setVisible(false); onClose(); }} sx={{ color: 'grey.600' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ lineHeight: 1.5, color: 'white' }}>
            {message}
          </Typography>
        </CardContent>
      </Paper>
    </Box>
  );
};

export default NotificationPopup;
