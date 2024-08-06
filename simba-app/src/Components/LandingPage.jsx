import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPaw, faCheckCircle, faBell, faClipboardList, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide4.jpg',
    '/slide5.jpg',
    '/slide6.jpg'
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired settings

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    marginTop: '-4.8%'
  };

  const contentStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '20%',
    margin: 'auto',
    width: '60%',
    height: '40%',
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    color: 'black',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#ff6f61',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const slideshowStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };

  const imageWrapperStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease-in-out',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const feature = {
    background: 'black',
    padding: '20px',
    borderRadius: '20px',
    cursor: 'pointer'
  }

  const featuresSectionStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    height: '100vh',
  };

  const featureCardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  };

  const downArrowWrapperStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    zIndex: 2,
  };

  const downArrowStyle = {
    fontSize: '2rem',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const scrollToFeatures = () => {
    document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      id: 1,
      icon: faHeart,
      title: 'Pet Health',
      description: 'Manage your pet\'s health and wellness easily.',
    },
    {
      id: 2,
      icon: faPaw,
      title: 'Care Records',
      description: 'Keep track of all care routines and treatments.',
    },
    {
      id: 3,
      icon: faCheckCircle,
      title: 'Reminders',
      description: 'Set and manage reminders for important tasks.',
    },
    {
      id: 4,
      icon: faBell,
      title: 'Notifications',
      description: 'Receive notifications for upcoming events.',
    },
    {
      id: 5,
      icon: faClipboardList,
      title: 'To-Do Lists',
      description: 'Organize daily tasks and to-dos for your pet.',
    },
  ];

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '10px',
    padding: '30px',
    color: 'white',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    width: '300px',
    height: 'auto',
  };

  const cardHoverStyle = {
    cursor: 'pointer',
    boxShadow: '0px 0px 20px #ff6f61',
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={slideshowStyle}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                ...imageWrapperStyle,
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            >
              <img src={image} alt={`Slide ${index}`} style={imageStyle} />
            </div>
          ))}
        </div>
        <div style={contentStyle}>
          <h1 style={{ color: 'black', fontWeight: 'bold' }}>Welcome to PetCare!</h1>
          <p>Your one-stop solution for managing all your pet's needs. From reminders to expenses, we've got you covered.</p>
          <div>
            <button style={buttonStyle}>Login</button>
            <button style={{ ...buttonStyle, marginLeft: '10px' }}>Sign Up</button>
          </div>
        </div>
        <div style={downArrowWrapperStyle}>
          <h2 style={feature} onClick={scrollToFeatures}>Our Features <FontAwesomeIcon icon={faCaretDown} /></h2>
        </div>
      </div>
      <div id="features-section" style={featuresSectionStyle}>
        <h2 style={{ padding: '2%' }}>Features</h2>
        <div style={featureCardsContainerStyle}>
          {features.map((feature) => (
            <div
              key={feature.id}
              data-aos="zoom-in-up"
              style={cardStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
            >
              <FontAwesomeIcon icon={feature.icon} size="3x" style={{ color: '#ff6f61', marginBottom: '10px' }} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
