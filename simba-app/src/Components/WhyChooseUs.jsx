import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faStar, faUsers, faShieldAlt, faAward, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({ duration: 9000 });
  }, []);

  const sectionStyle = {
    padding: '50px 20px',
    height: '100vh',
    background: 'url(/background.jpg) no-repeat center center/cover',
    textAlign: 'center',
    borderRadius: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)',
    marginBottom: '2%',
    position: 'relative',
    color: 'white',
  };

  const cardStyle = {
    background: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '10px',
    padding: '30px',
    color: 'white',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    width: '300px',
    height: 'auto',
    margin: '10px',
  };

  const cardHoverStyle = {
    cursor: 'pointer',
    boxShadow: '0px 0px 20px #ff6f61',
  };

  const iconStyle = {
    color: '#ff6f61',
    marginBottom: '10px',
  };

  const features = [
    {
      id: 1,
      icon: faThumbsUp,
      title: 'Quality Service',
      description: 'We provide top-notch services to ensure the best care for your pet.',
    },
    {
      id: 2,
      icon: faStar,
      title: 'Trusted by Many',
      description: 'Our platform is trusted by thousands of pet owners around the world.',
    },
    {
      id: 3,
      icon: faUsers,
      title: 'Community Support',
      description: 'Join a community of pet lovers who share their tips and experiences.',
    },
    {
      id: 4,
      icon: faShieldAlt,
      title: 'Secure and Safe',
      description: 'We prioritize the safety and security of your pet’s information.',
    },
    {
      id: 5,
      icon: faAward,
      title: 'Award-Winning',
      description: 'Recognized for excellence in pet care management.',
    },
    {
      id: 6,
      icon: faHeartbeat,
      title: 'Health Monitoring',
      description: 'Track and monitor your pet’s health with ease.',
    },
  ];

  return (
    <Container style={sectionStyle}>
      <Typography variant="h4" gutterBottom style={{ color: 'white', fontWeight: 'bold' }}>
        Why Choose Us?
      </Typography>
      <Box 
        display="flex" 
        justifyContent="center" 
        flexWrap="wrap" 
        alignItems="flex-start" 
        style={{ gap: '20px' }} // Add gap between cards
      >
        {features.map((feature) => (
          <div
            key={feature.id}
            data-aos="zoom-in-up"
            style={cardStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <FontAwesomeIcon icon={feature.icon} size="3x" style={iconStyle} />
            <Typography variant="h6">{feature.title}</Typography>
            <Typography variant="body2">{feature.description}</Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default WhyChooseUs;
