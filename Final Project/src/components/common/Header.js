import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Make sure this path is correct

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button onClick={() => navigate('/main')}>Quiz Main Page</button>
      <button onClick={() => navigate('/contact')}>Contact Us</button>
    </header>
  );
};

export default Header;
