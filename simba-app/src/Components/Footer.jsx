import React from 'react';
import { Container, Grid, Typography, Link, Divider, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1c1c1c',
        color: '#fff',
        padding: '20px 0',
        position: 'relative',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <img src="/simba.png" alt="Company Logo" style={{ width: '100px', borderRadius: '8px' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" textAlign={'center'}>
            Originally created for our cat Simba, this app has evolved into a professional tool for all pet owners, offering a seamless experience for managing and caring for pets.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <Link href="https://www.instagram.com/kaif._.hussain/" color="inherit" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
              <Link href="https://www.linkedin.com/in/kaif-hussain-739361236/" color="inherit" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </Link>
              <Link href="https://github.com/kaifhussain2754" color="inherit" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2, backgroundColor: '#444' }} />
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Simba's Care. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Made with 🫶🏻 by{' '}
          <Link href="https://www.linkedin.com/in/kaif-hussain-739361236/" color="inherit" target="_blank" rel="noopener noreferrer" fontWeight={'bold'}>
            Mohammed Kaif Hussain
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
