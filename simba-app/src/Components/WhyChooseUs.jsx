import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faStar, faUsers, faShieldAlt, faAward, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhyChooseUs = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
    <Container 
      fluid 
      className="p-5 min-vh-100 d-flex flex-column align-items-center text-white" 
      style={{ background: 'url(/background.jpg) no-repeat center center/cover', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)' }}
    >
      <h4 className="font-weight-bold mb-4">
        Why Choose Us?
      </h4>
      <Row className="g-4 justify-content-center">
        {features.map((feature) => (
          <Col xs={12} md={6} lg={4} key={feature.id} data-aos="zoom-in-up">
            <Card 
              className="bg-dark text-white border-0 rounded shadow-lg"
              style={{ cursor: 'pointer' }}
              onMouseEnter={(e) => e.currentTarget.classList.add('shadow-lg', 'border-primary')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('shadow-lg', 'border-primary')}
            >
              <Card.Body className="text-center p-4">
                <FontAwesomeIcon icon={feature.icon} size="3x" className="text-warning mb-3" />
                <Card.Title className="h5">{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
