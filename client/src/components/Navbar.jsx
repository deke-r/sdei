import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
// import logo from '../assets/images/Sense_project_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg p-md-4  fixed-top ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="container-fluid">
        <Link to='/' className="navbar-brand d-flex align-items-start">SDEI</Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse bg-md-light rounded-2 navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-md-5 mb-2 text-center mb-lg-0">
            <li className="nav-item"><Link to='/' className="nav-link">HOME</Link></li>

           
            <li className="nav-item"><Link to='/about-sdei-commercial-scrap-dealers-demolition-experts-delhi-ncr-all-over-india' className="nav-link">About</Link></li>
            <li className="nav-item"><Link to='/services-building-demolition-industrial-scrap-dealing-facility-decommissioning-delhi-ncr-all-over-india' className="nav-link">SERVICES</Link></li>
            <li className="nav-item"><Link to='/contact-top-demolition-scrap-dealers-decommissioning-company-delhi-ncr-all-over-india' className="nav-link">CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
