import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoAnna from '../img/La_psicologa.png';
import logoAnnaSmall from '../img/La_psicologa_small.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState(logoAnna);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLogo(logoAnnaSmall);
      } else {
        setLogo(logoAnna);
      }
    };
    
    handleResize(); // Imposta il logo corretto al caricamento della pagina
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img className="img" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/chi-sono" onClick={handleLinkClick}>Chi Sono</Link></li>
          <li><Link to="/prenota-appuntamento" onClick={handleLinkClick}>Prenota un Appuntamento</Link></li>
          <li><Link to="/contatti" onClick={handleLinkClick}>Contatti</Link></li>
          <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
