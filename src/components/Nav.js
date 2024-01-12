import React from 'react'
import './Nav.css';
const Nav = () => {
  return (
    <nav className='nav-main'>
    <img src="images/logo1.png" alt="logo-img" className="logo" />
    <div className='nav-container'>
    <a href="#event-details" className="nav-item" >Event Details</a>
    <a href="#registration-forms" className="nav-item">Registration Form</a>
    <a href="#faqs" className="nav-item">FAQs</a>
    </div>
  </nav>
  )
} 

export default Nav;
