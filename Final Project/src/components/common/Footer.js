import React from 'react';
import './Footer.css'; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright © {new Date().getFullYear()} Quizz App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;