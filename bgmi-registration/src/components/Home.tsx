import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to BGMI Player Registration</h1>
      <p>Register now for the upcoming BGMI event!</p>
      <Link to="/register" className="cta-button">Register Now</Link>
    </div>
  );
};

export default Home;