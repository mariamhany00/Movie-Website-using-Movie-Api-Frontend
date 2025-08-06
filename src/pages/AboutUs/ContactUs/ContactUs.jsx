import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/about');
  }

  return (
    <button className="btn btn-primary" onClick={() => handleNavigation()}>Go to About</button>
  );
}

export default ContactUs;
