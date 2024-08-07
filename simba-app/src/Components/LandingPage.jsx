import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPaw, faCheckCircle, faBell, faClipboardList, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import WhyChooseUs from './WhyChooseUs';

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
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

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

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
    marginTop: '-4.8%',
  };

  const imageWrapperStyle = (index) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease-in-out',
    opacity: index === currentImageIndex ? 1 : 0,
    animation: 'slideFromRight 1s ease-in-out',
  });

  const buttonStyle = {
    padding: '10px 20px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    fontSize: '1rem',
  };
  

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    padding: '20px',
    borderRadius: '10px',
    width: '60%',
    height: '40%',
    zIndex: 2,
  };

  const downArrowWrapperStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    zIndex: 2,
  };

  const featuresSectionStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    marginTop: '100px', // Ensures the section is below the image slider
  };

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
      <div style={containerStyle} className="position-relative overflow-hidden">
        <div className="position-relative w-100 h-100">
          {images.map((image, index) => (
            <div
              key={index}
              style={imageWrapperStyle(index)}
              className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            >
              <img src={image} alt={`Slide ${index}`} className="w-100 h-100 object-fit-cover" />
            </div>
          ))}
        </div>
        <div style={contentStyle} className="text-center bg-light bg-opacity-75 p-4 rounded">
          <h1 className="font-weight-bold text-dark">Welcome to PetCare!</h1>
          <p className='text-dark' style={{fontSize: '1.5rem'}}>Your one-stop solution for managing all your pet's needs. From reminders to expenses, we've got you covered.</p>
          <div>
            <Link to="/login">
              <button style={{ ...buttonStyle, backgroundColor: '#ff6f61' }} className="btn btn-primary mx-2">Login</button>
            </Link>
            <Link to="/signup">
              <button style={{ ...buttonStyle, backgroundColor: '#ff6f61' }} className="btn btn-secondary mx-2">Sign Up</button>
            </Link>
          </div>
        </div>
        <div style={downArrowWrapperStyle}>
          <h2 className="bg-dark text-white p-2 rounded cursor-pointer" onClick={scrollToFeatures}>Our Features <FontAwesomeIcon icon={faCaretDown} /></h2>
        </div>
      </div>
      <div id="features-section" style={featuresSectionStyle} className="text-center">
        <h2 className="mb-4">Features</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              data-aos="zoom-in-up"
              style={cardStyle}
              className="shadow-lg"
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
      <WhyChooseUs />
    </>
  );
};

export default LandingPage;
