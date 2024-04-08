// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <div className={`container ${isOpen ? 'change' : ''}`} onClick={toggleSidebar}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <div className="menu">
        {/* Your menu items */}
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    </>
  );
}

export default Sidebar;
